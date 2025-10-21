"use client";
import Image from "next/image";
import logo from "@/../public/logo.svg";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
export default function LogoutButton() {
  const router = useRouter();
  const { data: me } = useSession();

  const onLogout = () => {
    signOut({ redirect: false }).then(() => {
      router.replace("/");
    });

    if (!me?.user) {
      return null;
    }
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
        <p>{me?.user?.id}</p>
        <p>@{me?.user?.name}</p>
      </div>
    </button>
  );
}
