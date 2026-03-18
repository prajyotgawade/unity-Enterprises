"use client";

import { Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Rajesh Kumar",
        role: "Plant Manager, Tata Steel",
        content: "Unity Enterprises transformed our electrical infrastructure. Their panels are top-notch and the support is unmatched.",
        rating: 5,
    },
    {
        id: 2,
        name: "Sarah Williams",
        role: "Operations Head, TechFlow",
        content: "The IoT dashboard they implemented gave us visibility we never had before. Truly innovative solutions.",
        rating: 5,
    },
    {
        id: 3,
        name: "Amit Patel",
        role: "Director, Apex Mnfg",
        content: "Reliable, professional, and always on time. Highly recommend their maintenance services.",
        rating: 4,
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-[#0B1128] border-t border-white/10">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-5xl font-heading font-light text-white mb-6">
                        Trusted by Industry Leaders
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonials.map((t) => (
                        <div key={t.id} className="bg-[#151e32] p-10 rounded-xl border border-white/5 hover:border-blue-400 transition-all shadow-sm hover:shadow-lg group">
                            <div className="flex gap-1 mb-6 text-blue-400">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={20} fill="currentColor" className="opacity-80" />
                                ))}
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">&quot;{t.content}&quot;</p>
                            <div>
                                <h4 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">{t.name}</h4>
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
