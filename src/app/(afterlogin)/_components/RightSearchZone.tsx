"use client";

import { usePathname } from "next/navigation";
import SearchFilter from "./SearchFilter";
import SearchInput from "./SearchInput";

export default function RightSearchZone() {
  const pathname = usePathname();

  if (pathname === "explore") {
    return null;
  }
  if (pathname === "/search") {
    return <SearchFilter />;
  }

  return (
    <div>
      <SearchInput />
    </div>
  );
}
