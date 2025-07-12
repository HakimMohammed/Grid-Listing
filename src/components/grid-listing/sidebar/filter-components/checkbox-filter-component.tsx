import { CheckboxFilter } from "@/types";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown } from "lucide-react";

interface CheckboxFilterProps {
  filter: CheckboxFilter;
  value: string[];
  onFilter: (val: string[]) => void;
  filtersOpen: Record<string, boolean>;
  toggleFilter: (label: string) => void;
}

export default function CheckboxFilterComponent({
  filter,
  value,
  onFilter,
  filtersOpen,
  toggleFilter,
}: CheckboxFilterProps) {
  return (
    <Collapsible
      open={filtersOpen[filter.label]}
      onOpenChange={() => toggleFilter(filter.label)}
    >
      <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
        <div className="flex items-center gap-2">
          {filter.icon && <filter.icon className="w-5 h-5 text-primary" />}
          <h6 className="font-medium">{filter.label}</h6>
        </div>
        <span className="p-2 rounded-md hover:bg-muted transition-colors -me-2">
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-200 ease-in-out ${
              filtersOpen[filter.label] ? 'rotate-0' : 'rotate-180'
            }`} 
          />
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-3 space-y-2">
        {filter.values?.map((option) => {
          const checked = value?.includes(option.value) || false;
          return (
            <div
              key={option.value}
              className="flex items-center justify-between"
            >
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox
                  checked={checked}
                  onCheckedChange={(checked) => {
                    const currentValue = value || [];
                    if (checked) {
                      onFilter([...currentValue, option.value]);
                    } else {
                      onFilter(currentValue.filter((v) => v !== option.value));
                    }
                  }}
                />
                <span className="text-sm text-muted-foreground">
                  {option.label}
                </span>
              </label>
            </div>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
}
