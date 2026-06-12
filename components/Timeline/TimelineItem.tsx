import Link from 'next/link'

export type TTimelineItem = {
    date: Date
    endDate?: Date
    title: string
    body: string
    link?: string
}

export default function TimelineItem({item}: { item: TTimelineItem }) {
    if (item.endDate) {
        console.log(formatDate(item.endDate))
    }
    let dateString = formatDate(item.date)
    if (item.endDate) {
        dateString = `${dateString} - ${formatDate(item.endDate)}`
    }
    return (
        <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
                <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

                <div className="mt-2">
                    <time className="text-xs/none font-medium text-gray-700 dark:text-gray-200">{dateString}</time>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>

                    <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-200">{item.body}</p>
                    {!item.link ? null : (
                        <Link
                            href={item.link}
                            className="font-semibold tracking-wide"
                        >
                            Read More
                        </Link>
                    )}
                </div>
            </div>

            <div aria-hidden="true"></div>
        </li>
    )
}

const dateFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    // day: 'numeric',
    year: 'numeric'
})

function formatDate(d: Date): string {
    return dateFormatter.format(d)
}
