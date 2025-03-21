import Transactions from "@/components/layout/Transactions";

const transactionsData = [
  {
    title: "Transactions",
    heading: "Send & receive money instantly.",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    points: ["Apple - $799", "Amazon - $250", "Nike Shoes - $120"],
    image: "/images/app.png",
  },
  {
    title: "Cards",
    heading: "Manage your cards.",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    points: ["Netflix - $15", "Spotify - $10", "Adobe - $25"],
    image: "/images/app1.png",
  },
  {
    title: "Food Orders",
    heading: "Keep control over your money",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    points: ["McDonald's - $12", "Pizza Hut - $18", "Starbucks - $5"],
    image: "/images/app2.png",
  },
  {
    title: "Freelance Income",
    heading: "Lorem et ipsum dolor",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    points: ["Upwork - $500", "Fiverr - $300", "Toptal - $1200"],
    image: "/images/app3.png",
  },
];

export default function Features() {
  return (
    <section className="max-w-custom mx-auto px-6 py-20">
      <div className="space-y-20">
        {transactionsData.map((transaction, index) => (
          <Transactions key={index} {...transaction} />
        ))}
      </div>
    </section>
  );
}
