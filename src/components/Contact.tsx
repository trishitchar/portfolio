import Link from "next/link";
import type { Metadata } from "next";
import { EnvelopeClosedIcon, LinkedInLogoIcon, GitHubLogoIcon, CalendarIcon } from "@radix-ui/react-icons";

const siteUrl = "https://trishit.dev";

export const metadata: Metadata = {
  title: "Contact Trishit Char | Get in Touch with Trishit",
  description:
    "Get in touch with Trishit Char (Trishit) - Full-Stack Developer & UI/UX Designer. Connect with Trishit via email (trishitchar@gmail.com), LinkedIn, GitHub, or schedule a meeting. Trishit Char is available for freelance projects, full-time opportunities, and collaborations. Based in India, Trishit specializes in React, Next.js, and modern web development.",
  keywords: [
    "Contact Trishit Char",
    "Trishit Char email",
    "Trishit contact",
    "Trishit developer contact",
    "Trishit Char hire",
    "Trishit freelance",
    "Contact Trishit",
    "trishitchar@gmail.com",
  ],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Trishit Char | Full-Stack Developer",
    description:
      "Reach out to Trishit Char (Trishit) for freelance projects, collaborations, or full-time opportunities. Email, LinkedIn, GitHub, and meeting scheduling links available.",
    url: `${siteUrl}/contact`,
    siteName: "Trishit Char Portfolio",
    images: [
      {
        url: `${siteUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Contact Trishit Char - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@trishitchar",
    creator: "@trishitchar",
    title: "Contact Trishit Char",
    description:
      "Get in touch with Trishit Char - Full-Stack Developer & UI/UX Designer.",
    images: [`${siteUrl}/opengraph-image.png`],
  },
};

const contactMethods = [
  {
    Icon: EnvelopeClosedIcon,
    label: "Email",
    value: "trishitchar@gmail.com",
    href: "mailto:trishitchar@gmail.com",
    description: "Best for project inquiries and detailed discussions. I typically respond within 24 hours.",
  },
  {
    Icon: LinkedInLogoIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/trishitchar",
    href: "https://linkedin.com/in/trishitchar",
    description: "Connect with me professionally for career opportunities and networking.",
  },
  {
    Icon: GitHubLogoIcon,
    label: "GitHub",
    value: "github.com/trishitchar",
    href: "https://github.com/trishitchar",
    description: "Explore my open-source contributions and project repositories.",
  },
  {
    Icon: CalendarIcon,
    label: "Schedule a Meeting",
    value: "cal.com/trishit",
    href: "https://cal.com/trishit/",
    description: "Book a 1-on-1 call to discuss your project or collaboration opportunities.",
  },
];

export default function Contact() {
  return (
    <div className="p-4 md:p-8" itemScope itemType="https://schema.org/ContactPage">
      <header className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">Contact Trishit Char</h2>
        <p className="text-muted-foreground text-sm md:text-base">
          Get in touch for freelance projects, collaborations, or full-time opportunities.
        </p>
      </header>

      <section itemScope itemType="https://schema.org/Person">
        <meta itemProp="name" content="Trishit Char" />
        <meta itemProp="alternateName" content="Trishit" />
        <meta itemProp="jobTitle" content="Full-Stack Developer" />
        <meta itemProp="url" content="https://trishit.dev" />

        {/* Contact Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-grid">
          {contactMethods.map((method) => (
            <Link
              key={method.label}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group bg-background p-4 md:p-5 transition-all duration-300 hover:bg-grid-hover block"
              itemProp={method.label === "Email" ? "email" : "sameAs"}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 mb-2">
                  <method.Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    {method.label}
                  </span>
                </div>
                <div className="text-sm font-medium group-hover:text-primary transition-colors mb-2 break-all">
                  {method.value}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mt-auto">
                  {method.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "Person",
              name: "Trishit Char",
              alternateName: ["Trishit", "trishitchar"],
              email: "trishitchar@gmail.com",
              url: "https://trishit.dev",
              sameAs: [
                "https://linkedin.com/in/trishitchar",
                "https://github.com/trishitchar",
                "https://twitter.com/trishitchar",
              ],
            },
          }),
        }}
      />
    </div>
  );
}
