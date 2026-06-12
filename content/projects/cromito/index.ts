import {Project} from '@/content/projects/types'

export const cromito: Project = {
    slug: "portfolio-platform",
    title: "Portfolio Platform",
    subtitle: "Data-driven engineering portfolio built with Next.js",
    summary: "Designed a schema-driven portfolio platform that separates content, presentation, and navigation into reusable components and renderers.",
    role: "Principal Software Engineer",

    stack: [
        "Next",
        "Docker",
        "TypeScript",
        "React",
        "AWS"
    ],

    year: "2026",
    problem: "Traditional portfolio sites often require hand-crafted pages that become difficult to maintain as projects and experience grow over time.",
    solution: "Created a content-driven architecture where projects, experience, and case studies are represented through strongly-typed schemas and rendered through reusable components.",
    highlights: [
        "Schema-driven architecture",
        "Reusable renderers",
        "Static generation",
        "Type-safe content model"
    ],
    sections: [
        {
            type: "text",
            title: "Content Architecture",
            content: "Projects and experience are defined as structured content objects that are rendered dynamically through shared presentation components."
        },
        {
            type: "text",
            title: "Maintainability",
            content: "The architecture allows new content types and visualizations to be introduced without requiring changes to routing or page implementations."
        }
    ]
}