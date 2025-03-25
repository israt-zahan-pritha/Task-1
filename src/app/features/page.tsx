import BankingFeatures from "./BankingFeatures";
import BankingHero from "./BankingHero";
import CardSection from "./CardSection";
import IntegrationSection from "./IntegrationSection";
import NotificationSection from "./NotificationSection";
import SavingGoals from "./SavingGoals";
import TestimonialSection from "./TestimonialSection";
import TransactionSection from "./TransactionSection";

export default function page() {
  return (
    <>
      <BankingHero />
      <BankingFeatures />
      <TransactionSection />
      <SavingGoals />
      <NotificationSection />
      <IntegrationSection />
      <CardSection />
      <TestimonialSection />
    </>
  );
}
