import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/data/siteConfig'
import { services } from '@/lib/data/services'
import { applications } from '@/lib/data/applications'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about/our-partner`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/applications`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/industries-served`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/careers`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]

  // Only index services with full copy. Placeholder services set
  // robots: { index: false } in generateMetadata and are excluded here.
  const serviceRoutes: MetadataRoute.Sitemap = services
    .filter((s) => !s.isPlaceholder)
    .map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    }))

  const applicationRoutes: MetadataRoute.Sitemap = applications
    .filter((a) => !a.isPlaceholder)
    .map((a) => ({
      url: `${base}/applications/${a.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    }))

  return [...staticRoutes, ...serviceRoutes, ...applicationRoutes]
}
