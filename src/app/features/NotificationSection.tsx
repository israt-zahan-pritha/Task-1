"use client";

import Image from "next/image";

const notifications = [
  {
    text1: "Banko.",
    text2: "Your payment of 49€ has been processed!",
    icon: "/images/B.png",
  },
  {
    text1: "Banko.",
    text2: "You got a new support message!",
    icon: "/images/B.png",
  },
  {
    text1: "Banko.",
    text2: "Your payment was declined!",
    icon: "/images/B.png",
  },
  {
    text1: "Banko.",
    text2: "Please verify your payment of 99€!",
    icon: "/images/B.png",
  },
  {
    text1: "Banko.",
    text2: "New account statistics are available!",
    icon: "/images/B.png",
  },
];

export default function NotificationSection() {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between my-20 md:my-40  px-6 ">
      {/* Left Section */}
      <div className="max-w-lg space-y-4 text-center md:text-left">
        <h4 className="text-xl text-primary dark:text-white font-medium">
          Notifications
        </h4>
        <h2 className="text-4xl md:text-[64px] font-medium text-primary dark:text-white leading-tight">
          Stay notified
        </h2>
        <p className="text-lg md:text-xl text-primary dark:text-gray-300 font-medium">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
          <br /> Velit officia consequat duis enim velit mollit.
        </p>
        <div className=" mt-8 space-y-3 text-base text-primary dark:text-white font-medium">
          {["Malesuada Ipsum", "Vestibulum", "Parturient Lorem"].map(
            (item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 justify-center md:justify-start"
              >
                <Image
                  src="/images/badge11.png"
                  alt="Badge"
                  width={26}
                  height={26}
                />
                <span>{item}</span>
              </div>
            )
          )}
        </div>
        <div className="text-[#5BB5A2] text-lg font-medium flex items-center gap-1 pt-6 cursor-pointer justify-center md:justify-start">
          <span>Compare Cards</span>
          <Image src="/images/arrow.png" alt="Arrow" width={20} height={20} />
        </div>
      </div>

      {/* Right Section - Notifications */}
      <div className="space-y-4 w-full max-w-md mt-10 md:mt-0">
        {notifications.map((notif, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-[#F8F8F8] p-4 rounded-lg "
          >
            {/* Image */}
            <div className="w-12 h-12">
              <Image
                src={notif.icon}
                alt="Banko"
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col w-full">
              <strong className="text-primary dark:text-black font-bold text-xl">
                {notif.text1}
              </strong>
              <p className="text-primary dark:text-black font-medium text-base">
                {notif.text2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
