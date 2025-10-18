import { XCircle } from "lucide-react";
import Image from "next/image";
import ActionButtons from "@/app/(afterlogin)/_components/ActionButtons";
import Post from "@/app/(afterlogin)/_components/Post";
import CommentForm from "@/app/(afterlogin)/[username]/status/_components/CommentForm";
import { faker } from "@faker-js/faker";
export default function Page() {
  return (
    <div className="flex fixed inset-0 w-dvw h-dvh z-[9999]">
      <XCircle />
      <div className="flex flex-col flex-1 min-w-0 min-h-0">
        <div className="relative flex-1 min-h-0">
          <Image
            src={faker.image.urlPicsumPhotos()}
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
      <div className="w-[330px] overflow-y-scroll">
        <Post />
        <CommentForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
