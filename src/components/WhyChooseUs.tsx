"use client";

import { useEffect, useRef } from "react";
import { ShieldCheck, MonitorCheck, Layers, BarChart3, UserCheck, Settings } from "lucide-react";

export default function WhyChooseUs() {
    const sectionRef = useRef<HTMLElement>(null);

    const features = [
        { icon: ShieldCheck, title: "Quality Assured",        text: "100% Tested & Verified",             delay: "ue-reveal-d1" },
        { icon: MonitorCheck, title: "Digital Ready",         text: "3D Design, PLC & IoT Compatible",    delay: "ue-reveal-d2" },
        { icon: Layers,       title: "Seamless Integration",  text: "Works with PLC, SCADA & IoT",        delay: "ue-reveal-d3" },
        { icon: BarChart3,    title: "Intelligent Dashboards",text: "Real-time Insights",                 delay: "ue-reveal-d4" },
        { icon: UserCheck,    title: "User-Friendly",         text: "Ergonomic Design",                   delay: "ue-reveal-d5" },
        { icon: Settings,     title: "Reliable Supply",       text: "Strong Network & Parts",             delay: "ue-reveal-d6" },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("ue-visible");
                });
            },
            { threshold: 0.15 }
        );
        sectionRef.current?.querySelectorAll(".ue-reveal").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    return (
        <section ref={sectionRef} id="why-choose-us" className="py-20 bg-[#0B1128] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4 text-white">
                        Why Choose Unity Enterprises?
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--ue-primary)] to-[#4ade80] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            onMouseMove={handleMouseMove}
                            className={`ue-reveal ue-glow-card ${feature.delay} flex flex-col items-center gap-4 group p-6 rounded-2xl bg-[#0f1830] border border-white/5 hover:border-blue-500/30 transition-all duration-300`}
                        >
                            <div className="w-16 h-16 rounded-full bg-blue-900/20 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 shadow-sm group-hover:shadow-[0_0_20px_rgba(0,104,255,0.4)]">
                                <feature.icon className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h3 className="font-bold text-base mb-1 text-white">{feature.title}</h3>
                                <p className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors">{feature.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
