import {Experience} from "@/content/experience/types"

export const tuzag: Experience = {
    slug: "tuzag",

    company: "tuzag",
    role: "Senior Software Engineer",
    location: "Syracuse, NY",

    startDate: "July 2020",
    endDate: "May 2021",
    timelineDate: new Date(Date.parse("2020-07-02T00:00:00Z")),
    timelineEnd: new Date(Date.parse("2021-05-02T00:00:00Z")),
    link: 'https://wearetuzag.com/',

    summary:
        "Built a white-labeled asynchronous communications platform and introduced modern engineering practices across the organization.",

    stack: [
        "TypeScript",
        "React",
        "PostgreSQL",
        "NodeJS",
        "GCP",
        "Alexa"
    ],

    impact: [
        "Delivered a greenfield white-label platform for async doctor-patient check-ins",
        "Introduced the company's first automated CI/CD process and testing workflows",
        "Mentored junior engineers on backend development practices"
    ],

    sections: [
        {
            type: "responsibilities",
            items: [
                "Built a white-labeled asynchronous platform from scratch",
                "Integrated voice assistant functionality into mobile experiences",
                "Architected CI/CD and automated testing frameworks",
                "Mentored junior developers and promoted backend best practices"
            ]
        }
    ]
}