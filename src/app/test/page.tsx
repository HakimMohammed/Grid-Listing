"use client";

import { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronRight,
  SlidersHorizontal,
  ListChecks,
  CircleDollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

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

const categories = [
  { name: "Blocks", count: 15 },
  { name: "Components", count: 113 },
  { name: "Templates", count: 39 },
  { name: "Tools", count: 137 },
];

const resourceTypes = [
  { name: "Accordion", count: 15 },
  { name: "Admin Dashboards", count: 13 },
  { name: "Boilerplate Starter Kits", count: 25 },
  { name: "Buttons", count: 55 },
  { name: "Cards", count: 41 },
  { name: "Charts Graphs", count: 21 },
  { name: "Checkbox", count: 17 },
  { name: "Date Time Picker", count: 17 },
  { name: "Extensions", count: 12 },
  { name: "Forms Inputs", count: 55 },
];

const techStack = [
  { name: "Alpine JS", count: 1 },
  { name: "Angular", count: 11 },
];

export default function AllShadcnResources() {
  const [sortBy, setSortBy] = useState("Free");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [resourceTypeOpen, setResourceTypeOpen] = useState(true);
  const [techStackOpen, setTechStackOpen] = useState(true);

  return (
    <div className="container mx-auto px-4 py-8 bg-background text-foreground w-full">
      <div className="flex">
        {/* Sidebar */}
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
                  variant={sortBy === "Free" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy("Free")}
                  className="text-xs"
                >
                  Free
                </Button>
                <Button
                  variant={sortBy === "Paid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy("Paid")}
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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

            {/* Category */}
            <Separator className="my-4" />
            <Collapsible open={categoryOpen} onOpenChange={setCategoryOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                <div className="flex items-center gap-2">
                  {/* <div className="w-4 h-4 bg-orange-500 rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-sm" />
                  </div> */}
                  <ListChecks />
                  <h1 className="text-xl font-medium">Category</h1>
                </div>
                <span className="p-2 rounded-md hover:bg-muted transition-colors -me-2">
                  {categoryOpen ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </span>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 space-y-2">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="flex items-center justify-between"
                  >
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-border"
                      />
                      <span className="text-sm text-muted-foreground">
                        {category.name}
                      </span>
                    </label>
                    <span className="text-xs text-muted-foreground">
                      {category.count}
                    </span>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {/* Resource Type */}
            <Separator className="my-4" />
            <Collapsible
              open={resourceTypeOpen}
              onOpenChange={setResourceTypeOpen}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-sm" />
                  </div>
                  <span className="font-medium">Resource Type</span>
                </div>
                {resourceTypeOpen ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 space-y-2">
                {resourceTypes.map((type) => (
                  <div
                    key={type.name}
                    className="flex items-center justify-between"
                  >
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-border"
                      />
                      <span className="text-sm">{type.name}</span>
                    </label>
                    <span className="text-xs text-muted-foreground">
                      {type.count}
                    </span>
                  </div>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground text-xs p-0"
                >
                  Show more
                </Button>
              </CollapsibleContent>
            </Collapsible>

            {/* Technology Stack */}
            <Separator className="my-4" />
            <Collapsible open={techStackOpen} onOpenChange={setTechStackOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-sm" />
                  </div>
                  <span className="font-medium">Technology Stack</span>
                </div>
                {techStackOpen ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 space-y-2">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center justify-between"
                  >
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-border"
                      />
                      <span className="text-sm">{tech.name}</span>
                    </label>
                    <span className="text-xs text-muted-foreground">
                      {tech.count}
                    </span>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Resource Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="bg-card rounded-lg overflow-hidden hover:bg-muted/50 transition-colors border border-border"
              >
                <div className="aspect-video bg-muted relative">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                    fill
                  />
                  <Badge className="absolute top-3 right-3 bg-green-600 hover:bg-green-600 text-white">
                    {resource.type}
                  </Badge>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      By {resource.author} in {resource.category}
                    </p>
                    <p className="text-sm text-foreground/80">
                      {resource.description}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {resource.tags.map((tag) => (
                      <div
                        key={tag}
                        className="w-6 h-6 bg-primary rounded flex items-center justify-center"
                      >
                        <span className="text-xs font-bold text-primary-foreground">
                          {tag.charAt(0)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
