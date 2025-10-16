import Image from "next/image";
import logo from "@/../public/logo.svg";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import Link from "next/link";
import ActionButtons from "./ActionButtons";
import PostArticle from "./PostArticle";
import { faker } from "@faker-js/faker";
dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Post() {
  const target = {
    postId: 1,
    User: {
      id: "nas7062",
      nickname: "ms",
      image: logo,
    },
    content: "asdsaㅇㅁ",
    createdAt: new Date(),
    Images: [] as any[],
  };

  if (Math.random() > 0.5) {
    target.Images.push({
      imageId: 1,
      link: faker.image.urlPicsumPhotos({ width: 800, height: 600 }),
    });
  }
  return (
    <PostArticle post={target}>
      <div className="flex hover:bg-gray-100 p-6 cursor-pointer">
        <Link href={`/${target.User.id}`}>
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
          {target.Images && target.Images.length > 0 && (
            <Link
              href={`/${target.User.id}/status/${target.postId}/photo/${target.Images[0].imageId}`}
            >
              <Image
                src={target.Images[0]?.link}
                alt="이미지"
                width={400}
                height={400}
              />
            </Link>
          )}

          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
