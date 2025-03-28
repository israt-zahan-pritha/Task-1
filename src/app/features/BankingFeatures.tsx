"use client";

import Image from "next/image";

const features = [
  { title: "Instant transactions", icon: "/images/badge6.png" },
  { title: "Saving accounts", icon: "/images/badge7.png" },
  { title: "Mobile banking", icon: "/images/badge8.png" },
  { title: "Advanced statistics", icon: "/images/badge9.png" },
  { title: "Virtual cards", icon: "/images/badge10.png" },
  { title: "Contactless payments", icon: "/images/badge6.png" },
];

export default function BankingFeatures() {
  return (
    <section className="max-w-[1200px] mx-auto flex flex-col  lg:flex-row  md:justify-between py-20 md:py-40 px-6 ">
      {/* Left Side - Feature List */}
      <div>
        <h1 className="text-[64px] md:text-[80px] font-medium text-primary dark:text-white leading-tight pb-12">
          One app. <br /> One banking.
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-4 sm:p-6 md:p-8 w-full p-4 md:w-[284px]  md:h-[264px] rounded-2xl  border border-gray-200 dark:border-gray-700 transition-transform transform hover:scale-105"
            >
              {/* Feature Icon */}
              <div className="w-12 h-12">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              {/* Feature Text */}
              <h3 className="text-lg md:text-xl font-medium text-primary dark:text-primary">
                {feature.title}
              </h3>
              <p className="text-base font-medium text-primary dark:text-primary">
                Odio euismod lacinia at quis. Amet purus gravida quis blandit
                turpis.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Mobile Banking Preview */}
      <div className="mt-12 lg:mt-0 flex justify-center">
        <Image
          src="/images/app.png"
          alt="Banking App"
          width={380}
          height={800}
          className="object-contain drop-shadow-lg"
        />
      </div>
    </section>
  );
}
