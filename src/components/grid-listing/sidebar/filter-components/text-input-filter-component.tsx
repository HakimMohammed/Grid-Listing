import { TextInputFilter } from "@/types";
import { Input } from "@/components/ui/input";

export default function TextInputFilterComponent({
  filter,
}: {
  filter: TextInputFilter;
}) {
  return (
    <div className="relative">
      {filter.icon && (
        <filter.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      )}
      <Input
        placeholder={filter.placeholder}
        className="ps-10 text-foreground placeholder-muted-foreground focus:border-primary focus:ring-0 border-0"
      />
    </div>
  );
}
