import { NextResponse } from "next/server";

// Hugging Face Inference API
// Free tier: Rate limited but no API key required for public models
// Using Stable Diffusion XL for high quality images

export async function POST(request: Request) {
    try {
        const { prompt, style } = await request.json();

        if (!prompt) {
            return NextResponse.json(
                { error: "Prompt is required" },
                { status: 400 }
            );
        }

        // Strategy:
        // 1. Try Pollinations.ai (simplest, no auth, usually reliable if we don't force flux)
        // 2. Fallback to Hugging Face (rate limited)
        // 3. Fallback to Placeholder

        const randomSeed = Math.floor(Math.random() * 1000000);

        // Build full prompt
        const fullPrompt = `${prompt}. Circular badge format, professional composition, highly detailed, 1024x1024, perfect for NFT, masterpiece quality`;
        const encodedPrompt = encodeURIComponent(fullPrompt);

        // Attempt 1: Pollinations.ai (Default model - likely Stable Diffusion)
        // IMPORTANT: Do NOT include model=flux parameter as it causes 500 errors when flux servers are down
        const pollinationsUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&seed=${randomSeed}`;

        console.log("Attempting Pollinations URL:", pollinationsUrl);

        // Verify Pollinations availability with a HEAD request
        try {
            const checkResponse = await fetch(pollinationsUrl, { method: 'HEAD' });
            if (checkResponse.ok) {
                // If reachable, return the URL directly. Frontend loads it.
                return NextResponse.json({ imageUrl: pollinationsUrl });
            }
        } catch (e) {
            console.warn("Pollinations check failed, trying fallback...");
        }

        // Attempt 2: Hugging Face Inference API (Fallback)
        const HF_API_URL = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0";
        console.log("Attempting Hugging Face fallback...");

        const response = await fetch(HF_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Note: No token provided = anonymous access (rate limited)
            },
            body: JSON.stringify({
                inputs: fullPrompt,
                parameters: {
                    num_inference_steps: 25, // Reduced for speed
                    guidance_scale: 7.5,
                }
            }),
        });

        if (response.ok) {
            const imageBlob = await response.blob();
            const arrayBuffer = await imageBlob.arrayBuffer();
            const base64 = Buffer.from(arrayBuffer).toString('base64');
            return NextResponse.json({ imageUrl: `data:image/png;base64,${base64}` });
        }

        console.error("Hugging Face failed:", await response.text());
        throw new Error("All generation methods failed");

    } catch (error) {
        console.error("Error generating image:", error);

        // Final Fallback: Placeholder
        return NextResponse.json({
            imageUrl: `https://placehold.co/1024x1024/0a0a0a/0052FF/png?text=POAP+Preview&font=outfit`
        });
    }
}
