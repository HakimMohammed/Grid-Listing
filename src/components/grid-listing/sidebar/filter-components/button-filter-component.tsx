import { DisplayFilter } from "@/types";
import { Button } from "../../../ui/button";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ButtonFilterComponent({
  filter,
}: {
  filter: DisplayFilter;
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
      <div className="flex items-center gap-2 justify-around flex-wrap">
        {filter.values.map((value, index) => (
          <Tooltip key={index}>
            <TooltipTrigger>
              <Button
                key={index}
                variant={selected === value.value ? "default" : "outline"}
                size={value.icon ? "lg" : "sm"}
                className="rounded-sm"
                onClick={() => handleClick(value.value.toString())}
              >
                {value.icon ? <value.icon className="w-8 h-8" /> : value.label}
              </Button>
            </TooltipTrigger>
            <TooltipContent>{value.label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
