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
                primary: {
                    DEFAULT: "#0052FF", // Base Blue
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#FCFF52", // Celo Yellow/Greenish
                    foreground: "#000000",
                },
                accent: {
                    DEFAULT: "#FF0420", // Optimism Red
                    foreground: "#FFFFFF",
                },
                muted: {
                    DEFAULT: "#f1f5f9",
                    foreground: "#64748b",
                },
                card: {
                    DEFAULT: "#ffffff",
                    foreground: "#0f172a",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                heading: ["var(--font-outfit)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
