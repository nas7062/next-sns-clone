import Post from "@/app/(afterlogin)/_components/Post";
import { ArrowLeftCircle } from "lucide-react";
import CommentForm from "../_components/CommentForm";

export default function Page() {
  return (
    <div>
      <div>
        <ArrowLeftCircle className="w-8 h-8 relative top-2" />
        <h3>게시하기</h3>
      </div>
      <Post />
      <CommentForm />
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
