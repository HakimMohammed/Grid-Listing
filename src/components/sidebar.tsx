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
import {
  ChevronDown,
  ChevronRight,
  SlidersHorizontal,
  CircleDollarSign,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter, FilterType } from "@/types";

interface SidebarProps {
  filters: Filter[];
}

export default function Sidebar({ filters }: SidebarProps) {
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
          <Collapsible
            open={filtersOpen[filter.label]}
            onOpenChange={() => toggleFilter(filter.label)}
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
              <div className="flex items-center gap-2">
                {filter.icon && (
                  <filter.icon className="w-5 h-5 text-primary" />
                )}
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
                <div
                  key={value.label}
                  className="flex items-center justify-between"
                >
                  <label className="flex items-center gap-2 cursor-pointer">
                    {/* <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-border"
                    /> */}
                    <Checkbox />
                    <span className="text-sm text-muted-foreground">
                      {value.label}
                    </span>
                  </label>
                  {/* <span className="text-xs text-muted-foreground">
                    {value.count}
                  </span> */}
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
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

        <div>
          <div className="flex items-center gap-2">
            <CircleDollarSign />
            <h1 className="text-xl font-meduim">Price</h1>
          </div>

          <div className="flex items-center gap-2 mt-2 text-muted-foreground">
            <span>Min :</span>
            <Input
              type="text"
              placeholder="0"
              className="w-20 border-border focus:border-primary focus:ring-0"
            />
            <span>Max :</span>
            <Input
              type="text"
              placeholder="1000"
              className="w-20 border-border focus:border-primary focus:ring-0"
            />
          </div>
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
