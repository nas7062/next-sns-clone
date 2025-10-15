"use client";

import clsx from "clsx";
import {
  Home,
  MessageCircle,
  MessageSquareShare,
  MessagesSquare,
  Search,
  User,
} from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavMenu() {
  const segment = useSelectedLayoutSegment();

  return (
    <>
      <li>
        <Link
          href={"/home"}
          className={clsx(
            segment === "home" ? "font-semibold" : "font-medium",
            "text-xl flex gap-2  items-center hover:bg-gray-200 rounded-2xl "
          )}
        >
          <Home
            className={clsx(segment === "home" ? "stroke-3 " : "stroke-2")}
          />
          홈
        </Link>
      </li>
      <li>
        <Link
          href={"/explore"}
          className={clsx(
            segment && ["search", "explore"].includes(segment)
              ? "font-semibold"
              : "font-medium",
            "text-xl flex gap-2  items-center hover:bg-gray-200 rounded-2xl"
          )}
        >
          <Search
            className={clsx(segment === "explore" ? "stroke-3 " : "stroke-2")}
          />
          탐색하기
        </Link>
      </li>

      <li>
        <Link
          href={"/messages"}
          className={clsx(
            segment === "messages" ? "font-semibold" : "font-medium",
            "text-xl flex gap-2  items-center hover:bg-gray-200 rounded-2xl"
          )}
        >
          <MessagesSquare
            className={clsx(segment === "messages" ? "stroke-3 " : "stroke-2")}
          />
          메세지
        </Link>
      </li>

      <li>
        <Link
          href={"/profile"}
          className={clsx(
            segment === "profile" ? "font-semibold" : "font-medium",
            "text-xl flex gap-2  items-center hover:bg-gray-200 rounded-2xl"
          )}
        >
          <User
            className={clsx(segment === "profile" ? "stroke-3 " : "stroke-2")}
          />
          프로필
        </Link>
      </li>
    </>
  );
}
