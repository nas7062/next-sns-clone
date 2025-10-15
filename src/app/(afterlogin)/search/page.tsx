import { ArrowLeftCircle } from "lucide-react";
import SearchInput from "../_components/SearchInput";
import SearchTab from "./_components/SearchTab";

type SearchPageProps = {
  searchParams: { q: string; f?: string; pf?: string };
};

export default async function Page({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  return (
    <main>
      <div className="flex gap-10 items-center">
        <ArrowLeftCircle className="w-8 h-8 relative top-2" />
        <SearchInput q={q} />
      </div>
      <SearchTab />
    </main>
  );
}
