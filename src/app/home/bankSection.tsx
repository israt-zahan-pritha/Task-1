import Image from "next/image";

export default function BankSection() {
  return (
    <section className="flex flex-col items-center px-6 mt-10 border-t border-gray-300">
      {/* Text section */}
      <div className="text-black dark:text-white pt-40 pb-20 max-w-[1200px] text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl  font-medium">
          All in one card. Really?
        </h1>
        <p className="text-lg md:text-xl font-medium mt-6 md:mt-7 ">
          Senectus et netus et malesuada fames ac turpis.
          <br /> Sagittis vitae et leo duis ut diam
        </p>
      </div>

      {/* 2 Image Section */}
      <div className="flex flex-wrap justify-center gap-8">
        <Image
          src="/images/card5.png"
          alt="Card 5"
          width={584}
          height={500}
          className="w-full max-w-[500px] object-contain"
        />
        <Image
          src="/images/card6.png"
          alt="Card 6"
          width={584}
          height={500}
          className="w-full max-w-[500px] object-contain"
        />
      </div>

      {/* 3 Image Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-16">
        <Image
          src="/images/card7.png"
          alt="Card 7"
          width={380}
          height={550}
          className="w-full max-w-[350px] object-contain"
        />
        <Image
          src="/images/card8.png"
          alt="Card 8"
          width={380}
          height={550}
          className="w-full max-w-[350px] object-contain"
        />
        <Image
          src="/images/card9.png"
          alt="Card 9"
          width={380}
          height={550}
          className="w-full max-w-[350px] object-contain"
        />
      </div>
    </section>
  );
}
