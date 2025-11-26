"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/gsap-hooks";

interface LivePreviewProps {
    title: string;
    date: string;
    network: "base" | "celo" | "optimism";
    theme: "sketch" | "modern" | "flat" | "pixel" | "monochrome" | "abstract";
    keywords: string;
    imageUrl?: string;
}

export function LivePreview({
    title,
    date,
    network,
    theme,
    imageUrl,
}: LivePreviewProps) {
    const imageRevealRef = useReveal(0.6);

    const getNetworkIcon = () => {
        switch (network) {
            case "base":
                return "🔵";
            case "celo":
                return "🟡";
            case "optimism":
                return "🔴";
            default:
                return "⚪";
        }
    };

    return (
        <Card className={cn(
            "w-full max-w-md aspect-square flex items-center justify-center bg-muted/20 backdrop-blur-sm overflow-hidden relative",
            imageUrl ? "p-4" : "p-8"
        )}>
            {imageUrl ? (
                // AI Generated Image - ensure proper display without cropping
                <div ref={imageRevealRef} className="w-full h-full flex items-center justify-center">
                    <img
                        src={imageUrl}
                        alt={title || "POAP Preview"}
                        className="max-w-full max-h-full object-contain rounded-lg"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        onError={(e) => {
                            console.error('Image failed to load:', imageUrl);
                            console.error('Error event:', e);
                        }}
                        onLoad={() => {
                            console.log('Image loaded successfully:', imageUrl);
                        }}
                    />
                </div>
            ) : (
                // Placeholder preview
                <div
                    className="w-full h-full rounded-full flex flex-col items-center justify-center text-center transition-all duration-500 shadow-2xl relative overflow-hidden bg-gradient-to-br from-base/30 via-optimism/30 to-celo/30 p-8"
                >
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />

                    <div className="relative z-10 space-y-4 flex flex-col items-center justify-center w-full">
                        <div className="text-4xl animate-bounce drop-shadow-xl">{getNetworkIcon()}</div>
                        <h2 className="text-2xl font-bold font-heading tracking-wide break-words w-full px-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-white">
                            {title || "Event Title"}
                        </h2>
                        <p className="text-sm font-medium opacity-90 font-mono drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-white">
                            {date || "YYYY-MM-DD"}
                        </p>
                        <div className="text-xs uppercase tracking-widest opacity-80 mt-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-bold text-white">
                            {network} POAP
                        </div>
                    </div>
                </div>
            )}
        </Card>
    );
}
