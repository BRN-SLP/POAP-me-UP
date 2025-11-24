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
            return NextResponse.json({
                imageUrl: "https://replicate.delivery/pbxt/L7j6X8QZz5Z1H1X8QZz5Z1H1X8QZz5Z1H1X8QZz5Z1H1/out-0.png"
            });
        }

        // 1. Start the prediction
        const startResponse = await fetch("https://api.replicate.com/v1/models/black-forest-labs/flux-1.1-pro/predictions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.REPLICATE_API_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // version field is not needed for model-specific endpoint
                input: {
                    prompt: `A high quality, premium POAP badge design. ${prompt}. Vector style, clean lines, circular badge format, vibrant colors, 8k resolution, highly detailed.`,
                    aspect_ratio: "1:1",
                    output_format: "png",
                    output_quality: 100,
                    safety_tolerance: 2
                }
            })
        });

        if (!startResponse.ok) {
            const error = await startResponse.json();
            console.error("Replicate API error:", error);
            throw new Error(`Replicate API error: ${JSON.stringify(error)}`);
        }

        const prediction = await startResponse.json();
        let status = prediction.status;
        let output = prediction.output;
        const getUrl = prediction.urls.get;

        // 2. Poll for completion
        while (status !== "succeeded" && status !== "failed" && status !== "canceled") {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1s

            const pollResponse = await fetch(getUrl, {
                headers: {
                    "Authorization": `Bearer ${process.env.REPLICATE_API_TOKEN}`,
                }
            });

            if (!pollResponse.ok) {
                throw new Error("Failed to poll prediction status");
            }

            const updatedPrediction = await pollResponse.json();
            status = updatedPrediction.status;
            output = updatedPrediction.output;
        }

        if (status !== "succeeded") {
            throw new Error(`Prediction failed with status: ${status}`);
        }

        console.log("Replicate output:", output);

        // Output for flux-1.1-pro is usually a string (URL) or array of strings
        const imageUrl = Array.isArray(output) ? output[0] : output;

        return NextResponse.json({ imageUrl });

    } catch (error) {
        console.error("Error generating image:", error);

        // Fallback to high-quality mock images for testing when API limit is reached
        const mockImages = [
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1024&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=1024&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1024&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1024&auto=format&fit=crop"
        ];
        const randomMock = mockImages[Math.floor(Math.random() * mockImages.length)];

        return NextResponse.json({
            imageUrl: randomMock
        });
    }
}
