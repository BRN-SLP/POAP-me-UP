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
        <Card className="w-full max-w-md aspect-square flex items-center justify-center bg-muted/20 backdrop-blur-sm overflow-hidden relative p-8">
            <div
                className={cn(
                    "w-full h-full rounded-full flex flex-col items-center justify-center text-center p-8 transition-all duration-500 shadow-2xl relative overflow-hidden",
                    getThemeStyles()
                )}
                style={{
                    background: imageUrl ? `url(${imageUrl}) center/cover no-repeat` : `linear-gradient(135deg, ${color}, #000000)`,
                    color: "white",
                }}
            >
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />

                {/* Overlay text on top of image if needed, or hide if image is present? 
                    Usually POAPs have text ON the image. Let's keep text but add a text-shadow for readability.
                */}
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
            </div>
        </Card>
    );
}
