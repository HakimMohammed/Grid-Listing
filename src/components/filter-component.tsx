"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SlidersHorizontal } from "lucide-react";
import {
  CheckboxFilter,
  Filter,
  FilterType,
  RangeSliderFilter,
  SelectFilter,
} from "@/types";
import CheckboxFilterComponent from "@/components/filter/checkbox-filter-component";
import RangeSliderFilterComponent from "@/components/filter/range-slider-filter-component";
import SelectFilterComponent from "@/components/filter/select-filter-component";

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
      default:
        return null;
    }
  };

  return (
    <div className="w-80 bg-card p-6 min-h-screen border rounded-sm border-border">
      <div className="space-y-6">
        {/* Filters Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-6 h-6" />
            <h1 className="text-3xl font-bold">Filters</h1>
          </div>
          <Button variant="outline">Clear all</Button>
        </div>

        {/* Sort By */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium">Sort By</h3>
          <div className="flex gap-2">
            <Button
              //   variant={sortBy === "Free" ? "default" : "outline"}
              size="sm"
              //   onClick={() => setSortBy("Free")}
              className="text-xs"
            >
              Free
            </Button>
            <Button
              //   variant={sortBy === "Paid" ? "default" : "outline"}
              size="sm"
              //   onClick={() => setSortBy("Paid")}
              className="text-xs"
            >
              Paid
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search for stores ..."
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
            className="ps-10 text-foreground placeholder-muted-foreground border-border focus:border-primary focus:ring-0"
          />
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
