import React from "react";
import { SelectFilter } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectFilterComponent({
  filter,
}: {
  filter: SelectFilter;
}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        {filter.icon && <filter.icon className="w-5 h-5 text-primary" />}
        <h6 className="text-sm font-medium text-foreground">{filter.label}</h6>
      </div>
      <Select>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          {filter.values.map((value) => (
            <SelectItem key={value.label} value={value.label}>
              {value.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
