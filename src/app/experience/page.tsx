import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Experience - Trishit Char | Professional Journey & Education",
  description:
    "Explore the professional and educational journey of Trishit Char (Trishit) - Full Stack Developer. Trishit has worked at Revmaxx and Tecosys, building modern web applications with React, Next.js, Node.js, and MongoDB. Education includes B.Tech in Computer Science from HETC. Discover how Trishit Char gained expertise in full-stack development.",
  keywords: [
    "Trishit Char experience",
    "Trishit work experience",
    "Trishit developer career",
    "Trishit Char resume",
    "Trishit professional journey",
    "Trishit Char education",
    "Trishit full stack developer experience",
  ],
  alternates: {
    canonical: "https://trishit.dev/experience",
  },
  openGraph: {
    title: "Experience - Trishit Char | Full Stack Developer",
    description:
      "Explore the journey of Trishit Char (Trishit), Full Stack Developer — from professional roles at Revmaxx and Tecosys to academic milestones at HETC.",
    url: "https://trishit.dev/experience",
    siteName: "Trishit Char Portfolio",
    images: [
      {
        url: "https://trishit.dev/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Trishit Char Experience - Professional Journey",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@trishitchar",
    creator: "@trishitchar",
    title: "Experience - Trishit Char",
    description:
      "Professional and academic journey of Trishit Char — Full Stack Developer.",
    images: ["https://trishit.dev/opengraph-image.png"],
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
        <div className="p-8 max-w-4xl mx-auto" itemScope itemType="https://schema.org/Person">
            <meta itemProp="name" content="Trishit Char" />
            <meta itemProp="alternateName" content="Trishit" />
            <meta itemProp="url" content="https://trishit.dev" />
            
            <header className="mb-6">
                <h1 className="text-4xl font-bold mb-3">Professional Experience & Education</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    The professional and academic journey of <strong>Trishit Char</strong> (Trishit) — 
                    showcasing growth as a Full Stack Developer.
                </p>
            </header>

            <div className="relative">
                <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

                <ul className="space-y-8">
                    {EXPERIENCES.map((exp, idx) => (
                        <li key={idx} className="flex items-start md:items-center">
                            <div className="flex-shrink-0 mr-4">
                                <div className="w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white dark:ring-gray-900 shadow-sm" />
                            </div>

                            <div className="flex-1" itemScope itemType={exp.title.includes('B.Tech') || exp.title.includes('Education') ? "https://schema.org/EducationalOccupationalCredential" : "https://schema.org/WorkExperience"}>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm">
                                    <div>
                                        <h2 className="text-lg font-semibold" itemProp="name">{exp.title}</h2>
                                        <p className="text-sm text-gray-500" itemProp={exp.title.includes('B.Tech') || exp.title.includes('Education') ? "educationalLevel" : "employer"}>
                                            {exp.company}
                                        </p>
                                        {exp.title.includes('Developer') && (
                                            <>
                                                <meta itemProp="jobTitle" content={exp.title} />
                                                <meta itemProp="worksFor" content={exp.company} />
                                            </>
                                        )}
                                    </div>
                                    <time className="mt-2 md:mt-0 text-sm text-gray-400">{exp.period}</time>
                                </div>

                                {exp.details && exp.details.length > 0 && (
                                    <ul className="mt-3 ml-6 list-disc text-sm text-gray-600 dark:text-gray-300">
                                        {exp.details.map((d, i) => (
                                            <li key={i} itemProp="description">{d}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <footer className="mt-10 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h2 className="text-xl font-semibold mb-3">About Trishit Char's Journey</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Trishit Char</strong> (often known as <strong>Trishit</strong>) has built a 
                    strong foundation in full-stack development through professional experience at companies 
                    like Revmaxx and Tecosys, combined with academic excellence in Computer Science.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                    Throughout this journey, <strong>Trishit</strong> has worked with modern technologies 
                    including React, Next.js, Node.js, MongoDB, PostgreSQL, and has delivered impactful 
                    projects that improve user experiences. <strong>Trishit Char</strong> continues to 
                    expand expertise in AI integration and scalable web applications.
                </p>
            </footer>

            {/* Structured Data for Person with Work/Education */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Trishit Char",
                        alternateName: "Trishit",
                        url: "https://trishit.dev",
                        jobTitle: "Full Stack Developer",
                        worksFor: [
                            {
                                "@type": "Organization",
                                name: "Revmaxx",
                            }
                        ],
                        alumniOf: [
                            {
                                "@type": "CollegeOrUniversity",
                                name: "HETC",
                                sameAs: "https://www.hetc.ac.in",
                            }
                        ],
                    }),
                }}
            />
        </div>
    );
}