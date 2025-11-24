import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(request: Request) {
    try {
        const { prompt } = await request.json();

        if (!prompt) {
            return NextResponse.json(
                { error: "Prompt is required" },
                { status: 400 }
            );
        }

        // Use Pollinations.ai for free, unlimited generation
        // They support Flux model which is high quality
        const encodedPrompt = encodeURIComponent(
            `A high quality, premium POAP badge design. ${prompt}. Vector style, clean lines, circular badge format, vibrant colors, 8k resolution, highly detailed.`
        );

        const randomSeed = Math.floor(Math.random() * 1000000);
        const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?model=flux&width=1024&height=1024&nologo=true&seed=${randomSeed}`;

        // We can return the URL directly. The frontend will load it.
        // Pollinations generates on-the-fly when the URL is requested.

        console.log("Generated Pollinations URL:", imageUrl);

        return NextResponse.json({ imageUrl });

    } catch (error) {
        console.error("Error generating image:", error);
        // Fallback just in case
        return NextResponse.json({
            imageUrl: "https://placehold.co/1024x1024/050505/0052FF/png?text=POAP+Preview&font=outfit"
        });
    }
}
