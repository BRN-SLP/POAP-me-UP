"use client";

import { useStagger } from "@/lib/gsap-hooks";
import { Sparkles, Shield, Zap } from "lucide-react";
import { HighlightText } from "@/components/ui/TextHighlight";

export function POAPExplainer() {
    const cardsRef = useStagger(0.2, 0.15);

    const cards = [
        {
            icon: <Sparkles className="h-12 w-12" />,
            title: "What is a POAP?",
            description: "Proof of Attendance Protocol - digital collectibles that commemorate life's memorable moments. Each POAP is a unique NFT that proves you were there.",
            color: "from-base/20 to-base/5",
            borderColor: "border-base/30",
            glowColor: "shadow-[0_0_30px_-10px_rgba(0,82,255,0.3)]"
        },
        {
            icon: <Shield className="h-12 w-12" />,
            title: "Why POAPs Matter",
            description: "Build your on-chain identity and reputation. POAPs create a verifiable record of your experiences, connections, and participation in the Web3 ecosystem.",
            color: "from-optimism/20 to-optimism/5",
            borderColor: "border-optimism/30",
            glowColor: "shadow-[0_0_30px_-10px_rgba(255,4,32,0.3)]"
        },
        {
            icon: <Zap className="h-12 w-12" />,
            title: "Powered by Superchain",
            description: "Mint POAPs across multiple L2 networks with low fees and instant finality. The Superchain makes collecting memories affordable and accessible.",
            color: "from-celo/20 to-celo/5",
            borderColor: "border-celo/30",
            glowColor: "shadow-[0_0_30px_-10px_rgba(252,255,82,0.3)]"
        }
    ];

    return (
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className={`glass-panel p-8 rounded-3xl border ${card.borderColor} hover:${card.glowColor} transition-all duration-500 group hover:scale-105 bg-gradient-to-br ${card.color}`}
                >
                    <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-white/10">
                        <div className="text-white">
                            {card.icon}
                        </div>
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-4 text-white">
                        <HighlightText>{card.title}</HighlightText>
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                        {card.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
