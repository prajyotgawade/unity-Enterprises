import { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Expert Electrical & AI Solutions",
  description: "Get in touch with Unity Enterprises today for a professional consultation. We specialize in industrial automation, electrical maintenance, and IoT solutions in Mumbai & Ratnagiri.",
  keywords: ["Contact Unity Enterprises", "Electrical Engineering Quote", "Automation Solutions Inquiry", "Unity Enterprises Mumbai Address", "Unity Enterprises Ratnagiri", "Get a Quote Engineering"],
  alternates: {
    canonical: "https://unitytech.in/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="pt-[64px] md:pt-[72px]">
      <ContactSection />
    </main>
  );
}