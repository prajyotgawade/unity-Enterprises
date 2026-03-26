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
                <div className="absolute top-6 left-4 right-4 md:top-12 z-40 pointer-events-none flex justify-center">
                    <div className="relative backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.4)] rounded-2xl md:rounded-3xl py-4 px-6 md:py-6 md:px-16 flex flex-col items-center justify-center text-center overflow-hidden">
                        {/* Subtle Shimmer inside the glass */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[ue-shimmer_2s_infinite] skew-x-12"></div>

                        <h1 className="text-base sm:text-lg md:text-2xl lg:text-4xl font-heading font-black text-white tracking-tight uppercase drop-shadow-2xl leading-tight max-w-4xl">
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
                        <div className="absolute inset-0 bg-[#0B1128] ue-vignette">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                priority={index === currentSlide}
                                className="object-cover transition-transform duration-[15s] ease-linear scale-105 group-hover:scale-110 mix-blend-screen opacity-90"
                                sizes="100vw"
                                quality={90}
                            />
                            {/* Consistent Overlay: Same dark-to-transparent fade for all devices as requested */}
                            <div className="absolute inset-0 bg-gradient-to-l from-[#0f172a]/95 via-[#0f172a]/50 to-transparent border-t border-white/5 z-10"></div>
                        </div>

                        {/* Content Overlay - Hidden instantly when not active to prevent overlap */}
                        <div className={`absolute inset-0 flex items-center justify-center md:justify-end z-20 pointer-events-none ${index === currentSlide ? "opacity-100" : "opacity-0 invisible"}`}>
                            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-center md:justify-end h-full pt-52 pb-20 md:py-20"> {/* Further increased top padding for mobile to fix overlap */}

                                {/* Mobile Layout: Full Content Visibility */}
                                <div className={`w-full md:hidden flex flex-col items-center justify-center text-center space-y-4 pointer-events-auto ${index === currentSlide ? "flex" : "hidden"}`}>
                                    <div className="space-y-2">
                                        <h2 className="text-2xl sm:text-3xl font-heading font-bold uppercase tracking-wider text-[var(--ue-primary)] leading-tight drop-shadow-md">
                                            {slide.title}
                                        </h2>
                                        <p className="text-gray-100 text-base sm:text-lg font-light leading-relaxed max-w-md drop-shadow-sm">
                                            {slide.subtitle}
                                        </p>
                                    </div>

                                    {/* Added Points for Mobile */}
                                    <div className="ue-hero-glass w-full max-w-[280px] mx-auto py-3 px-4">
                                        <ul className="space-y-2 text-left">
                                            {slide.points.map((point, i) => (
                                                <li key={i} className="ue-seq-item flex items-start gap-2">
                                                    <span className="hex-bullet mt-1 flex-shrink-0 w-3.5 h-3.5"></span>
                                                    <span className="text-white font-semibold text-xs sm:text-sm leading-tight drop-shadow-md">
                                                        {point}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Description always visible as requested */}
                                    <p className="text-gray-300 text-[11px] sm:text-xs leading-relaxed max-w-xs mx-auto opacity-80 pb-4">
                                        {slide.description}
                                    </p>
                                </div>


                                {/* Desktop Layout: Right aligned, Detailed List */}
                                <div className={`hidden md:flex w-full md:max-w-2xl text-white space-y-10 animate-fadeInRight pointer-events-auto flex-col justify-center items-start text-left ml-auto ${index === currentSlide ? "opacity-100" : "opacity-0 invisible"}`}>

                                    {/* Dynamic Points List - Hidden on Mobile */}
                                    <div className="ue-hero-glass relative pl-6 w-full py-5 px-6">
                                        {/* Vertical linking line */}
                                        <div className="absolute left-6 top-5 bottom-5 w-[2px] bg-sky-500/30 rounded-full"></div>

                                        <ul className="space-y-8 relative">
                                            {slide.points.map((point, i) => (
                                                <li key={i} className="ue-seq-item flex items-center gap-5 group/list">
                                                    {/* Connector Line */}
                                                    <div className="absolute left-0 w-8 h-[2px] bg-sky-500/30 group-hover/list:bg-sky-400 transition-colors duration-300"></div>

                                                    <div className="relative flex-shrink-0 z-10 ml-8">
                                                        {/* Hex Bullet */}
                                                        <div className="w-10 h-10 rounded-full bg-[var(--ue-primary)]/20 border border-[var(--ue-primary)]/40 flex items-center justify-center group-hover/list:scale-110 group-hover/list:shadow-[0_0_25px_rgba(0,104,255,0.6)] transition-all duration-300">
                                                            <span className="hex-bullet w-4 h-4"></span>
                                                        </div>
                                                    </div>
                                                    <span className="text-xl font-bold text-white tracking-wide drop-shadow-lg opacity-95 group-hover/list:opacity-100 transition-opacity">
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

                {/* Navigation Arrows - Vertically Centered on Sides for All Devices */}
                <button
                    onClick={prevSlide}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 md:p-3 rounded-full bg-white/5 md:bg-white/10 hover:bg-[var(--ue-primary)] text-white backdrop-blur-md transition-all border border-white/10 hover:scale-110 flex"
                >
                    <ChevronLeft size={22} className="md:w-7 md:h-7" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 md:p-3 rounded-full bg-white/5 md:bg-white/10 hover:bg-[var(--ue-primary)] text-white backdrop-blur-md transition-all border border-white/10 hover:scale-110 flex"
                >
                    <ChevronRight size={22} className="md:w-7 md:h-7" />
                </button>
            </div>

            {/* Bottom Highlight Boxes - Redesigned Premium Layout */}
            <div className="relative z-40 bg-[#0B1128] pt-12 pb-8 px-6 -mt-20 md:-mt-28">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            onClick={() => setCurrentSlide(index)}
                            className={`cursor-pointer p-8 md:p-12 rounded-[2.5rem] transition-all duration-500 relative overflow-hidden group border flex flex-col min-h-[280px] md:min-h-[380px]
                            ${currentSlide === index
                                    ? "bg-[#151e32] border-[var(--ue-primary)] shadow-[0_30px_60px_rgba(0,104,255,0.2)] -translate-y-6"
                                    : "bg-[#0f1830]/60 border-white/5 hover:border-white/10 hover:-translate-y-3 opacity-80 hover:opacity-100"
                                }`}
                        >
                            {/* Card Decorative Elements */}
                            <div className={`absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl transition-opacity duration-500 ${currentSlide === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                            <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[var(--ue-primary)] to-transparent transition-all duration-500 ${currentSlide === index ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-75"}`} />

                            <div className="relative z-10 flex flex-col h-full pt-4">
                                <h3 className={`text-2xl md:text-3xl font-heading font-bold uppercase tracking-wider mb-8 transition-all ${currentSlide === index ? "text-white" : "text-gray-400 group-hover:text-white"
                                    }`}>
                                    {slide.title}
                                </h3>

                                {/* Restored List with Premium Bullets */}
                                <ul className="space-y-4 mb-6 flex-grow text-left">
                                    {slide.points.slice(0, 4).map((point, i) => (
                                        <li key={i} className="flex gap-4 text-base md:text-lg font-medium leading-tight text-gray-300 items-start group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                                            <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 transition-colors ${currentSlide === index ? "bg-[var(--ue-primary)] shadow-[0_0_12px_var(--ue-primary)]" : "bg-white/20 group-hover:bg-white/40"}`}></span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                {/* Selected Indicator Line (Instead of button) */}
                                <div className={`mt-auto h-1 w-full bg-blue-900/20 rounded-full overflow-hidden transition-opacity duration-300 ${currentSlide === index ? "opacity-100" : "opacity-0"}`}>
                                    <div className="h-full bg-[var(--ue-primary)] animate-[ue-shimmer_3s_infinite]" style={{ width: "100%" }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
