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
                            <stop offset="25%" stopColor="#7744DD" />
                            <stop offset="50%" stopColor="#DD2255" />
                            <stop offset="75%" stopColor="#FF7733" />
                            <stop offset="100%" stopColor="#FCFF52" />
                        </linearGradient>
                    </defs>

                    {/* Wave forming S-shape based on approved design */}
                    <path
                        d="M 2 40
                           L 2 30
                           Q 2 22, 6 18
                           Q 10 14, 16 12
                           Q 22 10, 28 12
                           Q 32 14, 34 18
                           Q 36 22, 36 28
                           Q 36 32, 33 35
                           C 30 38, 26 38, 22 36
                           Q 18 34, 16 30
                           L 14 24
                           Q 12 18, 10 14
                           Q 8 10, 6 8
                           Q 4 6, 4 4
                           L 8 2
                           Q 12 0, 18 2
                           Q 24 4, 28 8
                           Q 32 12, 34 18
                           Q 36 24, 36 30
                           Q 36 34, 34 36
                           L 32 38
                           Q 28 40, 22 40
                           Q 16 40, 10 40
                           Q 6 40, 4 40
                           Z"
                        fill="url(#logoGradient)"
                        className="group-hover:scale-105 transition-transform duration-300 origin-center"
                    />

                    {/* Wave crest at top-right */}
                    <circle cx="37" cy="6" r="2.5" fill="#FCFF52" opacity="0.95"
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
