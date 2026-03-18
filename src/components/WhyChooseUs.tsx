"use client";

import { ShieldCheck, MonitorCheck, Layers, BarChart3, UserCheck, Settings } from "lucide-react";

export default function WhyChooseUs() {
    const features = [
        { icon: ShieldCheck, title: "Quality Assured", text: "100% Tested & Verified" },
        { icon: MonitorCheck, title: "Digital Ready", text: "3D Design, PLC & IoT Compatible" },
        { icon: Layers, title: "Seamless Integration", text: "Works with PLC, SCADA & IoT" },
        { icon: BarChart3, title: "Intelligent Dashboards", text: "Real-time Insights" },
        { icon: UserCheck, title: "User-Friendly", text: "Ergonomic Design" },
        { icon: Settings, title: "Reliable Supply", text: "Strong Network & Parts" },
    ];

    return (
        <section id="why-choose-us" className="py-20 bg-white dark:bg-[#0B1128] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4 text-slate-900 dark:text-white">
                        Why Choose Unity Enterprises?
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-4 group p-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-[#151e32] transition-all duration-300 border border-transparent hover:border-slate-100 dark:hover:border-blue-900/30">
                            <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-[#1e293b] flex items-center justify-center group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-colors duration-300 shadow-sm">
                                <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1 text-slate-900 dark:text-white">{feature.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-gray-200">{feature.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
