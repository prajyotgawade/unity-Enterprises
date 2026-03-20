"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";

import { Menu, X, ArrowRight } from "lucide-react";
import gsap from "gsap";


export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);

    const ctx = gsap.context(() => {
      gsap.fromTo(navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }, navRef);
    return () => ctx.revert();
  }, []);

  // Scroll Progress Calculator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(Number(scroll));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Core Expertise", href: "/#services" },
    { name: "Our Strengths", href: "/#strengths" },
    { name: "Why Choose Us", href: "/#why-choose-us" },
    { name: "Clients", href: "/#clients" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 bg-[var(--ue-nav-bg)]/90 backdrop-blur-md border-b border-gray-100/50 shadow-sm transition-all duration-300"
    >
      <div className="flex items-center justify-between px-6 py-2 max-w-[1400px] mx-auto">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-14 h-14 flex items-center justify-center">
            <Image
              src="/unity-logo-transparent.png"
              alt="Unity Logo"
              width={56}
              height={56}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading font-bold text-lg tracking-tighter text-[var(--ue-secondary)]">
              UNITY
            </span>
            <span className="text-[8px] font-bold tracking-[0.2em] text-[var(--ue-primary)] uppercase">
              Enterprises
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-[var(--ue-secondary)] hover:text-[var(--ue-primary)] transition-colors duration-300 relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--ue-primary)] transition-all duration-300 ease-out group-hover:w-full rounded-full" />
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-5">

          <Link
            href="/quote"
            className="hidden md:flex items-center gap-2 bg-[var(--ue-primary)] text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-blue-700 active:scale-95 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
          >
            Get a Quote
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[var(--ue-secondary)]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Elegant Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[var(--ue-primary)] to-[#4ade80] z-50 transition-none"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Mobile Menu Overlay - Animated Slide-In */}
      {mounted && createPortal(
        <div
          className={`lg:hidden fixed inset-0 z-[9999] bg-[#0B1128] w-screen h-[100dvh] overflow-hidden ${mobileOpen ? "translate-x-0 visible" : "translate-x-full invisible"
            }`}
          style={{
            transition: mobileOpen
              ? "transform 0.5s ease-in-out, visibility 0s"
              : "transform 0.5s ease-in-out, visibility 0s linear 0.5s"
          }}
        >
          <div className="flex flex-col h-full bg-[#0B1128]">
            {/* Mobile Header with Close Button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B1128]">
              <span className="font-heading font-medium text-2xl text-white">
                Menu
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-white hover:text-gray-300 bg-white/10 rounded-full transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col items-center justify-center flex-1 gap-8 p-8 bg-[#0B1128]">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-3xl font-heading font-light text-white hover:text-[var(--ue-primary)] transition-all duration-500 delay-100 transform ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  style={{ transitionDelay: `${150 + idx * 50}ms` }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Footer Actions in Menu */}
            <div className={`p-8 pb-12 flex flex-col gap-4 border-t border-white/10 bg-[#0B1128] transition-all duration-700 delay-300 transform ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}>
              <Link
                href="/quote"
                onClick={() => setMobileOpen(false)}
                className="w-full bg-[var(--ue-primary)] text-white py-4 rounded-2xl font-bold text-center shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                Get a Quote <ArrowRight size={20} />
              </Link>
              <p className="text-center text-white/40 text-xs mt-4">
                © 2025 Unity Enterprises
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}