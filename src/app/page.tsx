import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Layers } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-32 md:py-48 lg:py-56 relative overflow-hidden flex flex-col items-center text-center">
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-base/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md mb-8 transition-all hover:bg-white/10 hover:border-white/20">
            <Sparkles className="mr-2 h-4 w-4 text-optimism" />
            <span>AI-Powered POAP Generation</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter font-heading mb-8 max-w-5xl leading-[1.1]">
            Mint Memories on the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-base via-optimism to-celo animate-gradient-x">
              Superchain
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mb-12 leading-relaxed">
            Design and mint stunning POAPs in seconds using AI. <br className="hidden md:block" />
            Secured by <span className="text-[#0052FF] font-semibold">Base</span>, <span className="text-optimism font-semibold">Optimism</span>, and <span className="text-celo font-semibold">Celo</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/generator">
              <Button size="lg" className="h-14 px-10 text-lg bg-white text-black hover:bg-white/90 rounded-full font-semibold transition-all hover:scale-105">
                Start Creating <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="h-14 px-10 text-lg border-white/20 bg-transparent hover:bg-white/5 hover:text-white rounded-full backdrop-blur-sm transition-all">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-32 relative">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1 - Base Style */}
            <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-base/50">
              <div className="absolute inset-0 bg-gradient-to-br from-base/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="relative z-10 flex flex-col items-start space-y-4">
                <div className="p-4 rounded-2xl bg-base/10 text-base group-hover:bg-base group-hover:text-white transition-colors">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">AI Design Studio</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Describe your event and let our AI generate unique, on-brand designs instantly. No design skills required.
                </p>
              </div>
            </div>

            {/* Feature 2 - Optimism Style */}
            <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-optimism/50">
              <div className="absolute inset-0 bg-gradient-to-br from-optimism/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="relative z-10 flex flex-col items-start space-y-4">
                <div className="p-4 rounded-2xl bg-optimism/10 text-optimism group-hover:bg-optimism group-hover:text-white transition-colors">
                  <Layers className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Multi-Chain Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Seamlessly mint on Base, Optimism, and Celo with unified liquidity and bridging powered by LayerZero.
                </p>
              </div>
            </div>

            {/* Feature 3 - Celo Style */}
            <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-celo/50">
              <div className="absolute inset-0 bg-gradient-to-br from-celo/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="relative z-10 flex flex-col items-start space-y-4">
                <div className="p-4 rounded-2xl bg-celo/10 text-celo group-hover:bg-celo group-hover:text-black transition-colors">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Instant Minting</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Optimized smart contracts ensure low gas fees and lightning-fast distribution for your community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
