import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
    return (
        <div className="container py-32 px-4 md:px-6 max-w-5xl mx-auto relative">
            {/* Background Glow */}
            <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-optimism/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-celo/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="flex flex-col items-center text-center mb-16 space-y-4 animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">
                    About POAP me UP
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl font-light">
                    Building the future of on-chain memories on the Superchain.
                </p>
            </div>

            <div className="grid gap-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
                    <CardHeader>
                        <CardTitle className="text-3xl">Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            POAP me UP is designed to simplify the creation and distribution of Proof of Attendance Protocols (POAPs) across the Superchain ecosystem. By leveraging the power of <span className="text-base-neon font-medium">Base</span>, <span className="text-optimism-neon font-medium">Optimism</span>, and <span className="text-celo-neon font-medium">Celo</span>, we provide a unified platform for communities to mint lasting memories without the friction of high fees or complex bridging.
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
                    <CardHeader>
                        <CardTitle className="text-3xl">Roadmap</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        <div className="flex gap-6 relative">
                            {/* Timeline Line */}
                            <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-base via-optimism to-celo opacity-30" />

                            <div className="flex flex-col items-center z-10">
                                <div className="w-10 h-10 rounded-full bg-base/20 border border-base flex items-center justify-center shadow-[0_0_15px_rgba(0,82,255,0.3)]">
                                    <div className="w-3 h-3 rounded-full bg-base" />
                                </div>
                            </div>
                            <div className="pb-4 pt-1">
                                <h3 className="font-bold text-xl text-white mb-2">Phase 1: Launch</h3>
                                <p className="text-muted-foreground">
                                    Initial release with AI-powered generator, support for Base, Optimism, and Celo, and basic minting functionality.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 relative">
                            <div className="flex flex-col items-center z-10">
                                <div className="w-10 h-10 rounded-full bg-optimism/20 border border-optimism flex items-center justify-center shadow-[0_0_15px_rgba(255,4,32,0.3)]">
                                    <div className="w-3 h-3 rounded-full bg-optimism" />
                                </div>
                            </div>
                            <div className="pb-4 pt-1">
                                <h3 className="font-bold text-xl text-white mb-2">Phase 2: Advanced Features</h3>
                                <p className="text-muted-foreground">
                                    Integration with more Superchain networks, batch minting, and advanced analytics for event organizers.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 relative">
                            <div className="flex flex-col items-center z-10">
                                <div className="w-10 h-10 rounded-full bg-celo/20 border border-celo flex items-center justify-center shadow-[0_0_15px_rgba(252,255,82,0.3)]">
                                    <div className="w-3 h-3 rounded-full bg-celo" />
                                </div>
                            </div>
                            <div className="pt-1">
                                <h3 className="font-bold text-xl text-white mb-2">Phase 3: Ecosystem Growth</h3>
                                <p className="text-muted-foreground">
                                    API for third-party integrations, mobile app, and decentralized governance.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
