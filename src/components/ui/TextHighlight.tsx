"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface TextHighlightProps {
    children: React.ReactNode;
    className?: string;
}

/**
 * GradientText component
 * Adds a shimmering gradient effect to the text
 */
export function GradientText({ children, className }: TextHighlightProps) {
    return (
        <span
            className={cn(
                "bg-clip-text text-transparent bg-gradient-to-r from-base via-optimism to-celo bg-[length:200%_auto] animate-gradient",
                className
            )}
        >
            {children}
        </span>
    );
}

/**
 * HighlightText component
 * Adds an animated marker-style highlight behind the text
 */
export function HighlightText({ children, className }: TextHighlightProps) {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Create the highlight element
        const highlight = document.createElement("span");
        highlight.className = "absolute bottom-1 left-0 w-full h-[30%] bg-optimism/30 -z-10 origin-left scale-x-0 rounded-sm";
        element.appendChild(highlight);

        // Ensure parent is relative
        element.style.position = "relative";
        element.style.display = "inline-block";
        element.style.zIndex = "0";

        // Animate on scroll
        const animation = gsap.to(highlight, {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        return () => {
            animation.scrollTrigger?.kill();
            animation.kill();
            if (element.contains(highlight)) {
                element.removeChild(highlight);
            }
        };
    }, []);

    return (
        <span ref={ref} className={cn("inline-block", className)}>
            {children}
        </span>
    );
}
