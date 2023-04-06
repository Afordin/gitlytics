import React from "react";
import { ArrowIcon } from "../assets/icons/ArrowIcon";

function Menu() {
  return (
    <ul className="flex items-center justify-center gap-8 text-[#EDEDED] text-lg font-medium mx-5">
      <li className="flex items-center justify-center gap-1">
        Docs
        <ArrowIcon width={16} height={16} />
      </li>
      <li>Design</li>
      <li>Account</li>
      <li className="flex items-center justify-center gap-1">
        About
        <ArrowIcon width={16} height={16} />
      </li>
      <li className="flex items-center justify-center gap-1">
        Resources
        <ArrowIcon width={16} height={16} />
      </li>
    </ul>
  );
}

export { Menu };
