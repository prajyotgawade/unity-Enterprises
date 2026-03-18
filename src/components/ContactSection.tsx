"use client";

import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-12 md:py-20 bg-[#0B1128] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-10 md:mb-16 animate-fade-in-up">
                    <h4 className="text-blue-400 font-bold uppercase tracking-wider mb-2">Get In Touch</h4>
                    <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white">
                        Contact Us
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Contact Details */}
                    <div className="space-y-8">
                        <div className="p-6 md:p-8 bg-[#151e32] rounded-2xl shadow-sm border border-blue-900/20">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Phone className="text-blue-400 shrink-0 w-6 h-6" />
                                    <div>
                                        <h4 className="font-bold text-white">Phone Support</h4>
                                        <p className="text-gray-400 mt-1">+91 89286 91044</p>
                                        <p className="text-gray-400">+91 86239 25697</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Mail className="text-blue-400 shrink-0 w-6 h-6" />
                                    <div>
                                        <h4 className="font-bold text-white">Email Us</h4>
                                        <p className="text-gray-400 mt-1">Sales@unitytech.in</p>
                                        <p className="text-gray-400">Unityenterprises36@gmail.com</p>
                                        <p className="text-gray-400">Jitesh@unitytech.in</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <MapPin className="text-blue-400 shrink-0 w-6 h-6" />
                                    <div>
                                        <h4 className="font-bold text-white">Locations</h4>
                                        <div className="mt-2 space-y-2">
                                            <p className="text-gray-400">
                                                <strong className="text-white">Mumbai:</strong> A/36, New Seva Society, Datar Colony, Kurla (W), Mumbai - 400070
                                            </p>
                                            <p className="text-gray-400">
                                                <strong className="text-white">Regd. Office:</strong> 344B, Walope, Chiplun, Ratnagiri - 415605
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-6 md:p-10 bg-[#151e32] rounded-xl shadow-lg border border-blue-900/20 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-500"></div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Send an Inquiry</h3>
                        <form className="space-y-4 md:space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                                <input type="text" placeholder="Your Name" className="w-full p-3 md:p-4 bg-[#1e293b] rounded-lg text-white border border-slate-700 focus:outline-none focus:border-blue-500 focus:bg-[#0B1128] transition-all placeholder:text-gray-400" />
                                <input type="text" placeholder="Company Name" className="w-full p-3 md:p-4 bg-[#1e293b] rounded-lg text-white border border-slate-700 focus:outline-none focus:border-blue-500 focus:bg-[#0B1128] transition-all placeholder:text-gray-400" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                                <input type="email" placeholder="Email Address" className="w-full p-3 md:p-4 bg-[#1e293b] rounded-lg text-white border border-slate-700 focus:outline-none focus:border-blue-500 focus:bg-[#0B1128] transition-all placeholder:text-gray-400" />
                                <input type="tel" placeholder="Phone Number" className="w-full p-3 md:p-4 bg-[#1e293b] rounded-lg text-white border border-slate-700 focus:outline-none focus:border-blue-500 focus:bg-[#0B1128] transition-all placeholder:text-gray-400" />
                            </div>
                            <select defaultValue="" className="w-full p-3 md:p-4 bg-[#1e293b] rounded-lg text-white border border-slate-700 focus:outline-none focus:border-blue-500 focus:bg-[#0B1128] transition-all appearance-none cursor-pointer">
                                <option value="" disabled className="text-gray-400">Service Interested In</option>
                                <option value="electrical">Electrical Engineering</option>
                                <option value="digital">Digital & AI Solutions</option>
                                <option value="maintenance">Maintenance Services</option>
                            </select>
                            <textarea rows={4} placeholder="Your Message" className="w-full p-3 md:p-4 bg-[#1e293b] rounded-lg text-white border border-slate-700 focus:outline-none focus:border-blue-500 focus:bg-[#0B1128] transition-all placeholder:text-gray-400"></textarea>

                            <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                                Send Inquiry
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
