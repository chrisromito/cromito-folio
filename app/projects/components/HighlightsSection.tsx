type Props = {
    highlights: string[];
};

export default function HighlightsSection({
                                              highlights
                                          }: Props) {
    if (!highlights.length) {
        return null
    }

    return (
        <section className="max-w-5xl mx-auto">
            <h2 className="mb-4 text-sm uppercase tracking-widest text-zinc-500">
                Highlights
            </h2>

            <ul className="space-y-3">
                {highlights.map((highlight) => (
                    <li
                        key={highlight}
                        className="flex gap-3 text-zinc-300"
                    >
                        <span className="text-zinc-500">▸</span>
                        <span>{highlight}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}