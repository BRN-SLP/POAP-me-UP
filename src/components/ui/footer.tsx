import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-background/50 py-16 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="grid gap-12 md:grid-cols-4">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="h-6 w-6 rounded bg-gradient-to-br from-base via-optimism to-celo opacity-80" />
                            <span className="text-lg font-bold font-heading tracking-tight">POAP me UP</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                            The ultimate POAP generator and minter for the Superchain ecosystem.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-6 text-xs font-semibold uppercase tracking-wider text-white/50">Platform</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/generator" className="hover:text-base transition-colors">Generator</Link></li>
                            <li><Link href="/explore" className="hover:text-optimism transition-colors">Explore</Link></li>
                            <li><Link href="/grants" className="hover:text-celo transition-colors">Grants</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-6 text-xs font-semibold uppercase tracking-wider text-white/50">Resources</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-base transition-colors">About</Link></li>
                            <li><Link href="/docs" className="hover:text-optimism transition-colors">Documentation</Link></li>
                            <li><Link href="/terms" className="hover:text-celo transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-6 text-xs font-semibold uppercase tracking-wider text-white/50">Community</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-base transition-colors">Twitter</a></li>
                            <li><a href="#" className="hover:text-optimism transition-colors">Discord</a></li>
                            <li><a href="#" className="hover:text-celo transition-colors">GitHub</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} POAP me UP. All rights reserved.</p>
                    <p className="flex items-center gap-2">
                        Powered by
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-base via-optimism to-celo font-bold">
                            SuperChain
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
