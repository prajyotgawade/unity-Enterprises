"use client";
import Image from "next/image";
import { Target, Lightbulb } from "lucide-react";
import { useEffect, useRef } from "react";

export default function WhoWeAre() {
    const visionRef = useRef<HTMLDivElement>(null);
    const missionRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("ue-stagger-visible");
                        entry.target.classList.add("ue-visible");
                    }
                });
            },
            { threshold: 0.18 }
        );
        if (visionRef.current) observer.observe(visionRef.current);
        if (missionRef.current) observer.observe(missionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-12 pt-12 md:py-20 md:pt-20 bg-[#0B1128] overflow-hidden transition-colors duration-300">
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                <div className="order-2 lg:order-1 animate-fade-in-up">
                    {/* ── Section Header — matches Contact Us style ── */}
                    <div className="ue-reveal mb-8 md:mb-10">
                        <span className="inline-block px-4 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">
                            About Company
                        </span>
                        <h2 className="text-3xl md:text-5xl font-heading font-extrabold uppercase tracking-wider text-white leading-tight">
                            ABOUT US
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-[var(--ue-primary)] to-[#4ade80] rounded-full mt-4"></div>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-lg md:text-xl mb-6 md:mb-8 font-light">
                        Established in 1998 as an electrical maintenance service in Chiplun MIDC, we have evolved into <strong className="text-blue-400">UNITY ENTERPRISES</strong>—a trusted name in electrical engineering and advanced digital automation solutions. Today, we operate with a strong presence across the Mumbai Suburban MMR region and MIDC Lote Parshuram, Ratnagiri.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                        {/* Vision Card upgrade — more depth, interactive glow */}
                        <VisionMissionCard
                            ref={visionRef}
                            title="VISION"
                            description="To lead the future by enabling industries to grow faster through smart digitalization and automation."
                            icon={<Target size={28} />}
                            delayClass="ue-stagger-left"
                            accent="bg-blue-600"
                        />

                        {/* Mission Card upgrade — more depth, interactive glow */}
                        <VisionMissionCard
                            ref={missionRef}
                            title="MISSION"
                            description="To empower businesses with intelligent, technology-driven solutions that simplify operations, enhance customer experiences, and drive sustainable growth."
                            icon={<Lightbulb size={28} />}
                            delayClass="ue-stagger-right"
                            accent="bg-indigo-600"
                        />
                    </div>
                </div>

                <div className="relative order-1 lg:order-2 h-full min-h-[350px] md:min-h-[550px]">
                    <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl h-full border border-white/5 group bg-[#151e32]">
                        <Image
                            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070"
                            alt="Industrial Engineering"
                            fill
                            className="object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1128]/80 via-transparent to-transparent mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity" />
                        
                        {/* Top corner accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--ue-primary)]/20 blur-[60px] rounded-full" />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-blue-600/10 rounded-full -z-10 blur-3xl opacity-40 animate-pulse" />
                    <div className="absolute -top-12 -left-12 w-80 h-80 bg-teal-500/10 rounded-full -z-10 blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1.5s' }} />
                </div>
            </div>
        </section>
    );
}

const VisionMissionCard = ({ ref, title, description, icon, delayClass, accent }: any) => {
    return (
        <div
            ref={ref}
            className={`${delayClass} p-8 md:p-10 rounded-3xl transition-all duration-500 group flex flex-col h-full hover:shadow-2xl border border-white/10 relative bg-[#151e32]/40 backdrop-blur-xl overflow-hidden hover:border-white/20 hover:-translate-y-2`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
            
            <div className={`w-16 h-16 ${accent} bg-opacity-20 text-white rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-all duration-500 shadow-lg relative z-10`}>
                <div className={`absolute inset-0 ${accent} blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full`} />
                {icon}
            </div>

            <h3 className="text-2xl font-heading font-black text-white mb-4 tracking-wider relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                {title}
            </h3>
            
            <div className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-transparent mb-6 relative z-10 opacity-60 group-hover:w-16 group-hover:opacity-100 transition-all duration-300" />

            <p className="text-gray-300 leading-relaxed text-base font-light opacity-80 group-hover:opacity-100 transition-opacity relative z-10">
                {description}
            </p>

            {/* Subtle Gradient Glow */}
            <div className={`absolute -bottom-10 -right-10 w-32 h-32 ${accent} opacity-5 blur-3xl rounded-full transition-opacity duration-500 group-hover:opacity-20`} />
        </div>
    );
};