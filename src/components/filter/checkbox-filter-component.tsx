import { CheckboxFilter } from "@/types";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronRight } from "lucide-react";

interface CheckboxFilterProps {
  filter: CheckboxFilter;
  filtersOpen: Record<string, boolean>;
  toggleFilter: (label: string) => void;
}

export default function CheckboxFilterComponent({
  filter,
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
          {filtersOpen[filter.label] ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-3 space-y-2">
        {filter.values?.map((value) => (
          <div key={value.label} className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox />
              <span className="text-sm text-muted-foreground">
                {value.label}
              </span>
            </label>
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
