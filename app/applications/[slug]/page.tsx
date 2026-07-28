import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import CTASection from '@/components/sections/CTASection'
import {
  applications,
  getApplicationBySlug,
  type ApplicationSection,
} from '@/lib/data/applications'
import { getServiceBySlug } from '@/lib/data/services'
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
    title: app.tagline || app.name,
    description: app.summary,
    openGraph: {
      title: `${app.tagline || app.name} | ${siteConfig.name}`,
      description: app.summary,
      url: `${siteConfig.url}/applications/${app.slug}`,
    },
  }
}

const accentColors = ['bg-cloud', 'bg-burnt', 'bg-flame', 'bg-light-600', 'bg-maroon'] as const

function ServiceLinkGrid({ slugs }: { slugs: string[] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-[12px]">
      {slugs.map((slug, i) => {
        const svc = getServiceBySlug(slug)
        if (!svc) return null
        const accent = accentColors[i % accentColors.length]
        return (
          <li key={slug}>
            <Link
              href={`/services/${svc.slug}`}
              className="flex items-start gap-[12px] bg-white border border-stone-100 rounded-[8px] px-[16px] py-[12px] hover:border-cloud hover:shadow-sm transition-all group"
            >
              <span
                className={`w-[10px] h-[10px] bg-stone-400 rounded-full flex-shrink-0 mt-[6px]`}
                aria-hidden="true"
              />
              <span className="text-palm font-medium text-[15px] group-hover:text-cloud transition-colors">
                {svc.name}
              </span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

function PlainBulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-[12px]">
      {items.map((item, i) => {
        const accent = accentColors[i % accentColors.length]
        return (
          <li
            key={item}
            className="flex items-start gap-[12px] bg-cream border border-stone-100 rounded-[8px] px-[16px] py-[12px]"
          >
            <span
              className={`w-[10px] h-[10px] bg-stone-400 rounded-full flex-shrink-0 mt-[6px]`}
              aria-hidden="true"
            />
            <span className="text-palm font-medium text-[15px]">{item}</span>
          </li>
        )
      })}
    </ul>
  )
}

function SectionBlock({
  section,
  labelText,
  labelColor = 'text-palm',
  background = 'bg-white',
}: {
  section: ApplicationSection
  labelText?: string
  labelColor?: string
  background?: string
}) {
  const hasServiceLinks = (section.serviceLinks?.length ?? 0) > 0
  const hasBullets = (section.bullets?.length ?? 0) > 0
  const hasContentBlock = hasServiceLinks || hasBullets

  return (
    <section className={`w-full ${background}`}>
      <Container className="py-[64px] md:py-[96px]">
        <div className="max-w-[900px] mx-auto animate-fade-in-up">
          {labelText && (
            <p className={`label-text ${labelColor} mb-[16px]`}>{labelText}</p>
          )}
          {section.heading && (
            <h2 className="text-palm text-[28px] md:text-[34px] lg:text-[40px] leading-tight mb-[24px]">
              {section.heading}
            </h2>
          )}
          {section.intro?.map((p, i) => (
            <p key={`intro-${i}`} className="body-18 mb-[16px] last:mb-0">
              {p}
            </p>
          ))}
          {hasServiceLinks && (
            <>
              <p className="label-text text-burnt mt-[24px] mb-[16px]">
                Our services support:
              </p>
              <ServiceLinkGrid slugs={section.serviceLinks!} />
            </>
          )}
          {hasBullets && (
            <div className={section.intro?.length ? 'mt-[24px]' : ''}>
              <PlainBulletList items={section.bullets!} />
            </div>
          )}
          {section.closing && section.closing.length > 0 && (
            <div className={hasContentBlock ? 'mt-[24px]' : ''}>
              {section.closing.map((p, i) => (
                <p key={`closing-${i}`} className="body-18 mb-[16px] last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
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
      {/* Hero */}
      <section className="bg-cream section-padding relative overflow-hidden">
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
            / <span className="text-palm font-medium">{app.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-[48px] items-center">
            <div className="animate-fade-in-up">
              <p className="label-text text-burnt mb-[16px]">APPLICATION</p>
              <h1 className="text-palm text-[34px] md:text-[42px] lg:text-[50px] leading-tight mb-[16px]">
                {app.name}
              </h1>
              {app.tagline && (
                <p className="text-stone-700 text-[20px] md:text-[24px] leading-snug mb-[24px]">
                  {app.tagline}
                </p>
              )}
              {app.heroBody?.map((p, i) => (
                <p key={i} className="body-large mb-[16px]">
                  {p}
                </p>
              ))}
              <div className="mt-[16px]">
                <Button href="/contact" variant="primary" size="lg">
                  Request Service
                </Button>
              </div>
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

      {app.supportSection && (
        <SectionBlock
          section={app.supportSection}
          background="bg-white"
        />
      )}

      {app.advantageSection && (
        <SectionBlock
          section={app.advantageSection}
          background="bg-cream"
        />
      )}

      <CTASection
        headline={app.closingHeading || 'Let’s Help Protect Your Facility'}
        text={
          app.closingText ||
          'Contact Palmetto Fire today for dependable life safety system support and service.'
        }
        buttonText="Request Service"
        buttonHref="/contact"
        variant="cream"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  )
}
