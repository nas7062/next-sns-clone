"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter, useSearchParams } from "next/navigation";
export default function SearchFilter() {
  const searchParmas = useSearchParams();
  const router = useRouter();
  const onChangeFollow = () => {
    let url = `/search?q=${searchParmas.get("q")}&pf=on`;
    if (searchParmas.get("f")) {
      url += `$f=${searchParmas.get("f")}`;
    }
    router.replace(url);
  };

  const onChangeAll = () => {
    let url = `/search?q=${searchParmas.get("q")}`;
    if (searchParmas.get("f")) {
      url += `$f=${searchParmas.get("f")}`;
    }
    router.replace(url);
  };
  return (
    <div className="mt-4 space-y-4">
      <h2 className="text-2xl font-semibold ml-2  ">검색필터</h2>
      <div className="ml-4 space-y-1">
        <h3 className="text-lg font-semibold">사용자</h3>
        <RadioGroup defaultValue="option-one" className="w-[90%]">
          <div
            className="flex items-center justify-between space-x-2"
            onClick={onChangeAll}
          >
            <Label htmlFor="option-one">모든 사용자</Label>
            <RadioGroupItem value="option-one" id="option-one" />
          </div>
          <div
            className="flex items-center space-x-2 justify-between"
            onClick={onChangeFollow}
          >
            <Label htmlFor="option-two">내가 팔로우하는 사람들</Label>
            <RadioGroupItem value="option-two" id="option-two" />
          </div>
        </RadioGroup>
        <h3 className="text-lg font-semibold">위치</h3>
        <RadioGroup defaultValue="option-one" className="w-[90%]">
          <div className="flex items-center justify-between space-x-2 ">
            <Label htmlFor="option-one">어디에서나</Label>
            <RadioGroupItem value="option-one" id="option-one" />
          </div>
          <div className="flex items-center space-x-2 justify-between">
            <Label htmlFor="option-two">현 위치 주변</Label>
            <RadioGroupItem value="option-two" id="option-two" />
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
