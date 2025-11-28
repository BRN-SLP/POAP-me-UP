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
                        <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#0052FF" />
                            <stop offset="50%" stopColor="#FF0420" />
                            <stop offset="100%" stopColor="#FCFF52" />
                        </linearGradient>
                    </defs>

                    {/* S shaped wave - smooth curves forming letter S with wave motion */}
                    <path
                        d="M28 8 C32 8, 35 11, 35 15 C35 19, 32 22, 27 23 C22 24, 18 24, 13 23 C8 22, 5 19, 5 15 C5 13, 6 11, 8 10"
                        stroke="url(#logoGradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                        className="group-hover:-translate-y-0.5 transition-transform duration-300"
                    />

                    {/* Lower S curve with wave */}
                    <path
                        d="M12 18 C8 18, 5 21, 5 25 C5 29, 8 32, 13 32 C18 32, 22 32, 27 31 C32 30, 35 27, 35 23 C35 21, 34 19, 32 18"
                        stroke="url(#logoGradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                        className="group-hover:translate-y-0.5 transition-transform duration-300"
                    />

                    {/* Wave crest accent - small energy burst at top */}
                    <path
                        d="M30 6 L32 4 M26 7 L27 5"
                        stroke="url(#logoGradient)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        opacity="0.6"
                        className="group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300"
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
