import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Layers } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0" />
        <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6 backdrop-blur-sm">
            <Sparkles className="mr-2 h-4 w-4" />
            <span>AI-Powered POAP Generation</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter font-heading bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 mb-6 max-w-4xl">
            Mint Memories on the Superchain
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] mb-8">
            Create, design, and mint stunning POAPs in seconds. Powered by AI and secured by Optimism, Base, and Celo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/generator">
              <Button size="lg" className="h-12 px-8 text-base">
                Start Creating <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-md transition-all">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">AI Design Studio</h3>
              <p className="text-muted-foreground">
                Describe your event and let our AI generate unique, on-brand designs instantly.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-md transition-all">
              <div className="p-3 rounded-full bg-secondary/20 text-secondary-foreground">
                <Layers className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Multi-Chain Support</h3>
              <p className="text-muted-foreground">
                Seamlessly mint on Base, Optimism, and Celo with unified liquidity and bridging.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-md transition-all">
              <div className="p-3 rounded-full bg-accent/10 text-accent">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Instant Minting</h3>
              <p className="text-muted-foreground">
                Optimized smart contracts ensure low gas fees and lightning-fast distribution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
