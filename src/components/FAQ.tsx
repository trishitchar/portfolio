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
        question: "Is Trishit Char available for work?",
        answer: "Yes! I'm currently open for freelance projects, contract work, and full-time opportunities. Feel free to reach out via email or schedule a call to discuss your project requirements."
    },
    {
        question: "What technologies does Trishit specialize in?",
        answer: "I specialize in React, Next.js, TypeScript, Node.js, Express.js, MongoDB, PostgreSQL, and AWS cloud services. I also have experience with AI/ML integration, including OpenAI and Gemini APIs."
    },
    {
        question: "Where is Trishit Char located?",
        answer: "I'm based in West Bengal, India, and I'm comfortable working remotely with teams across different time zones. I'm flexible with meeting schedules and async communication."
    },
    {
        question: "What is Trishit's professional experience?",
        answer: "I have 1.5+ years of professional experience working at Revmaxx and Tecosys, where I built production-grade applications serving 10,000+ users. I've reduced system failures by 75% and improved user engagement by 30% through my work."
    },
];

export default function FAQ() {
    return (
        <div className="p-4 md:p-8" itemScope itemType="https://schema.org/FAQPage">
            <header className="mb-6 md:mb-8">
                <h2 className="text-2xl md:text-4xl font-bold mb-2">Frequently Asked Questions</h2>
                <p className="text-muted-foreground text-sm md:text-base">
                    Common questions about Trishit Char (Trishit) - Full-Stack Developer
                </p>
            </header>

            {/* FAQ Grid - Responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-grid mb-6">
                {faqs.map((faq, index) => (
                    <article
                        key={index}
                        className="group bg-background p-4 md:p-6 transition-all duration-300 hover:bg-grid-hover"
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                    >
                        <h3 className="text-sm md:text-base font-semibold mb-2 group-hover:text-primary transition-colors" itemProp="name">
                            {faq.question}
                        </h3>
                        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <p className="text-sm text-foreground/70 leading-relaxed" itemProp="text">
                                {faq.answer}
                            </p>
                        </div>
                    </article>
                ))}
            </div>

            {/* CTA */}
            <div className="p-4 md:p-6 bg-surface border-t border-grid">
                <p className="text-sm text-muted-foreground mb-2">Still have questions?</p>
                <a
                    href="#contact"
                    className="text-sm text-link hover:underline font-medium inline-flex items-center gap-1"
                >
                    Contact Trishit Char <span>→</span>
                </a>
            </div>

            {/* Structured Data */}
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
        </div>
    );
}
