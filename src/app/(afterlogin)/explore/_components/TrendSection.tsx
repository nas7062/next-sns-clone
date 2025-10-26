"use client";

import { useQuery } from "@tanstack/react-query";
import { Hashtag } from "@/model/HashTag";
import { getTrend } from "../../_lib/getTrend";
import Trend from "../../_components/Trend";

export default function TrendSection() {
  const { data } = useQuery<Hashtag[]>({
    queryKey: ["trends"],
    queryFn: getTrend,
    staleTime: 60000,
  });

  return data?.map((trend) => <Trend trend={trend} key={trend.tagId} />);
}
