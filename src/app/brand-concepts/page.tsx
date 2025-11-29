"use client";

import React from "react";

export default function BrandConceptsPage() {
    return (
        <div className="min-h-screen bg-black text-white p-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                    SURGE Brand Concepts
                </h1>
                <p className="text-gray-400 mb-12">
                    Exploration of "Superchain User Recognition and Growth Engine" visual identities.
                    <br />
                    Core themes: Wave, Energy, Growth, S-Shape, Superchain Gradient.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* OPTION 1: The Current Refined (Organic Wave) */}
                    <ConceptCard
                        title="1. Organic Surge"
                        description="The current refined design. A natural, fluid wave that subtly forms an S. Represents organic growth and momentum."
                    >
                        <svg viewBox="0 0 40 40" fill="none" className="w-24 h-24">
                            <defs>
                                <linearGradient id="grad1" x1="0" y1="40" x2="40" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#0052FF" />
                                    <stop offset="25%" stopColor="#6644CC" />
                                    <stop offset="50%" stopColor="#CC3366" />
                                    <stop offset="70%" stopColor="#FF6633" />
                                    <stop offset="100%" stopColor="#FCFF52" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M 2 32 Q 2 38, 12 38 Q 22 38, 28 32 Q 34 26, 30 18 Q 26 10, 32 6 Q 36 2, 28 2 Q 20 2, 14 8 Q 8 14, 14 22 Q 18 28, 12 32 Q 8 35, 2 32 Z"
                                fill="url(#grad1)"
                            />
                            <circle cx="34" cy="4" r="2" fill="#FCFF52" opacity="0.9" />
                        </svg>
                    </ConceptCard>

                    {/* OPTION 2: The Digital Growth (Bar Chart) */}
                    <ConceptCard
                        title="2. Digital Growth"
                        description="Vertical bars rising in a wave pattern. Represents data, analytics, and measurable growth on the Superchain."
                    >
                        <svg viewBox="0 0 40 40" fill="none" className="w-24 h-24">
                            <defs>
                                <linearGradient id="grad2" x1="0" y1="40" x2="40" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#0052FF" />
                                    <stop offset="50%" stopColor="#FF0420" />
                                    <stop offset="100%" stopColor="#FCFF52" />
                                </linearGradient>
                            </defs>
                            <rect x="4" y="28" width="6" height="12" rx="2" fill="url(#grad2)" opacity="0.6" />
                            <rect x="12" y="20" width="6" height="20" rx="2" fill="url(#grad2)" opacity="0.8" />
                            <rect x="20" y="12" width="6" height="28" rx="2" fill="url(#grad2)" />
                            <rect x="28" y="4" width="6" height="36" rx="2" fill="url(#grad2)" />
                        </svg>
                    </ConceptCard>

                    {/* OPTION 3: The Lightning Bolt (Energy) */}
                    <ConceptCard
                        title="3. Energy Bolt"
                        description="A sharp, dynamic S-shape resembling a lightning bolt. Represents speed, power, and the electric energy of the ecosystem."
                    >
                        <svg viewBox="0 0 40 40" fill="none" className="w-24 h-24">
                            <defs>
                                <linearGradient id="grad3" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#FCFF52" />
                                    <stop offset="50%" stopColor="#FF0420" />
                                    <stop offset="100%" stopColor="#0052FF" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M 24 2 L 12 20 L 20 20 L 16 38 L 28 20 L 20 20 L 24 2 Z"
                                fill="url(#grad3)"
                                transform="skewX(-10)"
                            />
                        </svg>
                    </ConceptCard>

                    {/* OPTION 4: The Infinity Flow (Continuity) */}
                    <ConceptCard
                        title="4. Infinity Flow"
                        description="An S-shape formed by a continuous loop. Represents the infinite possibilities and interconnected nature of the Superchain."
                    >
                        <svg viewBox="0 0 40 40" fill="none" className="w-24 h-24">
                            <defs>
                                <linearGradient id="grad4" x1="0" y1="20" x2="40" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#0052FF" />
                                    <stop offset="50%" stopColor="#FF0420" />
                                    <stop offset="100%" stopColor="#FCFF52" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M 10 30 C 4 30, 4 20, 10 20 C 16 20, 24 30, 30 30 C 36 30, 36 20, 30 20 C 24 20, 16 30, 10 30 Z"
                                stroke="url(#grad4)"
                                strokeWidth="6"
                                strokeLinecap="round"
                            />
                        </svg>
                    </ConceptCard>

                    {/* OPTION 5: The Ripple Effect (Impact) */}
                    <ConceptCard
                        title="5. Ripple Effect"
                        description="Concentric arcs radiating outward. Represents the impact of a single user action spreading across the network."
                    >
                        <svg viewBox="0 0 40 40" fill="none" className="w-24 h-24">
                            <defs>
                                <linearGradient id="grad5" x1="20" y1="20" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#0052FF" />
                                    <stop offset="100%" stopColor="#FF0420" />
                                </linearGradient>
                            </defs>
                            <path d="M 4 36 A 32 32 0 0 1 36 4" stroke="url(#grad5)" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
                            <path d="M 10 36 A 26 26 0 0 1 36 10" stroke="url(#grad5)" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
                            <path d="M 16 36 A 20 20 0 0 1 36 16" stroke="url(#grad5)" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    </ConceptCard>

                    {/* OPTION 6: The Minimalist Arc (Simplicity) */}
                    <ConceptCard
                        title="6. Minimalist Arc"
                        description="A single, clean swoosh rising upward. Pure, simple, and modern. Focuses on the 'upward' trajectory."
                    >
                        <svg viewBox="0 0 40 40" fill="none" className="w-24 h-24">
                            <defs>
                                <linearGradient id="grad6" x1="0" y1="40" x2="40" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#0052FF" />
                                    <stop offset="50%" stopColor="#FF0420" />
                                    <stop offset="100%" stopColor="#FCFF52" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M 4 36 C 14 36, 20 30, 36 4"
                                stroke="url(#grad6)"
                                strokeWidth="6"
                                strokeLinecap="round"
                            />
                            <circle cx="36" cy="4" r="3" fill="#FCFF52" />
                        </svg>
                    </ConceptCard>

                    {/* OPTION 7: The Tech Block (Blockchain) */}
                    <ConceptCard
                        title="7. Tech Block S"
                        description="An S constructed from geometric blocks. Emphasizes the 'building block' nature of blockchain and dApps."
                    >
                        <svg viewBox="0 0 40 40" fill="none" className="w-24 h-24">
                            <defs>
                                <linearGradient id="grad7" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#0052FF" />
                                    <stop offset="100%" stopColor="#FCFF52" />
                                </linearGradient>
                            </defs>
                            <rect x="20" y="4" width="16" height="8" rx="2" fill="url(#grad7)" />
                            <rect x="4" y="4" width="14" height="8" rx="2" fill="url(#grad7)" opacity="0.8" />
                            <rect x="4" y="14" width="14" height="8" rx="2" fill="url(#grad7)" opacity="0.6" />
                            <rect x="22" y="14" width="14" height="8" rx="2" fill="url(#grad7)" opacity="0.4" />
                            <rect x="22" y="24" width="14" height="8" rx="2" fill="url(#grad7)" opacity="0.6" />
                            <rect x="4" y="24" width="16" height="8" rx="2" fill="url(#grad7)" opacity="0.8" />
                        </svg>
                    </ConceptCard>

                    {/* OPTION 8: The Vortex (Recognition) */}
                    <ConceptCard
                        title="8. The Vortex"
                        description="A swirling vortex shape. Represents the gathering of community and the centralization of recognition."
                    >
                        <svg viewBox="0 0 40 40" fill="none" className="w-24 h-24">
                            <defs>
                                <linearGradient id="grad8" x1="20" y1="20" x2="40" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#0052FF" />
                                    <stop offset="50%" stopColor="#FF0420" />
                                    <stop offset="100%" stopColor="#FCFF52" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M 20 20 m -15 0 a 15 15 0 1 0 30 0 a 15 15 0 1 0 -30 0"
                                stroke="url(#grad8)"
                                strokeWidth="4"
                                strokeDasharray="60 20"
                                strokeLinecap="round"
                                className="animate-spin-slow"
                                style={{ animationDuration: '10s' }}
                            />
                            <circle cx="20" cy="20" r="6" fill="url(#grad8)" />
                        </svg>
                    </ConceptCard>
                </div>
            </div>
        </div>
    );
}

function ConceptCard({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
    return (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center hover:border-gray-600 transition-colors">
            <div className="mb-6 p-4 bg-black rounded-lg border border-gray-800 shadow-inner">
                {children}
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        </div>
    );
}
