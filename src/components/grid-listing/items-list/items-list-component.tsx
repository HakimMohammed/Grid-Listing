"use client";

import { DisplayFilter } from "@/types";
import { List, Grid2X2, Grid3X3 } from "lucide-react";
import ButtonFilterComponent from "../sidebar/filter-components/button-filter-component";
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import ItemDetailsComponent from "./item-details-component";
import ItemComponent from "./item-component";
import { Product } from "@/data";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function ItemsListComponent({
  resources,
}: {
  resources: Product[];
}) {
  const [display, setDisplay] = useState("grid-3");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const totalPages = Math.ceil(resources.length / itemsPerPage);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const paginatedResources = resources.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleDisplayChange = (value: string) => {
    const found = displays.values.find((v) => v.value === value);
    if (!found) return;

    setDisplay(value);
    setItemsPerPage(found.itemsPerPage ?? 6);
    setCurrentPage(1);
  };

  const displays: DisplayFilter = {
    initialValue: display,
    onChange: handleDisplayChange,
    values: [
      { value: "list", icon: List, label: "List", itemsPerPage: 4 },
      { value: "grid-2", icon: Grid2X2, label: "Grid 2 x 2", itemsPerPage: 4 },
      { value: "grid-3", icon: Grid3X3, label: "Grid 3 x 3", itemsPerPage: 6 },
      { value: "grid-4", icon: Grid3X3, label: "Grid 4 x 4", itemsPerPage: 8 },
    ],
  };

  const getGridClass = () => {
    switch (display) {
      case "grid-2":
        return "grid-cols-1 sm:grid-cols-2";
      case "grid-3":
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
      case "grid-4":
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4";
      case "list":
        return "grid-cols-1";
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <div className="flex-1">
      <div className="mx-6 flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Resources</h2>
        {!isMobile && <ButtonFilterComponent filter={displays} />}
      </div>
      <div className={`grid gap-6 mx-6 ${getGridClass()}`}>
        {paginatedResources.map((resource) => (
          <Dialog key={resource.id}>
            <DialogTrigger asChild>
              <ItemComponent
                className={`cursor-pointer ${display === "list" ? "flex" : ""}`}
                resource={resource}
              />
            </DialogTrigger>
            <DialogContent className="min-w-max">
              <ItemDetailsComponent resource={resource} />
            </DialogContent>
          </Dialog>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(currentPage - 1)}
                className={`cursor-pointer ${
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }`}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i + 1}>
                <PaginationLink
                  className="cursor-pointer"
                  isActive={currentPage === i + 1}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(currentPage + 1)}
                className={`cursor-pointer ${
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
