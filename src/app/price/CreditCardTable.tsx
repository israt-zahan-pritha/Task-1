import Image from "next/image";

const sections = [
  {
    title: "Credit Card",
    data: [
      {
        name: "Physical Card",
        desc: "Diam in arcu cursus euismod",
        values: ["Optional", "", ""],
      },
      {
        name: "Virtual Card",
        desc: "Diam in arcu cursus euismod",
        values: ["-", "Up to 2", "Unlimited"],
      },
      {
        name: "Contactless Payments",
        desc: "Diam in arcu cursus euismod",
        values: ["", "", ""],
      },
      {
        name: "Mobile Payments",
        desc: "Diam in arcu cursus euismod",
        values: ["", "", ""],
      },
    ],
  },
  {
    title: "Debit Card",
    data: [
      {
        name: "Standard Card",
        desc: "Diam in arcu cursus euismod",
        values: ["Included", "", ""],
      },
      {
        name: "Premium Card",
        desc: "Diam in arcu cursus euismod",
        values: ["Yes", "Up to 3", "Unlimited"],
      },
      {
        name: "ATM Withdrawals",
        desc: "Diam in arcu cursus euismod",
        values: ["", "", ""],
      },
      {
        name: "International Usage",
        desc: "Diam in arcu cursus euismod",
        values: ["", "", ""],
      },
    ],
  },
];

export default function FeaturesTable() {
  return (
    <div className="w-full max-w-[1200px] mx-auto p-6 md:p-8">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mt-16 md:mt-32 mb-4">
            {section.title}
          </h2>
          <div className="w-full border-t border-gray-300 dark:border-gray-700">
            {section.data.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-4 items-center py-6 md:py-8 border-b border-gray-300 dark:border-gray-700"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/apple.png"
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium text-lg text-primary">
                      {item.name}
                    </p>
                    <p className="text-gray-500 text-base">{item.desc}</p>
                  </div>
                </div>
                {item.values.map((value, idx) => (
                  <div
                    key={idx}
                    className="flex justify-items-start pt-4 md:justify-center md:pt-0"
                  >
                    {value ? (
                      <p className="font-medium text-lg">{value}</p>
                    ) : (
                      <Image
                        src="/images/C.png"
                        alt="Check"
                        width={24}
                        height={24}
                        className="opacity-50 dark:opacity-80"
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
