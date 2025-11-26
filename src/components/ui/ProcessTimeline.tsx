"use client";

import { useStagger } from "@/lib/gsap-hooks";
import { Palette, Sparkles, Wallet, CheckCircle } from "lucide-react";

export function ProcessTimeline() {
    const timelineRef = useStagger(0.3, 0.2);

    const steps = [
        {
            icon: <Palette className="h-8 w-8" />,
            title: "Design Your POAP",
            description: "Choose your event details, select a theme style, and add custom keywords",
            color: "base",
            gradient: "from-base/20 to-base/5"
        },
        {
            icon: <Sparkles className="h-8 w-8" />,
            title: "Generate with AI",
            description: "Our advanced AI creates stunning artwork in seconds using your specifications",
            color: "optimism",
            gradient: "from-optimism/20 to-optimism/5"
        },
        {
            icon: <Wallet className="h-8 w-8" />,
            title: "Choose Network",
            description: "Select Base, Optimism, or Celo based on your preference and community",
            color: "celo",
            gradient: "from-celo/20 to-celo/5"
        },
        {
            icon: <CheckCircle className="h-8 w-8" />,
            title: "Mint & Share",
            description: "Mint your POAP on-chain and share it with your community instantly",
            color: "base",
            gradient: "from-base/20 via-optimism/10 to-celo/5"
        }
    ];

    return (
        <div className="space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
                    How It Works
                </h2>
                <p className="text-xl text-white/60 max-w-2xl mx-auto">
                    Create and mint your POAP in four simple steps
                </p>
            </div>

            <div ref={timelineRef} className="relative max-w-4xl mx-auto">
                {/* Timeline line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-base via-optimism to-celo opacity-20 hidden md:block" />

                <div className="space-y-12">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Content */}
                            <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                <div className={`glass-panel p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 group hover:scale-105 bg-gradient-to-br ${step.gradient}`}>
                                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse md:justify-end" : ""}`}>
                                        <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 text-${step.color}`}>
                                            {step.icon}
                                        </div>
                                        <h3 className="text-2xl font-heading font-bold text-white">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-white/70 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Step number */}
                            <div className="relative z-10 flex-shrink-0">
                                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} border-2 border-${step.color} flex items-center justify-center shadow-[0_0_30px_-10px] shadow-${step.color}/50`}>
                                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                                </div>
                            </div>

                            {/* Spacer for alternating layout */}
                            <div className="flex-1 hidden md:block" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
