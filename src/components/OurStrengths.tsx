"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { strengthData } from "../config/data";

export default function OurStrengths() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".strength-column", {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="strengths" className="py-24 bg-[#0B1128] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">
                        OUR STRENGTHS
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {strengthData.map((category, idx) => (
                        <div key={idx} className="strength-column flex flex-col group">
                            {/* Heading */}
                            <h3 className="text-xl md:text-2xl font-bold text-[#4ade80] uppercase tracking-wide mb-8 group-hover:text-white transition-colors duration-300">
                                {category.title}
                            </h3>

                            {/* Image Container */}
                            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-xl group-hover:shadow-2xl border border-white/5 group-hover:border-[#4ade80]/40 transition-all duration-500 ease-out">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1128]/60 via-[#0B1128]/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Points with Timeline Connector */}
                            <div className="relative pl-6">
                                {/* Vertical Connector Line */}
                                <div className="absolute left-[3px] top-4 bottom-8 w-[2px] bg-white/20"></div>

                                <ul className="space-y-10">
                                    {category.points.map((point, pIdx) => (
                                        <li key={pIdx} className="relative pl-12 flex items-center group/point">
                                            {/* Dot on line */}
                                            <div className="absolute -left-[3px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#f97316] shadow-[0_0_12px_rgba(249,115,22,0.6)] z-10 group-hover/point:scale-110 transition-transform"></div>
                                            
                                            {/* Green Arrow Secondary Connector */}
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-l-[12px] border-l-[#4ade80] group-hover/point:translate-x-1 transition-transform"></div>

                                            {/* Text */}
                                            <span className="text-gray-300 text-lg md:text-xl font-medium leading-tight pl-2 transition-colors group-hover/point:text-white">
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
