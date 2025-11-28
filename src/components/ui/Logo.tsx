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
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10"
                >
                    <defs>
                        <linearGradient id="logoGradient" x1="0" y1="100" x2="100" y2="0" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#0052FF" />
                            <stop offset="25%" stopColor="#7744DD" />
                            <stop offset="50%" stopColor="#FF0420" />
                            <stop offset="75%" stopColor="#FF8844" />
                            <stop offset="100%" stopColor="#FCFF52" />
                        </linearGradient>
                    </defs>

                    {/* Traced wave from approved design with smooth bottom-left */}
                    <path
                        d="M 10 100
                           C 10 100, 10 95, 10 88
                           C 10 80, 12 72, 16 66
                           C 20 60, 26 56, 34 54
                           C 42 52, 50 52, 58 54
                           C 66 56, 72 60, 76 66
                           C 80 72, 82 80, 82 88
                           C 82 94, 80 98, 76 100
                           
                           C 74 98, 70 94, 66 88
                           C 62 82, 58 74, 54 66
                           C 50 58, 46 50, 42 42
                           C 38 34, 34 26, 30 20
                           C 26 14, 22 10, 18 8
                           C 14 6, 12 6, 12 8
                           
                           C 14 8, 18 10, 24 14
                           C 30 18, 36 24, 42 32
                           C 48 40, 54 48, 60 56
                           C 66 64, 72 72, 78 78
                           C 84 84, 88 88, 92 90
                           C 96 92, 98 92, 98 90
                           C 98 88, 96 84, 92 78
                           C 88 72, 82 66, 76 60
                           C 70 54, 64 50, 58 48
                           C 52 46, 46 46, 40 48
                           C 34 50, 28 54, 24 60
                           C 20 66, 18 74, 18 82
                           C 18 88, 18 92, 18 96
                           C 18 98, 16 100, 14 100
                           C 12 100, 10 100, 10 100
                           Z"
                        fill="url(#logoGradient)"
                        className="group-hover:scale-105 transition-transform duration-300 origin-center"
                    />

                    {/* Wave crest sparkle */}
                    <circle cx="94" cy="16" r="5" fill="#FCFF52" opacity="0.95"
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
