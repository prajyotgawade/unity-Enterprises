"use client";

/**
 * UXEnhancements.tsx — ADDITIVE ONLY
 *
 * This component adds two purely behavioural UX layers on top of the
 * existing site WITHOUT modifying any existing component or logic:
 *
 *  1. Scroll-reveal: observes elements with class "ue-reveal" and
 *     adds "ue-visible" when they enter the viewport.
 *
 *  2. Header glassmorphism: adds "ue-scrolled" to the <header> element
 *     when the user scrolls past 10px, enabling a backdrop-blur effect
 *     defined in globals.css.
 *
 * Drop this component into layout.tsx (inside <AppProviders>) and it
 * works transparently alongside all existing code.
 */

import { useEffect } from "react";

export default function UXEnhancements() {
  // ── 1. Scroll-reveal observer ─────────────────────────────────────────
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".ue-reveal");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ue-visible");
            // Once revealed, stop observing to avoid re-hiding
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ── 2. Header scroll-shadow / glassmorphism ───────────────────────────
  useEffect(() => {
    const header = document.querySelector<HTMLElement>("header");
    if (!header) return;

    const onScroll = () => {
      if (window.scrollY > 10) {
        header.classList.add("ue-scrolled");
      } else {
        header.classList.remove("ue-scrolled");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount in case page is already scrolled
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── 3. Section heading reveal (pair with h2 .ue-visible) ─────────────
  useEffect(() => {
    const headings = document.querySelectorAll<HTMLElement>(
      "h2.font-bold, h2[class*='font-bold']"
    );
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ue-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    headings.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // This component renders nothing — it only adds behaviour
  return null;
}
