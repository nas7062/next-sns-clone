"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getComments } from "../[id]/_lib/getComments";
import { Post as IPost } from "@/model/Post";
import Post from "@/app/(afterlogin)/_components/Post";
export default function Comments({ id }: { id: string }) {
  const queryClient = useQueryClient();
  const post = queryClient.getQueryData(["posts", id]);
  const { data } = useQuery<
    IPost[],
    object,
    IPost[],
    [_1: string, _2: string, _3: string]
  >({
    queryKey: ["posts", id, "comments"],
    queryFn: getComments,
    staleTime: 60000,
    enabled: !!post,
  });
  if (post) return data?.map((post) => <Post post={post} key={post.postId} />);
  return null;
}
