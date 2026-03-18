import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import ServiceCards from "@/components/ServiceCards";
import ClientsSection from "@/components/Clients";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";

import OurStrengths from "@/components/OurStrengths";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhoWeAre />
      <ServiceCards />
      <OurStrengths />
      <WhyChooseUs />
      <ClientsSection />
      <ContactSection />
    </main>
  );
}
