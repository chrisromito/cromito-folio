import type { TTech } from '@/content/stack'

export type Metric = {
  label: string;
  value: string;
};

export type TimelineEvent = {
  title: string;
  description?: string;
  date?: string;
};

export type ProjectSection =
  | {
      type: "text";
      title?: string;
      content: string;
    }
  | {
      type: "metrics";
      metrics: Metric[];
    }
  | {
      type: "timeline";
      events: TimelineEvent[];
    };



export type Project = {
  slug: string;
  title: string;
  link?: string
  subtitle: string;
  summary: string;
  role: string;
  stack: TTech[];
  year: string;

  problem: string;
  solution: string;

  highlights: string[];

  sections: ProjectSection[];
};