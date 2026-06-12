import { TimelineEvent } from "@/content/projects/types";

export default function TimelineSection({
  events,
}: {
  events: TimelineEvent[];
}) {
  return (
    <section className="max-w-3xl mx-auto">
      <ul className="space-y-4 border-l border-zinc-800 pl-6">
        {events.map((e, i) => (
          <li key={i}>
            <div className="text-white font-medium">
              {e.title}
            </div>
            {e.date && (
              <div className="text-zinc-500 text-sm">
                {e.date}
              </div>
            )}
            {e.description && (
              <p className="text-zinc-400">
                {e.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}