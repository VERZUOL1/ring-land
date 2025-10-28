import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ValuesSection } from "@/components/values-section";
import { BuildingSection } from "@/components/building-section";
import { TradeoffSection } from "@/components/tradeoff-section";
import { DigitalTwinSection } from "@/components/digital-twin-section";
import { PrivacySection } from "@/components/privacy-section";
import { JoinSection } from "@/components/join-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ValuesSection />
        <BuildingSection />
        <TradeoffSection />
        <DigitalTwinSection />
        <PrivacySection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}
