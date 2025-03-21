import BankSection from "./home/bankSection";
import Features from "./home/Features";
import Hero1 from "./home/hero1";
import Hero2 from "./home/hero2";
import PaymentSection from "./home/paymentSection";
import PriceSection from "./home/priceSection";
import SupportSection from "./home/supportSection";

export default function Home() {
  return (
    <>
      <Hero1 />
      <Hero2 />
      <Features />
      <BankSection />
      <PriceSection />
      <PaymentSection />
      <SupportSection />
    </>
  );
}
