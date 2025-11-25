"use client";

import Link from "next/link";
import { ArrowRight, Zap, Layers, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandHighlighter } from "@/components/ui/BrandHighlighter";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const heroRef = useRef(null);
    const featuresRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            const tl = gsap.timeline();
            tl.from(".hero-element", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.2
            });

            // Features Animation
            gsap.from(".feature-card", {
                scrollTrigger: {
                    trigger: featuresRef.current,
                    start: "top 80%",
                },
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section ref={heroRef} className="flex-1 flex flex-col items-center justify-center px-4 py-32 text-center relative overflow-hidden">

                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-base/10 rounded-full blur-[120px] -z-10" />

                <div className="relative z-10 max-w-5xl mx-auto space-y-10">
                    <h1 className="hero-element text-7xl md:text-9xl font-heading font-bold tracking-tighter text-white leading-[0.9]">
                        POAP me <span className="text-gradient-base">UP</span>
                    </h1>

                    <p className="hero-element text-xl md:text-3xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
                        Generate and mint exclusive POAPs on the <span className="text-gradient-optimism font-bold">Superchain</span>.
                        Support for <span className="text-[#0052FF] font-bold">Base</span>, <span className="text-[#FF0420] font-bold">Optimism</span>, and <span className="text-[#FCFF52] font-bold">Celo</span>.
                    </p>

                    <div className="hero-element flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
                        <Link href="/generator">
                            <Button size="lg" className="h-16 px-10 text-xl rounded-full bg-base hover:bg-base-neon text-white btn-glow-base transition-all hover:scale-105 border-0">
                                Start Generating <ArrowRight className="ml-2 h-6 w-6" />
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
            <section ref={featuresRef} className="py-32 px-4 relative z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<Zap className="h-10 w-10 text-celo" />}
                        title="Instant Generation"
                        description="Create stunning artwork in seconds using our advanced AI models."
                        glowColor="group-hover:shadow-[0_0_40px_-10px_rgba(252,255,82,0.3)]"
                        borderColor="group-hover:border-celo/30"
                    />
                    <FeatureCard
                        icon={<Layers className="h-10 w-10 text-optimism" />}
                        title="Multi-Chain Support"
                        description="Seamlessly mint on Base, Optimism, and Celo with a single click."
                        glowColor="group-hover:shadow-[0_0_40px_-10px_rgba(255,4,32,0.3)]"
                        borderColor="group-hover:border-optimism/30"
                    />
                    <FeatureCard
                        icon={<Coins className="h-10 w-10 text-base" />}
                        title="Low Fees"
                        description="Experience the speed and efficiency of the Superchain ecosystem."
                        glowColor="group-hover:shadow-[0_0_40px_-10px_rgba(0,82,255,0.3)]"
                        borderColor="group-hover:border-base/30"
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
    borderColor
}: {
    icon: React.ReactNode,
    title: string,
    description: string,
    glowColor: string,
    borderColor: string
}) {
    return (
        <div className={`feature-card glass-panel p-10 rounded-[2rem] hover:bg-white/[0.08] transition-all duration-500 group border border-white/5 ${borderColor} ${glowColor}`}>
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
