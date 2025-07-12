import {TextInputFilter} from "@/types";
import {Input} from "@/components/ui/input";

type TextInputFilterProps = {
    filter: TextInputFilter;
    value: string;
    onFilter: (val: string) => void;
}

export default function TextInputFilterComponent({
                                                     filter,
                                                     value, onFilter
                                                 }: TextInputFilterProps) {

    return (
        <div className="relative">
            {filter.icon && (
                <filter.icon
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground"/>
            )}
            <Input
                value={value}
                onChange={e => onFilter(e.target.value)}
                placeholder={filter.placeholder}
                className={`text-foreground placeholder-muted-foreground focus:border-primary focus:ring-0 border-0 ${filter.icon ? 'ps-10' : 'ps-4'}`}
            />
        </div>
    );
}
