import { useQuery } from "@tanstack/react-query";
import Post from "../../_components/Post";
import { Post as IPost } from "@/model/Post";
import { getSearchResult } from "../_lib/getSearchResult";
import { SearchPageProps } from "../page";

export default function SearchResult({ searchParams }: SearchPageProps) {
  const { data } = useQuery<
    IPost[],
    object,
    IPost[],
    [_1: string, _2: string, SearchPageProps["searchParams"]]
  >({
    queryKey: ["posts", "search", searchParams],
    queryFn: getSearchResult,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
