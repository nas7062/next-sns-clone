import Link from "next/link";
import { PostProps } from "./PostArticle";
import Image from "next/image";

export default function PostImages({ post }: PostProps) {
  if (!post.Images) return null;
  if (!post.Images.length) return null;

  if (post.Images.length === 1) {
    return (
      <Link
        href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
      >
        <Image
          src={post.Images[0]?.link}
          alt="이미지"
          width={400}
          height={400}
        />
      </Link>
    );
  }
  if (post.Images.length === 2) {
    return (
      <Link
        className="flex gap-[2px]"
        href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
      >
        <Image
          src={post.Images[0]?.link}
          alt="이미지"
          width={400}
          height={400}
          className="flex-1 w-1/2 rounded-xl"
        />
        <Image
          src={post.Images[1]?.link}
          alt="이미지"
          width={400}
          height={400}
          className="flex-1  w-1/2  rounded-xl"
        />
      </Link>
    );
  }
  if (post.Images.length === 3) {
    const [a, b, c] = post.Images;

    return (
      <Link
        href={`/${post.User.id}/status/${post.postId}/photo/${a.imageId}`}
        className="grid grid-cols-2 grid-rows-2 gap-[2px] rounded-xl overflow-hidden aspect-[4/3]"
      >
        <div className="relative col-span-1 row-span-2">
          <Image
            src={a.link}
            alt="이미지"
            fill
            sizes="(min-width:1024px) 50vw, 100vw"
            className="object-cover"
            priority={false}
          />
        </div>

        <div className="relative">
          <Image
            src={b.link}
            alt="이미지"
            fill
            sizes="(min-width:1024px) 25vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="relative">
          <Image
            src={c.link}
            alt="이미지"
            fill
            sizes="(min-width:1024px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
      </Link>
    );
  }
  if (post.Images.length === 4) {
    const [a, b, c, d] = post.Images;

    return (
      <Link
        href={`/${post.User.id}/status/${post.postId}/photo/${a.imageId}`}
        className="grid grid-cols-2 grid-rows-2 gap-[2px] rounded-xl overflow-hidden aspect-[4/3]"
      >
        <div className="relative col-span-1 row-span-1">
          <Image
            src={a.link}
            alt="이미지"
            fill
            sizes="(min-width:1024px) 25vw, 50vw"
            className="object-cover"
            priority={false}
          />
        </div>
        <div className="relative col-span-1 row-span-1">
          <Image
            src={b.link}
            alt="이미지"
            fill
            sizes="(min-width:1024px) 25vw, 50vw"
            className="object-cover"
            priority={false}
          />
        </div>

        <div className="relative">
          <Image
            src={c.link}
            alt="이미지"
            fill
            sizes="(min-width:1024px) 25vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="relative">
          <Image
            src={d.link}
            alt="이미지"
            fill
            sizes="(min-width:1024px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
      </Link>
    );
  }
}
