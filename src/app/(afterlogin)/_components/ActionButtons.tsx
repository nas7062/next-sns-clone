"use client";
import clsx from "clsx";
import { Heart, MessageSquare, Share } from "lucide-react";

export default function ActionButtons() {
  const commented = false;
  const reposted = true;
  const liked = true;
  return (
    <div className="flex justify-between">
      <div className="relative">
        <MessageSquare
          className={clsx(
            "relative z-10",
            commented ? "text-sky-500" : "text-black"
          )}
        />
        <div
          className={clsx(
            `w-10 h-10 hover:bg-sky-100 absolute -top-2 -left-2 rounded-full`,
            commented ? "text-sky-500" : "text-black"
          )}
        ></div>
        <div className="absolute -right-3 top-1 text-sky-500">
          {commented && 1}
        </div>
      </div>
      <div className="relative">
        <Share
          className={clsx(
            "relative z-10",
            reposted ? "text-yellow-500" : "text-black"
          )}
        />
        <div
          className={clsx(
            `w-10 h-10 hover:bg-yellow-100 absolute -top-2 -left-2 rounded-full`,
            reposted ? "text-yellow-500" : "text-black"
          )}
        ></div>
        <div className="absolute -right-3 top-1 text-yellow-500">
          {reposted && 1}
        </div>
      </div>
      <div className="relative">
        <Heart
          className={clsx(
            "relative z-10",
            liked ? "text-red-500" : "text-black"
          )}
        />
        <div
          className={clsx(
            `w-10 h-10 hover:bg-red-100 absolute -top-2 -left-2 rounded-full`,
            liked ? "text-red-500" : "text-black"
          )}
        ></div>
        <div className="absolute -right-3 top-1 text-red-500">{liked && 1}</div>
      </div>
    </div>
  );
}
