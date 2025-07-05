"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SlidersHorizontal } from "lucide-react";
import {
  CheckboxFilter,
  Filter,
  FilterType,
  RangeSliderFilter,
  SelectFilter,
  TextInputFilter,
} from "@/types";
import CheckboxFilterComponent from "@/components/filter/checkbox-filter-component";
import RangeSliderFilterComponent from "@/components/filter/range-slider-filter-component";
import SelectFilterComponent from "@/components/filter/select-filter-component";
import TextInputFilterComponent from "./filter/text-input-filter-component";

interface SidebarProps {
  filters: Filter[];
}

export default function FilterComponent({ filters }: SidebarProps) {
  const [filtersOpen, setFiltersOpen] = useState<Record<string, boolean>>(
    () => {
      const initialState: Record<string, boolean> = {};
      filters.forEach((filter) => {
        initialState[filter.label] = true;
      });
      return initialState;
    }
  );

  const toggleFilter = (label: string) => {
    setFiltersOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const filterRenderer = (filter: Filter) => {
    switch (filter.type) {
      case FilterType.Checkbox:
        return (
          <CheckboxFilterComponent
            filter={filter as CheckboxFilter}
            filtersOpen={filtersOpen}
            toggleFilter={toggleFilter}
          />
        );
      case FilterType.RangeSlider:
        return (
          <RangeSliderFilterComponent filter={filter as RangeSliderFilter} />
        );
      case FilterType.Select:
        return <SelectFilterComponent filter={filter as SelectFilter} />;
      case FilterType.TextInput:
        return <TextInputFilterComponent filter={filter as TextInputFilter} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-80 bg-card p-6 min-h-screen border rounded-sm border-border">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            <h4>Filters</h4>
          </div>
          <Button variant="ghost" className="text-muted-foreground">
            Clear all
          </Button>
        </div>

        {filters.map((filter) => (
          <div key={filter.label}>
            <Separator className="my-4" />
            {filterRenderer(filter)}
          </div>
        ))}
      </div>
    </div>
  );
}
