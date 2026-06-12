import {technologyIcons} from "@/content/stack"
import type {TTech } from "@/content/stack"

type Props = {
    name: TTech
}

export default function TechnologyBadge({
                                            name
                                        }: Props) {
    const Icon =
        technologyIcons[
            name as keyof typeof technologyIcons
            ]

    return (
        <div className="flex items-center gap-2 rounded border border-zinc-800 px-3 py-2 text-sm text-zinc-300 hover:text-orange-400">
            {Icon && <Icon className="transition-colors" size={18}/>}
            <span className="transition-colors">{name}</span>
        </div>
    )
}