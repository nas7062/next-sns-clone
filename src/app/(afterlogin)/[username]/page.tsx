import { ArrowLeftCircle } from "lucide-react";
import logo from "@/../public/logo.svg";
import Image from "next/image";
import Post from "../_components/Post";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getUserPosts } from "./_lib/getUserPosts";
import UserPosts from "./_components/UserPosts";

type Props = {
  params: Promise<{ username: string }>;
};

export default async function Page({ props }: Props) {
  const { username } = await props.parmas;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["users", username],
    queryFn: getUser,
  });
  await queryClient.prefetchQuery({
    queryKey: ["users", "posts", username],
    queryFn: getUserPosts,
  });
  const dehydratedState = dehydrate(queryClient);
  const target = {
    User: {
      id: "nas7062",
      nickname: "ms",
      image: logo,
    },
    content: "asdsaㅇㅁ",
    createdAt: new Date(),
  };
  return (
    <main className="mt-4 space-y-10">
      <HydrationBoundary state={dehydratedState}>
        <div className="flex gap-10 items-center">
          <ArrowLeftCircle className="w-8 h-8" />
          <h3 className="text-xl font-semibold">{target.User.nickname}</h3>
        </div>
        <div className="flex justify-between items-center">
          <Image src={logo} alt="로고이미지" width={150} height={150} />
          <div className="flex-1">
            <p className="text-lg font-semibold">{target.User.id}</p>
            <p>@{target.User.nickname}</p>
          </div>
          <button className="px-4 py-2 text-white bg-black rounded-full h-10 ">
            팔로우
          </button>
        </div>
        <div>
          <UserPosts username={username} />
        </div>
      </HydrationBoundary>
    </main>
  );
}
