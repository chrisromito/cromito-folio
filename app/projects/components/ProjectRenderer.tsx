import {Project} from "@/content/projects/types"
import ContentSection from '@/components/section/ContentSection'
import TechStackSection from '@/components/section/TechStackSection'
import HighlightsSection from '@/app/projects/components/HighlightsSection'

export default function ProjectRenderer({
                                            project
                                        }: {
    project: Project;
}) {
    return (
        <>
            <header className="pb-2">
                <div className="flex items-center w-fit">
                    <h1 className="text-4xl font-bold">
                        {project.title}
                    </h1>
                    <p className="text-xl text-zinc-400 pl-2">
                        {project.year}
                    </p>
                </div>
                <p className="text-xl text-zinc-400 mt-4">
                    {project.subtitle}
                </p>

                <p className="mt-6 max-w-3xl">
                    {project.summary}
                </p>
            </header>
            {/* Sections */}
            <div className="py-2">
                <ContentSection title={'Problem'} content={project.problem}/>
            </div>
            <div className="py-2">
                <ContentSection title={'Solution'} content={project.solution}/>
            </div>
            {/* Tech Stack */}
            <div className="py-2">
                <TechStackSection technologies={project.stack}/>
            </div>

            {/* Highlights */}
            <div className="py-2">
                <HighlightsSection highlights={project.highlights}/>
            </div>
        </>
    )
}