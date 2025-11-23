import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ContextProvider from "@/context";
import { headers } from "next/headers";
import { cn } from "@/lib/utils";

// Reown AppKit styles are imported automatically

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "POAP me UP",
  description: "Generate and mint POAPs on Superchain",
};

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const cookies = headersList.get('cookie');

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          inter.variable,
          outfit.variable
        )}
      >
        <ContextProvider cookies={cookies}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}


