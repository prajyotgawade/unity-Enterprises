"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Zap,
  Cpu,
  Camera,
  Building,
  Target,
  Lightbulb,
  UserCheck,
  PackageCheck,
  FileCheck,
  Network,
  Headset,
  Wrench,
  Cog,
  Plug,
  Settings,
  Database,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes"; // Import useTheme hook

gsap.registerPlugin(ScrollTrigger);

export default function HomeClient() {
  const { theme } = useTheme(); // Get the current theme
  const [submitting, setSubmitting] = useState(false);
  const [submitOk, setSubmitOk] = useState(false);

  useEffect(() => {
    gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((el) => {
      gsap.from(el.children, {
        opacity: 0,
        y: 16,
        stagger: 0.08,
        duration: 0.5,
        scrollTrigger: { trigger: el, start: "top 80%" },
      });
    });
  }, []);

  async function handleSubmit(formData: FormData) {
    setSubmitting(true);
    setSubmitOk(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      if (res.ok) setSubmitOk(true);
    } finally {
      setSubmitting(false);
    }
  }

  // Dynamic button styles based on theme
  const buttonPrimaryStyles = {
    backgroundColor: theme === 'dark' ? 'var(--ue-primary)' : 'var(--ue-accent-green)',
    color: 'white',
  };

  const buttonSecondaryStyles = {
    backgroundColor: 'transparent',
    borderColor: 'var(--ue-border)',
    color: 'var(--ue-foreground)',
  };

  const formButtonStyles = {
    backgroundColor: theme === 'dark' ? 'var(--ue-primary)' : 'var(--ue-accent-green)',
    color: 'white',
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section id="home" className="relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-foreground leading-tight" data-stagger>
            <span>A Better Tomorrow</span>
            <br />
            <span>
              Begins with Today’s <span className="text-[color:var(--ue-primary)]">Innovation</span>
            </span>
          </h1>
          <p className="mt-5 text-foreground/70 text-lg max-w-2xl mx-auto">
            Electrical Engineering & Advanced Digital Automation Solutions
          </p>
          <div className="mt-8 flex justify-center gap-4" data-stagger>
            <Link href="/services" className="px-5 py-3 rounded-md text-sm font-semibold transition-transform duration-200 hover:scale-105" style={buttonPrimaryStyles}>
              Explore Services
            </Link>
            <Link href="/contact" className="px-5 py-3 rounded-md text-sm font-semibold border transition-transform duration-200 hover:scale-105" style={buttonSecondaryStyles}>
              Contact Us
            </Link>
          </div>
        </div>
        {/* Floating icons */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
          <div className="absolute left-10 top-10 animate-pulse-slow text-[color:var(--ue-accent-green)]"><Zap size={48} /></div>
          <div className="absolute right-16 top-20 animate-pulse-slow text-[color:var(--ue-primary)]"><Cpu size={48} /></div>
          <div className="absolute left-1/2 bottom-10 animate-pulse-slow text-[color:var(--ue-accent-green)]"><Camera size={48} /></div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-muted">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="h-64 bg-card rounded-xl flex items-center justify-center border border-border">
            <Building className="text-[color:var(--ue-primary)]" size={64} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground">About Us</h2>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              With a footprint in Mumbai and Ratnagiri, we deliver <span className="text-[color:var(--ue-primary)] font-semibold">innovation</span>,
              <span className="text-[color:var(--ue-primary)] font-semibold"> automation</span>, and
              <span className="text-[color:var(--ue-primary)] font-semibold"> digitalization</span> across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-stagger>
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2 uppercase tracking-wider"><Zap size={20} className="text-[color:var(--ue-primary)]" /> ELECTRICAL ENGINEERING</h3>
              <ul className="mt-3 text-sm text-foreground/70 space-y-2">
                <li className="flex items-center gap-2"><Settings size={16} /> Automatic Power Factor Control panel</li>
                <li className="flex items-center gap-2"><Plug size={16} /> Industrial electrical control panel</li>
                <li className="flex items-center gap-2"><Database size={16} /> MCC panel&apos;s</li>
                <li className="flex items-center gap-2"><Wrench size={16} /> Maintenance of electrical panels</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2 uppercase tracking-wider"><Cpu size={20} className="text-[color:var(--ue-primary)]" /> DIGITALIZATION & AI</h3>
              <ul className="mt-3 text-sm text-foreground/70 space-y-2">
                <li className="flex items-center gap-2"><Settings size={16} /> Digital system & Process Automation</li>
                <li className="flex items-center gap-2"><Network size={16} /> IoT based dashboard & Data analytics</li>
                <li className="flex items-center gap-2"><FileCheck size={16} /> Process parameter data logging</li>
                <li className="flex items-center gap-2"><Target size={16} /> Energy monitoring system</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2 uppercase tracking-wider"><Zap size={20} className="text-[color:var(--ue-primary)]" /> SOLAR ENERGY SYSTEMS</h3>
              <ul className="mt-3 text-sm text-foreground/70 space-y-2">
                <li className="flex items-center gap-2"><Settings size={16} /> Solar installation – Rooftop & Industrial</li>
                <li className="flex items-center gap-2"><Plug size={16} /> On-Grid, Off-Grid & Hybrid solution</li>
                <li className="flex items-center gap-2"><Lightbulb size={16} /> Solar street & Outdoor lighting</li>
                <li className="flex items-center gap-2"><Database size={16} /> Energy storage & Maintenance</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2"><Wrench size={20} className="text-[color:var(--ue-primary)]" /> Maintenance</h3>
              <ul className="mt-3 text-sm text-foreground/70 space-y-1">
                <li className="flex items-center gap-2"><Wrench size={16} /> Installation</li>
                <li className="flex items-center gap-2"><Cog size={16} /> Preventive maintenance</li>
                <li className="flex items-center gap-2"><Wrench size={16} /> Spare parts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Aim */}
      <section id="vision" className="py-20 bg-muted">
        <div className="mx-auto max-w-4xl px-4 text-center" data-stagger>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Empowering industries through <span className="text-[color:var(--ue-primary)]">innovation</span> and reliability
          </h2>
          <p className="mt-4 text-foreground/70">Fulfill client needs by delivering outstanding & reliable service.</p>
          <div className="mt-8 flex justify-center gap-6 opacity-60">
            <Target size={48} className="text-[color:var(--ue-primary)]" />
            <Lightbulb size={48} className="text-[color:var(--ue-primary)]" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
            <Feature icon={<UserCheck />} title="Expertise" />
            <Feature icon={<PackageCheck />} title="Reliable Parts" />
            <Feature icon={<FileCheck />} title="Quality Reports" />
            <Feature icon={<Network />} title="Supplier Network" />
            <Feature icon={<Lightbulb />} title="Innovative Solutions" />
            <Feature icon={<Headset />} title="Dedicated Support" />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="py-16">
        <div className="overflow-hidden">
          <div className="whitespace-nowrap animate-marquee text-foreground/70">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="mx-8 inline-block">Client {i + 1}</span>
            ))}
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={`dup-${i}`} className="mx-8 inline-block">Client {i + 1}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-muted">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Contact</h2>
            <div className="text-foreground/80 space-y-2">
              <p><strong className="text-[color:var(--ue-primary)]">Phone:</strong> +91-XXXXXXXXXX</p>
              <p><strong className="text-[color:var(--ue-primary)]">Email:</strong> info@unity.com</p>
              <p><strong className="text-[color:var(--ue-primary)]">Offices:</strong> Mumbai, Ratnagiri</p>
            </div>
          </div>
          <form
            action={async (formData) => handleSubmit(formData)}
            className="p-6 rounded-xl border border-border bg-card space-y-4"
          >
            <input name="name" placeholder="Name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--ue-primary)] bg-background text-foreground" />
            <input name="email" placeholder="Email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--ue-primary)] bg-background text-foreground" />
            <textarea name="message" placeholder="Message" rows={4} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--ue-primary)] bg-background text-foreground" />
            <button type="submit" disabled={submitting} className="px-5 py-3 rounded-md text-white font-semibold" style={formButtonStyles}>
              {submitting ? "Sending..." : submitOk ? "Sent ✓" : "Submit"}
            </button>
          </form>
        </div>
      </section>

      {/* Global footer is rendered in layout */}
    </main>
  );
}

function Feature({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="p-6 rounded-xl border border-border bg-card hover:shadow-md transition-transform will-change-transform transform hover:scale-105">
      <div className="h-10 w-10 p-2 rounded-full flex items-center justify-center bg-accent text-[color:var(--ue-primary)]">
        {icon}
      </div>
      <div className="mt-4 font-semibold text-foreground">{title}</div>
    </div>
  );
}