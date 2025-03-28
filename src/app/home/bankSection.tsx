// import Image from "next/image";

// export default function BankSection() {
//   return (
//     <section className="flex flex-col items-center px-6 mt-10 border-t border-gray-300">
//       {/* Text section */}
//       <div className="text-black dark:text-white pt-40 pb-20 max-w-[1200px] text-center">
//         <h1 className="text-5xl md:text-[64px]  font-medium">
//           All in one card. Really?
//         </h1>
//         <p className="text-lg md:text-xl font-medium mt-6 md:mt-7 ">
//           Senectus et netus et malesuada fames ac turpis.
//           <br /> Sagittis vitae et leo duis ut diam
//         </p>
//       </div>

//       {/* 2 Image Section */}
//       <div className=" flex flex-wrap justify-between gap-4">
//         <Image
//           src="/images/card5.png"
//           alt="Card 5"
//           width={584}
//           height={500}
//           className="object-contain"
//         />
//         <Image
//           src="/images/card6.png"
//           alt="Card 6"
//           width={584}
//           height={500}
//           className="object-contain"
//         />
//       </div>

//       {/* 3 Image Section */}
//       <div className=" flex flex-wrap justify-between gap-4 mt-16">
//         <Image
//           src="/images/card7.png"
//           alt="Card 7"
//           width={380}
//           height={550}
//           className=" object-contain"
//         />
//         <Image
//           src="/images/card8.png"
//           alt="Card 8"
//           width={380}
//           height={550}
//           className=" object-contain"
//         />
//         <Image
//           src="/images/card9.png"
//           alt="Card 9"
//           width={380}
//           height={550}
//           className=" object-contain"
//         />
//       </div>
//     </section>
//   );
// }
import Image from "next/image";

export default function BankSection() {
  return (
    <section className="flex flex-col items-center px-6 mt-10 border-t border-gray-300">
      {/* Text section */}
      <div className="text-black dark:text-white pt-40 pb-20 max-w-[1200px] text-center">
        <h1 className="text-4xl md:text-[64px] font-medium leading-tight">
          All in one card. Really?
        </h1>
        <p className="text-lg md:text-xl font-medium mt-6 md:mt-7">
          Senectus et netus et malesuada fames ac turpis.
          <br /> Sagittis vitae et leo duis ut diam
        </p>
      </div>

      {/* 2 Image Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <Image
          src="/images/card5.png"
          alt="Card 5"
          width={584}
          height={500}
          className="w-full md:w-[48%] object-contain"
        />
        <Image
          src="/images/card6.png"
          alt="Card 6"
          width={584}
          height={500}
          className="w-full md:w-[48%] object-contain"
        />
      </div>

      {/* 3 Image Section */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-4 mt-16">
        <Image
          src="/images/card7.png"
          alt="Card 7"
          width={380}
          height={550}
          className="w-full sm:w-[30%] object-contain"
        />
        <Image
          src="/images/card8.png"
          alt="Card 8"
          width={380}
          height={550}
          className="w-full sm:w-[30%] object-contain"
        />
        <Image
          src="/images/card9.png"
          alt="Card 9"
          width={380}
          height={550}
          className="w-full sm:w-[30%] object-contain"
        />
      </div>
    </section>
  );
}
