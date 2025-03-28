import Hero from "@/components/layout/Hero";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-32 md:pt-56 pb-0 bg-[#e8f2ee] dark:bg-white flex flex-col items-center">
      {/* Hero Section */}
      <Hero
        title="All in one card."
        subtitle="Senectus et netus et malesuada fames ac turpis.<br/>Sagittis vitae et leo duis ut diam."
      />

      {/* Buttons */}
      <div className="mt-6 flex justify-center gap-6">
        <button className="bg-[#5bb89f] text-lg font-medium text-white px-6 py-3 rounded-md ">
          Open Account
        </button>
        <button className="text-[#5bb89f] text-lg font-medium flex items-center gap-1">
          Compare Cards →
        </button>
      </div>
      <div className="relative w-screen h-auto pt-10 md:pt-40 bg-[#e8f2ee] dark:bg-white overflow-hidden flex justify-center items-center">
        <Image
          src="/images/cards.png"
          alt="Cards Preview"
          layout="intrinsic"
          width={1920}
          height={1080}
          className="max-w-full max-h-full object-cover"
        />
      </div>
    </section>
  );
}
