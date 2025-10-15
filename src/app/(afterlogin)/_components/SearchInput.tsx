import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="flex items-center mt-4">
      <Search scale={8} className="cursor-pointer z-10 ml-0.5" />
      <input
        type="text"
        className="w-[350px] h-10 border-gray-800 pl-6 border rounded-lg fixed"
      />
    </div>
  );
}
