
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
import { useFadeIn, useMagnetic } from "@/lib/gsap-hooks";

export function GeneratorForm() {
    const { address, isConnected, chain } = useAccount();
    const { switchChain } = useSwitchChain();
    const { writeContract, data: hash, isPending: isMinting, error: mintError } = useWriteContract();
    const { isLoading: isConfirming, isSuccess: isConfirmed, data: receipt } = useWaitForTransactionReceipt({
        hash,
    });

    const [mintedTokenId, setMintedTokenId] = useState<string | null>(null);
    const [isBridging, setIsBridging] = useState(false);

    const formRef = useFadeIn(0.2);

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
        theme: "sketch" | "modern" | "flat" | "pixel" | "monochrome" | "abstract";
        keywords: string;
        imageUrl?: string;
    }>({
        title: "",
        date: "",
        network: "base",
        theme: "modern",
        keywords: "",
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

    // Style-specific prompt templates
    const stylePrompts = {
        sketch: "Vintage commemorative badge with ornate borders, traditional heraldic style, elegant serif typography, gold and navy accents, embossed details, formal and prestigious design",
        modern: "Contemporary sleek badge design, vibrant gradient backgrounds, clean sans-serif typography, geometric shapes, bold colors, minimalist composition, tech-forward aesthetic",
        flat: "Flat design combined with minimalistic aesthetic, simple geometric shapes, limited color palette, clean vector art, no shadows or gradients, modern sans-serif fonts, Scandinavian design influence",
        pixel: "8-bit pixel art badge, retro gaming aesthetic, pixelated typography, limited color palette like NES or Game Boy, sprite-based design, nostalgic 80s-90s video game style, pixel perfect details, blocky graphics",
        monochrome: "Black and white badge design combining flat design with monochrome aesthetic, high contrast, bold typography, minimalist composition, ink drawing or woodcut style, grayscale only, strong graphic design, timeless elegance",
        abstract: "Abstract art badge design, fluid organic shapes, vibrant color splashes, geometric patterns, surreal composition, artistic interpretation, creative expression, modern art style, dynamic movement, experimental design, psychedelic elements"
    };

    const handleGenerateAI = async () => {
        console.log('[FRONTEND] Starting generation...');
        setError(null);
        if (!formData.title) {
            setError("Please enter an event title first!");
            return;
        }

        setIsGenerating(true);
        console.log('[FRONTEND] isGenerating set to true');

        try {
            const styleKeywords = stylePrompts[formData.theme] || stylePrompts.modern;
            const keywordsText = formData.keywords ? `. Visual elements: ${formData.keywords}` : "";
            const dateText = formData.date ? `. Date: "${formData.date}"` : "";

            const fullPrompt = `${styleKeywords}. A premium POAP commemorative badge design. Title text must read: "${formData.title}"${dateText}${keywordsText}`;

            console.log('[FRONTEND] Calling API with prompt:', fullPrompt.substring(0, 100));

            // Call our backend API which uses Hugging Face
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: fullPrompt,
                    style: formData.theme
                }),
            });

            console.log('[FRONTEND] API response status:', response.status);

            if (!response.ok) {
                throw new Error(`API returned ${response.status}`);
            }

            const data = await response.json();
            console.log('[FRONTEND] API response data:', data);

            if (!data.imageUrl) {
                throw new Error('No image URL returned');
            }

            console.log('[FRONTEND] Setting imageUrl:', data.imageUrl);

            // Set the generated image
            setFormData(prev => {
                const newData = {
                    ...prev,
                    imageUrl: data.imageUrl
                };
                console.log('[FRONTEND] New formData:', newData);
                return newData;
            });

            console.log('[FRONTEND] Generation SUCCESS!');

        } catch (error: any) {
            console.error('[FRONTEND] Generation error:', error);
            setError(error.message || "Failed to generate image. Please try again.");
        } finally {
            console.log('[FRONTEND] Setting isGenerating to false');
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
        <div ref={formRef} className="grid gap-8 lg:grid-cols-2 items-start">
            <div className="space-y-6">
                <Card className="glass-panel border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
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
                            <label className="text-sm font-medium text-white/70 uppercase tracking-wider">POAP Style</label>
                            <div className="grid grid-cols-3 gap-2">
                                {(["sketch", "modern", "flat", "pixel", "monochrome", "abstract"] as const).map((theme) => (
                                    <Button
                                        key={theme}
                                        variant={formData.theme === theme ? "default" : "ghost"}
                                        size="sm"
                                        onClick={() => setFormData({ ...formData, theme })}
                                        className={`capitalize h-10 font-medium ${formData.theme === theme
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
                            <label className="text-sm font-medium text-white/70 uppercase tracking-wider">Keywords (Optional)</label>
                            <Input
                                placeholder="e.g., clouds, boat, fish, summer"
                                value={formData.keywords}
                                onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                                className="bg-black/40 border-white/20 focus:border-white/40 h-12 text-white placeholder:text-white/30"
                            />
                            <p className="text-xs text-white/50">Add visual themes and elements for your POAP</p>
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
                        className="flex-1 h-14 text-lg font-bold bg-gradient-to-r from-base via-optimism to-celo hover:opacity-90 hover:scale-[1.02] text-white hover:text-black shadow-lg shadow-base/30 hover:shadow-xl hover:shadow-base/50 transition-all duration-200 rounded-xl relative overflow-hidden group"
                        onClick={handleGenerateAI}
                        disabled={isGenerating}
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative z-10 flex items-center justify-center">
                            {isGenerating ? (
                                <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                            ) : (
                                <Sparkles className="mr-2 h-5 w-5" />
                            )}
                            {isGenerating ? "Generating..." : "Generate with AI"}
                        </span>
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
