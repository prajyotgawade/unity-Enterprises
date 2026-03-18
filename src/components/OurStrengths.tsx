"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

    const strengthData = [
        {
            title: "AI-POWERED SAFETY - PPE",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000",
            points: [
                "AI-enabled PPE workplace 100% safety monitoring",
                "Real-time PPE non-compliance alerts",
                "Hazards spillage & Unconscious detection system",
                "AI-Based unsafe action detection with corrective action plan"
            ]
        },
        {
            title: "SOLAR ROBOTICS CLEANING SYSTEM",
            image: "https://images.unsplash.com/photo-1508514177221-18d14746d73c?q=80&w=1000",
            points: [
                "Fully automated operation",
                "Boost Solar power generation by up to 40%",
                "Water – Efficient system – up to 75% Saving",
                "Smart remote monitoring with mobile app control"
            ]
        }
    ];

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
                            <h3 className="text-xl md:text-2xl font-bold text-[#4ade80] uppercase tracking-wide mb-8 group-hover:text-white transition-colors">
                                {category.title}
                            </h3>

                            {/* Image Container */}
                            <div className="relative w-full aspect-video rounded-sm overflow-hidden mb-12 shadow-2xl border border-white/5 group-hover:border-[#4ade80]/30 transition-all duration-500">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1128]/40 to-transparent"></div>
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
