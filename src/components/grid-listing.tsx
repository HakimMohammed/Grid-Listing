"use client";

import { Filter, FilterType } from "@/types";
import {
  LayoutDashboard,
  ListChecks,
  CodeXml,
  SlidersHorizontal,
} from "lucide-react";
import FilterComponent from "@/components/filter-component";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/customized/drawer";
import { Button } from "@/components/ui/button";

const filters: Filter[] = [
  {
    label: "Sort By",
    icon: SlidersHorizontal,
    type: FilterType.Select,
    values: [
      { label: "Relevance", value: "relevance" },
      { label: "Price: Low to High", value: "price_low_to_high" },
      { label: "Price: High to Low", value: "price_high_to_low" },
      { label: "Newest First", value: "newest_first" },
      { label: "Oldest First", value: "oldest_first" },
    ],
  },
  {
    label: "Price",
    type: FilterType.RangeSlider,
    values: {
      min: 0,
      max: 1000,
    },
  },
  {
    label: "Category",
    icon: LayoutDashboard,
    type: FilterType.Checkbox,
    values: [
      { label: "Electronics", value: "electronics" },
      { label: "Books", value: "books" },
      { label: "Clothing", value: "clothing" },
    ],
  },
  {
    label: "Resource Type",
    icon: ListChecks,
    type: FilterType.Checkbox,
    values: [
      { label: "API", value: "api" },
      { label: "Documentation", value: "documentation" },
      { label: "Tutorial", value: "tutorial" },
    ],
  },
  {
    label: "Technology Stack",
    icon: CodeXml,
    type: FilterType.Checkbox,
    values: [
      { label: "JavaScript", value: "javascript" },
      { label: "Python", value: "python" },
      { label: "Java", value: "java" },
      { label: "Ruby", value: "ruby" },
    ],
  },
];

export default function GridListing() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {isMobile ? (
          <Drawer direction="left">
            <DrawerTrigger asChild>
              <Button variant="outline" className="m-4 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </Button>
            </DrawerTrigger>
            <DrawerContent className="p-0 w-80">
              <FilterComponent filters={filters} />
            </DrawerContent>
          </Drawer>
        ) : (
          <FilterComponent filters={filters} />
        )}
      </div>
    </div>
  );
}
