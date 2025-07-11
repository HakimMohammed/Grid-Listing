import {TextInputFilter} from "@/types";
import {Input} from "@/components/ui/input";
import {Product} from "@/data";
import {useEffect, useMemo, useState} from "react";

type TextInputFilterProps = {
    filter: TextInputFilter;
    data: Product[];
    onSearch: (results: Product[]) => void;
}

export default function TextInputFilterComponent({
                                                     filter,
                                                     data,
                                                     onSearch
                                                 }: TextInputFilterProps) {

    const [searchQuery, setSearchQuery] = useState<string>("");

    const filteredResults = useMemo(() => {
        if (!searchQuery.trim()) return data;
        const lowerQuery = searchQuery.toLowerCase();

        return data.filter((item) =>
            filter.fields.some((field) => {
                const value = item[field];
                return typeof value === "string" && value.toLowerCase().includes(lowerQuery);
            })
        );
    }, [searchQuery, data, filter.fields]);

    useEffect(() => {
        onSearch(filteredResults);
    }, [filteredResults, onSearch]);

    return (
        <div className="relative">
            {filter.icon && (
                <filter.icon
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground"/>
            )}
            <Input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={filter.placeholder}
                className={`text-foreground placeholder-muted-foreground focus:border-primary focus:ring-0 border-0 ${filter.icon ? 'ps-10' : 'ps-4'}`}
            />
        </div>
    );
}
