import NextAuth, { CredentialsSignin } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST } /** API 라우트 */,
  auth /** 내가 로그인을 했는지 안했는지 알아내는 함수 */,
  signIn /** 로그인하는 함수 */,
} = NextAuth({
  pages: {
    //회원가입과 로그인시에 어떤 페이지 경로인지 삽입
    signIn: "/flow/login",
    newUser: "/flow/signup",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        //로그인 수행할때에 아래 부분 호출
        const authResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: credentials.username,
              password: credentials.password,
            }),
          }
        );

        if (!authResponse.ok) {
          const credentialsSignin = new CredentialsSignin();
          if (authResponse.status === 404) {
            credentialsSignin.code = "no_user";
          } else if (authResponse.status === 401) {
            credentialsSignin.code = "wrong_password";
          }
          throw credentialsSignin;
        }

        const user = await authResponse.json();

        return {
          id: user.id,
          name: user.nickname,
          image: user.image,
          ...user,
        };
      },
    }),
  ],
});
