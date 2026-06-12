import type { TTimelineItem } from './TimelineItem'
import type { Experience } from '@/content/experience/types'

export function experienceTimeline(exps: Experience[]): TTimelineItem[] {
    return exps.map((exp: Experience): TTimelineItem => {
        return {
            date: exp.timelineDate || new Date(),
            endDate: exp.timelineEnd || undefined,
            title: `${exp.role} @ ${exp.company}`,
            body: exp.summary,
            link: `/experience/${exp.slug}`
        }
    })
}