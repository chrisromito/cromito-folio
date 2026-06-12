export default function ImpactGrid({metrics}: { metrics: { label: string; value: string }[] }) {
    return (
        <section className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
            {metrics.map((m, i) => (
                <div key={i}>
                    <div className="text-2xl font-bold">
                        {m.value}
                    </div>
                    <div className="text-zinc-500 text-sm">
                        {m.label}
                    </div>
                </div>
            ))}
        </section>
    )
}