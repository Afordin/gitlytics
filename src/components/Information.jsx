import React from "react";
import { MailIcon } from "../assets/icons/MailIcon";

function Information() {
  return (
    <section className="flex flex-col items-center justify-center border-t-[1px] border-[#373737]">
      <article className="flex items-start justify-between gap-2 w-2/3 py-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg text-[#F3F3F3] font-semibold uppercase">
            Resources
          </h1>
          <ul className="text-[#C6C6C6] flex flex-col gap-3">
            <li>Docs</li>
            <li>Design</li>
            <li>Guides</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg text-[#F3F3F3] font-semibold uppercase">
            Instructions
          </h1>
          <ul className="text-[#C6C6C6] flex flex-col gap-3">
            <li>How to use</li>
            <li>Project Forum</li>
            <li>Community</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg text-[#F3F3F3] font-semibold uppercase">
            About Gitlytics
          </h1>
          <ul className="text-[#C6C6C6] flex flex-col gap-3">
            <li>Home</li>
            <li>Github</li>
            <li>Twitter</li>
            <li>Releases</li>
          </ul>
        </div>
        <div className="flex flex-col justify-start items-start gap-3 h-full w-1/3">
          <h1 className="text-lg text-[#F3F3F3] font-semibold uppercase">
            Subscribe to our Newsletter
          </h1>
          <p className="text-[#999]">
            The lastest Gitlytics news, releases and resources, sent to your
            inbox.
          </p>
          <div className="flex gap-2">
            <div className="flex items-center justify-center gap-2 py-1 px-3 bg-[#323232] border-[1px] border-[#666] rounded-md">
              <MailIcon height={28} width={28} />
              <input
                placeholder="Enter your email"
                className="text-[#F3F3F3] placeholder:text-[#A1A1A1] bg-transparent outline-none w-[120px]"
              />
            </div>
            <button className="bg-[#3462f9] text-[#F3F3F3] rounded-md w-fit p-2">
              Notify me
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

export { Information };
