import Link from "next/link"
import {getProjects} from "@/app/projects/utils"

export default function ProjectsPage() {
    const projects = getProjects()

    return (
        <main className="max-w-6xl mx-auto px-6 py-24">
            <h1 className="text-5xl font-bold mb-12">
                Projects
            </h1>

            <div className="grid gap-8">
                {projects.map((project) => (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="block rounded-lg border border-zinc-800 p-6 hover:border-zinc-600 transition-colors"
                    >
                        <h2 className="text-2xl font-semibold">
                            {project.title}
                        </h2>

                        <p className="text-zinc-400 mt-2">
                            {project.subtitle}
                        </p>

                        <p className="mt-4">
                            {project.summary}
                        </p>
                    </Link>
                ))}
            </div>
        </main>
    )
}