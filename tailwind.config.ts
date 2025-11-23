import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                base: {
                    DEFAULT: "#0052FF", // Base Blue
                    neon: "#3374FF", // Brighter for glow
                    foreground: "#FFFFFF",
                },
                optimism: {
                    DEFAULT: "#FF0420", // Optimism Red
                    neon: "#FF334B", // Brighter for glow
                    foreground: "#FFFFFF",
                },
                celo: {
                    DEFAULT: "#FCFF52", // Celo Yellow/Lime
                    neon: "#FEFF85", // Brighter for glow
                    foreground: "#000000",
                },
                muted: {
                    DEFAULT: "#1e293b", // Slate 800
                    foreground: "#94a3b8", // Slate 400
                },
                card: {
                    DEFAULT: "rgba(255, 255, 255, 0.03)",
                    foreground: "#ededed",
                    hover: "rgba(255, 255, 255, 0.08)",
                },
                border: "rgba(255, 255, 255, 0.08)",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                heading: ["var(--font-outfit)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "grid-pattern": "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
            },
            backgroundSize: {
                "grid": "40px 40px",
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-out forwards",
                "slide-up": "slideUp 0.5s ease-out forwards",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "blob": "blob 7s infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                blob: {
                    "0%": { transform: "translate(0px, 0px) scale(1)" },
                    "33%": { transform: "translate(30px, -50px) scale(1.1)" },
                    "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
                    "100%": { transform: "translate(0px, 0px) scale(1)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
