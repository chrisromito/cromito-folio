import { Metric } from "@/content/projects/types";

export default function MetricsSection({
  metrics,
}: {
  metrics: Metric[];
}) {
  return (
    <section className="max-w-3xl mx-auto grid grid-cols-2 gap-6">
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
  );
}