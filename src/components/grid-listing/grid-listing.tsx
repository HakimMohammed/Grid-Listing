"use client";

import { Filter, FilterType } from "@/types";
import { LayoutDashboard, SlidersHorizontal, Search } from "lucide-react";
import FilterSidebarComponent from "@/components/grid-listing/sidebar/filter-sidebar-component";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/customized/drawer";
import { Button } from "@/components/ui/button";
import ItemsListComponent from "@/components/grid-listing/items-list/items-list-component";
import { products } from "@/data";
import { useFilters } from "@/hooks/use-filters";

const filters: Filter[] = [
  {
    label: "Search",
    icon: Search,
    type: FilterType.TextInput,
    placeholder: "Search for stores ...",
    fields: ["label", "description"],
  },
  {
    label: "Price",
    type: FilterType.RangeSlider,
    values: {
      min: 0,
      max: 1000,
    },
    fields: ["price"],
  },
  {
    label: "Category",
    icon: LayoutDashboard,
    type: FilterType.Checkbox,
    fields: ["category"],
    values: [
      { label: "Audio", value: "audio" },
      { label: "Wearables", value: "wearables" },
      { label: "Accessories", value: "accessories" },
      { label: "Shirts", value: "shirts" },
      { label: "Jeans", value: "jeans" },
      { label: "Fertilizers", value: "fertilizers" },
      { label: "Tools", value: "tools" },
      { label: "Technology", value: "technology" },
      { label: "Fiction", value: "fiction" },
      { label: "Tennis", value: "tennis" },
      { label: "Footwear", value: "footwear" },
      { label: "Coffee", value: "coffee" },
      { label: "Sweets", value: "sweets" },
    ],
  },
];

export default function GridListing() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { filteredData, setFilterValue, resetAllFilters, activeFilterValues } =
    useFilters(filters, products);

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
              <FilterSidebarComponent
                filters={filters}
                activeFilterValues={activeFilterValues}
                setFilterValue={setFilterValue}
                resetAllFilters={resetAllFilters}
              />
            </DrawerContent>
          </Drawer>
        ) : (
          <FilterSidebarComponent
            filters={filters}
            activeFilterValues={activeFilterValues}
            setFilterValue={setFilterValue}
            resetAllFilters={resetAllFilters}
          />
        )}
        <ItemsListComponent resources={filteredData} />
      </div>
    </div>
  );
}
