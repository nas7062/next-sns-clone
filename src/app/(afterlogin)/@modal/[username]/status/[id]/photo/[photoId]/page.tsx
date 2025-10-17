import { XCircle } from "lucide-react";
import Image from "next/image";
import logo from "@/../public/logo.svg";
import ActionButtons from "@/app/(afterlogin)/_components/ActionButtons";
import Post from "@/app/(afterlogin)/_components/Post";
import CommentForm from "@/app/(afterlogin)/[username]/status/_components/CommentForm";
export default function Page() {
  return (
    <div className="flex">
      <XCircle />
      <div className="flex flex-col">
        <Image src={logo} alt="이미지" className="flex-1" />
        <ActionButtons />
      </div>
      <div>
        <Post />
        <CommentForm />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
