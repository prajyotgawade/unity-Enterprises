"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// Sample logos - In a real scenario, we would map the files found in public/cilents
// Since I cannot dynamically import filenames on the client without a build step macro or API,
// I will assume standard filenames or placeholders if I can't see them.
// I will use placeholders for now or generic names if I don't know the exact files yet, 
// but the plan is to use what I found in list_dir.

const clients = [
    "c1.jpg", "c2.jpg", "c3.jpg",
    "c4.jpg", "c5.jpg", "c6.jpg",
    "c7.jpg", "c8.jpg", "c9.jpg"
];

// Duplicate for infinite scroll smoothness (Exactly 2 sets for 50% translation logic)
const tickerClients = [...clients, ...clients];

export default function ClientsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("ue-visible");
                });
            },
            { threshold: 0.1 }
        );
        sectionRef.current?.querySelectorAll(".ue-reveal").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="clients" className="py-12 md:py-24 bg-[var(--ue-bg)] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 mb-10 md:mb-16 text-center">

                {/* ── Section Header — matches Contact Us / About Us style ── */}
                <div className="ue-reveal">
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-[var(--ue-primary)] font-bold text-xs uppercase tracking-widest mb-4">
                        Our Trusted Partners
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B1128] dark:text-white">
                        Industry Leaders Trust Unity
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--ue-primary)] to-[#4ade80] rounded-full mt-4 mx-auto"></div>
                </div>

            </div>

            <div className="relative w-full overflow-hidden group">
                <div className="flex animate-marquee gap-16 items-center w-max">
                    {tickerClients.map((client, index) => (
                        <div key={index} className="relative w-32 h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110 shrink-0 flex items-center justify-center">
                            <Image
                                src={`/cilents/${client}`}
                                alt="Client Logo"
                                width={120}
                                height={80}
                                className="object-contain max-h-full max-w-full"
                            />
                        </div>
                    ))}
                </div>

                {/* Safe fade for edges */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--ue-bg)] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--ue-bg)] to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}
