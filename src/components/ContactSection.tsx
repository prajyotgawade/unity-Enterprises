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
                                        <a href="tel:+918928691044" className="block text-gray-400 mt-1 hover:text-blue-400 transition-colors">+91 89286 91044</a>
                                        <a href="tel:+918623925697" className="block text-gray-400 hover:text-blue-400 transition-colors">+91 86239 25697</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Mail className="text-blue-400 shrink-0 w-6 h-6" />
                                    <div>
                                        <h4 className="font-bold text-white">Email Us</h4>
                                        <a href="mailto:Sales@unitytech.in" className="block text-gray-400 mt-1 hover:text-blue-400 transition-colors">Sales@unitytech.in</a>
                                        <a href="mailto:Unityenterprises36@gmail.com" className="block text-gray-400 hover:text-blue-400 transition-colors">Unityenterprises36@gmail.com</a>
                                        <a href="mailto:Jitesh@unitytech.in" className="block text-gray-400 hover:text-blue-400 transition-colors">Jitesh@unitytech.in</a>
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
                                
                                try {
                                    const res = await fetch("/api/contact", {
                                        method: "POST",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify(data),
                                    });
                                    if (res.ok) {
                                        alert("Inquiry Sent Successfully! We will get back to you soon.");
                                        form.reset();
                                    } else {
                                        alert("Oops! Something went wrong. Please try again later.");
                                    }
                                } catch (error) {
                                  console.error(error);
                                  alert("Error sending inquiry. Check your connection.");
                                } finally {
                                    if (btn) {
                                        btn.disabled = false;
                                        btn.innerHTML = "Send Inquiry <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-send'><line x1='22' y1='2' x2='11' y2='13'></line><polygon points='22 2 15 22 11 13 2 9 22 2'></polygon></svg>";
                                    }
                                }
                            }}
                            className="space-y-4 md:space-y-5"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                                <input name="name" type="text" placeholder="Your Name" required className="w-full p-3 md:p-4 bg-[#1e293b] rounded-lg text-white border border-slate-700 focus:outline-none focus:border-blue-500 focus:bg-[#0B1128] transition-all placeholder:text-gray-400" />
                                <input name="company" type="text" placeholder="Company Name" className="w-full p-3 md:p-4 bg-[#1e293b] rounded-lg text-white border border-slate-700 focus:outline-none focus:border-blue-500 focus:bg-[#0B1128] transition-all placeholder:text-gray-400" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                                <input name="email" type="email" placeholder="Email Address" required className="w-full p-3 md:p-4 bg-[#1e293b] rounded-lg text-white border border-slate-700 focus:outline-none focus:border-blue-500 focus:bg-[#0B1128] transition-all placeholder:text-gray-400" />
                                <input name="phone" type="tel" placeholder="Phone Number" required className="w-full p-3 md:p-4 bg-[#1e293b] rounded-lg text-white border border-slate-700 focus:outline-none focus:border-blue-500 focus:bg-[#0B1128] transition-all placeholder:text-gray-400" />
                            </div>
                            <select name="service" defaultValue="" className="w-full p-3 md:p-4 bg-[#1e293b] rounded-lg text-white border border-slate-700 focus:outline-none focus:border-blue-500 focus:bg-[#0B1128] transition-all appearance-none cursor-pointer">
                                <option value="" disabled className="text-gray-400">Service Interested In</option>
                                <option value="electrical">Electrical Engineering</option>
                                <option value="digital">Digital & AI Solutions</option>
                                <option value="maintenance">Maintenance Services</option>
                            </select>
                            <textarea name="message" rows={4} placeholder="Your Message" required className="w-full p-3 md:p-4 bg-[#1e293b] rounded-lg text-white border border-slate-700 focus:outline-none focus:border-blue-500 focus:bg-[#0B1128] transition-all placeholder:text-gray-400"></textarea>

                            <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
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
