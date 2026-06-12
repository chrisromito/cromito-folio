import Link from 'next/link'

import TimelineList from '@/components/Timeline/TimelineList'
import {getExperience} from '@/app/experience/utils'
import {experienceTimeline} from '@/components/Timeline/utils'
import type {TTimelineItem} from '@/components/Timeline/TimelineItem'

export default function ExperienceTimeline() {
    const expTimeline: TTimelineItem[] = experienceTimeline(getExperience())
    return (
        <div className="px-6 py-24 max-w-5xl mx-auto">
            <Link href="/experience">
                <h2 className="mb-4 text-xl uppercase tracking-wider text-zinc-500">
                    History
                </h2>
            </Link>
            <TimelineList items={expTimeline}/>
        </div>
    )
}