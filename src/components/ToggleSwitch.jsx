import React from "react";
import { MoonIcon } from "../assets/icons/MoonIcon";
import { SunIcon } from "../assets/icons/SunIcon";

function ToggleSwitch({ active, handleClick, disabled }) {
  return (
    <button
      className={`relative border-[1px] border-[#343434] flex items-center h-6 w-11 rounded-full transition-all duration-300 hover:cursor-pointer ${
        active ? "bg-[#2B2B2B]" : "bg-[#BBB]"
      } ${disabled && "opacity-50 cursor-default"}`}
      onClick={handleClick}
      disabled={disabled}
    >
      <span
        className={`absolute flex items-center justify-center w-5 h-5 transition-all bg-[#232323] ${
          active && "left-5"
        } rounded-full left-1 all`}
      >
        {active && <MoonIcon />}
        {!active && <SunIcon />}
      </span>
    </button>
  );
}

export { ToggleSwitch };
