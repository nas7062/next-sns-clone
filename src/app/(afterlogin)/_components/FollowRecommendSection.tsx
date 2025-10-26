"use client";
import { User } from "@/model/User";
import { useQuery } from "@tanstack/react-query";
import { getFollowRecommends } from "../_lib/getFollowRecommends";
import FollowRecomend from "./FollowRecomend";

export default function FollowRecommendSection() {
  const { data } = useQuery<User[]>({
    queryKey: ["trends"],
    queryFn: getFollowRecommends,
    staleTime: 60000,
  });

  return data?.map((user) => <FollowRecomend user={user} key={user.id} />);
}
