import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black  mx-auto  border-t border-gray-200 py-14 px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between mx-auto items-start max-w-custom">
        {/* Logo */}
        <div className="mb-8 md:mb-0">
          <Link href="/">
            <Image
              src="/images/banquee.png"
              alt="Banquee Logo"
              width={135}
              height={32}
              priority
            />
          </Link>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 md:gap-20 text-primary text-base w-full max-w-[800px] ">
          {[
            {
              title: "About",
              links: ["Features", "Pricing", "Support"],
            },
            {
              title: "Blog",
              links: ["Products", "Technology", "Crypto"],
            },
            {
              title: "Webflow",
              links: ["Styleguide", "Licensing", "Changelog"],
            },
            {
              title: "Social Media",
              links: ["Twitter", "Facebook", "Instagram"],
            },
          ].map((section, index) => (
            <div key={index}>
              <h3 className="font-medium text-lg text-primary dark:text-white">
                {section.title}
              </h3>
              <ul className="mt-2 space-y-3 font-light">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link href="#" className="hover:underline">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" max-w-custom mx-auto mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm text-center md:text-left">
        <p>
          © Made by{" "}
          <Link href="#" className="text-[#5BB5A2] hover:underline">
            Pawel Gola
          </Link>{" "}
          - Powered by{" "}
          <Link href="#" className="text-[#5BB5A2] hover:underline">
            Webflow
          </Link>
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link
            href="#"
            className="text-gray-500 dark:text-gray-500 font-normal hover:underline"
          >
            Impressum
          </Link>
          <Link
            href="#"
            className="text-gray-500 dark:text-gray-500 font-normal hover:underline"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
