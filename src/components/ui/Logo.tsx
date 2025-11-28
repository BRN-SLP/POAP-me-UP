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
                        <linearGradient id="logoGradient" x1="0" y1="40" x2="40" y2="0" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#0052FF" />
                            <stop offset="25%" stopColor="#6644CC" />
                            <stop offset="50%" stopColor="#CC3366" />
                            <stop offset="70%" stopColor="#FF6633" />
                            <stop offset="100%" stopColor="#FCFF52" />
                        </linearGradient>
                    </defs>

                    {/* Refined Wave S - Solid shape with elegant rounded bottom-left */}
                    <path
                        d="M 4 28
                           Q 4 38, 14 38
                           Q 24 38, 30 32
                           Q 36 26, 30 20
                           Q 24 14, 30 8
                           Q 36 2, 28 2
                           Q 20 2, 14 8
                           Q 8 14, 14 20
                           Q 20 26, 14 32
                           Q 10 35, 6 30
                           Q 4 28, 4 28
                           Z"
                        fill="url(#logoGradient)"
                        className="group-hover:scale-105 transition-transform duration-300 origin-center"
                    />

                    {/* Wave crest sparkle */}
                    <circle cx="32" cy="6" r="2" fill="#FCFF52" opacity="0.9"
                        className="group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
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
