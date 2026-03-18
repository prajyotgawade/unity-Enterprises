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
      className="sticky top-0 z-50 bg-[var(--ue-nav-bg)] border-b border-gray-100 shadow-sm"
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-[1400px] mx-auto">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-16 h-16 bg-white shadow-sm rounded-lg overflow-hidden flex items-center justify-center border border-gray-100 group-hover:border-[var(--ue-primary)] transition-colors">
            <Image
              src="/unity-logo.jpeg"
              alt="Unity Logo"
              width={64}
              height={64}
              className="object-contain p-0.5"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading font-bold text-2xl tracking-tighter text-[var(--ue-secondary)]">
              UNITY<span className="text-[var(--ue-primary)]">.</span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--ue-primary)] uppercase">
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
              className="text-[15px] font-normal text-[var(--ue-secondary)] hover:text-[var(--ue-primary)] transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--ue-primary)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-5">


          <Link
            href="/quote"
            className="hidden md:flex items-center gap-2 bg-[var(--ue-primary)] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
          >
            Get a Quote
            <ArrowRight size={16} />
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