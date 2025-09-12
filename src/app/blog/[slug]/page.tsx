import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

async function getPost(slug: string) {
  const posts: Record<string, { title: string; description: string }> = {
    "my-first-post": {
      title: "My First Post",
      description: "This is the first blog post by Trishit Char.",
    },
    "my-second-post": {
      title: "My Second Post",
      description: "Another blog post sharing insights on development.",
    },
    "my-third-post": {
      title: "My Third Post",
      description: "Learning journey and experiences in coding.",
    },
    "my-fourth-post": {
      title: "My Fourth Post",
      description: "Sharing thoughts on projects and technology.",
    },
  };
  return posts[slug] || { title: slug, description: "Blog post by Trishit Char" };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const post = await getPost(slug);
  const url = `https://trishit.dev/blog/${slug}`;

  return {
    title: `${post.title} | Blog | Trishit Char`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      siteName: "Trishit Char Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = params;
  return <div className="p-8">My Post: {slug}</div>;
}
