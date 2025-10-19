import Modal from "@/app/components/Modal";
import { redirect } from "next/navigation";
import Form from "next/form";
export default function Page() {
  const onSubmit = async (formData: FormData) => {
    "use server";

    let shouldRedirect = false;
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
        {
          method: "post",
          body: formData,
          credentials: "include",
        }
      );
      shouldRedirect = true;
    } catch (error) {
      console.error(error);
    }
    if (shouldRedirect) redirect("/home");
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

          <Form
            className="px-6 pb-6 pt-4 space-y-4  overflow-hidden"
            action={onSubmit}
          >
            {/* 아이디 */}
            <div className="group relative ">
              <input
                id="id"
                name="id"
                type="text"
                autoComplete="username"
                required
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
                id="name"
                name="name"
                type="text"
                required
                className="peer w-full h-12 rounded-lg border border-neutral-200 bg-white px-3 pt-5 text-[15px] outline-none
                           focus:border-neutral-400 focus:ring-4 focus:ring-neutral-200/60 transition"
                placeholder=" "
              />
              <label
                htmlFor="name"
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
          </Form>
        </div>
      </div>
    </Modal>
  );
}
