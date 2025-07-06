import Image from "next/image";
import { Badge } from "@/components/ui/badge";

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

export default function ItemComponent() {
  return (
    <div className="flex-1">
      <div className="grid gap-6 mx-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        {" "}
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
                <h3 className="font-semibold text-lg mb-1">{resource.title}</h3>
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
  );
}
