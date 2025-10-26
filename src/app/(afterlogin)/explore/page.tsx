import SearchInput from "../_components/SearchInput";
import TrendSection from "./_components/TrendSection";

export default function Page() {
  return (
    <main>
      <SearchInput />
      <div className="mt-10">
        <h3 className="ml-2 text-xl font-semibold mb-4">나를 위한 트렌드</h3>
        <TrendSection />
      </div>
    </main>
  );
}
