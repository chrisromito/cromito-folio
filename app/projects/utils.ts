// lib/projects.ts
import {projectsContent} from "@/content/projects"
import type {Project} from '@/content/projects/types'

export function getProjects(): Project[] {
    return projectsContent
}

export type TProjectNav = {
    project: Project | null
    nextEntry: Project | null
}

export function getProjectAndNextBySlug(slug: string): TProjectNav {
    return projectsContent.reduce(
        (accum: TProjectNav, project: Project, i: number) => {
            if (project.slug === slug) {
                const nextEntry = projectsContent[i + 1] || null
                return {
                    project,
                    nextEntry
                }
            }
            return accum
        },
        {
            project: null,
            nextEntry: null
        }
    )
}
