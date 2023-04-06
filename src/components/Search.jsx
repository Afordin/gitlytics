import React from "react";
import { SearchIcon } from "../assets/icons/SearchIcon";

function Search() {
  return (
    <search className="relative md:w-fit w-[70%] flex gap-5 md:border-l-[1px] border-[#C8C8C8] md:pl-5 md:ml-10 md:bg-transparent py-1 px-3 bg-[#2B2B2B] md:rounded-none rounded-lg">
      <SearchIcon
        width={24}
        height={24}
        className="md:relative absolute right-3 text-[#909090]"
      />
      <input
        placeholder="Search"
        className="bg-transparent outline-none placeholder:text-[#888888] text-[#F3F3F3]"
      />
      <button className="absolute my-auto right-10 rounded-md border-[1px] py-1 px-2 text-xs text-[#C8C8C8] border-[#4A4A4A] hidden md:block">
        Crtl K
      </button>
    </search>
  );
}

export { Search };
