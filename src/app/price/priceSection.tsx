import Image from "next/image";

export default function PriceSection() {
  return (
    <section className="flex flex-col items-center justify-center pt-20 px-6">
      {/* Pricing Plans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 md:mt-16 max-w-[1400px] w-full">
        {/* Pricing Card Component */}
        {[
          {
            name: "Basic",
            price: "Free",
            image: "/images/card10.png",
            badge: "Popular",
          },
          {
            name: "Premium",
            price: "$5",
            image: "/images/card11.png",
            period: "per month",
          },
          {
            name: "Gold",
            price: "$10",
            image: "/images/card12.png",
            period: "per month",
          },
        ].map(({ name, price, image, badge, period }, index) => (
          <div key={index} className="text-center p-6 rounded-lg">
            <h3 className="text-xl md:text-2xl font-medium flex items-center justify-center gap-2">
              {name}
              {badge && (
                <span className="text-sm bg-green-100 text-[#5BB5A2] px-2 py-1 rounded-full">
                  {badge}
                </span>
              )}
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              {price}{" "}
              {period && (
                <span className="text-base text-gray-500 font-medium">
                  {period}
                </span>
              )}
            </h2>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            </p>
            <Image
              src={image}
              alt={`${name} Card`}
              width={355}
              height={215}
              className="mt-4 mx-auto"
              priority
            />
            <button
              className="bg-[#5BB5A2] max-w-[355px] text-white px-6 py-3 mt-4 rounded-md w-full hover:bg-[#4aa892] transition"
              aria-label={`Get started with ${name} plan`}
            >
              Get started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
