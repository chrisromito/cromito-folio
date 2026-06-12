import TechnologyBadge from "@/components/TechnologyBadge"
import type { TTech } from "@/content/stack"

type TechStackSectionProps = {
    technologies: TTech[]; // Changed from string[] to TTech[]
    title?: string;
};

export default function TechStackSection({
                                             technologies,
                                             title = "Tech Stack"
                                         }: TechStackSectionProps) {
    if (technologies.length === 0) {
        return null
    }

    return (
        <section className="max-w-5xl mx-auto">
            <h2 className="mb-4 text-sm uppercase tracking-widest text-zinc-500">
                {title}
            </h2>
            <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <TechnologyBadge
                        key={technology}
                        name={technology}
                    />
                ))}
            </div>
        </section>
    )
}