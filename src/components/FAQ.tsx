import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ - Frequently Asked Questions | Trishit Char",
    description:
        "Frequently asked questions about Trishit Char (Trishit) - Full-Stack Developer. Learn about Trishit's experience, projects, technologies, location, and availability. Get answers to common questions about hiring Trishit Char for your next project.",
    keywords: [
        "Trishit Char FAQ",
        "Trishit questions",
        "Trishit developer FAQ",
        "Who is Trishit",
        "Who is Trishit Char",
        "Trishit Char contact",
        "Hire Trishit",
        "Trishit availability",
    ],
    alternates: {
        canonical: "https://trishit.dev/faq",
    },
    openGraph: {
        title: "FAQ - Frequently Asked Questions | Trishit Char",
        description:
            "Get answers to common questions about Trishit Char (Trishit) - Full-Stack Developer. Learn about experience, projects, and how to work with Trishit.",
        url: "https://trishit.dev/faq",
        siteName: "Trishit Char Portfolio",
        images: [
            {
                url: "https://trishit.dev/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Trishit Char FAQ - Frequently Asked Questions",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@trishitchar",
        creator: "@trishitchar",
        title: "FAQ - Frequently Asked Questions | Trishit Char",
        description: "Common questions about Trishit Char - Full-Stack Developer",
        images: ["https://trishit.dev/opengraph-image.png"],
    },
};

const faqs = [
    {
        question: "Who is Trishit Char?",
        answer: "Trishit Char (often searched as Trishit) is a Full-Stack Developer and UI/UX Designer based in India. Trishit specializes in React, Next.js, TypeScript, Node.js, MongoDB, PostgreSQL, and AI integration. You can view Trishit's portfolio at trishit.dev."
    },
    {
        question: "What is Trishit Char's experience?",
        answer: "Trishit Char has over a year of professional experience working as a Full Stack Developer at companies like Revmaxx and Tecosys. Trishit has built modern web applications using the MERN stack and has developed projects like AI-flix and TcharGram."
    },
    {
        question: "What projects has Trishit built?",
        answer: "Trishit Char has built several notable projects including AI-flix (a GPT-powered movie platform with 10,000+ titles) and TcharGram (a real-time social networking app with WebSockets). Both projects showcase Trishit's expertise in full-stack development and AI integration."
    },
    {
        question: "What technologies does Trishit Char use?",
        answer: "Trishit Char is proficient in React, Next.js, TypeScript, JavaScript, Node.js, Express.js, MongoDB, PostgreSQL, Prisma, Tailwind CSS, and various AI technologies. Trishit also has experience with WebSockets, REST APIs, and modern web development tools."
    },
    {
        question: "How can I contact Trishit Char?",
        answer: "You can contact Trishit Char via email at trishitchar@gmail.com, connect on LinkedIn at linkedin.com/in/trishitchar, or schedule a meeting at cal.com/trishit. Trishit is available for freelance projects, collaborations, and full-time opportunities."
    },
    {
        question: "Where is Trishit Char located?",
        answer: "Trishit Char is based in West Bengal, India. Trishit works remotely and is available for both remote and on-site opportunities within India."
    },
    {
        question: "Is Trishit Char available for hire?",
        answer: "Yes, Trishit Char is available for freelance projects, contract work, and full-time opportunities. Contact Trishit at trishitchar@gmail.com or schedule a meeting to discuss your project requirements."
    },
    {
        question: "What is Trishit's educational background?",
        answer: "Trishit Char holds a B.Tech degree in Computer Science (CSE) from HETC with a CGPA of 8.7/10. This strong academic foundation combined with professional experience makes Trishit a well-rounded developer."
    }
];

export default function FAQ() {
    return (
        <section className="p-4 md:p-8 max-w-4xl mx-auto" itemScope itemType="https://schema.org/FAQPage">
            <header className="mb-6 md:mb-8">
                <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">Frequently Asked Questions</h1>
                <p className="text-base md:text-lg text-muted-foreground">
                    Common questions about <strong>Trishit Char</strong> (Trishit) — Full-Stack Developer
                </p>
            </header>

            <div className="space-y-4 md:space-y-6">
                {faqs.map((faq, index) => (
                    <article
                        key={index}
                        className="bg-card p-4 md:p-6 rounded-lg shadow-sm border border-border"
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                    >
                        <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-primary" itemProp="name">
                            {faq.question}
                        </h2>
                        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <p className="text-foreground/80" itemProp="text">
                                {faq.answer}
                            </p>
                        </div>
                    </article>
                ))}
            </div>

            <footer className="mt-8 md:mt-10 p-4 md:p-6 bg-surface rounded-lg">
                <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Still have questions?</h2>
                <p className="text-foreground/80 mb-2 md:mb-3 text-sm md:text-base">
                    If you have more questions about <strong>Trishit Char</strong> or would like to
                    discuss a project, feel free to reach out!
                </p>
                <a
                    href="/contact"
                    className="text-link hover:underline font-medium"
                >
                    Contact Trishit Char →
                </a>
            </footer>

            {/* Structured Data for FAQ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: faqs.map(faq => ({
                            "@type": "Question",
                            name: faq.question,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: faq.answer
                            }
                        }))
                    }),
                }}
            />
        </section>
    );
}
