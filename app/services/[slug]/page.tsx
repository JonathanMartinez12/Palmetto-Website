import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import CTASection from '@/components/sections/CTASection'
import { services, getServiceBySlug, type Section } from '@/lib/data/services'
import { siteConfig } from '@/lib/data/siteConfig'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const svc = getServiceBySlug(params.slug)
  if (!svc) return { title: 'Service Not Found' }
  return {
    title: svc.name,
    description: svc.tagline || svc.summary,
    robots: svc.isPlaceholder ? { index: false, follow: true } : undefined,
    openGraph: {
      title: `${svc.name} | ${siteConfig.name}`,
      description: svc.tagline || svc.summary,
      url: `${siteConfig.url}/services/${svc.slug}`,
    },
  }
}

const accentColors = ['bg-cloud', 'bg-burnt', 'bg-flame', 'bg-light-600', 'bg-maroon'] as const

function BulletList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-[12px]">
      {items.map((item, i) => {
        const accent = accentColors[i % accentColors.length]
        return (
          <li
            key={item}
            className={`flex items-start gap-[12px] ${
              dark
                ? 'bg-palm-700/60 border-light-500/30'
                : 'bg-white border-stone-100'
            } border rounded-[8px] px-[16px] py-[12px]`}
          >
            <span
              className={`w-[10px] h-[10px] ${accent} rounded-full flex-shrink-0 mt-[6px]`}
              aria-hidden="true"
            />
            <span
              className={`${dark ? 'text-white' : 'text-maroon'} font-medium text-[15px]`}
            >
              {item}
            </span>
          </li>
        )
      })}
    </ul>
  )
}

function SectionBlock({
  section,
  labelText,
  labelColor = 'text-maroon',
  background = 'bg-white',
  dark = false,
}: {
  section: Section
  labelText?: string
  labelColor?: string
  background?: string
  dark?: boolean
}) {
  return (
    <section className={`w-full ${background}`}>
      <Container className="py-[64px] md:py-[96px]">
        <div className="max-w-[900px] mx-auto animate-fade-in-up">
          {labelText && (
            <p className={`label-text ${labelColor} mb-[16px]`}>{labelText}</p>
          )}
          {section.heading && (
            <h2
              className={`font-serif ${
                dark ? 'text-white' : 'text-maroon'
              } text-[30px] md:text-[36px] lg:text-[42px] leading-tight mb-[24px]`}
            >
              {section.heading}
            </h2>
          )}
          {section.intro && (
            <p
              className={`${
                dark ? 'text-cream-100 text-[17px] leading-relaxed' : 'body-palatino-18'
              } mb-[24px]`}
            >
              {section.intro}
            </p>
          )}
          {section.bullets && section.bullets.length > 0 && (
            <div className="mb-[24px]">
              <BulletList items={section.bullets} dark={dark} />
            </div>
          )}
          {section.paragraphs?.map((p, i) => (
            <p
              key={i}
              className={`${
                dark ? 'text-cream-100 text-[17px] leading-relaxed' : 'body-palatino-18'
              } mb-[16px] last:mb-0`}
            >
              {p}
            </p>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default function ServiceDetailPage({ params }: PageProps) {
  const svc = getServiceBySlug(params.slug)
  if (!svc) notFound()

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${siteConfig.url}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: svc.name,
        item: `${siteConfig.url}/services/${svc.slug}`,
      },
    ],
  }

  return (
    <>
      {/* Hero */}
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
            <Link href="/services" className="hover:text-cloud">
              Services
            </Link>{' '}
            / <span className="text-maroon font-medium">{svc.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-[48px] items-center">
            <div className="animate-fade-in-up">
              <p className="label-text text-burnt mb-[16px]">SERVICE</p>
              <h1 className="font-serif text-maroon text-[36px] md:text-[42px] lg:text-[52px] leading-tight mb-[16px]">
                {svc.name}
              </h1>
              {svc.tagline && (
                <p className="font-serif text-stone-700 text-[20px] md:text-[24px] leading-snug mb-[24px]">
                  {svc.tagline}
                </p>
              )}
              <p className="body-large mb-[32px]">
                {svc.heroBody || svc.summary}
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Request a Quote
              </Button>
            </div>

            <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden border border-stone-100 animate-fade-in">
              <Image
                src={svc.image}
                alt={svc.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Placeholder banner for services without full copy yet */}
      {svc.isPlaceholder && (
        <section className="bg-burnt/10 border-y border-burnt">
          <Container>
            <div className="py-[24px] text-center">
              <p className="text-maroon font-semibold text-[15px]">
                Detailed information for this service is coming soon. Contact Palmetto
                Fire Services today to learn more.
              </p>
            </div>
          </Container>
        </section>
      )}

      {/* Our [X] Services */}
      {svc.servicesSection && (
        <SectionBlock
          section={svc.servicesSection}
          labelText="WHAT WE PROVIDE"
          labelColor="text-maroon"
          background="bg-white"
        />
      )}

      {/* Why [X] Matter */}
      {svc.whyMattersSection && (
        <SectionBlock
          section={svc.whyMattersSection}
          labelText="WHY IT MATTERS"
          labelColor="text-burnt"
          background="bg-cream"
        />
      )}

      {/* The Palmetto Fire Approach */}
      {svc.approachSection && (
        <SectionBlock
          section={svc.approachSection}
          labelText="OUR APPROACH"
          labelColor="text-maroon"
          background="bg-white"
        />
      )}

      {/* Experience and Technology You Can Trust */}
      {svc.technologySection && (
        <SectionBlock
          section={svc.technologySection}
          labelText="EXPERIENCE & TECHNOLOGY"
          labelColor="text-flame"
          background="bg-palm"
          dark
        />
      )}

      {/* Who We Serve */}
      {svc.whoWeServeSection && (
        <SectionBlock
          section={svc.whoWeServeSection}
          labelText="WHO WE SERVE"
          labelColor="text-burnt"
          background="bg-cream"
        />
      )}

      <CTASection
        headline={svc.closingHeading || `Need help with ${svc.shortName}?`}
        text={
          svc.closingText ||
          'Tell us about the property and we’ll put the right team on it.'
        }
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
