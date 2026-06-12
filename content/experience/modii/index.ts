import {Experience} from "@/content/experience/types"

export const modiiPrincipal: Experience = {
    slug: "modii-principal-software-engineer",

    company: "Modii",
    role: "Principal Software Engineer",
    location: "Denver, CO",

    startDate: "May 2023",
    endDate: "April 2026",
    timelineDate: new Date(Date.parse("2023-05-02T00:00:00Z")),
    timelineEnd: new Date(Date.parse("2026-04-02T00:00:00Z")),

    link: 'https://www.modii.co/',

    summary:
        "Led technical strategy and architecture for a cloud-native mobility platform while serving as the primary backend engineer and engineering lead.",

    stack: [
        "Go",
        "Python",
        "Django",
        'Docker',
        "Kubernetes",
        "GCP",
        "PyTorch",
        "PostgreSQL",
        'React',
        'Redis',
        'TypeScript',
        'Git',
        'AWS',
        'Linux'
    ],

    impact: [
        "Expanded platform into 3 new market verticals through standards-compliant architecture",
        "Maintained zero downtime for more than 28 months",
        "Reduced API P99 latency to 124ms",
        "Built distributed ingestion platform processing 360k+ events per day",
        "Transitioned organization from solo engineering to a growing team"
    ],
    sections: [
        {
            type: "summary",
            content:
                "Owned the technical roadmap and architecture for a multi-service cloud platform supporting mobility and transportation initiatives."
        },
        {
            type: "impact",
            metrics: [
                {
                    label: "Daily Events",
                    value: "360k+"
                },
                {
                    label: "P99 Latency",
                    value: "124ms"
                },
                {
                    label: "Downtime",
                    value: "0 over 28+ months"
                },
                {
                    label: "New Verticals",
                    value: "3"
                }
            ]
        },
        {
            type: "responsibilities",
            items: [
                "Architected and implemented a multi-service cloud platform on GCP",
                "Engineered compliance with OMF CDS, GTFS, and GBFS standards",
                "Developed distributed ingestion services in Go running on Kubernetes",
                "Built Parking Intelligence forecasting platform using LSTM and PyTorch",
                "Developed custom visualizations for Sony's GS500 AI Vision System prototype",
                "Established CI/CD, testing, and operational practices",
                "Hired, mentored, and led engineers while remaining the primary backend contributor"
            ]
        }
    ]

}