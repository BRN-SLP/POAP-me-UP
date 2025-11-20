"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LivePreview } from "./LivePreview";
import { Sparkles, RefreshCw, Download } from "lucide-react";

export function GeneratorForm() {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        network: "base" as "base" | "celo" | "optimism",
        theme: "modern",
        color: "#0052FF",
    });

    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerateAI = async () => {
        setIsGenerating(true);
        // Mock AI generation delay
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // Mock AI suggestions (randomize color/theme)
        const colors = ["#0052FF", "#FCFF52", "#FF0420", "#7C3AED", "#10B981"];
        const themes = ["modern", "classic", "pixel"];
        setFormData((prev) => ({
            ...prev,
            color: colors[Math.floor(Math.random() * colors.length)],
            theme: themes[Math.floor(Math.random() * themes.length)],
        }));
        setIsGenerating(false);
    };

    return (
        <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>POAP Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Network</label>
                            <div className="flex gap-2">
                                {(["base", "celo", "optimism"] as const).map((net) => (
                                    <Button
                                        key={net}
                                        variant={formData.network === net ? "default" : "outline"}
                                        onClick={() => setFormData({ ...formData, network: net })}
                                        className="flex-1 capitalize"
                                    >
                                        {net}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Event Title</label>
                            <Input
                                placeholder="e.g. Superchain Summit 2024"
                                value={formData.title}
                                onChange={(e) =>
                                    setFormData({ ...formData, title: e.target.value })
                                }
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Date</label>
                            <Input
                                type="date"
                                value={formData.date}
                                onChange={(e) =>
                                    setFormData({ ...formData, date: e.target.value })
                                }
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Theme Style</label>
                            <div className="flex gap-2">
                                {["modern", "classic", "pixel"].map((theme) => (
                                    <Button
                                        key={theme}
                                        variant={formData.theme === theme ? "secondary" : "ghost"}
                                        size="sm"
                                        onClick={() => setFormData({ ...formData, theme })}
                                        className="capitalize"
                                    >
                                        {theme}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Base Color</label>
                            <div className="flex gap-2">
                                {["#0052FF", "#FCFF52", "#FF0420", "#7C3AED", "#10B981"].map(
                                    (color) => (
                                        <button
                                            key={color}
                                            className={`w-8 h-8 rounded-full border-2 transition-all ${formData.color === color
                                                    ? "border-foreground scale-110"
                                                    : "border-transparent hover:scale-105"
                                                }`}
                                            style={{ backgroundColor: color }}
                                            onClick={() => setFormData({ ...formData, color })}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Button
                    className="w-full h-12 text-lg"
                    onClick={handleGenerateAI}
                    disabled={isGenerating}
                >
                    {isGenerating ? (
                        <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                        <Sparkles className="mr-2 h-5 w-5" />
                    )}
                    {isGenerating ? "Generating Options..." : "Generate with AI"}
                </Button>
            </div>

            <div className="sticky top-24 flex flex-col items-center gap-6">
                <LivePreview {...formData} />

                <div className="flex gap-4 w-full max-w-md">
                    <Button variant="outline" className="flex-1">
                        <Download className="mr-2 h-4 w-4" /> Export PNG
                    </Button>
                    <Button className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                        Mint POAP
                    </Button>
                </div>
            </div>
        </div>
    );
}
