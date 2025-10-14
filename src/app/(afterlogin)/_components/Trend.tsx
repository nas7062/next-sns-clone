import Link from "next/link";

export default function Trend() {
  return (
    <Link href={`/search?q=트렌드`}>
      <div className="bg-gray-100  hover:bg-gray-200">
        <p className="text-gray-500 text-sm">실시간트렌드</p>
        <p className="font-semibold text-lg">name</p>
        <p className="text-sm text-gray-500">count:10012</p>
      </div>
    </Link>
  );
}
