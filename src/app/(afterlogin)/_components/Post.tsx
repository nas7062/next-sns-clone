import { Heart, MessageSquare, Share, User } from "lucide-react";
import Image from "next/image";
import logo from "@/../public/logo.svg";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import Link from "next/link";
dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Post() {
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
    <article>
      <div className="flex hover:bg-gray-100 p-6 cursor-pointer">
        <Link href={`${target.User.id}/status`}>
          <div className="relative">
            <Image
              src={target.User.image}
              alt="이미지"
              width={80}
              height={80}
              className="relative z-10 self-start"
            />
            <div className="absolute -top-4 left-0 w-14 h-14 rounded-full hover:bg-gray-200 z-0 " />
          </div>
        </Link>

        <div className="flex flex-col flex-1">
          <div className="flex gap-2">
            <p>{target.User.id}</p>
            <p>{target.User.nickname}</p>
            <p>{dayjs(target.createdAt).fromNow(true)}</p>
          </div>
          <div>{target.content}</div>
          <Image src={logo} alt="이미지" width={400} height={400} />
          <div className="flex justify-between">
            <MessageSquare />
            <Share />
            <Heart />
          </div>
        </div>
      </div>
    </article>
  );
}
