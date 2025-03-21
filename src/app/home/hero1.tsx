import Hero from "@/components/layout/Hero";

export default function Hero1() {
  return (
    <section className="pt-40 pb-0 bg-[#e8f2ee] dark:bg-white flex flex-col items-center">
      {/* Hero Section */}
      <Hero
        title="All in one card."
        subtitle="Senectus et netus et malesuada fames ac turpis.<br/>Sagittis vitae et leo duis ut diam."
      />

      {/* Buttons */}
      <div className="mt-6 flex justify-center gap-6">
        <button className="bg-[#5bb89f] text-white px-6 py-3 rounded-md font-medium">
          Open Account
        </button>
        <button className="text-[#5bb89f] flex items-center gap-1">
          Compare Cards →
        </button>
      </div>
    </section>
  );
}
