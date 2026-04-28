"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// Sample logos - In a real scenario, we would map the files found in public/cilents
// Since I cannot dynamically import filenames on the client without a build step macro or API,
// I will assume standard filenames or placeholders if I can't see them.
// I will use placeholders for now or generic names if I don't know the exact files yet, 
// but the plan is to use what I found in list_dir.

const clients = [
    { src: "/clients/1.jpg", alt: "Client 1" },
    { src: "/clients/2.jpg", alt: "Client 2" },
    { src: "/clients/3.jpg", alt: "Client 3" },
    { src: "/clients/4.jpg", alt: "Client 4" },
    { src: "/clients/5.jpg", alt: "Client 5" },
    { src: "/clients/6.jpg", alt: "Client 6" },
    { src: "/clients/7.jpg", alt: "Client 7" },
    { src: "/clients/8.jpg", alt: "Client 8" },
    { src: "/clients/9.jpg", alt: "Client 9" },
];

// Duplicate for infinite scroll smoothness
const tickerClients = [...clients, ...clients, ...clients];

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
        <section ref={sectionRef} id="clients" className="pt-12 md:pt-24 pb-6 bg-[#0B1128] overflow-hidden">
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

            <div className="relative w-full overflow-hidden group pb-2">
                <div className="flex animate-marquee gap-10 md:gap-14 items-center w-max px-6">
                    {tickerClients.map((client, index) => (
                        <div key={index} className="relative w-40 h-24 md:w-56 md:h-32 bg-white rounded-xl flex items-center justify-center overflow-hidden border border-white/10 transition-all duration-300">
                            <Image
                                src={client.src}
                                alt={client.alt}
                                width={224}
                                height={128}
                                className="w-full h-full object-contain"
                            />
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
