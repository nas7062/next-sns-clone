import { User } from "@/model/User";
import Follow from "./Follow";

export default function FollowRecomend({ user }: { user: User }) {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <h3 className="text-xl font-semibold">팔로우추천</h3>
      <Follow />
      <Follow />
      <Follow />
    </div>
  );
}
