import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { forwardRef } from "react";

const ItemComponent = forwardRef<
  HTMLButtonElement,
  {
    className?: string;
    resource: any;
  }
>(({ className, resource, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      className={`bg-card rounded-lg transition-transform duration-200 ease-in-out hover:scale-105 overflow-hidden border border-border text-start text-left ${className}`}
      {...props}
    >
      <div className="aspect-video bg-muted relative">
        <Image
          src=""
          alt={resource.title}
          className="w-full h-full object-cover"
          fill
        />
      </div>
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg mb-1">{resource.title}</h3>
          <p className="text-sm text-muted-foreground mb-2">
            By {resource.author} in {resource.category}
          </p>
          <Separator className="my-4" />
          <p className="text-sm text-foreground/80">{resource.description}</p>
        </div>
        <div className="flex gap-2">
          {resource.tags.map((tag: any) => (
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
    </button>
  );
});

ItemComponent.displayName = "ItemComponent";

export default ItemComponent;
