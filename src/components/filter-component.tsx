"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronRight, SlidersHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CheckboxFilter,
  Filter,
  FilterType,
  RangeSliderFilter,
  SelectFilter,
} from "@/types";
import Slider from "@/components/customized/slider";

interface SidebarProps {
  filters: Filter[];
}

interface CheckboxFilterProps {
  filter: CheckboxFilter;
  filtersOpen: Record<string, boolean>;
  toggleFilter: (label: string) => void;
}

const CheckboxFilterComponent = ({
  filter,
  filtersOpen,
  toggleFilter,
}: CheckboxFilterProps) => {
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
};

const RangeSliderFilterComponent = ({
  filter,
}: {
  filter: RangeSliderFilter;
}) => {
  const [priceRange, setPriceRange] = useState<number[]>([
    filter.values.min,
    filter.values.max,
  ]);

  const [from, to] = priceRange;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        {filter.icon && <filter.icon className="h-5 w-5 text-primary" />}
        <h6 className="text-sm font-medium text-foreground">{filter.label}</h6>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="text-primary">{from}</span>
        <span className="text-primary">{to}</span>
      </div>

      <Slider
        value={priceRange}
        onValueChange={setPriceRange}
        min={filter.values.min}
        max={filter.values.max}
        step={1}
        className="px-2"
      />
    </div>
  );
};

const SelectFilterComponent = ({ filter }: { filter: SelectFilter }) => {
  return (
    <div className="flex justify-between items-center">
      <h6 className="font-medium">{filter.label}</h6>
      <Se
    </div>
  );
};

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
