"use client";

import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavMenu() {
  const segment = useSelectedLayoutSegment();

  return (
    <>
      <li>
        <Link
          href={"/home"}
          className={clsx(segment === "home" ? "font-semibold" : "font-medium")}
        >
          홈
        </Link>
      </li>
      <li>
        <Link
          href={"/explore"}
          className={clsx(
            segment === "explore" ? "font-semibold" : "font-medium"
          )}
        >
          탐색하기
        </Link>
      </li>

      <li>
        <Link
          href={"/messages"}
          className={clsx(
            segment === "messages" ? "font-semibold" : "font-medium"
          )}
        >
          메세지
        </Link>
      </li>

      <li>
        <Link
          href={"/profile"}
          className={clsx(
            segment === "profile" ? "font-semibold" : "font-medium"
          )}
        >
          프로필
        </Link>
      </li>
    </>
  );
}
