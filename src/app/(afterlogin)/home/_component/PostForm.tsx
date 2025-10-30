"use client";

import Image from "next/image";
import logo from "@/../public/logo.svg";
import { ImageDown } from "lucide-react";
import {
  ChangeEvent,
  ChangeEventHandler,
  FormEventHandler,
  useRef,
  useState,
} from "react";
export default function PostForm() {
  const imageRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState<
    Array<{ dataUrl: string; file: File } | null>
  >([]);
  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("content", content);
    preview.forEach((p) => {
      if (p) {
        formData.append("images", p.file);
      }
    });

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
      method: "post",
      credentials: "include",
      body: formData,
    });
  };
  const onClickImage = () => {
    if (imageRef.current) imageRef.current.click();
  };

  const onRemoveImage = (index: number) => () => {
    setPreview((prevPreview) => {
      const prev = [...prevPreview];
      prev[index] = null;
      return prev;
    });
  };

  const onUpload: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    if (e.target.files) {
      Array.from(e.target.files).forEach((file, index) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview((prevPreview) => {
            const prev = [...prevPreview];
            prev[index] = {
              dataUrl: reader.result as string,
              file,
            };
            return prev;
          });
        };
        reader.readAsDataURL(file);
      });
    }
  };
  return (
    <form action="" onSubmit={onSubmit}>
      <div className="flex flex-col gap-4 pt-24 border border-gray-100 pb-2">
        <div className="flex">
          <Image src={logo} alt="로고이미지" width={80} height={80} />
          <textarea
            className=" rounded-md resize-none w-full"
            placeholder="무슨 일이 일어나고 있나요?"
            onChange={onChangeContent}
            value={content}
          />
        </div>
        <div style={{ display: 'flex' }}>
          {preview.map((v, index) => (
            v && <div key={index} style={{ flex: 1 }} onClick={onRemoveImage(index)}>
              <img src={v.dataUrl} alt="미리보기" style={{objectFit: "contain", width: '100%', maxHeight: 100}} />
            </div>
          ))}
        <div className="flex justify-between w-[90%] mx-auto">
          <div className="w-10 h-10 hover:bg-sky-200 rounded-full flex justify-center items-center">
            <input type="file" hidden ref={imageRef} />
            <ImageDown className="cursor-pointer" onClick={onClickImage} />
          </div>

          <button className="cursor-pointer px-4 py-2 bg-sky-400 hover:bg-sky-500 text-white rounded-2xl">
            게시하기
          </button>
        </div>
      </div>
    </form>
  );
}
