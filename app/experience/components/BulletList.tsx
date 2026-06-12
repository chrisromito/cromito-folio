export default function BulletList({items}: { items: string[] }) {
    return (
        <section className="max-w-5xl mx-auto px-2">
            <ul className="space-y-3 list-disc list-inside text-zinc-300">
                {items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </section>
    )
}