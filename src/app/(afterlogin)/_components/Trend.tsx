import { Hashtag } from "@/model/HashTag";
import Link from "next/link";

type Props = {
  trend: Hashtag;
};

export default function Trend({ trend }: Props) {
  return (
    <Link href={`/search?q=${trend.title}`}>
      <div className="bg-gray-100 ml-2 hover:bg-gray-200">
        <p className="text-gray-500 text-sm">실시간트렌드</p>
        <p className="font-semibold text-lg">{trend.title}</p>
        <p className="text-sm text-gray-500">{trend.count.toLocaleString()}</p>
      </div>
    </Link>
  );
}
