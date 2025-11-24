"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LivePreview } from "./LivePreview";
import { Sparkles, RefreshCw, Download, Wallet, CheckCircle2, Loader2 } from "lucide-react";
import { useAccount, useWriteContract, useWaitForTransactionReceipt, useSwitchChain } from "wagmi";
import { POAP_ABI, POAP_ADDRESSES } from "@/config/contracts";
import { base, baseSepolia, optimismSepolia } from "wagmi/chains";

export function GeneratorForm() {
    const { address, isConnected, chain } = useAccount();
    const { switchChain } = useSwitchChain();
    const { writeContract, data: hash, isPending: isMinting, error: mintError } = useWriteContract();
    const { isLoading: isConfirming, isSuccess: isConfirmed, data: receipt } = useWaitForTransactionReceipt({
        hash,
    });

    const [mintedTokenId, setMintedTokenId] = useState<string | null>(null);
    const [isBridging, setIsBridging] = useState(false);

    useEffect(() => {
        if (isConfirmed && receipt) {
            const transferLog = receipt.logs.find(log =>
                log.topics[0] === "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
            );
            if (transferLog && transferLog.topics[3]) {
                const id = parseInt(transferLog.topics[3], 16).toString();
                setMintedTokenId(id);
            }
        }
    }, [isConfirmed, receipt]);

    const [formData, setFormData] = useState<{
        title: string;
        date: string;
        network: "base" | "celo" | "optimism";
        theme: string;
        color: string;
        imageUrl?: string;
    }>({
        title: "",
        date: "",
        network: "base",
        theme: "modern",
        color: "#0052FF",
    });

    const [isGenerating, setIsGenerating] = useState(false);

    const [error, setError] = useState<string | null>(null);

    const getTargetChainId = () => {
        switch (formData.network) {
            case "base": return base.id;
            case "optimism": return optimismSepolia.id;
            default: return base.id;
        }
    };

    const handleGenerateAI = async () => {
        setError(null);
        if (!formData.title) {
            setError("Please enter an event title first!");
            return;
        }

        setIsGenerating(true);

        try {
            // 1. Generate BACKGROUND only using AI (no text)
            const encodedPrompt = encodeURIComponent(
                `Masterpiece, best quality, high resolution. A premium POAP commemorative badge background. Abstract ${formData.theme} style art. Circular badge format, vibrant colors, vector art style, highly detailed, 8k resolution, unreal engine 5 render. No text, no letters, blank center area for text.`
            );

            const randomSeed = Math.floor(Math.random() * 1000000);
            const aiImageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?model=flux-pro&width=1024&height=1024&nologo=true&enhance=true&seed=${randomSeed}`;

            // 2. Load the AI image
            const img = new Image();
            img.crossOrigin = "Anonymous"; // Crucial for canvas export
            img.src = aiImageUrl;

            await new Promise((resolve, reject) => {
                img.onload = resolve;
                img.onerror = () => reject(new Error("Failed to load image from Pollinations"));
            });

            // 3. Create Canvas to composite Image + Text
            const canvas = document.createElement('canvas');
            canvas.width = 1024;
            canvas.height = 1024;
            const ctx = canvas.getContext('2d');
            if (!ctx) throw new Error("Could not get canvas context");

            // Draw Background
            ctx.drawImage(img, 0, 0, 1024, 1024);

            // Configure Text Styles
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // Add semi-transparent overlay for readability if needed
            // ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
            // ctx.fillRect(0, 0, 1024, 1024);

            // Draw Title
            ctx.font = 'bold 80px Inter, sans-serif';
            ctx.fillStyle = '#FFFFFF';
            ctx.shadowColor = 'rgba(0,0,0,0.8)';
            ctx.shadowBlur = 20;
            ctx.shadowOffsetX = 4;
            ctx.shadowOffsetY = 4;

            // Wrap text logic
            const words = formData.title.split(' ');
            let line = '';
            let y = 512 - (words.length > 3 ? 60 : 0); // Adjust vertical center based on length

            // Simple text wrapping for title
            if (formData.title.length > 20) {
                ctx.font = 'bold 60px Inter, sans-serif';
                const mid = Math.floor(words.length / 2);
                const line1 = words.slice(0, mid).join(' ');
                const line2 = words.slice(mid).join(' ');
                ctx.fillText(line1, 512, 480);
                ctx.fillText(line2, 512, 560);
            } else {
                ctx.fillText(formData.title, 512, 512);
            }

            // Draw Date
            if (formData.date) {
                ctx.font = 'bold 40px Inter, sans-serif';
                ctx.fillStyle = '#FFD700'; // Gold color for date
                ctx.fillText(formData.date, 512, 850);
            }

            // 4. Export to Data URL
            const finalImageUrl = canvas.toDataURL('image/png');

            setFormData(prev => ({
                ...prev,
                imageUrl: finalImageUrl
            }));

        } catch (error: any) {
            console.error(error);
            setError("Failed to generate image. Please try again.");
        } finally {
            setIsGenerating(false);
        }
    };

    const handleClearImage = () => {
        setFormData(prev => ({ ...prev, imageUrl: undefined }));
        setError(null);
    };

    const handleMint = async () => {
        if (!isConnected) return;

        const targetChainId = getTargetChainId();
        if (chain?.id !== targetChainId) {
            switchChain({ chainId: targetChainId });
            return;
        }

        const contractAddress = formData.network === 'base'
            ? POAP_ADDRESSES.base
            : POAP_ADDRESSES.optimismSepolia;

        if (!contractAddress) {
            setError("Contract not deployed on this network yet.");
            return;
        }

        const tokenURI = `ipfs://mock-metadata-${Date.now()}`;

        writeContract({
            address: contractAddress,
            abi: POAP_ABI,
            functionName: "mint",
            args: [address!, tokenURI],
        });
    };

    const handleBridge = async () => {
        if (!mintedTokenId || !address) return;
        setIsBridging(true);
        alert("Bridging requires a fee quote. In this demo, we'll simulate the bridge request.");
        setIsBridging(false);
    };

    return (
        <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div className="space-y-6">
                <Card className="glass-panel border-white/10 bg-white/5">
                    <CardHeader>
                        <CardTitle className="text-2xl font-heading">POAP Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-3">
                            <label className="text-sm font-medium text-white/70 uppercase tracking-wider">Network</label>
                            <div className="flex gap-3">
                                <Button
                                    variant={formData.network === "base" ? "default" : "outline"}
                                    onClick={() => setFormData({ ...formData, network: "base" })}
                                    className={`flex-1 capitalize h-12 font-semibold ${formData.network === "base"
                                        ? "bg-base hover:bg-base-neon text-white btn-glow-base"
                                        : "border-base/30 text-base hover:bg-base/10 hover:border-base"
                                        }`}
                                >
                                    Base
                                </Button>
                                <Button
                                    variant={formData.network === "optimism" ? "default" : "outline"}
                                    onClick={() => setFormData({ ...formData, network: "optimism" })}
                                    className={`flex-1 capitalize h-12 font-semibold ${formData.network === "optimism"
                                        ? "bg-optimism hover:bg-optimism-neon text-white btn-glow-optimism"
                                        : "border-optimism/30 text-optimism hover:bg-optimism/10 hover:border-optimism"
                                        }`}
                                >
                                    Optimism
                                </Button>
                                <Button
                                    variant="outline"
                                    disabled
                                    className="flex-1 capitalize h-12 opacity-40 cursor-not-allowed border-celo/20 text-celo/50"
                                >
                                    Celo (Soon)
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-medium text-white/70 uppercase tracking-wider">Event Title</label>
                            <Input
                                placeholder="e.g. Superchain Summit 2024"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="bg-black/40 border-white/20 focus:border-white/40 h-12 text-lg placeholder:text-white/30 text-white"
                            />
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-medium text-white/70 uppercase tracking-wider">Date</label>
                            <Input
                                type="date"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                className="bg-black/40 border-white/20 focus:border-white/40 h-12 text-white"
                            />
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-medium text-white/70 uppercase tracking-wider">Theme Style</label>
                            <div className="flex gap-3">
                                {["modern", "classic", "pixel"].map((theme) => (
                                    <Button
                                        key={theme}
                                        variant={formData.theme === theme ? "default" : "ghost"}
                                        size="sm"
                                        onClick={() => setFormData({ ...formData, theme })}
                                        className={`capitalize flex-1 h-10 font-medium ${formData.theme === theme
                                            ? "bg-white/90 text-black hover:bg-white"
                                            : "text-white/60 hover:text-white hover:bg-white/10 border border-white/10"
                                            }`}
                                    >
                                        {theme}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Base Color</label>
                            <div className="flex gap-3">
                                {["#0052FF", "#FCFF52", "#FF0420", "#7C3AED", "#10B981"].map(
                                    (color) => (
                                        <button
                                            key={color}
                                            className={`w-10 h-10 rounded-full border-2 transition-all ${formData.color === color
                                                ? "border-white scale-110 ring-2 ring-white/20"
                                                : "border-transparent hover:scale-105"
                                                }`}
                                            style={{ backgroundColor: color }}
                                            onClick={() => setFormData(prev => ({ ...prev, color }))}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                        {error}
                    </div>
                )}

                <div className="flex gap-4">
                    <Button
                        className="flex-1 h-14 text-lg font-bold bg-gradient-to-r from-base via-optimism to-celo hover:opacity-90 transition-opacity rounded-xl"
                        onClick={handleGenerateAI}
                        disabled={isGenerating}
                    >
                        {isGenerating ? (
                            <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                        ) : (
                            <Sparkles className="mr-2 h-5 w-5" />
                        )}
                        {isGenerating ? "Generating..." : "Generate with AI"}
                    </Button>

                    {formData.imageUrl && (
                        <Button
                            variant="outline"
                            className="h-14 px-6 border-white/10 hover:bg-white/10 text-white"
                            onClick={handleClearImage}
                        >
                            Clear
                        </Button>
                    )}
                </div>
            </div>

            <div className="sticky top-24 flex flex-col items-center gap-8">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-base via-optimism to-celo rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative">
                        <LivePreview {...formData} />
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-full max-w-md">
                    <div className="flex gap-4 w-full">
                        <Button variant="outline" className="flex-1 border-white/10 hover:bg-white/5 hover:text-white h-12">
                            <Download className="mr-2 h-4 w-4" /> Export PNG
                        </Button>
                        <Button
                            className="flex-1 bg-white text-black hover:bg-white/90 h-12 font-bold"
                            onClick={handleMint}
                            disabled={!isConnected || isMinting || isConfirming}
                        >
                            {isMinting || isConfirming ? (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                                <Wallet className="mr-2 h-4 w-4" />
                            )}
                            {isMinting ? "Minting..." : isConfirming ? "Confirming..." : "Mint POAP"}
                        </Button>
                    </div>

                    {hash && (
                        <div className="w-full p-4 bg-white/5 rounded-xl border border-white/10 text-sm break-all backdrop-blur-sm">
                            <p className="font-medium mb-2 flex items-center gap-2 text-green-400">
                                <CheckCircle2 className="h-4 w-4" />
                                Transaction Sent
                            </p>
                            <a
                                href={formData.network === 'base'
                                    ? `https://basescan.org/tx/${hash}`
                                    : `https://sepolia-optimism.etherscan.io/tx/${hash}`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-white transition-colors underline decoration-white/20 underline-offset-4"
                            >
                                {hash}
                            </a>
                            {mintedTokenId && (
                                <div className="mt-4 pt-4 border-t border-white/10">
                                    <p className="font-medium text-white mb-3">Token ID: {mintedTokenId}</p>
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        className="w-full bg-white/10 hover:bg-white/20 text-white border-0"
                                        onClick={handleBridge}
                                        disabled={isBridging}
                                    >
                                        Bridge to {formData.network === 'base' ? 'Optimism' : 'Base'}
                                    </Button>
                                </div>
                            )}
                        </div>
                    )}

                    {mintError && (
                        <div className="w-full p-4 bg-red-500/10 text-red-400 rounded-xl border border-red-500/20 text-sm">
                            <p className="font-medium mb-1">Error Minting</p>
                            <p className="opacity-90">{mintError.message.slice(0, 100)}...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
