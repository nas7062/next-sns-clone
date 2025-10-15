import Link from "next/link";
import NavMenu from "./_components/NavMenu";
import Image from "next/image";
import LogoutButton from "./_components/LogoutButton";
import TrendSection from "./_components/TrendSection";
import FollowRecomend from "./_components/FollowRecomend";
import { ReactNode } from "react";
import SearchInput from "./_components/SearchInput";
import SearchFilter from "./_components/SearchFilter";

export default function AfterLoginLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: ReactNode;
}>) {
  return (
    <div className="flex w-full ">
      <div className="flex mx-auto space-x-10">
        <header className="w-72 bg-gray-100 h-[150vh]  ">
          <div className="fixed flex flex-col h-[100vh]">
            <nav className="flex flex-col flex-1 mt-4 space-y-4">
              <Link href={"/home"}>
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={150}
                  height={100}
                  className="cursor-pointer rounded-full  flex justify-center"
                />
              </Link>

              <ul className="space-y-4 ml-2">
                <NavMenu />
              </ul>
              <Link
                href={"/compose/tweet"}
                className="ml-2 py-2 px-10 bg-black text-white rounded-lg text-lg  flex justify-center hover:bg-gray-800 "
              >
                게시하기
              </Link>
              <LogoutButton />
            </nav>
          </div>
        </header>
        <div className="w-[990px]  h-[100vh] flex justify-between">
          <main className=" h-[100vh] w-[600px]">{children}</main>
          <section className="bg-gray-100 h-[100vh] w-[350px]">
            <SearchInput />
            <SearchFilter />
            <TrendSection />
            <FollowRecomend />
          </section>
        </div>
        {modal}
      </div>
    </div>
  );
}
