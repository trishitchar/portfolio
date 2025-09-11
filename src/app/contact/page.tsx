import Link from "next/link";
import type { Metadata } from "next";

const siteUrl = "https://trishit.dev";

export const metadata: Metadata = {
  title: "Contact | Trishit.dev",
  description:
    "Get in touch with Trishit Char - Full-Stack Developer & UI/UX Designer. Connect via email, LinkedIn, GitHub, or schedule a meeting.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact | Trishit.dev",
    description:
      "Reach out to Trishit Char (Full-Stack Developer & UI/UX Designer). Email, LinkedIn, GitHub, and meeting scheduling links available.",
    url: `${siteUrl}/contact`,
    siteName: "Trishit.dev",
    images: [
      {
        url: `${siteUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Trishit.dev Contact Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@trishitchar",
    creator: "@trishitchar",
    title: "Contact | Trishit.dev",
    description:
      "Get in touch with Trishit Char - Full-Stack Developer & UI/UX Designer.",
    images: [`${siteUrl}/opengraph-image.png`],
  },
};

export default function Contact() {
  return (
    <div className="p-8 flex flex-col gap-4">
      <h1 className="text-4xl font-bold mb-4">Contact Page</h1>
      <p className="text-gray-600 mt-2">Get in touch with Trishit Char.</p>

      <Link
        href="mailto:trishitchar@gmail.com"
        className="text-blue-500 hover:underline"
      >
        trishitchar@gmail.com
      </Link>

      <Link
        href="https://linkedin.com/in/trishitchar"
        className="text-blue-500 hover:underline"
      >
        LinkedIn Profile
      </Link>

      <Link
        href="https://github.com/trishitchar"
        className="text-blue-500 hover:underline"
      >
        GitHub Profile
      </Link>

      <div className="mt-4">
        <Link
          href="https://cal.com/trishit/"
          className="text-blue-500 hover:underline"
        >
          Schedule a Meeting
        </Link>
      </div>
    </div>
  );
}
