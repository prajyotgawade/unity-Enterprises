"use client";

import { Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1128] text-gray-300 py-16 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Brand & Copyright */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-heading font-bold text-2xl mb-2">UNITY ENTERPRISES</h3>
          <p className="text-sm opacity-60">© 2025 Unity Enterprises. All rights reserved.</p>
        </div>

        {/* Links */}
        <ul className="flex flex-wrap justify-center gap-8 text-[15px] font-normal tracking-wide">
          <li><Link href="/" className="hover:text-[var(--ue-primary)] transition-colors">Home</Link></li>
          <li><Link href="/about" className="hover:text-[var(--ue-primary)] transition-colors">About Us</Link></li>
          <li><Link href="/electrical" className="hover:text-[var(--ue-primary)] transition-colors">Electrical</Link></li>
          <li><Link href="/digital" className="hover:text-[var(--ue-primary)] transition-colors">Digital & AI</Link></li>
        </ul>

        {/* Socials */}
        <div className="flex gap-4">
          <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-[var(--ue-primary)] hover:text-white transition-all border border-white/10">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
