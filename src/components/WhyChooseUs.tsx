"use client";

import { useEffect, useRef } from "react";
import { ShieldCheck, BarChart3, Settings, Lightbulb, Wrench, Award, Users, Truck, Clock, FileText } from "lucide-react";

export default function WhyChooseUs() {
    const sectionRef = useRef<HTMLElement>(null);

    const features = [
        { icon: Lightbulb,    title: "Innovative",                text: "Forward-thinking electrical solutions", delay: "ue-reveal-d1" },
        { icon: Wrench,       title: "Solution Provider",         text: "Tailored industrial answers",          delay: "ue-reveal-d2" },
        { icon: Award,        title: "Expertise",                 text: "Decades of engineering mastery",       delay: "ue-reveal-d3" },
        { icon: Users,        title: "In house / 3P team",        text: "Dedicated skilled workforce",          delay: "ue-reveal-d4" },
        { icon: Truck,        title: "Supplier Network",          text: "Strong global partnerships",           delay: "ue-reveal-d5" },
        { icon: Settings,     title: "Reliable Supply of Parts",  text: "Critical components always ready",     delay: "ue-reveal-d6" },
        { icon: Clock,        title: "Services",                  text: "24/7 technical support & help",        delay: "ue-reveal-d1" },
        { icon: ShieldCheck,  title: "Quality Certification",     text: "ISO & Industry standard compliant",    delay: "ue-reveal-d2" },
        { icon: FileText,     title: "Digital Reports",           text: "Real-time data at your fingertips",    delay: "ue-reveal-d3" },
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
                    <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4 text-white uppercase tracking-wider">
                        Why Choose Unity Enterprises?
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--ue-primary)] to-[#4ade80] mx-auto rounded-full mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            onMouseMove={handleMouseMove}
                            className={`ue-reveal ue-glow-card ${feature.delay} flex flex-col items-center text-center gap-6 p-10 rounded-[2.5rem] bg-[#0f1830]/40 border border-white/5 hover:border-[var(--ue-primary)]/40 hover:-translate-y-3 transition-all duration-500 group relative overflow-hidden h-full`}
                        >
                            {/* Animated Background Glow */}
                            <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Icon Container with Smooth Professional Rotation */}
                            <div className="relative w-24 h-24 rounded-[1.5rem] bg-blue-900/20 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-400 group-hover:-rotate-[12deg] group-hover:scale-110 shadow-lg group-hover:shadow-[0_15px_35px_rgba(0,104,255,0.4)]">
                                <feature.icon className="w-10 h-10 text-blue-400 group-hover:text-white transition-all duration-500 group-hover:rotate-[12deg] group-hover:scale-110" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="font-heading font-bold text-xl mb-3 text-white group-hover:text-[var(--ue-primary)] transition-colors tracking-wide uppercase">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-200 transition-colors font-medium opacity-80 group-hover:opacity-100 px-2">
                                    {feature.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
