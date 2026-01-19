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
            "Explore the journey of Trishit Char (Trishit), Full Stack Developer - from professional roles at Revmaxx and Tecosys to academic milestones at HETC.",
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
            "Professional and academic journey of Trishit Char - Full Stack Developer.",
        images: ["https://trishit.dev/opengraph-image.png"],
    },
};

type ExperienceItem = {
    period: string;
    duration: string;
    title: string;
    company: string;
    type: "work" | "education";
    techStack?: string[];
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
        period: "Nov 2024 - Nov 2025",
        duration: getDuration('2024-11-01', '2025-11-01'),
        title: "Full Stack Developer",
        company: "RevMaxx (Onsite)",
        type: "work",
        techStack: ["React", "TypeScript", "Express.js", "MariaDB", "AWS S3", "GenAI", "WXT", "WordPress"],
        details: [
            "Upgraded from single-part audio upload to a multipart upload pipeline using Node.js and AWS S3, reducing audio failure rates by 75%, thereby improving reliability for long-duration files.",
            "Designed the complete front-end architecture from scratch using React, enhancing performance and responsiveness across devices.",
            "Implemented advanced prompt engineering techniques in Python using multishot prompts, improving AI output formatting and accuracy by 30%.",
            "Built an admin panel connected with MariaDB and REST APIs, featuring real-time data visualization using ReCharts for streamlined monitoring and reporting.",
            "Developed a Chrome extension using WXT and a lightweight UI variant for seamless cross-platform integration through DOM manipulation and content injection."
        ],
    },
    {
        period: "May 2024 - Oct 2024",
        duration: getDuration('2024-05-01', '2024-10-01'),
        title: "Full Stack Developer",
        company: "Tecosys (Remote)",
        type: "work",
        techStack: ["React", "Next.js", "MongoDB", "TypeScript", "Node.js"],
        details: [
            "Deployed an embeddable chatbot widget SDK with React, compiled into a standalone JS bundle for seamless cross-platform integration via a single script tag, featuring customizable branding (colors, text).",
            "Built a CRM lead management platform similar to HubSpot with automated lead capture, real-time analytics dashboard, tracking user interactions, conversation history, and Google Calendar API integration enabling direct meeting scheduling from chat interfaces.",
            "Optimized main website performance implementing code splitting and server-side rendering (SSR), improving Core Web Vitals and decreasing load times by 20%, resulting in 30% increase in user engagement."
        ],
    },
    {
        period: "2021 - 2025",
        duration: getDuration('2021-02-01', '2025-01-01'),
        title: "B.Tech, Computer Science (CSE)",
        company: "HETC",
        type: "education",
        details: ["CGPA: 8.7 / 10"],
    },
];

export default function Experience() {
    return (
        <div className="p-4 md:p-8" itemScope itemType="https://schema.org/Person">
            <meta itemProp="name" content="Trishit Char" />
            <meta itemProp="alternateName" content="Trishit" />
            <meta itemProp="url" content="https://trishit.dev" />

            <header className="mb-6 md:mb-8">
                <h1 className="text-2xl md:text-4xl font-bold mb-2">Professional Experience & Education</h1>
                <p className="text-muted-foreground text-sm md:text-base">My professional journey and academic background</p>
            </header>

            {/* Experience Grid */}
            <div className="space-y-px bg-grid">
                {EXPERIENCES.map((exp, idx) => (
                    <article
                        key={idx}
                        className="group relative bg-background transition-all duration-300 hover:bg-grid-hover"
                        itemScope
                        itemType={exp.type === "education" ? "https://schema.org/EducationalOccupationalCredential" : "https://schema.org/WorkExperience"}
                    >
                        {/* Grid layout for experience item */}
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4 md:gap-6 p-4 md:p-6">
                            {/* Left: Content */}
                            <div>
                                {/* Header with period */}
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                                    <div>
                                        <h2 className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors" itemProp="name">
                                            {exp.title}
                                        </h2>
                                        <p className="text-sm text-muted-foreground" itemProp={exp.type === "education" ? "educationalLevel" : "employer"}>
                                            {exp.company}
                                            {exp.type === "work" && (
                                                <>
                                                    <meta itemProp="jobTitle" content={exp.title} />
                                                    <meta itemProp="worksFor" content={exp.company} />
                                                </>
                                            )}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <time className="text-sm font-mono text-muted-foreground">{exp.period}</time>
                                        <span className="text-xs font-mono px-2 py-0.5 bg-surface border border-grid rounded-sm text-muted-foreground">
                                            {exp.duration}
                                        </span>
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                {exp.techStack && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {exp.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-0.5 text-xs font-mono bg-surface border border-grid rounded-sm text-muted-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Details */}
                                {exp.details && (
                                    <ul className="space-y-2">
                                        {exp.details.map((detail, i) => (
                                            <li key={i} className="text-sm text-foreground/80 flex items-start gap-2" itemProp="description">
                                                <span className="text-muted-foreground mt-0.5 shrink-0">→</span>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* Right: Image placeholder (for future) */}
                            <div className="hidden lg:flex items-center justify-center">
                                <div className="w-full h-full min-h-[200px] bg-surface rounded-lg border border-dashed border-grid flex items-center justify-center text-muted-foreground text-sm">
                                    <span>Image</span>
                                </div>
                            </div>
                        </div>

                        {/* Hover gradient overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-primary/5 via-transparent to-transparent" />
                    </article>
                ))}
            </div>

            {/* Structured Data */}
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
                        worksFor: [{ "@type": "Organization", name: "Revmaxx" }],
                        alumniOf: [{ "@type": "CollegeOrUniversity", name: "HETC", sameAs: "https://www.hetc.ac.in" }],
                    }),
                }}
            />
        </div>
    );
}