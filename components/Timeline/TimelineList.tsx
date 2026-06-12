import type { TTimelineItem } from './TimelineItem'
import TimelineItem from './TimelineItem'


export type TTimeline = {
    items: TTimelineItem[]
}

export default function TimelineList({items}: TTimeline) {
    return (
        <div className="w-full">
            <ol className="relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-200 dark:before:bg-gray-700">
                {items.map(item => (
                    <TimelineItem
                        key={item.title + item.date}
                        item={item}
                    />
                ))}
            </ol>
        </div>
    )
}