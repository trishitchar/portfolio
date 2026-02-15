import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://trishit.dev'
  
  const staticPages: MetadataRoute.Sitemap = [
    { 
      url: baseUrl, 
      lastModified: new Date(), // Homepage usually changes most often (e.g. latest post links)
      changeFrequency: 'monthly', 
      priority: 1 
    },
    { 
      url: `${baseUrl}/experience`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly', // You likely update this only when you get a new job
      priority: 0.8 
    },
    { 
      url: `${baseUrl}/projects`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly', 
      priority: 0.8 
    },
    { 
      url: `${baseUrl}/contact`, 
      lastModified: '2024-01-01', // Contact info rarely changes. Hardcode or fetch real date.
      changeFrequency: 'yearly', 
      priority: 0.5 
    },
    { 
      url: `${baseUrl}/faq`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly', 
      priority: 0.5 
    },
    { 
      url: `${baseUrl}/blog`, 
      lastModified: new Date(), 
      changeFrequency: 'weekly', // If you post irregularly, 'weekly' or 'monthly' is fine here
      priority: 0.7 
    },
  ]

  // Mocking dynamic data - in a real app, fetch these with their 'updatedAt' dates
  const blogPosts = [
    { slug: 'my-first-post', date: '2023-10-01' },
    { slug: 'my-second-post', date: '2023-11-15' },
    { slug: 'my-third-post', date: '2024-02-10' },
  ]

  const blogItems: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date), // Use the ACTUAL post date, not the current date
    changeFrequency: 'yearly', // Old blog posts rarely change
    priority: 0.7,
  }))

  return [...staticPages, ...blogItems]
}