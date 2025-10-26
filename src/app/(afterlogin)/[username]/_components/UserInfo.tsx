import { User } from "@/model/User";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeftCircle } from "lucide-react";
import Image from "next/image";
import { getUser } from "../_lib/getUser";
type Props = {
  username: string;
};
export default function UserInfo({ username }: Props) {
  const {
    data: user,
    error,
    isLoading,
  } = useQuery<User, object, User, [_1: string, _2: string]>({
    queryKey: ["users", username],
    queryFn: getUser,
    staleTime: 60000,
  });
  if (!user) {
    return null;
  }
  if (error) {
    return (
      <>
        <div className="flex gap-10 items-center">
          <ArrowLeftCircle className="w-8 h-8" />
          <h3 className="text-xl font-semibold">{user.nickname}</h3>
        </div>
        <div className="flex justify-between items-center">
          <Image src={""} alt={user.nickname} width={150} height={150} />
          <div className="flex-1">
            <p className="text-lg font-semibold">{user.id}</p>
            <p>@{user.nickname}</p>
          </div>
          <div className="text-2xl">계정이 존재하지 않음.</div>
        </div>
      </>
    );
  }
  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <>
      <div className="flex gap-10 items-center">
        <ArrowLeftCircle className="w-8 h-8" />
        <h3 className="text-xl font-semibold">{user.nickname}</h3>
      </div>
      <div className="flex justify-between items-center">
        <Image src={user.image} alt={user.nickname} width={150} height={150} />
        <div className="flex-1">
          <p className="text-lg font-semibold">{user.id}</p>
          <p>@{user.nickname}</p>
        </div>
        <button className="px-4 py-2 text-white bg-black rounded-full h-10 ">
          팔로우
        </button>
      </div>
    </>
  );
}
