import SearchInput from "../_components/SearchInput";
import Trend from "../_components/Trend";

export default function Page() {
  return (
    <main>
      <SearchInput />
      <div className="mt-10">
        <h3 className="ml-2 text-xl font-semibold mb-4">나를 위한 트렌드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </main>
  );
}
