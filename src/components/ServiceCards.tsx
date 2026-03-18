"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

    const expertiseData = [
        {
            title: "SMART ELECTRICAL PANEL",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
            points: [
                "Indian standards - BIS",
                "IoT predictive maintenance",
                "Advanced Fire Response & Safety System",
                "Digital wiring & P&ID diagram - Fault Indication"
            ]
        },
        {
            title: "DIGITALIZATION & AI",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
            points: [
                "Real-Time Interactive dashboard & Analytics",
                "Integration - PLC, SCADA & IoT platforms",
                "AI & Industrial Automation",
                "Machine learning"
            ]
        },
        {
            title: "SOLAR ENGINEERING",
            image: "https://images.unsplash.com/photo-1509391302863-553ca49bf822?q=80&w=1000",
            points: [
                "BIS-certified solar panels",
                "Smart solar monitoring & IoT integration",
                "Hybrid solar power system"
            ]
        }
    ];

    return (
        <section ref={sectionRef} id="services" className="py-20 bg-[#0B1128] transition-colors duration-300 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-2">
                        CORE EXPERTISE
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {expertiseData.map((category, idx) => (
                        <div key={idx} className="expertise-column flex flex-col group">
                            {/* Heading */}
                            <h3 className="text-xl md:text-2xl font-bold text-[#4ade80] uppercase tracking-wide mb-6 group-hover:text-white transition-colors">
                                {category.title}
                            </h3>

                            {/* Image Container */}
                            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden mb-10 shadow-2xl border border-white/10 group-hover:border-[#4ade80]/50 transition-all duration-500">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1128]/60 to-transparent"></div>
                            </div>

                            {/* Points with Connector Style */}
                            <div className="relative pl-4 pr-2">
                                {/* Vertical Connector Line */}
                                <div className="absolute left-[11px] top-4 bottom-8 w-[2px] bg-white/10 group-hover:bg-[#4ade80]/20 transition-colors duration-700"></div>

                                <ul className="space-y-12">
                                    {category.points.map((point, pIdx) => (
                                        <li key={pIdx} className="relative pl-12 flex items-center group/point">
                                            {/* Horizontal Connector Line */}
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-[2px] bg-white/10 group-hover/point:bg-[#f97316]/50 transition-colors"></div>

                                            {/* Dot */}
                                            <div className="absolute left-[6px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#f97316] shadow-[0_0_15px_rgba(249,115,22,0.5)] z-10 group-hover/point:scale-125 transition-transform"></div>

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
