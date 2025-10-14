import Link from "next/link";
import NavMenu from "./_components/NavMenu";
import Image from "next/image";
import LogoutButton from "./_components/LogoutButton";
import { Search } from "lucide-react";
import TrendSection from "./_components/TrendSection";
import FollowRecomend from "./_components/FollowRecomend";

export default function AfterLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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

              <ul className="space-y-4">
                <NavMenu />
              </ul>
              <Link
                href={"/compose/tweet"}
                className="py-2 px-10 bg-black text-white rounded-lg text-lg  flex justify-center hover:bg-gray-800 "
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
            <div className="flex items-center mt-4">
              <Search scale={8} className="cursor-pointer z-10 ml-0.5" />
              <input
                type="text"
                className="w-[350px] h-10 border-gray-800 pl-6 border rounded-lg fixed"
              />
            </div>
            <TrendSection />
            <FollowRecomend />
          </section>
        </div>
      </div>
    </div>
  );
}
