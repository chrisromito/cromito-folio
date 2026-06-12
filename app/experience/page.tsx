import Link from "next/link"
import {getExperience} from "@/app/experience/utils"
import {Experience} from "@/content/experience/types"


export default function ExperiencePage() {
    const experiences: Experience[] = getExperience()

    return (
        <main className="min-h-screen bg-[#0b0d10] text-white py-24">
            <div className="max-w-5xl mx-auto px-2 space-y-16">
                {experiences.map((exp) => (
                    <div key={exp.slug} className="space-y-4 flex">
                        <Link href={`/experience/${exp.slug}`}>
                            <header className="space-y-4">
                                <div>
                                    <h2 className="text-3xl font-bold">
                                        {exp.company}
                                    </h2>

                                    <p className="text-zinc-400">
                                        {exp.role} · {exp.startDate} — {exp.endDate}
                                    </p>
                                </div>

                                <p className="max-w-3xl text-zinc-300 leading-relaxed">
                                    {exp.summary}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
                                        >
                                      {tech}
                                    </span>
                                    ))}
                                </div>
                            </header>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    )
}