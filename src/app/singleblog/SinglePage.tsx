import Image from "next/image";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function SinglePage() {
  return (
    <div className="flex flex-col max-w-[1000px] mx-auto items-center mt-24 pt-24 px-6 ">
      {/* Category Button */}
      <button className="bg-[#E8F2EE] text-[#5BB5A2]  px-[10px] py-1 rounded-sm">
        App
      </button>

      {/* Title */}
      <h2 className="text-4xl md:text-[64px] font-medium text-primary dark:text-white text-center leading-tight mt-6">
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
      <div className="mt-16">
        <Image
          src="/images/image6.png"
          alt="Banko Startup"
          width={1000}
          height={600}
          priority
          className="rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-[600px] text-left mt-16">
        <h2 className="text-3xl font-medium text-primary dark:text-white]">
          Et malesuada fames ac turpis
        </h2>
        <p className="text-primary dark:text-white] text-lg font-medium leading-relaxed mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
          blandit cursus risus at ultrices mi tempus imperdiet nulla. Odio morbi
          quis commodo odio. Et malesuada fames ac turpis egestas sed tempus
          urna. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci
          a. Fringilla ut morbi tincidunt augue interdum. Ultrices in iaculis
          nunc sed augue lacus viverra.
          <br />
          <br />
          Erat imperdiet sed euismod nisi porta. Morbi blandit cursus risus at
          ultrices mi tempus imperdiet nulla. Cras sed felis eget velit aliquet
          sagittis. Amet commodo nulla facilisi nullam vehicula ipsum a arcu
          cursus. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus
          at augue. Blandit aliquam etiam erat velit scelerisque in dictum. In
          hac habitasse platea dictumst vestibulum rhoncus. Molestie ac feugiat
          sed lectus vestibulum.
        </p>

        <h2 className="text-3xl font-medium text-primary dark:text-white] mt-10">
          Nascetur ridiculus mus
        </h2>
        <p className="text-primary dark:text-white] text-lg font-medium leading-relaxed mt-4">
          Sed vulputate odio ut enim blandit volutpat maecenas. Sagittis orci a
          scelerisque purus semper eget duis at. Porta lorem mollis aliquam ut
          porttitor leo a diam. In fermentum et sollicitudin ac orci phasellus
          egestas tellus. Mauris cursus mattis molestie a iaculis at erat
          pellentesque adipiscing. Nascetur ridiculus mus mauris vitae
          ultricies. Dui nunc mattis enim ut tellus. Duis convallis convallis
          tellus id interdum. Quis ipsum suspendisse ultrices gravida dictum
          fusce. Scelerisque mauris pellentesque pulvinar pellentesque.
          Tincidunt augue interdum velit euismod. Nibh tortor id aliquet lectus.
          Amet commodo nulla facilisi nullam. Vulputate ut pharetra sit amet
          aliquam id diam maecenas. Tellus pellentesque eu tincidunt tortor.
          Ultrices vitae auctor eu augue ut lectus arcu bibendum.
        </p>
      </div>

      {/* Share Article Section */}
      <p className="text-primary dark:text-white] text-lg font-medium text-center mt-16">
        Share article
      </p>
      <div className="flex space-x-4 mt-4">
        {[
          { icon: <FaTwitter />, link: "#" },
          { icon: <FaFacebookF />, link: "#" },
          { icon: <FaLinkedinIn />, link: "#" },
          { icon: <FaInstagram />, link: "#" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="p-3 bg-[#F8F8F8] text-primary dark:text-[#5BB5A2] rounded-full hover:bg-gray-200 transition"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="lg:w-[1400px] w-full border-t border-gray-200 my-40"></div>

      {/* Related Articles Section */}
      <div className="lg:w-[1200px] w-full px-6 flex flex-col sm:flex-row justify-between items-center sm:items-center mb-8">
        <h2 className="text-[40px] font-medium text-primary dark:text-white] text-center sm:text-left">
          Related Articles
        </h2>
        <a
          href="#"
          className="text-[#5BB5A2] text-lg flex items-center hover:underline "
        >
          All Articles <span className="ml-1">→</span>
        </a>
      </div>
    </div>
  );
}
