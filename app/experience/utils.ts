import {experiences} from "@/content/experience"
import type {Experience} from '@/content/experience/types'

export function getExperience(): Experience[] {
    return experiences
}

export type TExperienceNav = {
    experience: Experience | null,
    nextEntry: Experience | null
}

export function getExperienceAndNextBySlug(slug: string): TExperienceNav {
    return experiences.reduce((accum: TExperienceNav, exp: Experience, idx: number) => {
        if (exp.slug === slug) {
            const nextEntry = experiences[idx + 1] || null
            return {
                nextEntry,
                experience: exp
            }
        }
        return accum
    }, {
        experience: null,
        nextEntry: null
    })
}