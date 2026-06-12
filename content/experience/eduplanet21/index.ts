import {Experience} from "@/content/experience/types"

export const eduplanet21: Experience = {
    slug: "eduplanet21",

    company: "Eduplanet21",
    role: "Junior Software Developer",
    location: "Mechanicsburg, PA",

    startDate: "April 2017",
    endDate: "July 2020",
    timelineDate: new Date(Date.parse("2017-04-02T00:00:00Z")),
    timelineEnd: new Date(Date.parse("2020-07-02T00:00:00Z")),

    link: 'https://eduplanet21.com/',
    summary:
        "Contributed to educational technology platforms focused on curriculum planning, collaboration, and classroom communication.",

    stack: [
        "Django",
        "MySQL",
        "AWS",
        "Vue",
        "JS",
        "Python",
        "JQuery",
        'Wordpress',
        'Redis',
        'Linux'
    ],

    impact: [
        "Increased frontend development velocity by 33%",
        "Delivered real-time collaboration features for educators",
        "Supported international customers and internal support operations"
    ],

    sections: [
        {
            type: "impact",
            metrics: [
                {
                    label: "Development Velocity",
                    value: "+33%"
                }
            ]
        },
        {
            type: "responsibilities",
            items: [
                "Developed curriculum planning and collaboration features",
                "Built Learning Path Chatroom functionality using WebSockets",
                "Led migration from jQuery to Vue.js",
                "Supported international customers and trained support personnel"
            ]
        }
    ]
}