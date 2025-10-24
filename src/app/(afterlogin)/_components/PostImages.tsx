import Link from "next/link";
import { PostProps } from "./PostArticle";
import Image from "next/image";

export default function PostImages({ post }: PostProps) {
  const imgs = (post?.Images ?? []).filter(
    (img) => typeof img?.Link === "string" && img.Link.length > 0
  );
  if (imgs.length === 0) return null;

  if (imgs.length === 1) {
    const a = imgs[0];
    return (
      <Link href={`/${post.User?.id}/status/${post.postId}/photo/${a.imageId}`}>
        <Image src={a.Link} alt="이미지" width={400} height={400} />
      </Link>
    );
  }

  if (imgs.length === 2) {
    const [a, b] = imgs;
    return (
      <Link
        className="flex gap-[2px]"
        href={`/${post.User?.id}/status/${post.postId}/photo/${a.imageId}`}
      >
        <Image
          src={a.Link}
          alt="이미지"
          width={400}
          height={400}
          className="flex-1 w-1/2 rounded-xl"
        />
        <Image
          src={b.Link}
          alt="이미지"
          width={400}
          height={400}
          className="flex-1 w-1/2 rounded-xl"
        />
      </Link>
    );
  }

  if (imgs.length === 3) {
    const [a, b, c] = imgs;
    return (
      <Link
        href={`/${post.User?.id}/status/${post.postId}/photo/${a.imageId}`}
        className="grid grid-cols-2 grid-rows-2 gap-[2px] rounded-xl overflow-hidden aspect-[4/3]"
      >
        <div className="relative col-span-1 row-span-2">
          <Image
            src={a.Link}
            alt="이미지"
            fill
            sizes="(min-width:1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src={b.Link}
            alt="이미지"
            fill
            sizes="(min-width:1024px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src={c.Link}
            alt="이미지"
            fill
            sizes="(min-width:1024px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
      </Link>
    );
  }

  if (imgs.length >= 4) {
    const [a, b, c, d] = imgs;
    return (
      <Link
        href={`/${post.User?.id}/status/${post.postId}/photo/${a.imageId}`}
        className="grid grid-cols-2 grid-rows-2 gap-[2px] rounded-xl overflow-hidden aspect-[4/3]"
      >
        <div className="relative">
          <Image
            src={a.Link}
            alt="이미지"
            fill
            sizes="(min-width:1024px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src={b.Link}
            alt="이미지"
            fill
            sizes="(min-width:1024px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src={c.Link}
            alt="이미지"
            fill
            sizes="(min-width:1024px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src={d.Link}
            alt="이미지"
            fill
            sizes="(min-width:1024px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
      </Link>
    );
  }

  return null;
}
