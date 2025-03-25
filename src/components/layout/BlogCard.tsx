import Image from "next/image";

// Define the expected types for props
interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  categories: string[];
}

export default function BlogCard({
  image,
  title,
  description,
  categories,
}: BlogCardProps) {
  return (
    <div className="dark:bg-gray-900 w-full max-w-[380px] h-auto rounded-xl shadow-md overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={1600}
          height={300}
          className="md:h-[350px] lg:h-[380px] object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-xl md:text-2xl font-medium text-primary">
          {title}
        </h3>
        <p className="text-sm md:text-base text-primary mt-2">{description}</p>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((category, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-200 text-gray-800 text-xs md:text-sm rounded-md"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
