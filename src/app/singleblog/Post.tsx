import { useMemo } from "react";
import BlogCard from "@/components/layout/BlogCard";

export default function Post() {
  const blogPosts = useMemo(
    () => [
      {
        image: "/images/blog.png",
        title: "How To Start Using Banko For Your Startup",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        categories: ["App", "Technology"],
      },
      {
        image: "/images/blog1.png",
        title: "10 Things Nobody Told You About Banko",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        categories: ["Technology"],
      },
      {
        image: "/images/blog2.png",
        title: "How To Start Using Banko For Your Startup",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        categories: ["App", "Product"],
      },
    ],
    []
  );

  return (
    <div className="mx-auto max-w-[1222px] mt-8 px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[33px] pb-16 md:pb-20 lg:pb-28 justify-center place-items-center">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
}
