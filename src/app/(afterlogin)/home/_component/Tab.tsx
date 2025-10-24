"use client";

import { useContext } from "react";
import { TabContext } from "./TabProvider";

export default function Tab() {
  const { tab, setTab } = useContext(TabContext);

  const onCLickReco = () => {
    setTab("reco");
  };

  const onCLickFollow = () => {
    setTab("follow");
  };
  return (
    <div className="fixed w-[600px] backdrop-blur-3xl bg-white/70 z-50 h-10">
      <h2 className="text-2xl">홈</h2>
      <ul className="flex h-10 font-semibold">
        <li
          className="flex flex-1 bg-gray-100 justify-center items-center hover:bg-gray-200 cursor-pointer relative"
          onClick={onCLickReco}
        >
          추천
          <div
            className="border border-sky-500 h-0.5 absolute w-20 bottom-0"
            hidden={tab === "follow"}
          ></div>
        </li>
        <li
          className="flex flex-1 bg-gray-100 justify-center items-center hover:bg-gray-200 cursor-pointer relative"
          onClick={onCLickFollow}
        >
          팔로우 중
          <div
            className="border border-sky-500 h-0.5 absolute w-20 bottom-0"
            hidden={tab === "reco"}
          ></div>
        </li>
      </ul>
    </div>
  );
}
