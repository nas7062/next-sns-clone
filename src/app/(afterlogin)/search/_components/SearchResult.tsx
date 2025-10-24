import { useQuery } from "@tanstack/react-query";
import Post from "../../_components/Post";
import { Post as IPost } from "@/model/Post";
import getSearchResult from "../_lib/getSearchResult";
export default function SearchResult({
  searchParams,
}: {
  searchParams?: string;
}) {
  const { data } = useQuery<IPost[]>({
    queryKey: ["posts", "search"],
    queryFn: getPostRecommends,
    staleTime: 60000,
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
