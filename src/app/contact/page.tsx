import { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Get a Quote",
  description: "Contact Unity Enterprises for advanced electrical engineering, industrial automation, and smart digitalization solutions in Mumbai and Chiplun. Reach out for expert consultation.",
  keywords: ["Contact Unity Enterprises", "Electrical Engineering Quote", "Automation Solutions Inquiry", "Unity Enterprises Mumbai Address", "Unity Enterprises Ratnagiri"],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="pt-[64px] md:pt-[72px]">
      <ContactSection />
    </main>
  );
}