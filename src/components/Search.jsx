import React from "react";
import { SearchIcon } from "../assets/icons/SearchIcon";

function Search() {
  return (
    <search className="relative w-fit flex gap-5 border-l-[1px] border-[#C8C8C8] pl-5 ml-10">
      <SearchIcon width={24} height={24} className="text-[#909090]" />
      <input
        placeholder="Search"
        className="bg-transparent outline-none placeholder:text-[#888888] text-[#F3F3F3]"
      />
      <button className="absolute my-auto right-10 rounded-md border-[1px] py-1 px-2 text-xs text-[#C8C8C8] border-[#4A4A4A]">
        Crtl K
      </button>
    </search>
  );
}

export { Search };
