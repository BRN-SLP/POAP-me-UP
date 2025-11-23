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

        if (!process.env.REPLICATE_API_TOKEN) {
            console.warn("Replicate API token NOT found in env.");
            console.warn("Replicate API token not found, using mock image.");
            // Return a mock image for testing purposes
            return NextResponse.json({
                imageUrl: "https://replicate.delivery/pbxt/L7j6X8QZz5Z1H1X8QZz5Z1H1X8QZz5Z1H1X8QZz5Z1H1/out-0.png" // Placeholder or generic POAP image
            });
        } else {
            console.log("Replicate API token found.");
        }

        // Using Flux 1.1 Pro for high quality image generation
        const output = await replicate.run(
            "black-forest-labs/flux-1.1-pro",
            {
                input: {
                    prompt: `A high quality, premium POAP badge design. ${prompt}. Vector style, clean lines, circular badge format, vibrant colors, 8k resolution, highly detailed.`,
                    aspect_ratio: "1:1",
                    output_format: "png",
                    output_quality: 100,
                    safety_tolerance: 2
                }
            }
        );

        console.log("Replicate output:", output);

        return NextResponse.json({ imageUrl: output });
    } catch (error) {
        console.error("Error generating image:", error);
        // Fallback to mock on error too
        return NextResponse.json({
            imageUrl: "https://placehold.co/1024x1024/050505/0052FF/png?text=POAP+Preview&font=outfit"
        });
    }
}
