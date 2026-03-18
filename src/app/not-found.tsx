"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-[var(--ue-bg)]">
            <div className="space-y-6">
                {/* Animated 404 Text */}
                <h1 className="text-9xl font-extrabold text-[var(--ue-primary)] opacity-20 tracking-widest select-none animate-pulse">
                    404
                </h1>

                <div className="-mt-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Page Not Found
                    </h2>
                    <p className="text-xl text-slate-400 max-w-lg mx-auto">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                </div>

                <div className="pt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--ue-primary)] text-white rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30"
                    >
                        <Home size={20} />
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                    >
                        <ArrowLeft size={20} />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}
