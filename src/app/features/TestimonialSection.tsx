"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    title: "Sunt qui esse pariatur duis deserunt mollit",
    content:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
    author: "Cody Fisher",
    position: "Medical Assistant",
  },

  {
    title: "Elit aute irure tempor cupidatat incididunt",
    content:
      "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Est aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
    author: "Guy Hawkins",
    position: "President of Sales",
  },
  {
    title: "At lectus urna duis convallis tellus",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut accumsan sit amet nulla facilisi morbi. <br /><br /> In nibh mauris cursus mattis. At lectus urna duis convallisconvallis tellus. Enim blandit volutpat maecenas volutpat.",
    author: "Jenny Wilson",
    position: "Nursing Assistant",
  },
  {
    title: "Sunt qui esse pariatur duis deserunt mollit",
    content:
      "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Est aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
    author: "Cody Fisher",
    position: "Medical Assistant",
  },
  {
    title: "Donec et fringilla neque",
    content:
      "Etiam accumsan porta neque in viverra. Proin eleifend, eros in tristique hendrerit, nisl purus cursus sapien, id ultricies nunc tellus a ipsum. Donec et fringilla neque. Aenean consequat purus quis lectus maximus fermentum.",
    author: "Darlene Robertson",
    position: "Dog Trainer",
  },
  {
    title: "Etiam accumsan porta neque eros",
    content:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
    author: "Dianne Russell",
    position: "Medical Assistant",
  },
];

export default function TestimonialSection() {
  return (
    <section className="flex flex-col max-w-[1200px] mx-auto px-6 pb-40 ">
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

      <div className=" testimonial-column ">
        {testimonials.map((testimonial, index) => (
          <div
            className="flex flex-col items-start justify-center p-8 bg-white rounded-xl border border-gray-100  shadow-sm hover:shadow-md transition-shadow mb-8 testimonial-card"
            key={index}
          >
            <div className="flex items-center gap-1 mb-2">
              <span>
                <FaStar size={20} className="text-[#5BB5A2]" />
              </span>
              <span>
                <FaStar size={20} className="text-[#5BB5A2]" />
              </span>
              <span>
                <FaStar size={20} className="text-[#5BB5A2]" />
              </span>
              <span>
                <FaStar size={20} className="text-[#5BB5A2]" />
              </span>
              <span>
                <FaStar size={20} className="text-[#5BB5A2]" />
              </span>
            </div>
            <h4 className="text-24px md:text-[28px] mb-4 text-[#1A191E] font-medium">
              {testimonial.title}
            </h4>
            <p className="text-[16px] mb-6 font-medium dark:text-black">
              {testimonial.content}
            </p>
            <div>
              <p className="paragraph dark:text-black">{testimonial.author}</p>
              <p className="text-[14px] text-[#1A191E80] font-medium">
                {testimonial.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
