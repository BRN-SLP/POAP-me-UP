"use client";

import Link from "next/link";
import { ArrowRight, Zap, Layers, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandHighlighter } from "@/components/ui/BrandHighlighter";
import { useFadeIn, useFloating } from "@/lib/gsap-hooks";

export default function Home() {
    const heroRef = useFadeIn(0);
    const subtitleRef = useFadeIn(0.2);
    const buttonsRef = useFadeIn(0.4);

    // Floating background elements
    const blob1Ref = useFloating(4, 20);
    const blob2Ref = useFloating(5, -20);

    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            {/* Hero Section */}
            <section className="flex-1 flex flex-col items-center justify-center px-4 py-32 text-center relative z-10">

                {/* Background Glows */}
                <div ref={blob1Ref} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-base/20 rounded-full blur-[100px] -z-10 opacity-50 mix-blend-screen" />
                <div ref={blob2Ref} className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-optimism/20 rounded-full blur-[120px] -z-10 opacity-50 mix-blend-screen" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-celo/10 rounded-full blur-[120px] -z-20" />

                <div className="relative z-10 max-w-5xl mx-auto space-y-10">
                    <h1 ref={heroRef} className="text-7xl md:text-9xl font-heading font-bold tracking-tighter text-white leading-[0.9]">
                        POAP me <span className="text-transparent bg-clip-text bg-gradient-to-r from-base via-optimism to-celo bg-[length:200%_auto]">UP</span>
                    </h1>

                    <p ref={subtitleRef} className="text-xl md:text-3xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
                        Generate and mint exclusive POAPs on the <span className="text-gradient-optimism font-bold">Superchain</span>.
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

            {/* Features Section */}
            <section className="py-32 px-4 relative z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<Zap className="h-10 w-10 text-celo" />}
                        title="Instant Generation"
                        description="Create stunning artwork in seconds using our advanced AI models."
                        glowColor="group-hover:shadow-[0_0_40px_-10px_rgba(252,255,82,0.3)]"
                        borderColor="group-hover:border-celo/30"
                        delay={0}
                    />
                    <FeatureCard
                        icon={<Layers className="h-10 w-10 text-optimism" />}
                        title="Multi-Chain Support"
                        description="Seamlessly mint on Base, Optimism, and Celo with a single click."
                        glowColor="group-hover:shadow-[0_0_40px_-10px_rgba(255,4,32,0.3)]"
                        borderColor="group-hover:border-optimism/30"
                        delay={0.1}
                    />
                    <FeatureCard
                        icon={<Coins className="h-10 w-10 text-base" />}
                        title="Low Fees"
                        description="Experience the speed and efficiency of the Superchain ecosystem."
                        glowColor="group-hover:shadow-[0_0_40px_-10px_rgba(0,82,255,0.3)]"
                        borderColor="group-hover:border-base/30"
                        delay={0.2}
                    />
                </div>
            </section>
        </div>
    );
}

function FeatureCard({
    icon,
    title,
    description,
    glowColor,
    borderColor,
    delay
}: {
    icon: React.ReactNode,
    title: string,
    description: string,
    glowColor: string,
    borderColor: string,
    delay: number
}) {
    const cardRef = useFadeIn(delay);

    return (
        <div ref={cardRef} className={`glass-panel p-10 rounded-[2rem] hover:bg-white/[0.08] transition-all duration-500 group border border-white/5 ${borderColor} ${glowColor}`}>
            <div className="mb-8 p-5 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-500 border border-white/5">
                {icon}
            </div>
            <h3 className="text-3xl font-heading font-bold mb-4 text-white">{title}</h3>
            <p className="text-lg text-white/60 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
