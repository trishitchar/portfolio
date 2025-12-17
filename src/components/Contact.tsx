import Link from "next/link";
import type { Metadata } from "next";

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

export default function Contact() {
  return (
    <div className="p-8 flex flex-col gap-6" itemScope itemType="https://schema.org/ContactPage">
      <header>
        <h1 className="text-4xl font-bold mb-4">Contact Trishit Char</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Get in touch with <strong>Trishit Char</strong> (often searched as <strong>Trishit</strong>) 
          for freelance projects, collaborations, or full-time opportunities.
        </p>
      </header>

      <section className="space-y-4" itemScope itemType="https://schema.org/Person">
        <meta itemProp="name" content="Trishit Char" />
        <meta itemProp="alternateName" content="Trishit" />
        <meta itemProp="jobTitle" content="Full-Stack Developer & UI/UX Designer" />
        <meta itemProp="url" content="https://trishit.dev" />
        
        <h2 className="text-2xl font-semibold mb-3">Ways to Connect with Trishit</h2>
        
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg mb-1">📧 Email</h3>
            <Link
              href="mailto:trishitchar@gmail.com"
              className="text-blue-500 hover:underline text-lg"
              itemProp="email"
            >
              trishitchar@gmail.com
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Best for project inquiries and detailed discussions. <strong>Trishit Char</strong> typically 
              responds within 24 hours.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">💼 LinkedIn</h3>
            <Link
              href="https://linkedin.com/in/trishitchar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
              itemProp="sameAs"
            >
              linkedin.com/in/trishitchar
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Connect professionally with <strong>Trishit</strong> on LinkedIn.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">🐙 GitHub</h3>
            <Link
              href="https://github.com/trishitchar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
              itemProp="sameAs"
            >
              github.com/trishitchar
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Explore <strong>Trishit Char's</strong> open-source contributions and repositories.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">🐦 Twitter / X</h3>
            <Link
              href="https://twitter.com/trishitchar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
              itemProp="sameAs"
            >
              @trishitchar
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Follow <strong>Trishit</strong> for tech updates and insights.
            </p>
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">📅 Schedule a Meeting</h3>
            <Link
              href="https://cal.com/trishit/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Book a time with Trishit Char →
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Schedule a 1-on-1 meeting with <strong>Trishit Char</strong> to discuss your project, 
              collaboration opportunities, or just to connect!
            </p>
          </div>
        </div>
      </section>

      {/* Structured Data for ContactPage */}
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
