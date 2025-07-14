import React from "react";
import { SelectFilter } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectFilterComponentProps {
  filter: SelectFilter;
  value: string;
  onFilter: (val: string) => void;
}

export default function SelectFilterComponent({
  filter,
  value,
  onFilter,
}: SelectFilterComponentProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        {filter.icon && <filter.icon className="w-5 h-5 text-primary" />}
        <h6 className="text-sm font-medium text-foreground">{filter.label}</h6>
      </div>
      <Select value={value} onValueChange={onFilter}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          {filter.values.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
