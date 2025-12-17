import { Metadata } from "next";

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
        period: `Nov 2024 - Nov 2025 (${getDuration('2024-11-01', '2025-11-01')})`,
        title: "Full Stack Developer",
        company: "RevMaxx (Onsite)",
        details: [
            "Tech Stack: React | TypeScript | Express.js | MariaDB | AWS S3 | GenAI | WXT | WordPress.",
            "Upgraded from single-part audio upload to a multipart upload pipeline using Node.js and AWS S3, reducing audio failure rates by 75%, thereby improving reliability for long-duration files.",
            "Designed the complete front-end architecture from scratch using React, enhancing performance and responsiveness across devices.",
            "Implemented advanced prompt engineering techniques in Python using multishot prompts, improving AI output formatting and accuracy by 30%.",
            "Built an admin panel connected with MariaDB and REST APIs, featuring real-time data visualization using ReCharts for streamlined monitoring and reporting.",
            "Developed a Chrome extension using WXT and a lightweight UI variant for seamless cross-platform integration through DOM manipulation and content injection."
        ],
    },
    {
        period: `May 2024 - Oct 2024 (${getDuration('2024-05-01', '2024-10-01')})`,
        title: "Full Stack Developer",
        company: "Tecosys (Remote)",
        details: [
            "Tech Stack: React | Next.js | MongoDB | TypeScript | Node.js.",
            "Deployed an embeddable chatbot widget SDK with React, compiled into a standalone JS bundle for seamless cross-platform integration via a single script tag, featuring customizable branding (colors, text).",
            "Built a CRM lead management platform similar to HubSpot with automated lead capture, real-time analytics dashboard, tracking user interactions, conversation history, and Google Calendar API integration enabling direct meeting scheduling from chat interfaces.",
            "Optimized main website performance implementing code splitting and server-side rendering (SSR), improving Core Web Vitals and decreasing load times by 20%, resulting in 30% increase in user engagement."
        ],
    },
    { period: `2021 - 2025 (${getDuration('2021-02-01', '2025-01-01')})`, title: "B.Tech, Computer Science (CSE)", company: "HETC", details: ["CGPA: 8.7 / 10"] },
    { period: `2019 - 2021 (${getDuration('2019-02-01', '2021-01-01')})`, title: "Higher Secondary Education", company: "YSSK", details: ["Score: 89%"] },
    { period: `2018 - 2019 (${getDuration('2018-02-01', '2019-01-01')})`, title: "Secondary Education", company: "JHC", details: ["Score: 81%"] },
];

export default function Experience() {
    return (
        <div className="px-4 py-1 space-y-7 mx-auto" itemScope itemType="https://schema.org/Person">
            <meta itemProp="name" content="Trishit Char" />
            <meta itemProp="alternateName" content="Trishit" />
            <meta itemProp="url" content="https://trishit.dev" />

            <header className="mb-6">
                <h1 className="text-4xl font-bold mb-3">Professional Experience & Education</h1>
            </header>

            <div className="relative">
                <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

                <ul className="space-y-8">
                    {EXPERIENCES.map((exp, idx) => (
                        <li key={idx} className="flex items-start md:items-center">
                            <div className="flex-shrink-0 mr-4">
                                <div className="w-4 h-4 rounded-full bg-border ring-4 ring-white dark:ring-gray-900 shadow-sm" />
                            </div>

                            <div className="flex-1" itemScope itemType={exp.title.includes('B.Tech') || exp.title.includes('Education') ? "https://schema.org/EducationalOccupationalCredential" : "https://schema.org/WorkExperience"}>
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="w-full md:w-[60%] space-y-4">
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-center bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm border border-border">
                                            <div>
                                                <h2 className="text-lg font-semibold" itemProp="name">{exp.title}</h2>
                                                <p className="text-sm text-muted-foreground" itemProp={exp.title.includes('B.Tech') || exp.title.includes('Education') ? "educationalLevel" : "employer"}>
                                                    {exp.company}
                                                </p>
                                                {exp.title.includes('Developer') && (
                                                    <>
                                                        <meta itemProp="jobTitle" content={exp.title} />
                                                        <meta itemProp="worksFor" content={exp.company} />
                                                    </>
                                                )}
                                            </div>
                                            <time className="mt-2 md:mt-0 text-sm text-muted-foreground">{exp.period}</time>
                                        </div>

                                        {exp.details && exp.details.length > 0 && (
                                            <ul className="ml-4 list-disc text-sm text-gray-700 dark:text-gray-300 space-y-2">
                                                {exp.details.map((d, i) => (
                                                    <li key={i} itemProp="description">{d}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    <div className="w-full md:w-[40%] hidden md:block">
                                        <div className="h-full min-h-[200px] w-full bg-gray-100 dark:bg-gray-800/50 rounded-xl border-2 border-dashed border-border flex items-center justify-center text-muted-foreground">
                                            <span>Image Placeholder</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

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