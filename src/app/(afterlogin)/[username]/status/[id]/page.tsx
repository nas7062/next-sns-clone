import Post from "@/app/(afterlogin)/_components/Post";
import { ArrowLeftCircle } from "lucide-react";
import CommentForm from "../_components/CommentForm";
import SinglePost from "../_components/SinglePost";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page(props: Props) {
  const { id } = await props.params;
  return (
    <div>
      <div className="flex gap-4 items-center">
        <ArrowLeftCircle className="w-8 h-8 relative top-2" />
        <h3 className="text-lg font-semibold relative top-2">게시하기</h3>
      </div>
      <SinglePost id={id} />
      <CommentForm />
      <div>
        <Comments />
      </div>
    </div>
  );
}
