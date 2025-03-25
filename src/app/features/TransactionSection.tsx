"use client";

import Image from "next/image";

const transactions = [
  {
    name: "Apple",
    category: "Macbook",
    amount: "-999€",
    icon: "/images/apple.png",
  },
  {
    name: "Amazon",
    category: "Electronics",
    amount: "-49€",
    icon: "/images/apple.png",
  },
  {
    name: "Twitter",
    category: "Ads",
    amount: "-29€",
    icon: "/images/apple.png",
  },
  {
    name: "Microsoft",
    category: "Office Suite",
    amount: "-149€",
    icon: "/images/apple.png",
  },
  {
    name: "Dropbox",
    category: "Cloud",
    amount: "-14€",
    icon: "/images/apple.png",
  },
  {
    name: "Paypal",
    category: "Shopping",
    amount: "-200€",
    icon: "/images/apple.png",
  },
];

const benefits = ["Malesuada Ipsum", "Vestibulum", "Parturient Lorem"];

export default function TransactionSection() {
  return (
    <section className=" bg-[#E8F2EE] pt-20">
      <div className="max-w-[1200] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-0 ">
        {/* Left Side - Heading & Checklist */}
        <div>
          <h1 className="text-[48px] md:text-[64px] font-medium text-primary leading-tight dark:text-black">
            Send & receive <br /> money instantly
          </h1>
          <p className="text-primary font-medium text-lg md:text-xl dark:text-black mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>

          <ul className="mt-6 space-y-3 text-lg">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-gray-700 dark:text-black"
              >
                <Image
                  src="/images/badge4.png"
                  alt="Check Icon"
                  width={24}
                  height={24}
                />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Transaction List */}
        <div className="mt-12 lg:mt-0 w-full max-w-md">
          <div className="space-y-4">
            {transactions.map((transaction, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm transition-transform transform hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={transaction.icon}
                    alt={`${transaction.name} Logo`}
                    width={50}
                    height={50}
                    className="rounded-sm"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {transaction.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {transaction.category}
                    </p>
                  </div>
                </div>
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  {transaction.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
