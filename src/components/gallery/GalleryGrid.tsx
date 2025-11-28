"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ExternalLink, Calendar, Network, Share2, Twitter, Copy, Heart } from "lucide-react";
import Link from "next/link";
import { POAP_ADDRESSES } from "@/config/contracts";
import { useAnalytics } from "@/hooks/useAnalytics";

interface SavedPOAP {
    id: string;
    title: string;
    image: string;
    date: string;
    network: 'base' | 'optimism';
    createdAt: string;
}

export function GalleryGrid() {
    const [poaps, setPoaps] = useState<SavedPOAP[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [likedPoaps, setLikedPoaps] = useState<string[]>([]);
    const { trackEvent } = useAnalytics();

    useEffect(() => {
        const saved = localStorage.getItem('my-poaps');
        const savedLikes = localStorage.getItem('liked-poaps');

        if (saved) {
            try {
                setPoaps(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse saved POAPs", e);
            }
        }

        if (savedLikes) {
            try {
                setLikedPoaps(JSON.parse(savedLikes));
            } catch (e) {
                console.error("Failed to parse saved likes", e);
            }
        }

        setIsLoading(false);
    }, []);

    const toggleLike = (id: string) => {
        setLikedPoaps(prev => {
            const newLikes = prev.includes(id)
                ? prev.filter(p => p !== id)
                : [...prev, id];

            localStorage.setItem('liked-poaps', JSON.stringify(newLikes));

            // Track like/unlike event
            if (!prev.includes(id)) {
                trackEvent({ name: "SHARE_CLICK", properties: { platform: "like", poapId: id } }); // Reusing SHARE_CLICK or could add LIKE_CLICK
            }

            return newLikes;
        });
    };

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="h-96 rounded-3xl bg-white/5 animate-pulse" />
                ))}
            </div>
        );
    }

    if (poaps.length === 0) {
        return (
            <div className="text-center py-20">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-10 h-10 text-white/20" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No POAPs Yet</h3>
                <p className="text-white/60 mb-8 max-w-md mx-auto">
                    You haven't created any POAPs on this device yet. Start your collection by creating your first memory!
                </p>
                <Link href="/generator">
                    <Button className="btn-primary text-lg">
                        Create POAP
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {poaps.map((poap, index) => (
                <Card key={`${poap.id}-${index}`} className="glass-panel border-white/10 bg-white/5 overflow-hidden group hover:border-white/20 transition-all duration-300">
                    <div className="aspect-square relative overflow-hidden bg-black/20">
                        <img
                            src={poap.image}
                            alt={poap.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <div className="flex gap-2 mb-4">
                                <Button
                                    size="icon"
                                    variant="secondary"
                                    className="h-8 w-8 rounded-full bg-white/10 hover:bg-[#1DA1F2] text-white border-none"
                                    onClick={() => {
                                        trackEvent({ name: "SHARE_CLICK", properties: { platform: "twitter", poapId: poap.id } });
                                        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out my POAP "${poap.title}"! 🎨`)}&url=${encodeURIComponent(window.location.origin)}`, '_blank');
                                    }}
                                    title="Share on Twitter"
                                >
                                    <Twitter className="w-4 h-4" />
                                </Button>
                                <Button
                                    size="icon"
                                    variant="secondary"
                                    className="h-8 w-8 rounded-full bg-white/10 hover:bg-[#472A91] text-white border-none"
                                    onClick={() => {
                                        trackEvent({ name: "SHARE_CLICK", properties: { platform: "warpcast", poapId: poap.id } });
                                        window.open(`https://warpcast.com/~/compose?text=${encodeURIComponent(`Check out my POAP "${poap.title}"! 🎨`)}&embeds[]=${encodeURIComponent(window.location.origin)}`, '_blank');
                                    }}
                                    title="Share on Warpcast"
                                >
                                    <Share2 className="w-4 h-4" />
                                </Button>
                                <Button
                                    size="icon"
                                    variant="secondary"
                                    className={`h-8 w-8 rounded-full border-none transition-colors ${likedPoaps.includes(poap.id)
                                        ? "bg-red-500/20 text-red-500 hover:bg-red-500/30"
                                        : "bg-white/10 text-white hover:bg-white/20"
                                        }`}
                                    onClick={() => toggleLike(poap.id)}
                                    title={likedPoaps.includes(poap.id) ? "Unlike" : "Like"}
                                >
                                    <Heart className={`w-4 h-4 ${likedPoaps.includes(poap.id) ? "fill-current" : ""}`} />
                                </Button>
                            </div>

                            <a
                                href={`https://sepolia.basescan.org/token/${poap.network === 'base' ? POAP_ADDRESSES.baseSepolia : POAP_ADDRESSES.optimismSepolia}?a=${poap.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackEvent({ name: "EXPLORER_VIEW", properties: { network: poap.network, poapId: poap.id } })}
                                className="text-white hover:text-blue-400 flex items-center gap-2 text-sm font-medium"
                            >
                                View on Explorer <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2 truncate">{poap.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-white/60">
                            <div className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(poap.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-1.5 capitalize">
                                <Network className="w-4 h-4" />
                                <span>{poap.network}</span>
                            </div>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
}
