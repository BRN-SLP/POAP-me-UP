"use client";

import Link from "next/link";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { Wallet } from "lucide-react";

export function Navbar() {
    const { open } = useAppKit();
    const { address, isConnected } = useAppKitAccount();

    const formatAddress = (addr: string) => {
        return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
    };

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
                <div className="flex items-center gap-6">
                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="/generator"
                            className="relative text-sm font-medium text-white/70 hover:text-white transition-all duration-300 group"
                        >
                            <span className="relative z-10">Generator</span>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-base to-optimism group-hover:w-full transition-all duration-300" />
                        </Link>
                        <Link
                            href="/about"
                            className="relative text-sm font-medium text-white/70 hover:text-white transition-all duration-300 group"
                        >
                            <span className="relative z-10">About</span>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-optimism to-celo group-hover:w-full transition-all duration-300" />
                        </Link>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block h-8 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                    {/* Connect Wallet Button */}
                    <button
                        onClick={() => open()}
                        className="group relative px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20"
                    >
                        {/* Gradient background */}
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-base via-optimism to-celo opacity-90 group-hover:opacity-100 transition-opacity" />

                        {/* Inner content */}
                        <div className="relative flex items-center gap-2 text-white">
                            <Wallet className="w-4 h-4" />
                            <span className="font-semibold">
                                {isConnected && address ? formatAddress(address) : "Connect Wallet"}
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
}
