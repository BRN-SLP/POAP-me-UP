"use client";

import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "./button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/generator", label: "Generator" },
        { href: "/about", label: "About" },
    ];

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl">
            <div className="container mx-auto flex h-20 items-center justify-between px-6">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-white/20">
                        <div className="absolute inset-0 bg-gradient-to-br from-base via-optimism to-celo opacity-80" />
                    </div>
                    <span className="text-xl font-bold tracking-tight font-heading text-foreground">
                        POAP me UP
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-all duration-200 hover:text-white",
                                pathname === link.href
                                    ? "text-white"
                                    : "text-muted-foreground"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <ConnectButton
                        showBalance={false}
                        accountStatus={{
                            smallScreen: 'avatar',
                            largeScreen: 'full',
                        }}
                        chainStatus="icon"
                    />
                </div>
            </div>
        </nav>
    );
}
