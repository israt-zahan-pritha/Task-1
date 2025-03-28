import Image from "next/image";

export default function PriceSection() {
  return (
    <section className="flex flex-col px-6 py-32">
      <div className="flex flex-col  items-center justify-center">
        <p className="text-lg md:text-xl font-medium mt-6 md:mt-7 ">Accounts</p>
        <h1 className="text-5xl sm:text-6xl md:text-[64px]  text-center  font-medium">
          Choose your card.
        </h1>

        <p className="text-xl pt-4 font-medium text-center max-w-[800px]">
          Senectus et netus et malesuada fames ac turpis.
          <br /> Sagittis vitae et leo duis ut diam.
        </p>
      </div>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3  mt-16 max-w-[1200px] mx-auto w-full">
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
          <div key={index} className="text-center p-6 ">
            <h3 className="text-xl font-medium flex items-center justify-center gap-2">
              {name}
              {badge && (
                <span className="text-sm bg-green-100 text-[#5BB5A2] px-2 py-1 rounded-full">
                  {badge}
                </span>
              )}
            </h3>
            <h2 className="text-[40px] font-bold mt-2">
              {price}{" "}
              {period && (
                <span className="text-base text-[#1A191E80] font-medium dark:text-white">
                  {period}
                </span>
              )}
            </h2>
            <p className="text-[#1A191E80] mt-2 dark:text-white">
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            </p>
            <Image
              src={image}
              alt={`${name} Card`}
              width={355}
              height={215}
              className=" mt-4 mx-auto"
            />
            <button
              className="bg-[#5BB5A2] text-white px-6 py-3 mt-4 rounded-md  w-full max-w-[355px] mx-auto transition"
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
