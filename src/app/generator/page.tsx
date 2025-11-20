import { GeneratorForm } from "@/components/generator/GeneratorForm";

export default function GeneratorPage() {
    return (
        <div className="container py-12 md:py-20 px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12 space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold font-heading tracking-tight">
                    Design Your POAP
                </h1>
                <p className="text-muted-foreground max-w-2xl">
                    Use our AI-powered tools to create unique, cross-chain compatible POAPs for your community.
                </p>
            </div>

            <GeneratorForm />
        </div>
    );
}
