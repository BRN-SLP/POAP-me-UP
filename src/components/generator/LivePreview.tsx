import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface LivePreviewProps {
    title: string;
    date: string;
    network: "base" | "celo" | "optimism";
    theme: string;
    color: string;
    imageUrl?: string;
}

export function LivePreview({
    title,
    date,
    network,
    theme,
    color,
    imageUrl,
}: LivePreviewProps) {
    // Mock themes for now
    const getThemeStyles = () => {
        switch (theme) {
            case "modern":
                return "border-4 border-white/20";
            case "classic":
                return "border-8 double border-white/30";
            case "pixel":
                return "border-4 border-dashed border-white/40";
            default:
                return "border-none";
        }
    };

    const getNetworkIcon = () => {
        switch (network) {
            case "base":
                return "🔵"; // Replace with SVG
            case "celo":
                return "🟡"; // Replace with SVG
            case "optimism":
                return "🔴"; // Replace with SVG
            default:
                return "⚪";
        }
    };

    return (
    return (
        <Card className={cn(
            "w-full max-w-md aspect-square min-h-[320px] flex items-center justify-center bg-muted/20 backdrop-blur-sm overflow-hidden relative",
            imageUrl ? "p-1" : "p-8"
        )}>
            <div
                className={cn(
                    "w-full h-full rounded-full flex flex-col items-center justify-center text-center transition-all duration-500 shadow-2xl relative overflow-hidden bg-black",
                    imageUrl ? "p-0" : "p-8",
                    getThemeStyles()
                )}
                style={{
                    background: imageUrl ? `url('${imageUrl}') center/cover no-repeat` : `linear-gradient(135deg, ${color}, #000000)`,
                    color: "white",
                }}
            >
                {/* Decorative Background Elements - Only show if no image */}
                {!imageUrl && (
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
                )}

                {/* Overlay text - Only show if no image is generated */}
                {!imageUrl && (
                    <div className="relative z-10 space-y-4 drop-shadow-md">
                        <div className="text-4xl animate-bounce">{getNetworkIcon()}</div>
                        <h2 className="text-2xl font-bold font-heading tracking-wide break-words w-full drop-shadow-lg">
                            {title || "Event Title"}
                        </h2>
                        <p className="text-sm font-medium opacity-80 font-mono drop-shadow-lg">
                            {date || "YYYY-MM-DD"}
                        </p>
                        <div className="text-xs uppercase tracking-widest opacity-60 mt-4 drop-shadow-lg">
                            {network} POAP
                        </div>
                    </div>
                )}
            </div>
        </Card>
    );
}
