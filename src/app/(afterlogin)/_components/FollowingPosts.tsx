"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { Post as IPost } from "@/model/Post";
import Post from "./Post";
import { getFollowingPosts } from "../_lib/getFollowingPosts";

export default function FollowingPosts() {
  const { data } = useSuspenseQuery<IPost[]>({
    queryKey: ["posts", "following"],
    queryFn: getFollowingPosts,
    staleTime: 60000,
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
