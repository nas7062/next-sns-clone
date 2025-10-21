// src/auth.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

type LoginResponse = {
  id: string;
  nickname: string;
  image?: string | null;
  [k: string]: unknown;
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/flow/login",
    newUser: "/flow/signup",
  },
  session: { strategy: "jwt" },

  providers: [
    Credentials({
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
