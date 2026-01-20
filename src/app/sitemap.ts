import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://trishit.dev'

	const items: MetadataRoute.Sitemap = [
		{ url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
		{ url: `${baseUrl}/#projects`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
		{ url: `${baseUrl}/#experience`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
		{ url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
		{ url: `${baseUrl}/#contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
		{ url: `${baseUrl}/#faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
	]

	// Include sample blog posts that exist in the app for better discoverability
	const blogSlugs = ['my-first-post', 'my-second-post', 'my-third-post', 'my-fourth-post']
	blogSlugs.forEach((slug) =>
		items.push({
			url: `${baseUrl}/blog/${slug}`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.7,
		})
	)

	return items
}
