"use client";
import Image from "next/image";
import logo from "@/../public/logo.svg";
export default function LogoutButton() {
  const me = {
    id: "10012",
    nickname: "ms",
    image: logo,
  };

  const onLogout = () => {
    console.log("로그아웃");
  };
  return (
    <button
      className="fixed bottom-10 mt-auto py-2 px-10 flex justify-center items-center rounded-lg bg-amber-100 hover:bg-amber-200 cursor-pointer "
      onClick={onLogout}
    >
      <div>
        <Image src={logo} alt="logo" width={115} height={120} />
      </div>
      <div className="xl:block hidden">
        <p>{me.id}</p>
        <p>@{me.nickname}</p>
      </div>
    </button>
  );
}
