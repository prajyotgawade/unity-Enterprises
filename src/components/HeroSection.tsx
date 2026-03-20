"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { slidesData as slides } from "../config/data";

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000); // 6 seconds per slide
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <section className="relative w-full bg-[var(--ue-secondary)]">

            {/* Slider Container - Responsive Height */}
            <div className="relative w-full min-h-[650px] md:h-[700px] overflow-hidden flex flex-col">

                {/* Premium Glassmorphism Tagline Overlay */}
                <div className="absolute top-8 left-4 right-4 md:top-12 z-40 pointer-events-none flex justify-center">
                    <div className="relative backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-3xl py-6 px-8 md:px-16 flex flex-col items-center justify-center text-center overflow-hidden">
                        {/* Subtle Shimmer inside the glass */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[ue-shimmer_2s_infinite] skew-x-12"></div>

                        <h1 className="text-lg md:text-2xl lg:text-4xl font-heading font-black text-white tracking-tight uppercase drop-shadow-2xl leading-tight max-w-4xl">
                            “A Brighter Tomorrow Begins With Today&apos;s Innovation”
                        </h1>
                    </div>
                </div>

                {/* Slides */}
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                    >
                        {/* Background Image (Optimized Next.js Image) */}
                        <div className="absolute inset-0 bg-[#0B1128]">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                priority={index === 0}
                                className="object-cover transition-transform duration-[15s] ease-linear scale-105 group-hover:scale-110 mix-blend-screen opacity-90"
                                sizes="100vw"
                                quality={90}
                            />
                            {/* Overlay: Darker on mobile for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1128]/95 via-[#0f172a]/70 to-[#0B1128]/95 md:bg-gradient-to-l md:from-[#0f172a]/95 md:via-[#0f172a]/50 md:to-transparent border-t border-white/5 z-10"></div>
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center md:justify-end z-20 pointer-events-none">
                            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-center md:justify-end h-full pt-32 pb-20 md:py-20"> {/* Added top padding for mobile */}

                                {/* Mobile Layout: Centered, Simplified */}
                                <div className="w-full md:hidden flex flex-col items-center justify-center text-center space-y-6 pointer-events-auto">
                                    <h2 className="text-4xl font-heading font-bold uppercase tracking-wider text-[var(--ue-primary)] leading-tight drop-shadow-md">
                                        {slide.title}
                                    </h2>
                                    <p className="text-gray-100 text-lg font-light leading-relaxed max-w-md drop-shadow-sm">
                                        {slide.subtitle}
                                    </p>
                                    <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto hidden sm:block">
                                        {slide.description}
                                    </p>

                                    <a href={slide.ctaLink} className="mt-6 px-8 py-3.5 bg-[var(--ue-primary)] text-white font-bold rounded-full shadow-lg hover:bg-blue-600 active:scale-95 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wide text-sm flex items-center gap-2 group">
                                        {slide.ctaText} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </a>
                                </div>


                                {/* Desktop Layout: Right aligned, Detailed List */}
                                <div className="hidden md:flex w-full md:max-w-2xl text-white space-y-10 animate-fadeInRight pointer-events-auto flex-col justify-center items-start text-left ml-auto">

                                    {/* Dynamic Points List - Hidden on Mobile */}
                                    <div className="relative pl-6 w-full">
                                        {/* Vertical linking line */}
                                        <div className="absolute left-0 top-5 bottom-5 w-[2px] bg-sky-500/30 rounded-full"></div>

                                        <ul className="space-y-8 relative">
                                            {slide.points.map((point, i) => (
                                                <li key={i} className="flex items-center gap-5 group/list">
                                                    {/* Connector Line */}
                                                    <div className="absolute left-0 w-8 h-[2px] bg-sky-500/30 group-hover/list:bg-sky-400 transition-colors duration-300"></div>

                                                    <div className="relative flex-shrink-0 z-10 ml-8">
                                                        {/* Dot Container */}
                                                        <div className="w-10 h-10 rounded-full bg-[var(--ue-primary)] border-[3px] border-[#0B1128] shadow-[0_0_20px_rgba(0,104,255,0.4)] flex items-center justify-center group-hover/list:scale-110 group-hover/list:shadow-[0_0_25px_rgba(0,104,255,0.6)] transition-all duration-300">
                                                            <div className="w-2.5 h-2.5 rounded-full bg-white shadow-sm"></div>
                                                        </div>
                                                    </div>
                                                    <span className="text-2xl font-bold text-white tracking-wide shadow-black drop-shadow-md opacity-90 group-hover:opacity-100 transition-opacity">
                                                        {point}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Arrows - Adjusted for Mobile */}
                <div className="absolute bottom-32 right-6 flex gap-4 z-30 md:hidden">
                    <button
                        onClick={prevSlide}
                        className="p-3 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-[var(--ue-primary)] text-white backdrop-blur-md transition-all border border-white/10 hover:scale-110 hidden md:flex"
                >
                    <ChevronLeft size={28} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-[var(--ue-primary)] text-white backdrop-blur-md transition-all border border-white/10 hover:scale-110 hidden md:flex"
                >
                    <ChevronRight size={28} />
                </button>
            </div>

            {/* Bottom Highlight Boxes - Restored with Lists & CTA */}
            <div className="relative z-40 bg-[#151e32] pt-6 pb-12 px-4 -mt-20 md:-mt-24">

                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            onClick={() => setCurrentSlide(index)}
                            className={`cursor-pointer p-6 md:p-8 rounded-2xl transition-all duration-300 relative overflow-hidden group border-2 flex flex-col
                            ${currentSlide === index
                                    ? "bg-[#1e293b] border-[var(--ue-primary)] shadow-[0_0_30px_rgba(56,189,248,0.2)] -translate-y-0 md:-translate-y-4"
                                    : "bg-[#151e32] border-slate-700 hover:border-slate-500 hover:-translate-y-2 opacity-90"
                                }`}
                        >
                            {/* Card Background Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-500 ${currentSlide === index ? "opacity-100" : "group-hover:opacity-50"}`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <h3 className={`text-xl md:text-2xl font-bold uppercase tracking-wider mb-4 transition-colors text-center ${currentSlide === index ? "text-[var(--ue-primary)]" : "text-white"
                                    }`}>
                                    {slide.title}
                                </h3>
                                {/* Restored List */}
                                <ul className="space-y-2 text-sm font-medium leading-relaxed text-white mb-6 flex-grow">
                                    {slide.points.map((point, i) => (
                                        <li key={i} className="flex gap-3 text-left items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                                            <span className={`${currentSlide === index ? "text-yellow-400" : "text-white/50 group-hover:text-white/80 transition-colors"}`}>•</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA in Card */}
                                <div className={`mt-auto pt-5 border-t border-white/10 w-full text-center transition-opacity duration-300 ${currentSlide === index ? "opacity-100" : "opacity-50 group-hover:opacity-100"}`}>
                                    <span className="text-sm font-bold text-[var(--ue-primary)] inline-flex items-center gap-2 uppercase tracking-wider group-hover:text-blue-400 transition-colors">
                                        {slide.ctaText} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
