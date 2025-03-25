import Image from "next/image";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function SinglePage() {
  return (
    <div className="flex flex-col items-center mt-10 md:mt-24 px-4 sm:px-8">
      {/* Category Button */}
      <button className="bg-[#E8F2EE] text-[#5BB5A2]  px-4 py-2 rounded-lg shadow-md">
        App
      </button>

      {/* Title */}
      <h2 className="text-4xl sm:text-6xl font-medium text-primary dark:text-white text-center leading-tight mt-6">
        How To Start Using Banko <br className="hidden sm:block" />
        For Your Startup
      </h2>

      {/* Description */}
      <p className="text-primary dark:text-white text-lg sm:text-xl font-medium text-center mt-4 max-w-2xl leading-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit
        amet nulla facilisi morbi.
      </p>

      {/* Featured Image */}
      <div className="mt-10">
        <Image
          src="/images/image6.png"
          alt="Banko Startup"
          width={1000}
          height={600}
          priority
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-5xl text-left mt-16">
        <h2 className="text-3xl font-medium text-primary dark:text-white]">
          Et malesuada fames ac turpis
        </h2>
        <p className="text-primary dark:text-white] text-lg font-medium leading-relaxed mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
          blandit cursus risus at ultrices mi tempus imperdiet nulla. Odio morbi
          quis commodo odio.
          <br />
          <br />
          Ultrices in iaculis nunc sed augue lacus viverra. Erat imperdiet sed
          euismod nisi porta. Morbi blandit cursus risus at ultrices mi tempus
          imperdiet nulla. Cras sed felis eget velit aliquet sagittis. Amet
          commodo nulla facilisi nullam vehicula ipsum a arcu cursus.
        </p>

        <h2 className="text-3xl font-medium text-primary dark:text-white] mt-10">
          Nascetur ridiculus mus
        </h2>
        <p className="text-primary dark:text-white] text-lg font-medium leading-relaxed mt-4">
          Sed vulputate odio ut enim blandit volutpat maecenas. Sagittis orci a
          scelerisque purus semper eget duis at. Porta lorem mollis aliquam ut
          porttitor leo a diam. In fermentum et sollicitudin ac orci phasellus
          egestas tellus.
        </p>
      </div>

      {/* Share Article Section */}
      <p className="text-primary dark:text-white] text-lg font-medium text-center mt-30">
        Share article
      </p>
      <div className="flex space-x-4 mt-4 mb-10">
        {[
          { icon: <FaTwitter />, link: "#" },
          { icon: <FaFacebookF />, link: "#" },
          { icon: <FaLinkedinIn />, link: "#" },
          { icon: <FaInstagram />, link: "#" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="p-3 bg-[#5BB5A2] text-primary rounded-full hover:bg-gray-200 transition"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="lg:w-[1400px] w-full border-t border-gray-200 my-12"></div>

      {/* Related Articles Section */}
      <div className="lg:w-[1400px] w-full flex flex-col sm:flex-row justify-between items-center sm:items-start">
        <h2 className="text-4xl font-semibold text-primary dark:text-white] text-center sm:text-left">
          Related Articles
        </h2>
        <a
          href="#"
          className="text-teal-500 text-lg flex items-center hover:underline mt-4 sm:mt-0"
        >
          All Articles <span className="ml-1">→</span>
        </a>
      </div>
    </div>
  );
}
