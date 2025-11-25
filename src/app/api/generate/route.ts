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

        // Hugging Face Inference API endpoint
        const HF_API_URL = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0";

        // Build full prompt with style keywords
        const fullPrompt = `${prompt}. Circular badge format, professional composition, highly detailed, 1024x1024, perfect for NFT, masterpiece quality`;

        console.log("Generating with Hugging Face:", fullPrompt);

        const response = await fetch(HF_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                inputs: fullPrompt,
                parameters: {
                    num_inference_steps: 30,
                    guidance_scale: 7.5,
                }
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Hugging Face API error:", errorText);

            // Return placeholder on error
            return NextResponse.json({
                imageUrl: `https://placehold.co/1024x1024/0a0a0a/0052FF/png?text=POAP+Preview&font=outfit`
            });
        }

        // Get image blob
        const imageBlob = await response.blob();

        // Convert blob to base64
        const arrayBuffer = await imageBlob.arrayBuffer();
        const base64 = Buffer.from(arrayBuffer).toString('base64');
        const imageUrl = `data:image/png;base64,${base64}`;

        return NextResponse.json({ imageUrl });

    } catch (error) {
        console.error("Error generating image:", error);

        // Fallback placeholder
        return NextResponse.json({
            imageUrl: `https://placehold.co/1024x1024/0a0a0a/0052FF/png?text=POAP+Preview&font=outfit`
        });
    }
}
