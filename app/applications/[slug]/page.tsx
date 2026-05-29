import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import CTASection from '@/components/sections/CTASection'
import { applications, getApplicationBySlug } from '@/lib/data/applications'
import { siteConfig } from '@/lib/data/siteConfig'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return applications.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const app = getApplicationBySlug(params.slug)
  if (!app) return { title: 'Application Not Found' }
  return {
    title: app.name,
    description: app.summary,
    robots: app.isPlaceholder ? { index: false, follow: true } : undefined,
    openGraph: {
      title: `${app.name} | ${siteConfig.name}`,
      description: app.summary,
      url: `${siteConfig.url}/applications/${app.slug}`,
    },
  }
}

export default function ApplicationDetailPage({ params }: PageProps) {
  const app = getApplicationBySlug(params.slug)
  if (!app) notFound()

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Applications',
        item: `${siteConfig.url}/applications`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: app.name,
        item: `${siteConfig.url}/applications/${app.slug}`,
      },
    ],
  }

  return (
    <>
      <section className="bg-cream section-padding relative overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-cloud via-burnt to-flame"
          aria-hidden="true"
        />
        <Container>
          <nav
            aria-label="Breadcrumb"
            className="mb-[24px] text-[13px] text-stone-600"
          >
            <Link href="/" className="hover:text-cloud">
              Home
            </Link>{' '}
            /{' '}
            <Link href="/applications" className="hover:text-cloud">
              Applications
            </Link>{' '}
            / <span className="text-maroon font-medium">{app.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-[48px] items-center">
            <div className="animate-fade-in-up">
              <p className="label-text text-burnt mb-[16px]">APPLICATION</p>
              <h1 className="font-serif text-maroon text-[36px] md:text-[42px] lg:text-[52px] leading-tight mb-[16px]">
                {app.name}
              </h1>
              <p className="body-large mb-[32px]">{app.summary}</p>
              <Button href="/contact" variant="primary" size="lg">
                Request a Quote
              </Button>
            </div>
            <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden border border-stone-100 animate-fade-in">
              <Image
                src={app.image}
                alt={app.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {app.isPlaceholder && (
        <section className="bg-burnt/10 border-y border-burnt">
          <Container>
            <div className="py-[24px] text-center">
              <p className="text-maroon font-semibold text-[15px]">
                Detailed information for this application is coming soon. Contact
                Palmetto Fire Services today to learn more.
              </p>
            </div>
          </Container>
        </section>
      )}

      <CTASection
        headline="Let’s Protect What Matters"
        text="Tell us about your facility and we’ll put the right team on it."
        buttonText="Request a Quote"
        buttonHref="/contact"
        secondaryText={`Call ${siteConfig.phone}`}
        secondaryHref={siteConfig.phoneHref}
        variant="cream"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  )
}
