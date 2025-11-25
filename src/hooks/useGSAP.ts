import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Custom hook for GSAP animations with automatic cleanup
 */
export function useGSAP<T extends HTMLElement = HTMLElement>() {
    const ref = useRef<T>(null);
    const ctx = useRef<gsap.Context | null>(null);

    useEffect(() => {
        if (ref.current) {
            ctx.current = gsap.context(() => { }, ref.current);
        }

        return () => {
            ctx.current?.revert();
        };
    }, []);

    return { ref, ctx };
}

/**
 * Magnetic button effect - button follows cursor on hover
 */
export function useMagneticButton<T extends HTMLElement = HTMLElement>(strength: number = 0.3) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { left, top, width, height } = element.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;

            const deltaX = (e.clientX - centerX) * strength;
            const deltaY = (e.clientY - centerY) * strength;

            gsap.to(element, {
                x: deltaX,
                y: deltaY,
                duration: 0.3,
                ease: 'power2.out'
            });
        };

        const handleMouseLeave = () => {
            gsap.to(element, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.3)'
            });
        };

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [strength]);

    return ref;
}

/**
 * Fade in animation on mount
 */
export function useFadeIn<T extends HTMLElement = HTMLElement>(
    delay: number = 0,
    duration: number = 0.8
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        if (ref.current) {
            gsap.fromTo(
                ref.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration,
                    delay,
                    ease: 'power2.out'
                }
            );
        }
    }, [delay, duration]);

    return ref;
}
