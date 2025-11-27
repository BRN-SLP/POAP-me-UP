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

                    {/* Hexagon Background */}
                    <path
                        d="M20 2L35.5885 11V29L20 38L4.41154 29V11L20 2Z"
                        fill="#050505"
                        stroke="url(#logoGradient)"
                        strokeWidth="1.5"
                    />

                    {/* Up Arrow */}
                    <path
                        d="M20 28V12M20 12L13 19M20 12L27 19"
                        stroke="url(#logoGradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:-translate-y-1 transition-transform duration-300"
                    />
                </svg>
            </div>

            {showText && (
                <span className="font-heading font-bold text-2xl tracking-tight text-white">
                    POAP me <span className="text-transparent bg-clip-text bg-gradient-to-r from-base via-optimism to-celo animate-gradient-text bg-[length:200%_auto]">UP</span>
                </span>
            )}
        </div>
    );
}
