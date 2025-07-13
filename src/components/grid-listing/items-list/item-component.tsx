import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { forwardRef } from "react";
import { Product } from "@/data";

const ItemComponent = forwardRef<
  HTMLButtonElement,
  {
    className?: string;
    resource: Product;
  }
>(({ className, resource, ...props }, ref) => {

  const isListDisplay = className?.includes("flex");

  return (
    <button
      ref={ref}
      type="button"
      className={`bg-card rounded-lg transition-transform duration-200 ease-in-out hover:scale-105 overflow-hidden border border-border text-start text-left`}
      {...props}
    >
      <div className={`${isListDisplay && "grid grid-cols-3"}`}>
        <div className="aspect-video bg-muted relative col-span-1">
          <Image
            src={resource.image}
            alt={resource.label}
            className="w-full h-full object-cover"
            fill
          />
        </div>
        <div className="p-4 space-y-3 col-span-2">
          <div>
            <h3 className="font-semibold text-lg mb-1">{resource.label}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {resource.category}
            </p>
            <Separator className="my-4" />
            <p className="text-sm text-foreground/80">{resource.description}</p>
          </div>
        </div>
      </div>
    </button>
  );
});

ItemComponent.displayName = "ItemComponent";

export default ItemComponent;
