"use client";

import { Search } from "lucide-react";
import Form from "next/form";

type SearchProps = {
  q?: string;
  pf?: string;
  f?: string;
};

export default function SearchInput({ q, pf, f }: SearchProps) {
  return (
    <Form action="/search" className="flex items-center mt-4">
      <Search scale={8} className="cursor-pointer z-10 ml-0.5" />
      <input
        type="search"
        name="q"
        defaultValue={q}
        className="w-[350px] h-10 border-gray-800 pl-6 border rounded-lg fixed"
      />
      <input
        type="hidden"
        name="pf"
        defaultValue={pf}
        className="w-[350px] h-10 border-gray-800 pl-6 border rounded-lg fixed"
      />
      <input
        type="hidden"
        name="f"
        defaultValue={f}
        className="w-[350px] h-10 border-gray-800 pl-6 border rounded-lg fixed"
      />
    </Form>
  );
}
