"use client";

import Modal from "@/app/components/Modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const { data: session } = useSession();

  if (session?.user) {
    router.replace("/home");
    return null;
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });
    if (res?.ok) {
      router.replace("/home");
    } else {
      setMessage("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <Modal>
      <div className="w-[min(500px,80vw)] overflow-hidden">
        <div className="rounded-2xl shadow-lg border border-black/5 bg-white overflow-hidden">
          <header className="px-6 pt-4">
            <h2 className="text-2xl font-semibold tracking-tight">로그인</h2>
            <p className="text-sm text-neutral-600 mt-1">
              정보를 입력해 주세요.
            </p>
          </header>

          <form className="px-6 pb-6 pt-4 space-y-4" onSubmit={onSubmit}>
            {/* 아이디 = username 하나만 사용 */}
            <div className="group relative">
              <input
                id="username"
                name="username" // provider의 credentials 키와 동일
                type="text"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="peer w-full h-12 rounded-lg border border-neutral-200 bg-white px-3 pt-5 text-[15px] outline-none
                           focus:border-neutral-400 focus:ring-4 focus:ring-neutral-200/60 transition"
                placeholder=" "
              />
              <label
                htmlFor="username"
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-white px-1 text-neutral-500
                           transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-[15px]
                           peer-focus:top-2 peer-focus:text-xs peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs"
              >
                아이디
              </label>
            </div>

            {/* 비밀번호 */}
            <div className="group relative">
              <input
                id="password"
                name="password" // provider 키와 동일
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer w-full h-12 rounded-lg border border-neutral-200 bg-white px-3 pt-5 text-[15px] outline-none
                           focus:border-neutral-400 focus:ring-4 focus:ring-neutral-200/60 transition"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-white px-1 text-neutral-500
                           transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-[15px]
                           peer-focus:top-2 peer-focus:text-xs peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs"
              >
                비밀번호
              </label>
            </div>

            {/* 액션 */}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-4 h-11 text-white hover:bg-neutral-800 transition w-full"
              >
                로그인
              </button>
            </div>

            {message && (
              <p className="text-sm text-red-600 pt-2" role="alert">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </Modal>
  );
}
