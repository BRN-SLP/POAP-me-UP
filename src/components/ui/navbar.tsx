"use client";

import Link from "next/link";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/60">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-base via-optimism to-celo opacity-70 blur group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative h-10 w-10 rounded-full bg-black border border-white/10 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-base/20 via-optimism/20 to-celo/20" />
                        </div>
                    </div>
                    <span className="font-heading font-bold text-2xl tracking-tight text-white">
                        POAP me <span className="text-gradient-base">UP</span>
                    </span>
                </Link>

                {/* Right Side: Navigation & Connect */}
                <div className="flex items-center gap-8">
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/generator" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                            Generator
                        </Link>
                        <Link href="/about" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                            About
                        </Link>
                    </div>

                    <div className="pl-4 border-l border-white/10">
                        <appkit-button />
                    </div>
                </div>
            </div>
        </nav>
    );
}
