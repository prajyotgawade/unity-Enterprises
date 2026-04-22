"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// Sample logos - In a real scenario, we would map the files found in public/cilents
// Since I cannot dynamically import filenames on the client without a build step macro or API,
// I will assume standard filenames or placeholders if I can't see them.
// I will use placeholders for now or generic names if I don't know the exact files yet, 
// but the plan is to use what I found in list_dir.

const clients = [
    "c2.png", "c3.png", "c4.png", "c5.png",
    "c6.png", "c7.jpg", "c8.png", "c9.png" // Matching your provided files
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
        <section ref={sectionRef} id="clients" className="py-12 md:py-24 bg-[#0B1128] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 mb-10 md:mb-16 text-center">

                {/* ── Section Header — matches Contact Us / About Us style ── */}
                <div className="ue-reveal">
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-[var(--ue-primary)] font-bold text-xs uppercase tracking-widest mb-4">
                        Our Trusted Partners
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white">
                        Industry Leaders Trust Unity
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--ue-primary)] to-[#4ade80] rounded-full mt-4 mx-auto"></div>
                </div>

            </div>

            <div className="relative w-full overflow-hidden group pb-10">
                <div className="flex animate-marquee gap-10 md:gap-14 items-center w-max px-6">
                    {tickerClients.map((client, index) => (
                        <div key={index} className="relative w-40 h-24 md:w-56 md:h-32 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center p-6 transition-all duration-500 hover:border-blue-500/30 hover:bg-white/10 group/logo">
                            {/* Decorative Glow */}
                            <div className="absolute inset-0 bg-blue-500/0 group-hover/logo:bg-blue-500/5 transition-colors duration-500 rounded-2xl" />

                             {/* Logos removed as requested */}
                        </div>
                    ))}
                </div>

                {/* Refined gradient mask for edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0B1128] via-[#0B1128]/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0B1128] via-[#0B1128]/80 to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}
