"use client";

import Link from "next/link";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { Wallet } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Navbar() {
    const { open } = useAppKit();
    const { address, isConnected } = useAppKitAccount();
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(navRef.current, {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.2
            });
        });
        return () => ctx.revert();
    }, []);

    const formatAddress = (addr: string) => {
        return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
    };

    return (
        <nav ref={navRef} className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
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
                <div className="flex items-center gap-4">
                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-1">
                        <Link
                            href="/generator"
                            className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                        >
                            Generator
                        </Link>
                        <Link
                            href="/about"
                            className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                        >
                            About
                        </Link>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block h-6 w-px bg-white/10" />

                    {/* Connect Wallet Button */}
                    <button
                        onClick={() => open()}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
                    >
                        <Wallet className="w-3.5 h-3.5" />
                        <span>
                            {isConnected && address ? formatAddress(address) : "Connect"}
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
