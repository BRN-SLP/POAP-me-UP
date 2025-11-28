"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            <div className="relative group">
                {/* Glow effect - enhanced for dark backgrounds */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-base via-optimism to-celo opacity-70 blur-md group-hover:opacity-100 transition-opacity duration-500" />

                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10"
                >
                    <defs>
                        <linearGradient id="logoGradient" x1="5" y1="5" x2="35" y2="35" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#0052FF" />
                            <stop offset="50%" stopColor="#FF0420" />
                            <stop offset="100%" stopColor="#FCFF52" />
                        </linearGradient>
                    </defs>

                    {/* Main S letter formed by wave - clean readable S shape */}
                    <path
                        d="M 30 12 
                           C 30 8, 26 5, 20 5 
                           C 14 5, 10 8, 10 12 
                           C 10 16, 14 18, 20 19 
                           C 26 20, 30 22, 30 26 
                           C 30 30, 26 33, 20 33 
                           C 14 33, 10 30, 10 26"
                        stroke="url(#logoGradient)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        fill="none"
                        className="group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Wave crest at top - small sparkles */}
                    <circle cx="32" cy="8" r="1.5" fill="#FCFF52" opacity="0.8"
                        className="group-hover:opacity-100 transition-opacity duration-300" />
                    <circle cx="35" cy="11" r="1" fill="#FF0420" opacity="0.6"
                        className="group-hover:opacity-100 transition-opacity duration-300" />
                </svg>
            </div>

            {showText && (
                <span className="font-heading font-bold text-2xl tracking-tight text-white">
                    SURGE me <span className="text-transparent bg-clip-text bg-gradient-to-r from-base via-optimism to-celo animate-gradient-text bg-[length:200%_auto]">UP</span>
                </span>
            )}
        </div>
    );
}
