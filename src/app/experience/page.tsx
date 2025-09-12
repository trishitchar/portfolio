import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Experience | Trishit Char",
  description:
    "Professional and educational experience of Trishit Char, Full Stack Developer. Includes work at Revmaxx, Tecosys, and education at HETC.",
  alternates: {
    canonical: "https://trishit.dev/experience",
  },
  openGraph: {
    title: "Experience | Trishit Char",
    description:
      "Explore the journey of Trishit Char, Full Stack Developer — from professional roles at Revmaxx and Tecosys to academic milestones at HETC.",
    url: "https://trishit.dev/experience",
    siteName: "Trishit Char Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience | Trishit Char",
    description:
      "Professional and academic journey of Trishit Char — Full Stack Developer.",
  },
};

type ExperienceItem = {
    period: string;
    title: string;
    company: string;
    details?: string[];
};

function getDuration(startDateStr: string, endDateStr?: string | null): string {
  const start = new Date(startDateStr);
  const end = endDateStr ? new Date(endDateStr) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  months += 1;

  if (months < 0) {
    years--;
    months += 12;
  }

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} year${years > 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} month${months > 1 ? 's' : ''}`);

  return parts.length > 0 ? parts.join(', ') : 'Less than a month';
}

const EXPERIENCES: ExperienceItem[] = [
    {
        period: `Nov 2024 - Present (${getDuration('2024-11-01')})`,
        title: "Full Stack Developer",
        company: "Revmaxx",
        details: ["Developing and maintaining full-stack features", "Tech: React, Next.js, Node.js, Postgres"],
    },
    {
        period: `Jul 2024 - Sep 2024 (${getDuration('2024-07-01', '2024-09-01')})`,
        title: "Full Stack Developer",
        company: "Tecosys",
        details: ["Built UI components and REST endpoints", "Worked with React, Node.js and MongoDB"],
    },
    { period: `2021 - 2025 (${getDuration('2021-02-01', '2025-01-01')})`, title: "B.Tech, Computer Science (CSE)", company: "HETC", details: ["CGPA: 8.7 / 10"] },
    { period: `2019 - 2021 (${getDuration('2019-02-01', '2021-01-01')})`, title: "Higher Secondary Education", company: "YSSK", details: ["Score: 89%"] },
    { period: `2018 - 2019 (${getDuration('2018-02-01', '2019-01-01')})`, title: "Secondary Education", company: "JHC", details: ["Score: 81%"] },
];

export default function Experience() {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Life && Experience </h1>

            <div className="relative">
                <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

                <ul className="space-y-8">
                    {EXPERIENCES.map((exp, idx) => (
                        <li key={idx} className="flex items-start md:items-center">
                            <div className="flex-shrink-0 mr-4">
                                <div className="w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white dark:ring-gray-900 shadow-sm" />
                            </div>

                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm">
                                    <div>
                                        <h3 className="text-lg font-semibold">{exp.title}</h3>
                                        <p className="text-sm text-gray-500">{exp.company}</p>
                                    </div>
                                    <span className="mt-2 md:mt-0 text-sm text-gray-400">{exp.period}</span>
                                </div>

                                {exp.details && exp.details.length > 0 && (
                                    <ul className="mt-3 ml-6 list-disc text-sm text-gray-600 dark:text-gray-300">
                                        {exp.details.map((d, i) => (
                                            <li key={i}>{d}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}