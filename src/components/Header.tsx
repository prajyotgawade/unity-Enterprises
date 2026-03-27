"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";

import { Menu, X } from "lucide-react";
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

  // Scroll Progress Calculator + sticky glass blur
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(Number(scroll));
      if (navRef.current) {
        navRef.current.classList.toggle("ue-scrolled", totalScroll > 20);
      }
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

          <a
            href="https://wa.me/918928691044"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-[#25D366] rounded-xl hover:bg-[#128C7E] shadow-md group"
            title="Chat on WhatsApp"
          >
            <div className="relative">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
          </a>

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
              <a
                href="https://wa.me/918928691044"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold text-center shadow-lg flex items-center justify-center gap-4"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
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