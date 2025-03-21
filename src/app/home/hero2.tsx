import Image from "next/image";

export default function hero2() {
  return (
    <div className="flex justify-center items-center pt-40 px-6 bg-[#e8f2ee] dark:bg-white">
      <Image
        src="/images/cards.png"
        alt="Cards Preview"
        width={1600}
        height={550}
        className="max-w-full object-contain"
      />
    </div>
  );
}
