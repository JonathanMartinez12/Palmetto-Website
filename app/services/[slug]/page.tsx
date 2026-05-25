import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import CTASection from '@/components/sections/CTASection'
import { services, getServiceBySlug } from '@/lib/data/services'
import { applications } from '@/lib/data/applications'
import { siteConfig } from '@/lib/data/siteConfig'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const svc = getServiceBySlug(params.slug)
  if (!svc) return { title: 'Service Not Found' }

  return {
    title: svc.name,
    description: svc.tagline,
    robots: svc.comingSoon ? { index: false, follow: true } : undefined,
    openGraph: {
      title: `${svc.name} | ${siteConfig.name}`,
      description: svc.tagline,
      url: `${siteConfig.url}/services/${svc.slug}`,
    },
  }
}

export default function ServiceDetailPage({ params }: PageProps) {
  const svc = getServiceBySlug(params.slug)
  if (!svc) notFound()

  const relatedApps = applications.filter((a) =>
    svc.whoItsFor.includes(a.slug)
  )

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.name,
    description: svc.tagline,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phone,
    },
    areaServed: siteConfig.serviceAreas,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url,
      },
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
      <section className="bg-cream section-padding">
        <Container>
          <nav
            aria-label="Breadcrumb"
            className="mb-[24px] text-[13px] text-gray-600"
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
              <p className="label-text text-maroon mb-[16px]">
                {svc.comingSoon ? 'COMING SOON' : 'SERVICE'}
              </p>
              <h1 className="font-serif text-maroon text-[36px] md:text-[42px] lg:text-[52px] leading-tight mb-[16px]">
                {svc.name}
              </h1>
              <p className="body-large mb-[32px]">{svc.tagline}</p>
              <Button
                href={`/contact?service=${svc.slug}`}
                variant="primary"
                size="lg"
              >
                Request Service
              </Button>
            </div>

            <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden animate-fade-in">
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

      {/* Coming soon banner */}
      {svc.comingSoon && (
        <section className="bg-flame/10 border-y border-flame">
          <Container>
            <div className="py-[24px] text-center">
              <p className="text-maroon font-semibold text-[15px]">
                This service is launching soon. Contact us to discuss upcoming
                availability or a referral in the meantime.
              </p>
            </div>
          </Container>
        </section>
      )}

      {/* Overview */}
      <section className="bg-white section-padding">
        <Container>
          <div className="max-w-[820px] mx-auto">
            <h2 className="heading-2 text-maroon mb-[32px]">Overview</h2>
            {svc.overview.map((p, i) => (
              <p key={i} className="body-palatino-18 mb-[16px]">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Features / What's included */}
      <section className="bg-cream section-padding">
        <Container>
          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-[48px]">
              <p className="label-text text-maroon mb-[16px]">WHAT’S INCLUDED</p>
              <h2 className="heading-2 text-maroon">Scope of Work</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-[12px]">
              {svc.features.map((f, i) => (
                <div
                  key={f}
                  className="flex items-start gap-[12px] bg-white p-[16px] rounded-[8px] shadow-sm animate-fade-in-up"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <div
                    className="w-[8px] h-[8px] bg-cloud rounded-full flex-shrink-0 mt-[8px]"
                    aria-hidden="true"
                  />
                  <span className="text-maroon font-medium">{f}</span>
                </div>
              ))}
            </div>
            {svc.compliance && (
              <div className="mt-[32px] text-center">
                <p className="label-text text-maroon mb-[8px]">COMPLIANCE</p>
                <p className="text-maroon font-semibold text-[18px]">
                  Inspection &amp; documentation per {svc.compliance}
                </p>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Who it's for */}
      {relatedApps.length > 0 && (
        <section className="bg-white section-padding">
          <Container>
            <div className="max-w-[1100px] mx-auto">
              <div className="text-center mb-[40px]">
                <p className="label-text text-maroon mb-[16px]">WHO IT’S FOR</p>
                <h2 className="heading-2 text-maroon">Applications We Serve</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
                {relatedApps.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/applications/${a.slug}`}
                    className="group bg-cream rounded-[8px] p-[20px] border border-transparent hover:border-cloud transition-all"
                  >
                    <p className="text-maroon font-semibold group-hover:text-cloud transition-colors">
                      {a.name}
                    </p>
                    <p className="text-gray-600 text-[13px] mt-[4px]">
                      {a.shortName}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      <CTASection
        headline={`Need ${svc.shortName.toLowerCase()} service?`}
        text="Tell us about the property and we’ll put the right team on it."
        buttonText="Request Service"
        buttonHref={`/contact?service=${svc.slug}`}
        secondaryText={`Call ${siteConfig.phone}`}
        secondaryHref={siteConfig.phoneHref}
        variant="cream"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  )
}
