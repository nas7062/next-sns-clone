"use client";

import { useQuery } from "@tanstack/react-query";
import { Post as IPost } from "@/model/Post";
import Post from "./Post";
import { getFollowingPosts } from "../_lib/getFollowingPosts";

export default function FollowingPosts() {
  const { data } = useQuery<IPost[]>({
    queryKey: ["posts", "following"],
    queryFn: getFollowingPosts,
    staleTime: 60000,
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
