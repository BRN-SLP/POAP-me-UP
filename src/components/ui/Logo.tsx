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
                {/* Glow effect */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-base via-optimism to-celo opacity-50 blur group-hover:opacity-80 transition-opacity duration-500" />

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
                            <stop offset="50%" stopColor="#FF0420" />
                            <stop offset="100%" stopColor="#FCFF52" />
                        </linearGradient>
                    </defs>

                    {/* Wave/Surge Shape forming upward motion */}
                    <path
                        d="M5 25C8 22 12 20 16 22C20 24 24 20 28 18C32 16 36 18 36 18L36 35L5 35Z"
                        fill="url(#logoGradient)"
                        opacity="0.3"
                        className="group-hover:opacity-40 transition-opacity duration-500"
                    />

                    {/* Main surge wave */}
                    <path
                        d="M5 20C10 15 15 12 20 15C25 18 30 12 35 10"
                        stroke="url(#logoGradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        className="group-hover:-translate-y-1 transition-transform duration-300"
                    />

                    {/* Energy burst/arrow up */}
                    <path
                        d="M20 15L20 5M20 5L16 9M20 5L24 9"
                        stroke="url(#logoGradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:-translate-y-2 transition-transform duration-300"
                    />
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
