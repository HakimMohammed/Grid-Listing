import { Filter, FilterType } from "@/types";
import { List, Grid2X2, Grid3X3 } from "lucide-react";
import ButtonFilterComponent from "./filter/button-filter-component";
import { useState } from "react";
import ItemComponent from "./item-component";

const resources = [
  {
    id: 1,
    title: "Rust shadcn/ui",
    description: "Beautifully designed components that you can copy and paste.",
    author: "Open Source",
    category: "Components",
    type: "FREE",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "Shadcn/Studio - Theme Editor",
    description: "Open-source Shadcn registry with copy-paste components.",
    author: "ThemeSelection",
    category: "Components",
    type: "FREE",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    id: 3,
    title: "Grida",
    description:
      "Open source Canvas where you can design & build web applications.",
    author: "Open Source",
    category: "Templates",
    type: "FREE",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "HTML", "Supabase", "TypeScript"],
  },
  {
    id: 4,
    title: "TimePicker",
    description: "A time picker component for your shadcn ui app",
    author: "OpenStatus",
    category: "Components",
    type: "FREE",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: 5,
    title: "Shadcn Chatbot Kit",
    description: "Beautifully designed chatbot components based on shadcn/ui",
    author: "Blazity",
    category: "Components",
    type: "FREE",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: 6,
    title: "Shadcn Svelte",
    description:
      "Beautifully designed components built with Bits UI and Tailwind CSS.",
    author: "Open Source",
    category: "Components",
    type: "FREE",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Svelte", "TypeScript", "Tailwind"],
  },
];

export default function ItemsListComponent() {
  const [display, setDisplay] = useState("grid-3");

  const displays: Filter = {
    type: FilterType.Buttons,
    initialValue: display,
    onChange: (value: string) => setDisplay(value),
    values: [
      { value: "list", icon: List, label: "List" },
      { value: "grid-2", icon: Grid2X2, label: "Grid 2 x 2" },
      { value: "grid-3", icon: Grid3X3, label: "Grid 3 x 3" },
      { value: "grid-4", icon: Grid3X3, label: "Grid 4 x 4" },
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
        <ButtonFilterComponent filter={displays} />
      </div>
      <div className={`grid gap-6 mx-6 ${getGridClass()}`}>
        {resources.map((resource) => (
          <ItemComponent
            resource={resource}
            key={resource.id}
            className={display === "list" ? "flex" : ""}
          />
        ))}
      </div>
    </div>
  );
}
