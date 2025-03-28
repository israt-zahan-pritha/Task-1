"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function BankingHero() {
  return (
    <section className="bg-[#E8F2EE] md:mt-20 py-32  dark:bg-white px-6 ">
      <div className="max-w-[1200px]  mx-auto  flex flex-col lg:flex-row items-center justify-between gap-10 transition-all">
        {/* Left Section */}
        <div className="text-start md:text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[100px] font-medium text-primary dark:text-black">
            Banking <br /> starts here.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium my-6 text-primary dark:text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br />
            elit, sed do eiusmod tempor incididunt ut labore.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-lg md:text-lg font-medium my-12">
            {[
              "Instant transactions",
              "Payments worldwide",
              "Saving accounts",
              "100% mobile banking",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image
                  src="/images/badge4.png"
                  alt="Check"
                  width={24}
                  height={24}
                />
                <span className="text-gray-800 dark:text-black">{feature}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-16 flex flex-col md:flex-row items-start md:items-center sm:space-x-4 space-y-4 sm:space-y-0">
            <Button className="bg-[#5BB5A2] px-6 py-6 hover:bg-black text-lg font-medium text-white">
              Open Account
            </Button>
            <button className="text-[#5BB5A2] text-lg font-medium hover:underline">
              Compare Cards →
            </button>
          </div>
        </div>

        {/* Right Section - Bank Cards */}
        <div className="mt-8 lg:mt-0">
          <Image
            src="/images/cards13.png"
            alt="Banking Card"
            width={400}
            height={580}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
