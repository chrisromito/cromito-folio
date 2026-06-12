import {Experience} from "@/content/experience/types"

export const modiiSenior: Experience = {
    slug: "modii-senior-software-engineer",

    company: "Modii",
    role: "Senior Software Engineer",
    location: "Denver, CO",

    startDate: "May 2021",
    endDate: "May 2023",
    timelineDate: new Date(Date.parse("2021-05-17T00:00:00Z")),
    timelineEnd: new Date(Date.parse("2023-05-02T00:00:00Z")),

    link: 'https://www.modii.co/',
    summary: "Built edge-computing and business intelligence systems supporting parking and mobility operations.",

    stack: [
        "Python",
        'TypeScript',
        "PyTorch",
        "RaspberryPi",
        "AWS",
        "NodeJS",
        "React",
        "FastApi",
        'Flutter',
        'PostgreSQL',
        'Redis',
        'Linux'
    ],

    impact: [
        "Reduced parking data collection costs by 40%",
        "Delivered real-time edge computer vision capabilities",
        "Built serverless reporting systems for enterprise customers"
    ],

    sections: [
        {
            type: "summary",
            content: "Owned Bespoke BI & Reporting Solutions"
        },
        {
            type: "responsibilities",
            items: [
                "Designed and implemented edge-processing systems for parking sign detection",
                "Built real-time computer vision solutions using Raspberry Pi and PyTorch",
                "Owned bespoke BI and reporting solutions using AWS Lambda",
                "Developed customer-facing reporting capabilities using Node.js and React"
            ]
        },
        {
            type: "impact",
            metrics: [
                {
                    label: "Collection Cost Reduction",
                    value: "40%"
                }
            ]
        }
    ]
}