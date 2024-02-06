import Image from "next/image";
import IntroSection from "./_components/intro-section";
import AboutSection from "./_components/about-section";
import Features from "./_components/features-section";
import FaqSection from "./_components/faq-section";
import InvestmentSection from "./_components/investment-section";

export default function Home() {
  return (
    <main className="">
      <IntroSection />
      <AboutSection />
      <Features />
      <InvestmentSection />
      <FaqSection />
    </main>
  );
}
