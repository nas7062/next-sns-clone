"use client";

import { usePathname } from "next/navigation";
import Trend from "./Trend";

export default function TrendSection() {
  const pathname = usePathname();
  if (pathname === "/explore") return null;

  return (
    <div>
      <h3 className="mt-6 text-xl font-semibold">나를 위한 트렌드</h3>
      <Trend />
      <Trend />
      <Trend />
    </div>
  );
}
