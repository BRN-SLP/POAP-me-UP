import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/60 py-24 backdrop-blur-sm relative z-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div className="space-y-5">
                        <div className="flex items-center gap-3">
                            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-base via-optimism to-celo shadow-lg" />
                            <span className="text-lg font-bold font-heading tracking-tight text-white">SURGE me UP</span>
                        </div>
                        <p className="text-sm text-white/60 leading-relaxed max-w-xs text-balance">
                            Amplify your achievements with SURGE - the recognition engine for the Superchain ecosystem. Built for the future of on-chain identity.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-8 text-xs font-bold uppercase tracking-widest text-white/50">Platform</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li><Link href="/generator" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Generator</Link></li>
                            <li><Link href="/explore" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Explore</Link></li>
                            <li><Link href="/grants" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Grants</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-8 text-xs font-bold uppercase tracking-widest text-white/50">Resources</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li><Link href="/about" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">About</Link></li>
                            <li><Link href="/docs" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Documentation</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-8 text-xs font-bold uppercase tracking-widest text-white/50">Community</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li><a href="#" className="hover:text-base transition-all duration-300 hover:translate-x-1 inline-block">Twitter</a></li>
                            <li><a href="#" className="hover:text-optimism transition-all duration-300 hover:translate-x-1 inline-block">Discord</a></li>
                            <li><a href="#" className="hover:text-celo transition-all duration-300 hover:translate-x-1 inline-block">GitHub</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>© {new Date().getFullYear()} SURGE me UP. All rights reserved.</p>
                    <p className="flex items-center gap-2">
                        Powered by
                        <span className="text-gradient-optimism font-bold">
                            Superchain
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
