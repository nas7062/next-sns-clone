"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchTab() {
  const [current, setCurrent] = useState("hot");
  const router = useRouter();
  const searchParams = useSearchParams();
  const onClickHot = () => {
    setCurrent("hot");
    let url = `/search?q=${searchParams.get("q")}`;
    if (searchParams.has("pf")) {
      url += `&pf=${searchParams.get("pf")}`;
    }
    router.replace(url);
  };
  const onClickNew = () => {
    setCurrent("new");
    let url = `/search?q=${searchParams.toString()}$f=live`;
    if (searchParams.has("pf")) {
      url += `&pf=${searchParams.get("pf")}`;
    }
    router.replace(url);
  };

  return (
    <div className="fixed w-[600px] backdrop-blur-3xl bg-white/70 z-50 h-10">
      <h2 className="text-2xl">홈</h2>
      <ul className="flex h-10 font-semibold">
        <li
          className="flex flex-1 bg-gray-100 justify-center items-center hover:bg-gray-200 cursor-pointer relative"
          onClick={onClickHot}
        >
          인기
          <div
            className="border border-sky-500 h-0.5 absolute w-20 bottom-0"
            hidden={current === "new"}
          ></div>
        </li>
        <li
          className="flex flex-1 bg-gray-100 justify-center items-center hover:bg-gray-200 cursor-pointer relative"
          onClick={onClickNew}
        >
          최신
          <div
            className="border border-sky-500 h-0.5 absolute w-20 bottom-0"
            hidden={current === "hot"}
          ></div>
        </li>
      </ul>
    </div>
  );
}
