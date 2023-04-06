import React from "react";
import { Logo } from "./Logo";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center">
      <section className="flex flex-col items-start justify-center gap-2 w-2/3 border-t-[1px] border-[#373737] py-8">
        <Logo />
        <small className="text-[#C4C4C4] text-xs">
          Copyright © 2023 Gitlytics, Inc. All rights reserved.
        </small>
      </section>
    </footer>
  );
}

export { Footer };
