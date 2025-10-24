"use client";

import { Post } from "@/model/Post";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export type PostProps = {
  children?: ReactNode;
  post: Post;
};

export default function PostArticle({ children, post }: PostProps) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return <article onClickCapture={onClick}>{children}</article>;
}
