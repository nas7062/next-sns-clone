"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type PostArticleProps = {
  children: ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: string[];
  };
};

export default function PostArticle({ children, post }: PostArticleProps) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return <article onClickCapture={onClick}>{children}</article>;
}
