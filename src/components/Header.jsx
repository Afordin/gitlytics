import React from "react";
import { PlayIcon } from "../assets/icons/PlayIcon";
import { ArrowRightIcon } from "../assets/icons/ArrowRightIcon";
import { CloudIcon } from "../assets/icons/CloudIcon";

function Header() {
  return (
    <header className="w-full min-h-[calc(100vh-105px)] flex flex-col items-center justify-center text-center py-10">
      <h1 className="font-extrabold md:h-[300px] h-[200px] text-transparent md:text-9xl text-7xl bg-clip-text bg-gradient-to-b from-[#2A2A2A] via-[#F3F3F3] to-[#2A2A2A]">
        Github <br /> Analytics
      </h1>
      <p className="text-[#919191] font-bold text-xl">
        The fastest way to see your statistics and curious graphs of Github.
      </p>
      <div className="flex flex-col md:flex-row mt-10 gap-5">
        <button className="flex items-center hover:bg-[#F3F3F3] justify-center gap-3 border-[1px] border-[#F3F3F3] py-2 px-4 rounded-md font-semibold hover:text-[#0A0A0A] text-[#F3F3F3] group/play transition-colors">
          <div className="flex items-center justify-center group-hover/play:bg-[#0A0A0A] bg-[#F3F3F3] p-1 rounded-full transition-colors">
            <PlayIcon
              width={10}
              height={10}
              className="group-hover/play:text-[#F3F3F3] group-hover/play:fill-[#F3F3F3] text-[#0A0A0A] fill-[#0A0A0A] transition-colors"
            />
          </div>
          Why Gitlytics
        </button>
        <button className="flex items-center justify-center gap-3 border-[1px] border-[#F3F3F3] py-2 px-4 rounded-md font-semibold hover:bg-[#F3F3F3] hover:text-[#0A0A0A] text-[#F3F3F3] group/analytics transition-colors">
          Get Analytics
          <ArrowRightIcon
            width={10}
            height={10}
            className="group-hover/analytics:text-[#0A0A0A] text-[#F3F3F3] transition-colors"
          />
        </button>
        <button className="flex items-center justify-center gap-3 border-[1px] border-[#F3F3F3] py-2 px-4 rounded-md font-semibold hover:bg-[#F3F3F3] hover:text-[#0A0A0A] text-[#F3F3F3] group/favorite transition-colors">
          Favorite
          <CloudIcon
            width={20}
            height={20}
            className="group-hover/favorite:text-[#0A0A0A] text-[#F3F3F3]"
          />
        </button>
      </div>
    </header>
  );
}

export { Header };
