import type {TTech} from '@/content/stack'


export type ExperienceMetric = {
    label: string;
    value: string;
};

export type ExperienceSection =
    | {
    type: "summary";
    content: string;
}
    | {
    type: "impact";
    metrics: ExperienceMetric[];
}
    | {
    type: "responsibilities";
    items: string[];
}
    | {
    type: "timeline";
    events: { title: string; date?: string }[];
};

export type Experience = {
    slug: string;

    company: string;
    role: string;
    location?: string;

    startDate: string;
    endDate?: string | "Present";
    timelineDate?: Date
    timelineEnd?: Date
    link?: string

    summary: string;

    stack: TTech[];

    impact: string[]; // high-level wins (TLDR)

    sections: ExperienceSection[];
};