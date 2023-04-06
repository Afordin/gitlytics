import Image from "next/image";
import React from "react";

function SearchUser() {
  return (
    <main className="w-full flex flex-col items-center justify-center gap-10 mb-20">
      <h1 className="md:text-6xl text-4xl text-center text-[#F3F3F3] font-bold">
        Analyze your Github Profile!
      </h1>
      {/* <Image
        src="/temporal.jpg"
        className="w-[250px] rounded-full"
        width={500}
        height={500}
        alt="temporal"
      /> */}
      <search className="bg-[#2B2B2B] flex items-center justify-center xl:w-2/5 lg:w-3/5 md:w-3/5 w-[90%] py-2 px-2 rounded-md">
        <input
          className="bg-transparent text-[#F3F3F3] w-full outline-none text-3xl px-3"
          placeholder="Octocat"
        />
        <button className="flex items-center hover:bg-[#F3F3F3] justify-center gap-3 border-[1px] border-[#F3F3F3] py-2 px-4 rounded-md font-semibold hover:text-[#0A0A0A] text-[#F3F3F3] group/play transition-colors">
          Search
        </button>
      </search>
    </main>
  );
}

export { SearchUser };
