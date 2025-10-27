import { XCircle } from "lucide-react";
import CommentForm from "@/app/(afterlogin)/[username]/status/_components/CommentForm";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getSinglePost } from "@/app/(afterlogin)/[username]/status/[id]/_lib/getSinglePost";
import { getComments } from "@/app/(afterlogin)/[username]/status/[id]/_lib/getComments";
import Comments from "@/app/(afterlogin)/[username]/status/_components/Comments";
import SinglePost from "@/app/(afterlogin)/[username]/status/_components/SinglePost";
import ImageZone from "./_components/ImageZone";
type Props = {
  params: { id: string };
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
    <div className="flex fixed inset-0 w-dvw h-dvh z-[9999]">
      <HydrationBoundary state={dehydratedState}>
        <XCircle />
        <ImageZone id={id} />
        <div className="w-[330px] overflow-y-scroll">
          <SinglePost id={id} />
          <CommentForm id={id} />
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  );
}
