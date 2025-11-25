import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { prompt, style } = await request.json();

        if (!prompt) {
            return NextResponse.json(
                { error: "Prompt is required" },
                { status: 400 }
            );
        }

        console.log("[API] Generation request received:", { prompt: prompt.substring(0, 50), style });

        const randomSeed = Math.floor(Math.random() * 1000000);
        const fullPrompt = `${prompt}. Circular badge format, professional composition, highly detailed, 1024x1024, perfect for NFT, masterpiece quality`;
        const encodedPrompt = encodeURIComponent(fullPrompt);

        // Strategy 1: Pollinations.ai (fastest, most reliable)
        const pollinationsUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&seed=${randomSeed}`;

        console.log("[API] Trying Pollinations...");

        try {
            // Try to fetch with 10 second timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000);

            const pollinationsResponse = await fetch(pollinationsUrl, {
                method: 'GET',
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (pollinationsResponse.ok) {
                console.log("[API] Pollinations SUCCESS");
                // Return the URL directly - browser will load it
                return NextResponse.json({ imageUrl: pollinationsUrl });
            }

            console.warn("[API] Pollinations returned non-OK status:", pollinationsResponse.status);
        } catch (pollinationsError: any) {
            console.warn("[API] Pollinations failed:", pollinationsError.message);
        }

        // Strategy 2: Return placeholder immediately (no Hugging Face - too slow/unreliable)
        console.log("[API] Returning placeholder");
        return NextResponse.json({
            imageUrl: `https://placehold.co/1024x1024/0a0a0a/0052FF/png?text=POAP+Preview&font=outfit`
        });

    } catch (error: any) {
        console.error("[API] Error:", error);

        // Final fallback
        return NextResponse.json({
            imageUrl: `https://placehold.co/1024x1024/0a0a0a/0052FF/png?text=Error&font=outfit`
        });
    }
}
