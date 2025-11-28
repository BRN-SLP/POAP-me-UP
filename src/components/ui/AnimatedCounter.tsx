"use client";

import { useCountUp } from "@/lib/gsap-hooks";

interface AnimatedCounterProps {
    target: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    label: string;
    description?: string;
}

export function AnimatedCounter({
    target,
    duration = 2,
    suffix = "",
    prefix = "",
    label,
    description
}: AnimatedCounterProps) {
    const counterRef = useCountUp(target, duration, suffix);

    return (
        <div className="flex flex-col items-center justify-center p-8 glass-panel rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group">
            <div className="text-5xl md:text-6xl font-bold font-heading mb-3 text-white group-hover:scale-110 transition-transform duration-300">
                {prefix}<span ref={counterRef}>0{suffix}</span>
            </div>
            <div className="text-xl font-semibold text-white mb-2">{label}</div>
            {description && (
                <div className="text-sm text-white/60 text-center max-w-xs">{description}</div>
            )}
        </div>
    );
}
