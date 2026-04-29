"use client";

import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1128] text-gray-300 py-20 border-t border-white/10 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full -mr-48 -mt-48" />

      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

        {/* Brand & Mission */}
        <div className="space-y-6">
          <div>
            <h3 className="text-white font-heading font-bold text-2xl mb-2 tracking-wider">UNITY ENTERPRISES</h3>
            <div className="w-12 h-1 bg-blue-500 rounded-full" />
          </div>
          <p className="text-sm leading-relaxed opacity-70 max-w-xs">
            Established in 1998, delivering excellence in electrical engineering, advanced automation, and AI-driven industrial solutions across Mumbai and Ratnagiri.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="https://www.linkedin.com/in/unity-enterprises-4050412a4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-semibold text-blue-400 hover:text-white transition-all duration-300 group"
              title="Follow us on LinkedIn"
            >
              <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-[#0077b5] group-hover:border-[#0077b5] transition-all duration-300">
                <Linkedin size={20} className="text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <span>Follow us on LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link href="/" className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover:bg-blue-500 transition-colors" /> Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover:bg-blue-500 transition-colors" /> About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover:bg-blue-500 transition-colors" /> Contact Us</Link></li>
            <li><Link href="/#services" className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover:bg-blue-500 transition-colors" /> Our Services</Link></li>
          </ul>
        </div>

        {/* Core Expertise (SEO Keywords) */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg uppercase tracking-widest">Solutions</h4>
          <ul className="space-y-4 text-sm opacity-70">
            <li className="hover:text-white transition-colors cursor-default">Electrical Engineering</li>
            <li className="hover:text-white transition-colors cursor-default">Industrial AI & IoT</li>
            <li className="hover:text-white transition-colors cursor-default">PLC Automation</li>
            <li className="hover:text-white transition-colors cursor-default">Solar Energy Systems</li>
            <li className="hover:text-white transition-colors cursor-default">Digitalization & SCADA</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg uppercase tracking-widest">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3 group">
              <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
              <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                A/36, Datar Colony, Kurla (W), Mumbai - 400070
              </span>
            </li>
            <li className="flex items-center gap-3 group">
              <Phone size={18} className="text-blue-400 flex-shrink-0" />
              <a href="tel:+918928691044" className="opacity-70 group-hover:opacity-100 transition-opacity">+91 89286 91044</a>
            </li>
            <li className="flex items-center gap-3 group">
              <Mail size={18} className="text-blue-400 flex-shrink-0" />
              <a href="mailto:Sales@unitytech.in" className="opacity-70 group-hover:opacity-100 transition-opacity">Sales@unitytech.in</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1400px] mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <p className="text-xs opacity-40">
          © {new Date().getFullYear()} Unity Enterprises. All rights reserved.
          <span className="hidden md:inline ml-4 border-l border-white/10 pl-4">Industrial Excellence Since 1998</span>
        </p>
        <div className="flex gap-6 text-[10px] uppercase tracking-[0.2em] opacity-30 font-bold">
          <span>Mumbai</span>
          <span>•</span>
          <span>Ratnagiri</span>
          <span>•</span>
          <span>Worldwide</span>
        </div>
      </div>
    </footer>
  );
}
