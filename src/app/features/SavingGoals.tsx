import Image from "next/image";

const items = [
  {
    id: 1,
    name: "New Laptop",
    price: "400$",
    image: "/images/laptop.png",
    bgColor: "bg-green-100",
  },
  {
    id: 2,
    name: "Dream bike",
    price: "200$",
    image: "/images/bike.png",
    bgColor: "bg-red-100",
  },
  {
    id: 3,
    name: "Holiday",
    price: "14000$",
    image: "/images/airplane.png",
    bgColor: "bg-blue-100",
  },
  {
    id: 4,
    name: "Camera",
    price: "100$",
    image: "/images/camera.png",
    bgColor: "bg-gray-100",
  },
  {
    id: 5,
    name: "",
    price: "",
    image: "/images/frame.png",
    bgColor: "bg-gray-200",
  },
];

export default function OrganizeMoney() {
  return (
    <section className="max-w-[1200px] mx-auto pt-20 px-6 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left max-w-lg">
          <p className="text-xl text-primary dark:text-white font-medium">
            Saving Accounts
          </p>
          <h1 className="text-4xl md:text-6xl font-medium text-primary dark:text-white leading-tight mt-2">
            Organize your <br /> money the right way
          </h1>
          <p className="text-primary dark:text-gray-300 font-medium text-lg md:text-xl mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <a
            href="#"
            className="flex items-center text-[#5BB5A2] text-lg hover:underline"
          >
            All Features
            <Image
              src="/images/arrow.png"
              alt="Arrow"
              width={16}
              height={16}
              className="ml-1"
            />
          </a>
        </div>
      </div>

      {/* Items */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <div
              className={`w-[214px] h-[214px] rounded-xl flex items-center justify-center ${item.bgColor}`}
            >
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                />
              )}
              {!item.image && <span className="text-3xl font-bold">+</span>}
            </div>
            {item.name && (
              <h2 className="mt-2 text-lg font-semibold dark:text-white">
                {item.name}
              </h2>
            )}
            {item.price && (
              <p className="text-gray-500 dark:text-gray-400">{item.price}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
