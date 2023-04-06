import React from "react";
import { Logo } from "./Logo";
import { Search } from "./Search";
import { Menu } from "./Menu";
import { AdditionalOptions } from "./AdditionalOptions";

function Navbar() {
  return (
    <nav className="flex justify-between px-16 py-8 items-center bg-[#212121] border-b-[1px] border-[#373737]">
      <Logo />
      <Search />
      <Menu />
      <AdditionalOptions />
    </nav>
  );
}

export { Navbar };
