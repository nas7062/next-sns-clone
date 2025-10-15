"use client";

import { Search } from "lucide-react";
import { usePathname } from "next/navigation";

export default function SearchInput() {
  const pathname = usePathname();
  if (pathname === "/explore") return null;

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
