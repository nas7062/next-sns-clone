import { Heart, MessageSquare, Share } from "lucide-react";
import Image from "next/image";
import logo from "@/../public/logo.svg";
export default function Post() {
  return (
    <article>
      <div className="flex bg-gray-200 p-6">
        <Image
          src={logo}
          alt="이미지"
          width={80}
          height={80}
          className="flex self-start"
        />
        <div className="flex flex-col flex-1">
          <div className="flex gap-2">
            <p>id</p>
            <p>nickname</p>
            <p>time</p>
          </div>
          <div>descript</div>
          <Image src={logo} alt="이미지" width={400} height={400} />
          <div className="flex justify-between">
            <MessageSquare />
            <Share />
            <Heart />
          </div>
        </div>
      </div>
    </article>
  );
}
