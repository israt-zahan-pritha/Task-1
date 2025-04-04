import Image from "next/image";

interface TransactionsProps {
  title: string;
  heading: string;
  description: string;
  points?: string[];
  image: string;
}

export default function Transactions({
  title,
  heading,
  description,
  points = [],
  image,
}: TransactionsProps) {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 max-w-[1200px] mx-auto px-6 md:pt-20">
      {/* Left Content */}
      <div className="max-w-lg">
        <h4 className="text-primary text-xl font-medium pb-4">{title}</h4>
        <h2 className="text-4xl  md:text-[64px] font-medium text-primary leading-none pb-6">
          {heading}
        </h2>
        <p className="text-base md:text-lg font-medium text-primary leading-relaxed">
          {description}
        </p>

        {/* Updated Points List */}
        <ul className="mt-10 space-y-4">
          {points.map((point, index) => (
            <li key={index} className="flex items-center space-x-3">
              <Image
                src="/images/badge3.png"
                alt="Check Icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-primary text-lg md:text-lg font-medium">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content (Dynamic Image Section) */}
      <div className="relative w-[380px] h-auto">
        <Image
          src={image}
          alt={title}
          width={380}
          height={800}
          className="rounded-2xl object-contain"
        />
      </div>
    </section>
  );
}
