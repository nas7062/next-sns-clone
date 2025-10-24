import Link from "next/link";
import NavMenu from "./_components/NavMenu";
import Image from "next/image";
import LogoutButton from "./_components/LogoutButton";
import TrendSection from "./_components/TrendSection";
import FollowRecomend from "./_components/FollowRecomend";
import { ReactNode } from "react";
import RightSearchZone from "./_components/RightSearchZone";
import { PenSquare } from "lucide-react";

export default function AfterLoginLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: ReactNode;
}>) {
  return (
    <div className="flex w-full ">
      <div className="flex mx-auto space-x-2">
        <header className="w-32  xl:w-60 bg-gray-100 h-[150vh]  ">
          <div className="fixed w-32 xl:w-60 flex flex-col h-[100vh] ">
            <nav className=" flex flex-col flex-1 mt-4 space-y-4  xl:items-start items-center">
              <Link href={"/home"}>
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={150}
                  height={100}
                  className="cursor-pointer rounded-full  flex justify-center "
                />
              </Link>

              <ul className="space-y-4 ml-2 flex flex-col justify-center items-center xl:items-start">
                <NavMenu />
              </ul>
              <Link
                href="/compose/tweet"
                aria-label="게시하기"
                className={`ml-2 inline-flex  items-center justify-center rounded-lg bg-black text-white hover:bg-gray-800 w-12 h-12 p-0 
                  xl:w-auto xl:h-auto xl:px-10 xl:py-2 xl:text-lg `}
              >
                <PenSquare className="w-5 h-5 xl:hidden" />
                <span className="hidden xl:inline">게시하기</span>
              </Link>
              <LogoutButton />
            </nav>
          </div>
        </header>

        <div className=" w-[600px] lg:w-[990px]  h-[100vh] flex justify-between">
          <main className=" h-[100vh] w-[600px]  lg:mx-auto mx-0">
            {children}
          </main>

          <section className="bg-gray-100 h-[100vh] w-[350px]  hidden lg:block">
            <RightSearchZone />
            <TrendSection />
            <FollowRecomend />
          </section>
        </div>

        {modal}
      </div>
    </div>
  );
}
