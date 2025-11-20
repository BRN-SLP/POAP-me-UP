import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background py-12">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-primary to-secondary" />
                            <span className="text-lg font-bold font-heading">POAP me UP</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            The ultimate POAP generator and minter for the Superchain ecosystem.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold">Platform</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/generator" className="hover:text-primary">Generator</Link></li>
                            <li><Link href="/explore" className="hover:text-primary">Explore</Link></li>
                            <li><Link href="/grants" className="hover:text-primary">Grants</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold">Resources</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary">About</Link></li>
                            <li><Link href="/docs" className="hover:text-primary">Documentation</Link></li>
                            <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold">Community</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary">Twitter</a></li>
                            <li><a href="#" className="hover:text-primary">Discord</a></li>
                            <li><a href="#" className="hover:text-primary">GitHub</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} POAP me UP. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
