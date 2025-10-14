"use client";

import Image from "next/image";
import userImage from "@/../public/logo.svg";
export default function Follow() {
  const user = {
    id: "nas7062",
    nickname: "ms",
    image: userImage,
  };

  const onFollow = () => {
    console.log("follow");
  };
  return (
    <div className="flex gap-4 items-center">
      <Image src={userImage} alt="유저 이미지" width={80} height={80} />
      <div className="flex flex-col ">
        <div>{user.id}</div>
        <div>{user.nickname}</div>
      </div>
      <button
        onClick={onFollow}
        className="px-4 rounded-2xl py-1 h-8 cursor-pointer bg-sky-500 text-white hover:bg-sky-600"
      >
        팔로우
      </button>
    </div>
  );
}
