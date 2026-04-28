"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle, ChevronDown } from "lucide-react";

export default function ContactSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Staggered scroll reveal — same IntersectionObserver pattern as WhyChooseUs
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



    // Shared input class
    const inputCls = "w-full p-3 md:p-4 bg-[#0d1528] rounded-xl text-white border border-slate-700/60 focus:outline-none focus:border-blue-500 focus:bg-[#0B1128] focus:shadow-[0_0_0_3px_rgba(0,104,255,0.15)] transition-all placeholder:text-gray-500 text-sm";

    return (
        <section ref={sectionRef} id="contact" className="pt-8 md:pt-10 pb-12 md:pb-16 bg-[#0B1128] transition-colors duration-300 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">

                {/* ── Section Header ── */}
                <div className="text-center mb-10 md:mb-12 ue-reveal animate-fade-in-up">
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-widest mb-3">
                        Get In Touch
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white">
                        Contact Us
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--ue-primary)] to-[#4ade80] mx-auto rounded-full mt-4"></div>
                </div>

                {/* ── Same 2-column grid layout ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">

                    {/* ── LEFT: Contact Details ── */}
                    <div className="ue-reveal ue-reveal-d1 h-full">
                        <div
                            className="relative p-7 md:p-8 bg-[#0f1830]/60 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 overflow-hidden h-full shadow-xl"
                        >
                            {/* Gradient top accent line */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"></div>

                            {/* Decorative glow orb — bottom corner only */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/8 rounded-full blur-2xl pointer-events-none"></div>

                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 relative z-10">
                                Contact Information
                            </h3>

                            <div className="space-y-7 relative z-10">

                                {/* Phone */}
                                <div className="flex items-start gap-4 group">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-900/20 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:shadow-[0_0_18px_rgba(0,104,255,0.4)] transition-all duration-300">
                                        <Phone className="text-blue-400 group-hover:text-white transition-colors w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">Phone Support</h4>
                                        <a href="tel:+918928691044" className="block text-gray-400 mt-1 hover:text-blue-400 transition-colors text-sm">+91 89286 91044</a>
                                        <a href="tel:+918623925697" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">+91 86239 25697</a>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent"></div>

                                {/* Email */}
                                <div className="flex items-start gap-4 group">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-900/20 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:shadow-[0_0_18px_rgba(0,104,255,0.4)] transition-all duration-300">
                                        <Mail className="text-blue-400 group-hover:text-white transition-colors w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">Email Us</h4>
                                        <a href="mailto:Sales@unitytech.in" className="block text-gray-400 mt-1 hover:text-blue-400 transition-colors text-sm">Sales@unitytech.in</a>
                                        <a href="mailto:Unityenterprises36@gmail.com" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">Unityenterprises36@gmail.com</a>
                                        <a href="mailto:Jitesh@unitytech.in" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">Jitesh@unitytech.in</a>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent"></div>

                                {/* Location */}
                                <div className="flex items-start gap-4 group">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-900/20 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:shadow-[0_0_18px_rgba(0,104,255,0.4)] transition-all duration-300">
                                        <MapPin className="text-blue-400 group-hover:text-white transition-colors w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">Locations</h4>
                                        <div className="mt-2 space-y-2">
                                            <p className="text-gray-400 text-sm">
                                                <strong className="text-white">Mumbai:</strong> A/36, New Seva Society, Datar Colony, Kurla (W), Mumbai - 400070
                                            </p>
                                            <p className="text-gray-400 text-sm">
                                                <strong className="text-white">Regd. Office:</strong> 344B, Walope, Chiplun, Ratnagiri - 415605
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT: Contact Form ── */}
                    <div
                        className="ue-reveal ue-reveal-d2 relative p-7 md:p-8 bg-[#0f1830]/60 rounded-2xl border border-white/5 hover:border-blue-500/30 overflow-hidden transition-all duration-300 h-full shadow-xl"
                    >
                        {/* Gradient top accent line */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-[#4ade80]"></div>

                        {/* Decorative glow orb — bottom corner only */}
                        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-600/8 rounded-full blur-2xl pointer-events-none"></div>

                        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 relative z-10">Send an Inquiry</h3>

                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center text-center py-12 relative z-10 animate-fade-in-up">
                                <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(74,222,128,0.2)]">
                                    <CheckCircle className="text-green-400 w-8 h-8" />
                                </div>
                                <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">Thank You!</h4>
                                <p className="text-gray-400 max-w-sm">
                                    Your inquiry has been sent successfully. Our team will get back to you shortly.
                                </p>
                            </div>
                        ) : (
                            <form
                                onSubmit={async (e) => {
                                    e.preventDefault();
                                    const form = e.currentTarget;
                                    const formData = new FormData(form);
                                    const data = Object.fromEntries(formData.entries());

                                    const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                                    if (btn) {
                                        btn.disabled = true;
                                        btn.innerText = "Sending...";
                                    }

                                    let isSuccess = false;
                                    try {
                                        const res = await fetch("/api/contact", {
                                            method: "POST",
                                            headers: { "Content-Type": "application/json" },
                                            body: JSON.stringify(data),
                                        });
                                        if (res.ok) {
                                            isSuccess = true;
                                            setIsSubmitted(true);
                                        } else {
                                            alert("Oops! Something went wrong. Please try again later.");
                                        }
                                    } catch (error) {
                                      console.error(error);
                                      alert("Error sending inquiry. Check your connection.");
                                    } finally {
                                        if (btn && !isSuccess) {
                                            btn.disabled = false;
                                            btn.innerHTML = "Send Inquiry <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-send'><line x1='22' y1='2' x2='11' y2='13'></line><polygon points='22 2 15 22 11 13 2 9 22 2'></polygon></svg>";
                                        }
                                    }
                                }}
                                className="space-y-4 md:space-y-5 relative z-10"
                            >
                                {/* Row 1: Name + Company */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                                    <input name="name" type="text" placeholder="Your Name" required className={inputCls} />
                                    <input name="company" type="text" placeholder="Company Name" className={inputCls} />
                                </div>

                                {/* Row 2: Email + Phone */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                                    <input name="email" type="email" placeholder="Email Address" required className={inputCls} />
                                    <input name="phone" type="tel" placeholder="Phone Number" required className={inputCls} />
                                </div>

                                {/* Service Select */}
                                <div className="relative group">
                                    <select name="service" defaultValue="" className={`${inputCls} appearance-none cursor-pointer pr-12 relative z-10`}>
                                        <option value="" disabled className="text-gray-400 font-medium">Service Interested In</option>
                                        <option value="electrical">Electrical Engineering</option>
                                        <option value="digitalization">Digitalization & AI</option>
                                        <option value="solar">Solar Energy Systems</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 group-hover:text-blue-400 group-focus-within:text-blue-500 transition-all duration-300 z-20">
                                        <ChevronDown size={18} strokeWidth={2.5} />
                                    </div>
                                </div>

                                {/* Message */}
                                <textarea name="message" rows={4} placeholder="Your Message" required className={`${inputCls} resize-none`}></textarea>

                                {/* Submit — shimmer + gradient CTA matching site style */}
                                <button
                                    type="submit"
                                    className="ue-shimmer-btn w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-full hover:from-blue-500 hover:to-blue-400 hover:shadow-[0_8px_32px_rgba(0,104,255,0.45)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Send Inquiry
                                    <Send size={18} />
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
