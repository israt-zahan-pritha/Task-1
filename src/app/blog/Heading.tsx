const categories = ["All", "Product", "Technology", "App"];

export default function Heading() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
      <div>
        <h2 className="text-center font-medium text-5xl md:text-6xl lg:text-8xl py-4 md:py-16 lg:py-24">
          Blog
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
        <h3 className="text-lg md:text-xl font-semibold">Categories</h3>
        <div className="flex flex-wrap gap-3 py-6 md:py-10">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
