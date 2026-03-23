"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { expertiseData } from "../config/data";

export default function ServiceCards() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".expertise-column", {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    // Glow-trail: track mouse position per card
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    return (
        <section ref={sectionRef} id="services" className="py-20 bg-[#0B1128] transition-colors duration-300 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-2">
                        CORE EXPERTISE
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {expertiseData.map((category, idx) => (
                        <div
                            key={idx}
                            onMouseMove={handleMouseMove}
                            className="expertise-column ue-glow-card ue-bento flex flex-col group bg-[#0f1830] p-6"
                        >
                            {/* Heading */}
                            <h3 className="text-xl md:text-2xl font-bold text-[#4ade80] uppercase tracking-wide mb-6 group-hover:text-white transition-colors duration-300">
                                {category.title}
                            </h3>

                            {/* Image Container */}
                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 shadow-xl group-hover:shadow-[0_0_40px_rgba(0,104,255,0.25)] border border-white/10 group-hover:border-[#4ade80]/50 transition-all duration-500 ease-out">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="expertise-img object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1128]/80 via-[#0B1128]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Points with hex bullets + sequential fade */}
                            <div className="relative pl-4 pr-2 flex-1">
                                <div className="absolute left-[9px] top-4 bottom-8 w-[2px] bg-white/10 group-hover:bg-[#4ade80]/20 transition-colors duration-700"></div>

                                <ul className="space-y-8">
                                    {category.points.map((point, pIdx) => (
                                        <li key={pIdx} className="ue-seq-item relative pl-12 flex items-center group/point">
                                            {/* Connector */}
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-[2px] bg-white/10 group-hover/point:bg-[#4ade80]/50 transition-colors"></div>

                                            {/* Hex Bullet */}
                                            <div className="absolute left-[6px] top-1/2 -translate-y-1/2 z-10 group-hover/point:scale-125 transition-transform">
                                                <span className="hex-bullet w-4 h-4"></span>
                                            </div>

                                            {/* Text */}
                                            <span className="text-gray-300 text-lg md:text-xl font-medium leading-tight transition-colors group-hover/point:text-white">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
