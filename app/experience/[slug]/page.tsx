import {notFound} from "next/navigation"
import {FaLocationDot} from "react-icons/fa6"
import Link from 'next/link'

import ExperienceRenderer from '@/app/experience/components/ExperienceRenderer'
import type {TExperienceNav} from '@/app/experience/utils'
import {getExperience, getExperienceAndNextBySlug} from '@/app/experience/utils'
import TechStackSection from '@/components/section/TechStackSection'
import CompanyLink from '@/app/experience/components/CompanyLink'

type TParam = Promise<{ slug: string }>


// This function is required for static export with dynamic routes
export async function generateStaticParams() {
  return getExperience().map((experience) => ({
    slug: experience.slug,
  }))
}

export default async function ExperiencePage({params}: { params: TParam }) {
    const {slug} = await params
    const {experience, nextEntry}: TExperienceNav = await getExperienceAndNextBySlug(slug)
    if (!experience) {
        return notFound()
    }
    return (
        <main className="min-h-screen bg-[#0b0d10] text-white py-24">
            <div className="max-w-5xl mx-auto px-2 space-y-24">
                <div className="space-y-8">
                    <header className="space-y-4">
                        <div>
                            <CompanyLink
                                company={experience.company}
                                link={experience.link}
                            />
                            <p className="text-zinc-400">
                                {experience.role} · {experience.startDate} — {experience.endDate}
                            </p>
                            {!experience.location ? null : (
                                <div className="flex items-center">
                                    <FaLocationDot className="text-orange-400" size={16}/>
                                    <span className="pl-1 text-zinc-400">
                                        {experience.location}
                                    </span>
                                </div>
                            )}
                        </div>

                        <p className="max-w-3xl text-zinc-300 leading-relaxed">
                            {experience.summary}
                        </p>
                    </header>
                    <section className="max-w-5xl mx-auto ">
                        <h2 className="mb-4 uppercase tracking-wider text-zinc-500 text-xl">
                            Key Outcomes
                        </h2>

                        <ul className="space-y-2 list-disc list-inside">
                            {experience.impact.map((item) => (
                                <li
                                    key={item}
                                    className="text-zinc-300"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>
                    <TechStackSection technologies={experience.stack}/>
                    {/* ExperienceRenderer handles sections (summary, impact, responsibilities) */}
                    <ExperienceRenderer experience={experience}/>
                </div>

                {/* Navigation for the next experience item */}
                {nextEntry === null ? null : (
                    <section className="px-6 pb-32 max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Link
                                className="p-6 border border-zinc-800 rounded hover:border-zinc-600"
                                href={`/experience/${nextEntry.slug}`}
                            >
                                <strong>Next:</strong>
                                <span className="px-2">
                                    {nextEntry.company}
                                </span>
                            </Link>
                        </div>
                    </section>
                )}
            </div>
        </main>
    )
}