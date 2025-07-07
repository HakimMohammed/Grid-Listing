import { useState } from "react";
import { RangeSliderFilter } from "@/types";
import Slider from "@/components/customized/slider";

export default function RangeSliderFilterComponent({
  filter,
}: {
  filter: RangeSliderFilter;
}) {
  const [priceRange, setPriceRange] = useState<number[]>([
    filter.values.min,
    filter.values.max,
  ]);

  const [from, to] = priceRange;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        {filter.icon && <filter.icon className="h-5 w-5 text-primary" />}
        <h6 className="text-sm font-medium text-foreground">{filter.label}</h6>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="text-primary">{from}</span>
        <span className="text-primary">{to}</span>
      </div>

      <Slider
        value={priceRange}
        onValueChange={setPriceRange}
        min={filter.values.min}
        max={filter.values.max}
        step={1}
        className="px-2"
      />
    </div>
  );
}
