"use client";

import Image from "next/image";

export default function IntegrationSection() {
  const features = [
    "Secure and encrypted integration",
    "Fully API interface",
    "Payments worldwide",
  ];

  return (
    <section className="max-w-[1200px] flex flex-col mx-auto mb-40 px-6 ">
      {/* Grid Image */}
      <div className="flex justify-start">
        <Image
          src="/images/grid3.png"
          alt="Integration Grid"
          width={723}
          height={136}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between md:flex-row gap-10 pt-16">
        {/* Left Section */}
        <div className="max-w-lg space-y-4 text-center md:text-left">
          <h4 className="text-xl text-primary dark:text-white font-medium">
            Tools
          </h4>
          <h2 className="text-4xl md:text-6xl font-medium text-primary dark:text-white leading-tight">
            Seamless integration
          </h2>
          <p className="text-lg md:text-xl text-primary dark:text-gray-300 font-medium">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>

        {/* Right Section - Features */}
        <div className="space-y-4 flex flex-col md:pt-32 items-start">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Image
                src="/images/badge11.png"
                alt="Check"
                width={40}
                height={40}
              />
              <span className="text-lg md:text-xl text-primary dark:text-white font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
