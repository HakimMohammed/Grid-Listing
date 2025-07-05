import { ButtonsFilter } from "@/types";
import { Button } from "../ui/button";

export default function ButtonFilterComponent({
  filter,
}: {
  filter: ButtonsFilter;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-4">
        {filter.icon && <filter.icon className="h-5 w-5 text-primary" />}
        <h6 className="text-sm font-medium text-foreground">{filter.label}</h6>
      </div>

      <div className="flex items-center gap-2 justify-around flex-wrap">
        {filter.values.map((value, index) => (
          <Button
            key={index}
            variant={value.icon ? "outline" : "default"}
            size={value.icon ? "lg" : "sm"}
            className="rounded-sm"
          >
            {value.icon ? <value.icon /> : value.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
