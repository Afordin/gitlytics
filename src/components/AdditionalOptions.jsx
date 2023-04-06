import React, { useState } from "react";
import { LanguageIcon } from "../assets/icons/LanguageIcon";
import { ToggleSwitch } from "./ToggleSwitch";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { TwitterIcon } from "../assets/icons/TwitterIcon";
import { DiscordIcon } from "../assets/icons/DiscordIcon";
import { MobileMenuIcon } from "../assets/icons/MobileMenuIcon";

function AdditionalOptions() {
  const [active, setActive] = useState(true);
  function handleActive() {
    setActive((prev) => !prev);
  }
  return (
    <>
      <div className="items-center justify-center gap-8 md:flex hidden">
        <div className="px-2 border-x-[1px] border-[#C8C8C8]">
          <LanguageIcon width={24} height={24} className="text-[#F3F3F3]" />
        </div>
        <ToggleSwitch handleClick={handleActive} active={active} />
        <div className="xl:flex gap-5 hidden">
          <GithubIcon width={24} height={24} className="fill-[#C8C8C8]" />
          <TwitterIcon
            width={24}
            height={24}
            className="text-[#C8C8C8] fill-[#C8C8C8]"
          />
          <DiscordIcon
            width={24}
            height={24}
            className="text-[#C8C8C8] fill-[#C8C8C8]"
          />
        </div>
      </div>
      <div className="block md:hidden">
        <MobileMenuIcon width={24} height={24} className="text-[#F3F3F3]" />
      </div>
    </>
  );
}

export { AdditionalOptions };
