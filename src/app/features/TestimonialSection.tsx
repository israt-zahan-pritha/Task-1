"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Cody Fisher",
    role: "Medical Assistant",
    text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.",
    title: "Sunt qui esse pariatur duis deserunt mollit",
  },
  {
    name: "Jenny Wilson",
    role: "Nursing Assistant",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    title: "At lectus urna duis convallis tellus",
  },
  {
    name: "Guy Hawkins",
    role: "President of Sales",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur.",
    title: "Elit aute irure tempor cupidatat incididunt",
  },
  {
    name: "Darlene Robertson",
    role: "Dog Trainer",
    text: "Etiam accumsan porta neque in viverra. Proin eleifend, eros in tristique hendrerit.",
    title: "Donec et fringilla neque",
  },
  {
    name: "Dianne Russell",
    role: "Medical Assistant",
    text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.",
    title: "Etiam accumsan porta neque eros",
  },
  {
    name: "Dianne Russell",
    role: "Medical Assistant",
    text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.",
    title: "Etiam accumsan porta neque eros",
  },
];

export default function TestimonialSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16 md:px-0">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center pb-12">
        <div>
          <h4 className="text-2xl text-primary dark:text-white font-medium">
            Testimonials
          </h4>
          <h2 className="text-[48px] md:text-[64px] font-medium text-primary dark:text-white leading-tight">
            People all over the <br /> world use banko.
          </h2>
        </div>
        <div className="flex items-center gap-3 mt-6 md:mt-0">
          <Image src="/images/star.png" alt="Star" width={40} height={40} />
          <p className="text-primary dark:text-white text-lg">
            Rated <span className="text-[#5BB5A2] font-semibold">4.8/5</span>{" "}
            from over <span className="font-semibold">1000 users</span>
          </p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <Image
              src="/images/rating.png"
              alt="Rating"
              width={100}
              height={20}
              className="mb-2"
            />
            <h3 className="text-[24px] md:text-[28px] font-medium text-primary dark:text-white">
              {item.title}
            </h3>
            <p className="text-primary dark:text-gray-300 font-medium text-base mt-2">
              {item.text}
            </p>
            <p className="mt-4 font-medium text-lg text-primary dark:text-white">
              {item.name}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
