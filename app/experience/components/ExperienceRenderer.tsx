import {Experience} from "@/content/experience/types"
import Section from '@/components/section/ContentSection'
import ImpactGrid from './ImpactGrid'
import BulletList from './BulletList'

export default function ExperienceRenderer({
                                               experience
                                           }: {
    experience: Experience;
}) {
    return (
        <div className="py-2">
            {experience.sections.map((section, i) => {
                switch (section.type) {
                    case "summary":
                        return (
                            <div key={i} className="py-2">
                                <Section title="Overview/Summary" content={section.content} />
                            </div>
                        )

                    case "impact":
                        return (
                            <div key={i} className="py-2">
                                <h2 className="mb-4 text-xl uppercase tracking-wider text-zinc-500">
                                    Impact
                                </h2>
                                <ImpactGrid metrics={section.metrics}/>
                            </div>
                        )

                    case "responsibilities":
                        return (
                            <div key={i} className="py-2">
                                <h2 className="mb-4 text-sm uppercase tracking-wider text-zinc-500">
                                    Responsibilities
                                </h2>
                                <BulletList items={section.items}/>
                            </div>
                        )
                }
            })}
        </div>
    )
}