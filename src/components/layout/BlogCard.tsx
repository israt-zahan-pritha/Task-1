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
    <div className="max-w-[1222px] mx-auto mb-12">
      {/* Image Section */}
      <div>
        <Image src={image} alt={title} width={378} height={378} />
      </div>

      {/* Content Section */}
      <div className="max-w-[378px]">
        <h3 className="text-xl mt-6 md:text-[28px] font-medium text-primary leading-tight">
          {title}
        </h3>
        <p className="text-sm md:text-base text-primary mt-2">{description}</p>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((category, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#F8F8F8] text-primary dark:text-black text-xs md:text-sm rounded-md"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
