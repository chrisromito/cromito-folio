import {notFound} from "next/navigation"

import type {TProjectNav} from '@/app/projects/utils'
import {getProjectAndNextBySlug, getProjects} from "@/app/projects/utils"
import ProjectRenderer from "@/app/projects/components/ProjectRenderer"
import Link from 'next/link'

type TParam = Promise<{ slug: string }>

// This function is required for static export with dynamic routes
export async function generateStaticParams() {
  return getProjects().map((project) => ({
    slug: project.slug,
  }))
}


export default async function ProjectPage({params}: { params: TParam }) {
    const {slug} = await params
    const {project, nextEntry}: TProjectNav = getProjectAndNextBySlug(slug)
    if (!project) {
        notFound()
    }
    return (
        <main className="max-w-5xl mx-auto px-6 py-24">
            <ProjectRenderer project={project}/>
            {nextEntry === null ? null : (
                <section className="px-6 pb-32 max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Link
                            className="p-6 border border-zinc-800 rounded hover:border-zinc-600"
                            href={`/projects/${nextEntry.slug}`}
                        >
                            <strong>Next:</strong>
                            <span className="px-2">
                                    {nextEntry.title}
                                </span>
                        </Link>
                    </div>
                </section>
            )}
        </main>
    )
}