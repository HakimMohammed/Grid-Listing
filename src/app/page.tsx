import GridListing from "@/components/grid-listing";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <GridListing />
      </div>
    </div>
  );
}
