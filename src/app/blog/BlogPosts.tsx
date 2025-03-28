import BlogCard from "@/components/layout/BlogCard";

const blogPosts = [
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
  {
    image: "/images/blog3.png",
    title: "How To Start Using Banko For Your Startup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    categories: ["App", "Technology"],
  },
  {
    image: "/images/blog4.png",
    title: "10 Things Nobody Told You About Banko",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    categories: ["Technology"],
  },
  {
    image: "/images/blog5.png",
    title: "How To Start Using Banko For Your Startup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    categories: ["App", "Product"],
  },
];

export default function BlogPosts() {
  return (
    <div className=" max-w-[1222px] mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 pb-12 md:pb-16 lg:pb-24">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
}
