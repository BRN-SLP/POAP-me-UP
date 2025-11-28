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

                    {/* Ocean wave rising and forming S-like shape with crest curl */}
                    <path
                        d="M 4 38
                           L 4 28
                           Q 6 24, 10 22
                           Q 14 20, 18 19
                           Q 22 18, 26 18
                           Q 30 18, 32 16
                           Q 34 14, 34 10
                           Q 34 6, 30 4
                           Q 26 2, 22 3
                           Q 18 4, 16 8
                           L 14 12
                           Q 12 16, 10 18
                           Q 8 20, 6 22
                           L 6 26
                           Q 8 24, 12 23
                           Q 16 22, 20 22
                           Q 24 22, 28 24
                           Q 32 26, 34 30
                           Q 36 34, 35 36
                           Q 34 38, 32 38
                           Q 30 38, 28 36
                           Q 26 34, 22 32
                           Q 18 30, 14 32
                           Q 10 34, 8 36
                           L 6 38
                           Z"
                        fill="url(#logoGradient)"
                        className="group-hover:scale-105 transition-transform duration-300 origin-center"
                    />

                    {/* Wave crest sparkle */}
                    <circle cx="36" cy="8" r="2.5" fill="#FCFF52" opacity="0.95"
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
