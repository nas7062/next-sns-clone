"use client";

import Modal from "@/app/components/Modal";
import Image from "next/image";
import logo from "@/../public/logo.svg";
import { ChangeEvent, useState } from "react";
import { ImageDown } from "lucide-react";
export default function TweetModal() {
  const [content, setContent] = useState("");

  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  return (
    <Modal>
      <div className="flex">
        <Image
          src={logo}
          alt="로고이미지"
          height={80}
          width={80}
          className="self-start"
        />
        <div className="flex flex-col flex-1 space-y-4">
          <div>
            <select name="" id="">
              <option value="">모든사람</option>
              <option value="">팔로우 에게</option>
              <option value="">OO 에게</option>
            </select>
          </div>
          <textarea
            value={content}
            onChange={onChangeContent}
            className="resize-none w-full min-h-48 p-2"
            placeholder="무슨 일이 일어나고 있나요?"
          />
          <p className="p-4 border border-gray-200 text-sky-400">
            모든 사람이 답글을 달 수 있습니다
          </p>
          <div className="flex justify-between">
            <div className="w-10 h-10 hover:bg-sky-200 rounded-full flex justify-center items-center cursor-pointer">
              <ImageDown />
            </div>
            <button className="px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-800 cursor-pointer">
              게시하기
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
