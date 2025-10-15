"use client";

import { usePathname } from "next/navigation";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
export default function SearchFilter() {
  const pathname = usePathname();

  if (pathname === "/search")
    return (
      <div className="mt-4 space-y-4">
        <h2 className="text-2xl font-semibold">검색필터</h2>
        <div className="ml-4 space-y-1">
          <h3 className="text-lg font-semibold">사용자</h3>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <Label htmlFor="option-one">Option One</Label>
              <RadioGroupItem value="option-one" id="option-one" />
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="option-two">Option Two</Label>
              <RadioGroupItem value="option-two" id="option-two" />
            </div>
          </RadioGroup>
          <h3 className="text-lg font-semibold">위치</h3>
          <div className="flex justify-between w-[90%]">
            <label htmlFor="">어디에서나</label>
            <input type="radio" />
          </div>
          <div className="flex justify-between w-[90%]">
            <label htmlFor="">현 위치 주변</label>
            <input type="radio" />
          </div>
        </div>
      </div>
    );
}
