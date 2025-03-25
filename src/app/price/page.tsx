import CreditCardTable from "./CreditCardTable";
import HeroPrice from "./heroPrice";
import PriceSection from "./priceSection";
import SupportBanner from "./SupportBanner";

export default function page() {
  return (
    <>
      <HeroPrice />
      <PriceSection />
      <CreditCardTable />
      <SupportBanner />
    </>
  );
}
