import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import { XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("ko");
export default function Page() {
  const user = {
    id: "hero",
    nickname: "영웅",
    image: faker.image.avatar(),
  };
  const messages = [
    {
      messageId: 1,
      roomId: 123,
      content: "안녕하세요",
      id: "nas7062",
      createdAt: new Date(),
    },
    {
      messageId: 2,
      roomId: 123,
      id: "nas70622",
      content: "안녕히가세요",
      createdAt: new Date(),
    },
  ];
  return (
    <main>
      <header className="flex gap-4">
        <XCircle className="w-8 h-8" />
        <h3 className="text-2xl font-semibold">헤더</h3>
      </header>
      <Link
        href={user.nickname}
        className="flex justify-center flex-col items-center px-4 py-10 hover:bg-gray-50"
      >
        <Image
          src={user.image}
          alt="이미지"
          width={80}
          height={80}
          className="rounded-full"
        />
        <p>{user.id}</p>
        <p>{user.nickname}</p>
      </Link>
      <div className="flex flex-col gap-4">
        {messages.map((m) => {
          const isMe = m.id === "nas7062";
          return (
            <div
              key={m.messageId}
              className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-[70%] break-words leading-relaxed
                ${
                  isMe ? "bg-sky-500 text-white" : "bg-gray-100 text-gray-900"
                }`}
              >
                {m.content}
              </div>
              <div className="mt-1 text-xs text-gray-400">
                {dayjs(m.createdAt).format(`YYYY년 MM월 DD일 A HH시 mm분`)}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
