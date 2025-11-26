"use client";

import { useFadeIn } from "@/lib/gsap-hooks";

export function SuperchainEcosystem() {
    const containerRef = useFadeIn(0.3);

    const networks = [
        {
            name: "Base",
            color: "#0052FF",
            description: "Built by Coinbase, Base is a secure, low-cost Ethereum L2",
            logo: "🔵",
            status: "active",
            stats: { tps: "~1000", fee: "$0.01" }
        },
        {
            name: "Optimism",
            color: "#FF0420",
            description: "The original Optimistic Rollup, scaling Ethereum sustainably",
            logo: "🔴",
            status: "active",
            stats: { tps: "~2000", fee: "$0.02" }
        },
        {
            name: "Celo",
            color: "#FCFF52",
            description: "Mobile-first blockchain for real-world payments",
            logo: "🟡",
            status: "active",
            stats: { tps: "~1000", fee: "$0.001" }
        },
        {
            name: "Zora",
            color: "#111111",
            description: "The best place to mint and collect NFTs",
            logo: "⚫",
            status: "soon",
            stats: { tps: "Coming", fee: "Soon" }
        },
        {
            name: "Mode",
            color: "#DFFE00",
            description: "The Modular DeFi L2 rewarding growth",
            logo: "🟢",
            status: "soon",
            stats: { tps: "Coming", fee: "Soon" }
        },
        {
            name: "Fraxtal",
            color: "#000000",
            description: "Modular rollup with fractal scaling",
            logo: "⚪",
            status: "soon",
            stats: { tps: "Coming", fee: "Soon" }
        }
    ];

    return (
        <div ref={containerRef} className="space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
                    The Superchain Ecosystem
                </h2>
                <p className="text-xl text-white/60 max-w-3xl mx-auto">
                    One unified platform to mint POAPs across multiple Layer 2 networks
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {networks.map((network, index) => (
                    <div
                        key={network.name}
                        className={`group relative glass-panel p-8 rounded-3xl border transition-all duration-500 hover:scale-105 overflow-hidden ${network.status === 'active'
                            ? 'border-white/10 hover:border-white/30'
                            : 'border-white/5 opacity-80 hover:opacity-100'
                            }`}
                        style={{
                            background: `linear-gradient(135deg, ${network.color}10 0%, transparent 100%)`
                        }}
                    >
                        {/* Glow effect */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                            style={{
                                background: `radial-gradient(circle at center, ${network.color}20 0%, transparent 70%)`
                            }}
                        />

                        <div className="relative z-10 space-y-6">
                            <div className="flex justify-between items-start">
                                {/* Logo */}
                                <div className="text-6xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                    {network.logo}
                                </div>

                                {network.status === 'soon' && (
                                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-white/70 border border-white/10">
                                        Soon
                                    </span>
                                )}
                            </div>

                            {/* Network Name */}
                            <h3
                                className="text-3xl font-heading font-bold"
                                style={{ color: network.status === 'active' ? network.color : 'white' }}
                            >
                                {network.name}
                            </h3>

                            {/* Description */}
                            <p className="text-white/70 leading-relaxed min-h-[48px]">
                                {network.description}
                            </p>

                            {/* Stats */}
                            <div className="flex gap-4 pt-4 border-t border-white/10">
                                <div className="flex-1">
                                    <div className="text-sm text-white/50 mb-1">Speed</div>
                                    <div className="text-lg font-bold text-white">{network.stats.tps}</div>
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm text-white/50 mb-1">Avg Fee</div>
                                    <div className="text-lg font-bold text-white">{network.stats.fee}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Connection visualization */}
            <div className="relative h-32 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                    <defs>
                        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0052FF" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="#FF0420" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#FCFF52" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M 10 50 Q 50% 10, 90% 50"
                        stroke="url(#connectionGradient)"
                        strokeWidth="2"
                        fill="none"
                        className="animate-pulse"
                    />
                </svg>
                <div className="relative z-10 glass-panel px-6 py-3 rounded-full border border-white/20">
                    <span className="text-white/80 font-medium">Seamlessly Connected</span>
                </div>
            </div>
        </div>
    );
}
