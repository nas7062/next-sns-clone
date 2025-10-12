import Image from "next/image";
import logo from "../../../public/next.svg";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex justify-center items-center w-[100dvw] h-[100dvh]">
      <div className="flex-1 flex justify-center items-center">
        <Image src={logo} alt="로고" />
      </div>
      <div className="flex-1 flex justify-center space-y-4 items-center flex-col">
        <h1 className="text-6xl">지금 일어나고 있는 일</h1>
        <h2 className="text-4xl">지금 가입하세요.</h2>
        <Link
          href={"/flow/signup"}
          className="px-4 py-2 border bg-sky-400 hover:bg-sky-500 text-white rounded-lg"
        >
          계정 만들기
        </Link>
        <h3 className="text-gray-400">이미 가입하셧나요?</h3>
        <Link
          href={"/flow/login"}
          className="px-4 py-2 border bg-sky-400 hover:bg-sky-500 text-white rounded-lg"
        >
          로그인
        </Link>
      </div>
    </div>
  );
}
