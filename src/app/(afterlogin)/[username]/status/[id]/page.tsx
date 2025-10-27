import { ArrowLeftCircle } from "lucide-react";
import CommentForm from "../_components/CommentForm";
import SinglePost from "../_components/SinglePost";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getSinglePost } from "./_lib/getSinglePost";
import { getComments } from "./_lib/getComments";
import Comments from "../_components/Comments";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page(props: Props) {
  const { id } = await props.params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", id],
    queryFn: getSinglePost,
  });
  await queryClient.prefetchQuery({
    queryKey: ["posts", id, "comments"],
    queryFn: getComments,
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <div>
      <HydrationBoundary state={dehydratedState}>
        <div className="flex gap-4 items-center">
          <ArrowLeftCircle className="w-8 h-8 relative top-2" />
          <h3 className="text-lg font-semibold relative top-2">게시하기</h3>
        </div>
        <SinglePost id={id} />
        <CommentForm id={id} />
        <div>
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  );
}
