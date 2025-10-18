"use client";

import { faker } from "@faker-js/faker";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useRouter } from "next/navigation";

dayjs.extend(relativeTime);
dayjs.locale("ko");

export default function Room() {
  const router = useRouter();
  const user = {
    id: "nas7062",
    nickname: "ms",
    Messages: [
      {
        messageId: 1,
        roomId: 123,
        content: "안녕하세요",
        createdAt: new Date(),
      },
      {
        messageId: 2,
        roomId: 123,
        content: "안녕히가세요",
        createdAt: new Date(),
      },
    ],
  };

  const onClick = () => {
    router.push(`/messages/${user.Messages.at(-1)?.roomId}`);
  };
  return (
    <div className="flex gap-2 cursor-pointer" onClick={onClick}>
      <Image
        src={faker.image.avatar()}
        alt="아바타"
        width={70}
        height={70}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <div>
          <p className="font-semibold">{user.id}</p>
          <p>{user.nickname}</p>
        </div>
        {user.Messages?.at(-1)?.content}
      </div>
      <p>{dayjs(user?.Messages.at(-1)?.createdAt).fromNow(true)}</p>
    </div>
  );
}
