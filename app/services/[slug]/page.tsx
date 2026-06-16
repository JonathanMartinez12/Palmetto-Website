import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import CTASection from '@/components/sections/CTASection'
import { services, getServiceBySlug, type Section } from '@/lib/data/services'
import { getApplicationHrefForText } from '@/lib/data/applications'
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
    openGraph: {
      title: `${svc.name} | ${siteConfig.name}`,
      description: svc.tagline || svc.summary,
      url: `${siteConfig.url}/services/${svc.slug}`,
    },
  }
}

const accentColors = ['bg-cloud', 'bg-burnt', 'bg-flame', 'bg-light-600', 'bg-maroon'] as const

function BulletList({
  items,
  dark = false,
  linkResolver,
}: {
  items: string[]
  dark?: boolean
  linkResolver?: (text: string) => string | undefined
}) {
  return (
    <ul className="grid sm:grid-cols-2 gap-[12px]">
      {items.map((item) => {
        const href = linkResolver?.(item)
        const baseClass = `flex items-start gap-[12px] ${
          dark
            ? 'bg-palm-700/60 border-light-500/30'
            : 'bg-white border-stone-100'
        } border rounded-[8px] px-[16px] py-[12px]`
        const linkClass = href
          ? ` ${dark ? 'hover:border-flame' : 'hover:border-cloud'} hover:shadow-sm transition-all group`
          : ''
        const dot = (
          <span
            className="w-[10px] h-[10px] bg-stone-400 rounded-full flex-shrink-0 mt-[6px]"
            aria-hidden="true"
          />
        )
        const label = (
          <span
            className={`${dark ? 'text-white' : 'text-palm'} font-medium text-[15px] ${
              href ? (dark ? 'group-hover:text-flame' : 'group-hover:text-cloud') : ''
            } transition-colors`}
          >
            {item}
          </span>
        )
        return (
          <li key={item}>
            {href ? (
              <Link href={href} className={`${baseClass}${linkClass}`}>
                {dot}
                {label}
              </Link>
            ) : (
              <div className={baseClass}>
                {dot}
                {label}
              </div>
            )}
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
  dark = false,
  linkResolver,
}: {
  section: Section
  labelText?: string
  labelColor?: string
  background?: string
  dark?: boolean
  linkResolver?: (text: string) => string | undefined
}) {
  const paragraphClass = dark
    ? 'text-cream-100 text-[17px] leading-relaxed mb-[16px] last:mb-0'
    : 'body-palatino-18 mb-[16px] last:mb-0'

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
                dark ? 'text-white' : 'text-palm'
              } text-[30px] md:text-[36px] lg:text-[42px] leading-tight mb-[24px]`}
            >
              {section.heading}
            </h2>
          )}
          {section.intro?.map((p, i) => (
            <p key={`intro-${i}`} className={paragraphClass}>
              {p}
            </p>
          ))}
          {section.bullets && section.bullets.length > 0 && (
            <div className={section.intro?.length ? 'mt-[24px] mb-[24px]' : 'mb-[24px]'}>
              <BulletList items={section.bullets} dark={dark} linkResolver={linkResolver} />
            </div>
          )}
          {section.closing?.map((p, i) => (
            <p key={`closing-${i}`} className={paragraphClass}>
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
            / <span className="text-palm font-medium">{svc.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-[48px] items-center">
            <div className="animate-fade-in-up">
              <p className="label-text text-burnt mb-[16px]">SERVICE</p>
              <h1 className="font-serif text-palm text-[36px] md:text-[42px] lg:text-[52px] leading-tight mb-[16px]">
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

      {svc.servicesSection && (
        <SectionBlock
          section={svc.servicesSection}
          background="bg-white"
        />
      )}

      {svc.whyMattersSection && (
        <SectionBlock
          section={svc.whyMattersSection}
          background="bg-cream"
        />
      )}

      {svc.approachSection && (
        <SectionBlock
          section={svc.approachSection}
          background="bg-white"
        />
      )}

      {svc.technologySection && (
        <SectionBlock
          section={svc.technologySection}
          labelColor="text-flame"
          background="bg-palm"
          dark
        />
      )}

      {svc.whoWeServeSection && (
        <SectionBlock
          section={svc.whoWeServeSection}
          background="bg-cream"
          linkResolver={getApplicationHrefForText}
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
        variant="cream"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  )
}
