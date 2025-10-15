import { ArrowLeftCircle, MoveLeft } from "lucide-react";
import logo from "@/../public/logo.svg";
import Image from "next/image";
import Post from "../_components/Post";
export default function Page() {
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
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
