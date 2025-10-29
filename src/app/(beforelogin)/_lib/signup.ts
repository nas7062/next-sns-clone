"use server";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export type SignupState = { message: string };

export default async function onSubmit(
  prev: SignupState,
  formData: FormData
): Promise<SignupState | undefined> {
  if (!formData.get("id")) return { message: "no_id" };
  if (!formData.get("name")) return { message: "no_name" };
  if (!formData.get("password")) return { message: "no_password" };
  if (!formData.get("profile")) return { message: "no_profile" };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: "post",
        body: formData,
        credentials: "include",
      }
    );
    if (response.status === 400) {
      return {
        message: (await response.json()).data[0],
        email: formData.get("email"),
      };
    }
    await signIn("credentials", {
      username: formData.get("id"),
      password: formData.get("password"),
      redirect: false,
    });
    console.log(response);
  } catch (e) {
    console.error(e);
    return { message: "network_error" };
  }

  redirect("/home");
  return undefined;
}
