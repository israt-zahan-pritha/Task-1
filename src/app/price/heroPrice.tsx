"use client";

import Image from "next/image";

export default function HeroPrice() {
  return (
    <section className="bg-[#E8F2EE] dark:bg-white">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between mt-24 px-6 pt-20">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <p className="mt-4 text-primary text-xl font-medium dark:text-black">
            Compare Cards
          </p>
          <h1 className="text-4xl md:text-[80px] font-medium leading-tight md:leading-[80px] text-primary dark:text-black">
            The ideal <br />
            card for you
          </h1>
        </div>

        {/* Right Section - Bank Cards */}
        <div className="mt-8 md:mt-0">
          <Image
            src="/images/cards4.png"
            alt="Banking Card"
            width={512}
            height={575}
            className="object-contain w-full max-w-[512px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
