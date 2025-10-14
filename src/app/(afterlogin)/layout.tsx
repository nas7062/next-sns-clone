import Link from "next/link";
import NavMenu from "./_components/NavMenu";
import Image from "next/image";
import LogoutButton from "./_components/LogoutButton";

export default function AfterLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full bg-amber-200">
      <div className="flex mx-auto">
        <header className="w-72 bg-gray-200 h-[100vh] ">
          <div className="fixed flex flex-col h-[100vh]">
            <nav className="flex flex-col flex-1 mt-4 space-y-4">
              <Image
                src="/logo.svg"
                alt="logo"
                width={150}
                height={100}
                className="cursor-pointer rounded-full  flex justify-center"
              />
              <ul className="space-y-4">
                <NavMenu />
              </ul>
              <Link
                href={"/compose/tweet"}
                className="py-2 px-10 bg-black text-white rounded-lg text-lg  flex justify-center"
              >
                게시하기
              </Link>
              <LogoutButton />
            </nav>
          </div>
        </header>
        <div className="w-[990px] bg-gray-200 h-[100vh] flex justify-between">
          <main className="bg-green-300 h-[100vh] w-[600px]">{children}</main>
          <section className="bg-sky-300 h-[100vh] w-[350px]">
            <input
              type="text"
              className="w-[350px] border-gray-800 border rounded-lg fixed"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
