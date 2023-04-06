import React from "react";
import { ArrowIcon } from "../assets/icons/ArrowIcon";
import { UserIcon } from "../assets/icons/UserIcon";

function Menu() {
  return (
    <ul className="hidden md:flex items-center justify-center gap-8 text-[#EDEDED] text-lg font-medium mx-5">
      <li className="hidden md:flex items-center justify-center gap-1">
        Docs
        <ArrowIcon width={16} height={16} />
      </li>
      <li className="lg:flex hidden items-center justify-center gap-1">
        Resources
        <ArrowIcon width={16} height={16} />
      </li>
      <li className="lg:flex hidden items-center justify-center gap-1">
        About
        <ArrowIcon width={16} height={16} />
      </li>
      <li className="xl:block hidden">Design</li>
      <li className="xl:block hidden">Account</li>
      <UserIcon className="xl:hidden md:block hidden" width={32} height={32} />
    </ul>
  );
}

export { Menu };
