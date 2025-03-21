import BankSection from "./home/bankSection";
import Features from "./home/Features";
import HeroSection from "./home/heroSection";
import PaymentSection from "./home/paymentSection";
import PriceSection from "./home/priceSection";
import SupportSection from "./home/supportSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <BankSection />
      <PriceSection />
      <PaymentSection />
      <SupportSection />
    </>
  );
}
