"use client";

import { usePathname } from "next/navigation";
import Trend from "./Trend";
import { useQuery } from "@tanstack/react-query";
import { getTrend } from "../_lib/getTrend";
import { Hashtag } from "@/model/HashTag";
export default function TrendSection() {
  const pathname = usePathname();
  const { data } = useQuery<Hashtag[]>({
    queryKey: ["trends"],
    queryFn: getTrend,
    staleTime: 60000,
  });
  if (pathname === "/explore") return null;

  return (
    <div>
      <h3 className="mt-6 text-xl ml-2 font-semibold">나를 위한 트렌드</h3>
      {data?.map((trend) => (
        <Trend trend={trend} key={trend.tagId} />
      ))}
    </div>
  );
}
