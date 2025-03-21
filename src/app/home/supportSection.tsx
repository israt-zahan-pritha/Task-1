import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function SupportSection() {
  const faqs = [
    {
      question: "How do I open a Banko account?",
      answer:
        "To open a Banko account, simply visit our website and follow the registration steps.",
    },
    {
      question: "How do I order a new card?",
      answer:
        "You can order a new card from the account settings section in your Banko dashboard.",
    },
    {
      question: "How to change my account limits?",
      answer:
        "Account limits can be adjusted from your settings or by contacting our support team.",
    },
    {
      question: "How does Banko premium work?",
      answer:
        "Banko premium provides exclusive benefits including lower fees, priority support, and higher transaction limits.",
    },
    {
      question: "Can I have two Banko accounts?",
      answer:
        "Yes, you can have multiple accounts, but they must be linked to different email addresses.",
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row lg:items-center justify-between max-w-[1200px] w-full mx-auto px-6 py-16">
      {/* Left Side - Contact Info */}
      <div className="max-w-md">
        <h2 className="text-[48px] lg:text-[64px] font-semibold text-primary leading-tight">
          Need help?
        </h2>

        <div className="mt-6 space-y-6">
          {[
            {
              img: "/images/badge1.png",
              text: "+49 176 123 456",
              subtext: "Support Hotline",
            },
            {
              img: "/images/badge2.png",
              text: "help@banquee.com",
              subtext: "Support Email",
            },
          ].map(({ img, text, subtext }, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image src={img} alt={subtext} width={48} height={48} />
              <div>
                <p className="text-lg font-medium text-primary">{text}</p>
                <p className="text-gray-500 text-sm">{subtext}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Support Link */}
        <div className="flex items-center gap-2 mt-6 text-teal-600 font-medium cursor-pointer hover:underline">
          <span>Support</span>
          <Image
            src="/images/arrow.png"
            alt="Arrow Icon"
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* Right Side - FAQ Accordion */}
      <div className="max-w-xl w-full mt-10 lg:mt-0">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-[18px] lg:text-[20px]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[16px] lg:text-[18px] text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
