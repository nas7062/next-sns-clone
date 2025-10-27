import ActionButtons from "@/app/(afterlogin)/_components/ActionButtons";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Post as IPost } from "@/model/Post";
import { getSinglePost } from "@/app/(afterlogin)/[username]/status/[id]/_lib/getSinglePost";
export default function ImageZone({ id }: { id: string }) {
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
  if (!post?.Images[0]) {
    return null;
  }
  return (
    <div className="flex flex-col flex-1 min-w-0 min-h-0">
      <div className="relative flex-1 min-h-0">
        <Image
          src={post?.Images[0].Link}
          alt="이미지"
          fill
          sizes="(min-width: 1024px) 66vw, 100vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="bg-black">
        <ActionButtons />
      </div>
    </div>
  );
}
