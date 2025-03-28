"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CardSection() {
  return (
    <div className="flex flex-col items-center text-center py-20 md:py-40 px-6 border-t border-gray-200 dark:border-gray-700 ">
      <h4 className="text-xl text-primary dark:text-white font-medium">
        Account
      </h4>
      <h2 className="text-5xl sm:text-6xl md:text-[80px] font-medium text-primary dark:text-white mt-2 leading-tight">
        Perfect card <br /> for your needs.
      </h2>
      <p className="text-lg sm:text-xl text-primary dark:text-gray-300 font-normal mt-8 mb-8">
        Senectus et netus et malesuada fames ac turpis.
        <br /> Sagittis vitae et leo duis ut diam.
      </p>

      {/* Card Image */}
      <div className="mt-6">
        <Image
          src="/images/cards3.png"
          alt="Cards"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Buttons */}
      <div className="mt-14 flex flex-col sm:flex-row gap-4">
        <Button className="bg-[#5BB5A2] hover:bg-black text-white px-6 py-6 text-lg">
          Open Account
        </Button>
        <Button className="bg-white dark:bg-black border border-gray-200 dark:border-gray-600 text-primary dark:text-white px-6 py-6 text-lg">
          Compare Cards
        </Button>
      </div>
    </div>
  );
}
