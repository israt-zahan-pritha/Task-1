"use client";

import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <div className="text-center">
      <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px]  font-medium text-primary dark:text-black ">
        {title}
      </h2>
      <p className="text-primary dark:text-black text-lg md:text-xl font-medium mt-6 md:mt-7 leading-relaxed">
        {subtitle
          .replace(/<br\s*\/?>/g, "\n")
          .split("\n")
          .map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
      </p>
    </div>
  );
}
