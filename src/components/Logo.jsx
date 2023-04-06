import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div className="flex items-center justify-center gap-2 text-[#EDEDED] font-extrabold text-2xl">
      <Image
        src="/logo.png"
        width={500}
        height={500}
        className="w-10 h-10"
        alt="logo"
      />
      <h1>Gitlytics</h1>
    </div>
  );
}

export { Logo };
