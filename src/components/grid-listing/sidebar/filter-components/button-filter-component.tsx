import { ButtonsFilter } from "@/types";
import { Button } from "../../../ui/button";
import { useEffect, useState } from "react";

export default function ButtonFilterComponent({
  filter,
}: {
  filter: ButtonsFilter;
}) {
  const [selected, setSelected] = useState<string>(filter.initialValue || "");

  useEffect(() => {
    if (filter.initialValue) {
      setSelected(filter.initialValue);
    }
  }, [filter.initialValue]);

  const handleClick = (value: string) => {
    setSelected(value);
    filter.onChange?.(value);
  };
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-4">
        {filter.icon && <filter.icon className="h-5 w-5 text-primary" />}
        <h6 className="text-sm font-medium text-foreground">{filter.label}</h6>
      </div>

      <div className="flex items-center gap-2 justify-around flex-wrap">
        {filter.values.map((value, index) => (
          <Button
            key={index}
            variant={selected === value.value ? "default" : "outline"}
            size={value.icon ? "lg" : "sm"}
            className="rounded-sm"
            title={value.label}
            onClick={() => handleClick(value.value.toString())}
          >
            {value.icon ? <value.icon className="w-8 h-8" /> : value.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
