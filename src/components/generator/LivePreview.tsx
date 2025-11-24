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
    const [isLoadingImage, setIsLoadingImage] = useState(false);
    const [imageError, setImageError] = useState(false);

    // Reset state when imageUrl changes
    useEffect(() => {
        if (imageUrl) {
            setIsLoadingImage(true);
            setImageError(false);
        }
    }, [imageUrl]);

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

    const showOverlay = !imageUrl || imageError;

    return (
        <Card className="w-full max-w-md aspect-square flex items-center justify-center bg-muted/20 backdrop-blur-sm overflow-hidden relative p-8">
            <div
                className={cn(
                    "w-full h-full rounded-full flex flex-col items-center justify-center text-center p-8 transition-all duration-500 shadow-2xl relative overflow-hidden",
                    getThemeStyles()
                )}
                style={{
                    background: showOverlay ? `linear-gradient(135deg, ${color}, #000000)` : 'black',
                    color: "white",
                }}
            >
                {/* Image Layer */}
                {imageUrl && !imageError && (
                    <>
                        {isLoadingImage && (
                            <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/50 backdrop-blur-sm">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                            </div>
                        )}
                        <img
                            src={imageUrl}
                            alt="POAP Preview"
                            className={cn(
                                "absolute inset-0 w-full h-full object-contain transition-opacity duration-500",
                                isLoadingImage ? "opacity-0" : "opacity-100"
                            )}
                            onLoad={() => setIsLoadingImage(false)}
                            onError={() => {
                                setIsLoadingImage(false);
                                setImageError(true);
                            }}
                        />
                    </>
                )}

                {/* Decorative Background Elements - Only show if overlay is visible */}
                {showOverlay && (
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
                )}

                {/* Overlay text - Only show if no image or error */}
                {showOverlay && (
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
