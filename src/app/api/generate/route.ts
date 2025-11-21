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
            return NextResponse.json(
                { error: "Replicate API token not configured" },
                { status: 500 }
            );
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

        // Flux 1.1 Pro returns a ReadableStream or string depending on the client version/output
        // Usually it returns the image URL directly or a stream. 
        // Let's log it to be sure during dev, but typically it's the output directly.
        console.log("Replicate output:", output);

        return NextResponse.json({ imageUrl: output });
    } catch (error) {
        console.error("Error generating image:", error);
        return NextResponse.json(
            { error: "Failed to generate image" },
            { status: 500 }
        );
    }
}
