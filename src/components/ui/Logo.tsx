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

                    {/* AI-Traced Wave S Logo with Smooth Bottom-Left Corner */}
                    <path
                        d="M 12 39
                           C 6 39, 2 35, 2 28
                           C 2 18, 12 12, 20 10
                           C 26 8.5, 32 11, 35 16
                           C 37 19, 37 24, 34 27
                           C 31 30, 26 29, 23 26
                           C 20 23, 22 19, 26 17
                           C 28 16, 30 16.5, 31 17.5
                           L 32 16
                           C 30 13, 25 12, 20 13
                           C 12 15, 6 22, 6 30
                           C 6 34, 9 37, 14 37
                           C 20 37, 26 34, 30 30
                           C 35 25, 36 18, 32 12
                           C 28 6, 20 6, 14 8
                           C 8 10, 4 14, 4 14
                           L 6 12
                           C 8 10, 14 6, 22 4
                           C 32 2, 40 10, 38 20
                           C 37 28, 30 34, 22 36
                           C 18 37, 15 39, 12 39
                           Z"
                        fill="url(#logoGradient)"
                        className="group-hover:scale-105 transition-transform duration-300 origin-center"
                    />

                    {/* Sparkle accent */}
                    <circle cx="36" cy="8" r="2" fill="#FCFF52" opacity="0.9"
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
