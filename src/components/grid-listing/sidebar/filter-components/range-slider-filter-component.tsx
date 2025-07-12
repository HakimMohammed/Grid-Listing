import {RangeSliderFilter} from "@/types";
import Slider from "@/components/customized/slider";

type Props = {
    filter: RangeSliderFilter;
    value: [number, number];
    onFilter: (val: [number, number]) => void;
};

export default function RangeSliderFilterComponent({
                                                       filter,
                                                       value,
                                                       onFilter,
                                                   }: Props) {
    return (
        <div className="space-y-3">
            <div className="flex items-center gap-2">
                {filter.icon && <filter.icon className="h-5 w-5 text-primary"/>}
                <h6 className="text-sm font-medium text-foreground">{filter.label}</h6>
            </div>

            <div className="flex items-center justify-between text-sm">
                <span className="text-primary">{value[0]}</span>
                <span className="text-primary">{value[1]}</span>
            </div>

            <Slider
                value={value}
                onValueChange={onFilter}
                min={filter.values.min}
                max={filter.values.max}
                step={1}
                className="px-2"
            />
        </div>
    );
}
