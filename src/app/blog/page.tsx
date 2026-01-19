import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Trishit Char",
  description:
    "Read articles and posts by Trishit Char on web development, full-stack projects, and personal learnings.",
  alternates: {
    canonical: "https://trishit.dev/blog",
  },
  openGraph: {
    title: "Blog | Trishit Char",
    description:
      "Explore blog posts by Trishit Char - covering React, Next.js, full-stack projects, and developer insights.",
    url: "https://trishit.dev/blog",
    siteName: "Trishit Char Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Trishit Char",
    description:
      "Developer blog by Trishit Char - exploring React, Next.js, TypeScript, and full-stack development.",
  },
};

export default function BlogPage() {
  return (
    <div className="p-8 flex flex-col gap-4">
      <h1 className="text-4xl font-bold mb-4">Blog Page</h1>
      <Link href="/blog/my-first-post" className="hover:underline">
        Go to My First Post
      </Link>
      <Link href="/blog/my-second-post" className="hover:underline">
        Go to My Second Post
      </Link>
      <Link href="/blog/my-third-post" className="hover:underline">
        Go to My Third Post
      </Link>
      <Link href="/blog/my-fourth-post" className="hover:underline">
        Go to My Fourth Post
      </Link>
      <p className="text-lg">
        Welcome to the blog page! Here you'll find various articles and posts.
      </p>
    </div>
  );
}
