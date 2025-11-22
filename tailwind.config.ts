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
                    foreground: "#FFFFFF",
                },
                optimism: {
                    DEFAULT: "#FF0420", // Optimism Red
                    foreground: "#FFFFFF",
                },
                celo: {
                    DEFAULT: "#FCFF52", // Celo Yellow/Lime
                    foreground: "#000000",
                },
                muted: {
                    DEFAULT: "#1e293b", // Slate 800
                    foreground: "#94a3b8", // Slate 400
                },
                card: {
                    DEFAULT: "rgba(255, 255, 255, 0.05)",
                    foreground: "#ededed",
                },
                border: "rgba(255, 255, 255, 0.1)",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                heading: ["var(--font-outfit)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "grid-pattern": "linear-gradient(to right, #202020 1px, transparent 1px), linear-gradient(to bottom, #202020 1px, transparent 1px)",
            },
            backgroundSize: {
                "grid": "40px 40px",
            },
        },
    },
    plugins: [],
};
export default config;
