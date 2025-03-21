import Image from "next/image";

export default function PamentSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-[#5AB09D] px-6 md:px-12 lg:px-20 py-16 rounded-lg max-w-[1200px] mx-auto">
      {/* Left Side Content */}
      <div className="max-w-lg text-white">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
          One app. <br /> One banking.
        </h2>
        <p className="text-lg md:text-xl font-normal mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>

        {/* Features List */}
        <div className="grid grid-cols-2 gap-4 mt-6 text-lg">
          {[
            "Instant transactions",
            "Payments worldwide",
            "Saving accounts",
            "100% mobile banking",
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Image
                src="/images/badge.png"
                alt="Check"
                width={24}
                height={24}
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* App Store & Google Play Buttons */}
        <div className="flex gap-4 mt-8">
          <Image
            src="/images/Google1.png"
            alt="App Store"
            width={160}
            height={50}
            className="cursor-pointer"
          />
          <Image
            src="/images/Google2.png"
            alt="Google Play"
            width={160}
            height={50}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Right Side Image */}
      <div className="mt-10 lg:mt-0">
        <Image
          src="/images/app4.png"
          alt="Banking App"
          width={400}
          height={400}
          className="w-full max-w-[400px]"
        />
      </div>
    </section>
  );
}
