"use client";

import Modal from "@/app/components/Modal";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
export default function Page() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const result = await signIn("credentials", {
        username: id,
        password,
        redirect: false,
      });
      console.log(result);
      router.replace("/home");
    } catch (err) {
      console.error(err);
      setMessage("아이디와 비밀번호가 일치하지 않습니다.");
    }
  };
  const onClickClose = () => {
    router.back();
  };
  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };
  return (
    <Modal>
      <div className="w-[min(500px,80vw)]  overflow-hidden">
        <div className="rounded-2xl shadow-lg border border-black/5 bg-white overflow-hidden">
          <header className="px-6 pt-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              계정을 생성하세요
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              아래 정보를 입력해 주세요.
            </p>
          </header>

          <form
            className="px-6 pb-6 pt-4 space-y-4  overflow-hidden"
            onSubmit={onSubmit}
          >
            {/* 아이디 */}
            <div className="group relative ">
              <input
                id="id"
                name="id"
                type="text"
                autoComplete="username"
                required
                value={id}
                onChange={onChangeId}
                className="peer w-full h-12 rounded-lg border border-neutral-200 bg-white px-3 pt-5 text-[15px] outline-none
                           focus:border-neutral-400 focus:ring-4 focus:ring-neutral-200/60 transition"
                placeholder=" "
              />
              <label
                htmlFor="id"
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-white px-1 text-neutral-500
                           transition-all duration-150
                           peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-[15px]
                           peer-focus:top-2 peer-focus:text-xs
                           peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs"
              >
                아이디
              </label>
            </div>

            {/* 닉네임 */}
            <div className="group relative">
              <input
                id="username"
                name="username"
                type="text"
                required
                className="peer w-full h-12 rounded-lg border border-neutral-200 bg-white px-3 pt-5 text-[15px] outline-none
                           focus:border-neutral-400 focus:ring-4 focus:ring-neutral-200/60 transition"
                placeholder=" "
              />
              <label
                htmlFor="username"
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-white px-1 text-neutral-500
                           transition-all duration-150
                           peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-[15px]
                           peer-focus:top-2 peer-focus:text-xs
                           peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs"
              >
                닉네임
              </label>
            </div>

            {/* 비밀번호 */}
            <div className="group relative">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={onChangePassword}
                required
                className="peer w-full h-12 rounded-lg border border-neutral-200 bg-white px-3 pt-5 text-[15px] outline-none
                           focus:border-neutral-400 focus:ring-4 focus:ring-neutral-200/60 transition"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-white px-1 text-neutral-500
                           transition-all duration-150
                           peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-[15px]
                           peer-focus:top-2 peer-focus:text-xs 
                           peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs"
              >
                비밀번호
              </label>
            </div>

            {/* 프로필 파일 */}
            <div>
              <label
                htmlFor="profile"
                className="block text-sm text-neutral-700 mb-1"
              >
                프로필 이미지
              </label>
              <input
                id="profile"
                name="profile"
                type="file"
                className="cursor-pointer block w-full rounded-lg border border-neutral-200 bg-white file:me-4 file:rounded-md
                           file:border-0 file:bg-neutral-900 file:px-3 file:py-2 file:text-white
                           hover:file:bg-neutral-800 transition"
              />
            </div>

            {/* 액션 버튼 */}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-neutral-900 px-4 h-11 text-white hover:bg-neutral-800 active:bg-neutral-900/90 transition w-full"
              >
                가입하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
