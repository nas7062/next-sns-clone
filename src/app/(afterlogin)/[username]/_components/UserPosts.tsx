"use client";

import { useQuery } from "@tanstack/react-query";
import { Post as IPost } from "@/model/Post";
import Post from "../../_components/Post";
import { getUserPosts } from "../_lib/getUserPosts";

export default function UserPosts({ username }: { username: string }) {
  const { data } = useQuery<
    IPost[],
    object,
    IPost[],
    [_1: string, _2: string, _3: string]
  >({
    queryKey: ["posts", "users", username],
    queryFn: getUserPosts,
    staleTime: 60000,
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
