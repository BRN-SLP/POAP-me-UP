import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
    return (
        <div className="container py-12 md:py-20 px-4 md:px-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center mb-12 space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold font-heading tracking-tight">
                    About POAP me UP
                </h1>
                <p className="text-muted-foreground max-w-2xl">
                    Building the future of on-chain memories on the Superchain.
                </p>
            </div>

            <div className="grid gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                            POAP me UP is designed to simplify the creation and distribution of Proof of Attendance Protocols (POAPs) across the Superchain ecosystem. By leveraging the power of Base, Optimism, and Celo, we provide a unified platform for communities to mint lasting memories without the friction of high fees or complex bridging.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Roadmap</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-4 h-4 rounded-full bg-primary" />
                                <div className="w-0.5 h-full bg-border" />
                            </div>
                            <div className="pb-8">
                                <h3 className="font-bold text-lg">Phase 1: Launch</h3>
                                <p className="text-muted-foreground">
                                    Initial release with AI-powered generator, support for Base, Optimism, and Celo, and basic minting functionality.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-4 h-4 rounded-full bg-muted border-2 border-primary" />
                                <div className="w-0.5 h-full bg-border" />
                            </div>
                            <div className="pb-8">
                                <h3 className="font-bold text-lg">Phase 2: Advanced Features</h3>
                                <p className="text-muted-foreground">
                                    Integration with more Superchain networks, batch minting, and advanced analytics for event organizers.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-4 h-4 rounded-full bg-muted border-2 border-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Phase 3: Ecosystem Growth</h3>
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
