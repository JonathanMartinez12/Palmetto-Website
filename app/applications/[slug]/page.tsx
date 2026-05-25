import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import CTASection from '@/components/sections/CTASection'
import { applications, getApplicationBySlug } from '@/lib/data/applications'
import { services, getServiceBySlug } from '@/lib/data/services'
import { siteConfig } from '@/lib/data/siteConfig'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return applications.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const app = getApplicationBySlug(params.slug)
  if (!app) return { title: 'Application Not Found' }
  return {
    title: app.name,
    description: app.tagline,
    openGraph: {
      title: `${app.name} | ${siteConfig.name}`,
      description: app.tagline,
      url: `${siteConfig.url}/applications/${app.slug}`,
    },
  }
}

export default function ApplicationDetailPage({ params }: PageProps) {
  const app = getApplicationBySlug(params.slug)
  if (!app) notFound()

  const relatedServices = app.applicableServices
    .map((slug) => getServiceBySlug(slug))
    .filter(
      (s): s is NonNullable<ReturnType<typeof getServiceBySlug>> => Boolean(s)
    )

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
            <Link href="/applications" className="hover:text-cloud">
              Applications
            </Link>{' '}
            / <span className="text-maroon font-medium">{app.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-[48px] items-center">
            <div className="animate-fade-in-up">
              <p className="label-text text-maroon mb-[16px]">APPLICATION</p>
              <h1 className="font-serif text-maroon text-[36px] md:text-[42px] lg:text-[52px] leading-tight mb-[16px]">
                {app.name}
              </h1>
              <p className="body-large mb-[32px]">{app.tagline}</p>
              <Button href="/contact" variant="primary" size="lg">
                Discuss a Project
              </Button>
            </div>
            <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden animate-fade-in">
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

      {/* Overview */}
      <section className="bg-white section-padding">
        <Container>
          <div className="max-w-[820px] mx-auto">
            <h2 className="heading-2 text-maroon mb-[32px]">Overview</h2>
            {app.overview.map((p, i) => (
              <p key={i} className="body-palatino-18 mb-[16px]">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Services that apply */}
      <section className="bg-cream section-padding">
        <Container>
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-[40px]">
              <p className="label-text text-maroon mb-[16px]">SERVICES WE PROVIDE</p>
              <h2 className="heading-2 text-maroon">What Applies Here</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
              {relatedServices.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="group bg-white rounded-[8px] p-[20px] shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between">
                    <p className="text-maroon font-semibold group-hover:text-cloud transition-colors">
                      {svc.name}
                    </p>
                    {svc.comingSoon && (
                      <span className="text-[10px] uppercase tracking-wide text-flame font-bold bg-flame/10 px-[8px] py-[2px] rounded-full">
                        Soon
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-[13px] mt-[4px]">
                    {svc.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Considerations */}
      <section className="bg-white section-padding">
        <Container>
          <div className="max-w-[820px] mx-auto">
            <p className="label-text text-maroon mb-[16px]">KEY CONSIDERATIONS</p>
            <h2 className="heading-2 text-maroon mb-[32px]">
              What matters for this property type
            </h2>
            <ul className="space-y-[12px]">
              {app.considerations.map((c, i) => (
                <li
                  key={c}
                  className="flex items-start gap-[12px] animate-fade-in-up"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <div
                    className="w-[24px] h-[24px] bg-cloud flex-shrink-0 mt-[4px]"
                    aria-hidden="true"
                  />
                  <span className="body-palatino-18 text-black">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CTASection
        headline={`Planning a ${app.shortName.toLowerCase()} project?`}
        text="Tell us about the building and we’ll put the right scope together."
        buttonText="Contact Us"
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
