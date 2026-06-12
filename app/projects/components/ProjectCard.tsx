import Link from "next/link"
import {Project} from "@/content/projects/types"

export default function ProjectCard({
                                        project
                                    }: {
    project: Project;
}) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="block rounded-lg border border-zinc-800 p-6 hover:border-zinc-600"
        >
            <h2>{project.title}</h2>
            <p>{project.subtitle}</p>
        </Link>
    )
}