"use client";

import { useQuery } from "@tanstack/react-query";
import { Post as IPost } from "@/model/Post";
import Post from "@/app/(afterlogin)/_components/Post";
import { getSinglePost } from "../[id]/_lib/getSinglePost";

export default function UserPosts({ id }: { id: string }) {
  const { data: post } = useQuery<
    IPost,
    object,
    IPost,
    [_1: string, _2: string]
  >({
    queryKey: ["posts", id],
    queryFn: getSinglePost,
    staleTime: 60000,
  });
  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }
  <Post key={post.postId} post={post} />;
}
