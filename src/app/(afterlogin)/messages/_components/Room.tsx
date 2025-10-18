import { faker } from "@faker-js/faker";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("ko");

export default function Room() {
  const user = {
    id: "nas7062",
    nickname: "ms",
    Messages: [
      { content: "안녕하세요", createdAt: new Date() },
      { content: "안녕히가세요", createdAt: new Date() },
    ],
  };
  return (
    <div className="flex gap-2 cursor-pointer">
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
