"use client";

import React, {useState} from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SlidersHorizontal } from "lucide-react";
import {
  ButtonsFilter,
  CheckboxFilter,
  Filter,
  FilterType,
  RangeSliderFilter,
  SelectFilter,
  TextInputFilter,
} from "@/types";
import CheckboxFilterComponent from "@/components/grid-listing/sidebar/filter-components/checkbox-filter-component";
import RangeSliderFilterComponent from "@/components/grid-listing/sidebar/filter-components/range-slider-filter-component";
import SelectFilterComponent from "@/components/grid-listing/sidebar/filter-components/select-filter-component";
import TextInputFilterComponent from "@/components/grid-listing/sidebar/filter-components/text-input-filter-component";
import ButtonFilterComponent from "@/components/grid-listing/sidebar/filter-components/button-filter-component";
import {FilterState, FilterValue} from "@/hooks/use-filters";

interface SidebarProps {
  filters: Filter[];
  activeFilterValues: FilterState;
  setFilterValue: (label: string, value: FilterValue) => void;
  resetAllFilters: () => void;
}

export default function FilterSidebarComponent({ filters, activeFilterValues, setFilterValue, resetAllFilters }: SidebarProps) {

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
          <RangeSliderFilterComponent
              filter={filter as RangeSliderFilter}
              value={activeFilterValues[filter.label] as [number, number]}
              onFilter={(val) => setFilterValue(filter.label, val)}
          />
        );
      case FilterType.Select:
        return <SelectFilterComponent filter={filter as SelectFilter} />;
      case FilterType.TextInput:
        return (
            <TextInputFilterComponent
                filter={filter as TextInputFilter}
                value={activeFilterValues[filter.label] as string}
                onFilter={(val) => setFilterValue(filter.label, val)}
            />
        );
      case FilterType.Buttons:
        return <ButtonFilterComponent filter={filter as ButtonsFilter} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-80 bg-card p-6 border rounded-sm border-border min-h-screen h-screen overflow-y-auto">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            <h4>Filters</h4>
          </div>
          <Button variant="ghost" className="text-muted-foreground" onClick={resetAllFilters}>
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
