// src/auth.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

type LoginResponse = {
  id: string;
  nickname: string;
  image?: string | null;
  // 백엔드가 주는 추가 필드들…
  [k: string]: unknown;
};

export const {
  handlers: { GET, POST },
  auth,
  signIn, // 서버 전용
  signOut, // 서버 전용
} = NextAuth({
  pages: {
    signIn: "/flow/login",
    newUser: "/flow/signup",
  },
  session: { strategy: "jwt" },

  providers: [
    Credentials({
      // id 기본값: "credentials" → 클라이언트 signIn과 일치해야 합니다.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: credentials?.username,
              password: credentials?.password,
            }),
          }
        );
        if (!res.ok) return null;

        const user = (await res.json()) as LoginResponse;

        return {
          email: user.id,
          name: user.nickname,
          image: user.image ?? null,
          ...user,
        };
      },
    }),
  ],
});
