import Image from "next/image";

export default function SupportBanner() {
  return (
    <div className="bg-[#5BB5A2] dark:bg-[#4aa892] p-8 rounded-lg flex flex-col md:flex-row items-center justify-between text-white dark:text-gray-100 max-w-[1200px] mx-auto my-16 gap-6 md:gap-16">
      {/* Left Section */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl md:text-[28px] font-semibold">
          Still have questions?
        </h2>
        <p className="text-lg">We are here to help.</p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-16">
        <div className="flex items-center gap-4">
          <Image src="/images/badge1.png" alt="Phone" width={40} height={40} />
          <div>
            <p className="text-lg font-medium">+49 176 123 456</p>
            <p className="text-sm">Support Hotline</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Image src="/images/badge2.png" alt="Email" width={40} height={40} />
          <div>
            <p className="text-lg font-medium">help@bank.com</p>
            <p className="text-sm">Support Email</p>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button className="bg-black hover:bg-gray-800 transition px-6 py-3 rounded-lg shadow-lg text-lg">
        Chat with us
      </button>
    </div>
  );
}
