import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SortFilter } from "@/types";
import { Product } from "@/data";

type SortOption = {
  field: keyof Product;
  label: string;
  direction: "asc" | "desc";
};

interface SortFilterComponentProps {
  filter: SortFilter;
  value: string;
  onFilter: (value: string) => void;
}

export default function SortFilterComponent({
  filter,
  value,
  onFilter
}: SortFilterComponentProps) {
  const sampleData: Product = {
    id: "1",
    label: "Sample Product",
    description: "This is a sample product.",
    price: 100,
    category: "accessories",
    image: "https://via.placeholder.com/150",
  };

  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const getLabels = (field: keyof Product) => {
    const sampleValue = sampleData[field];
    switch (typeof sampleValue) {
      case "number":
        return [
          `${capitalize(field)}: Low to High`,
          `${capitalize(field)}: High to Low`,
        ];
      case "string":
        return [`${capitalize(field)}: A to Z`, `${capitalize(field)}: Z to A`];
      default:
        return [`${capitalize(field)} (asc)`, `${capitalize(field)} (desc)`];
    }
  };

  const sortOptions: SortOption[] = filter.fields.flatMap((field) => {
    const [ascLabel, descLabel] = getLabels(field);
    return [
      { field, direction: "asc", label: ascLabel },
      { field, direction: "desc", label: descLabel },
    ];
  });

  return (
    <Select value={value} onValueChange={onFilter}>
      <SelectTrigger className="w-52">
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>
      <SelectContent>
        {sortOptions.map((option) => (
          <SelectItem
            key={`${option.field}-${option.direction}`}
            value={`${option.field}-${option.direction}`}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
