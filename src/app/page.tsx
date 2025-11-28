"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFadeIn, useFloating, useHeroScroll } from "@/lib/gsap-hooks";
import { useRef } from "react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SURGEExplainer } from "@/components/ui/SURGEExplainer";
import { SuperchainEcosystem } from "@/components/ui/SuperchainEcosystem";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";

import { GradientText, HighlightText } from "@/components/ui/TextHighlight";

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useFadeIn(0);
    const subtitleRef = useFadeIn(0.2);
    const buttonsRef = useFadeIn(0.4);

    // Floating background elements
    const blob1Ref = useFloating(4, 20);
    const blob2Ref = useFloating(5, -20);

    // Advanced Scroll Animation
    useHeroScroll(containerRef, heroRef, [blob1Ref, blob2Ref]);

    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            {/* Hero Section */}
            <section ref={containerRef} className="flex-1 flex flex-col items-center justify-center px-4 py-32 text-center relative z-10 min-h-screen">

                {/* Background Glows */}
                <div ref={blob1Ref} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-base/20 rounded-full blur-[100px] -z-10 opacity-50 mix-blend-screen" />
                <div ref={blob2Ref} className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-optimism/20 rounded-full blur-[120px] -z-10 opacity-50 mix-blend-screen" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-celo/10 rounded-full blur-[120px] -z-20" />

                <div className="relative z-10 max-w-5xl mx-auto space-y-10">
                    <h1 ref={heroRef} className="text-7xl md:text-9xl font-heading font-bold tracking-tighter text-white leading-[0.9]">
                        SURGE me <GradientText>UP</GradientText>
                    </h1>

                    <p ref={subtitleRef} className="text-xl md:text-3xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
                        Amplify your achievements with <GradientText className="font-bold">SURGE</GradientText> – the recognition engine built on <GradientText className="font-bold">Superchain</GradientText>.
                        Support for <span className="text-[#0052FF] font-bold">Base</span>, <span className="text-[#FF0420] font-bold">Optimism</span>, and <span className="text-[#FCFF52] font-bold">Celo</span>.
                    </p>

                    <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
                        <Link href="/generator">
                            <Button size="lg" className="h-16 px-10 text-xl rounded-full bg-base hover:bg-base-neon text-white btn-glow-base transition-all hover:scale-105 border-0 relative overflow-hidden group">
                                <span className="relative z-10 flex items-center">Start Generating <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" /></span>
                                <div className="absolute inset-0 bg-gradient-to-r from-base via-optimism to-celo opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button variant="outline" size="lg" className="h-16 px-10 text-xl rounded-full border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white transition-all hover:scale-105">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-4 relative z-10 border-y border-white/5 bg-black/20 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <AnimatedCounter
                        target={6}
                        label="Superchain Networks"
                        description="Expanding ecosystem support"
                    />
                    <AnimatedCounter
                        target={15000}
                        suffix="+"
                        label="SURGEs Minted"
                        description="Achievements amplified on-chain"
                    />
                    <AnimatedCounter
                        target={0}
                        prefix="$"
                        label="Minting Fee"
                        description="Free minting on testnets"
                    />
                </div>
            </section>

            {/* What is POAP Section */}
            <section className="py-32 px-4 relative z-10">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
                            Preserve Your Memories
                        </h2>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto">
                            Turn moments into digital collectibles that last forever
                        </p>
                    </div>
                    <SURGEExplainer />
                </div>
            </section>

            {/* Ecosystem Section */}
            <section className="py-32 px-4 relative z-10 bg-gradient-to-b from-transparent via-white/5 to-transparent">
                <div className="max-w-7xl mx-auto">
                    <SuperchainEcosystem />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-32 px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <ProcessTimeline />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4 relative z-10 text-center">
                <div className="max-w-4xl mx-auto glass-panel p-16 rounded-[3rem] border border-white/10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-base/20 via-optimism/20 to-celo/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                    <div className="relative z-10 space-y-8">
                        <h2 className="text-5xl md:text-7xl font-heading font-bold text-white">
                            Ready to Mint?
                        </h2>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto">
                            Join thousands of creators preserving memories on the Superchain.
                        </p>
                        <Link href="/generator">
                            <Button size="lg" className="h-20 px-12 text-2xl rounded-full bg-white text-black hover:bg-white/90 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                                Create Your First SURGE
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
