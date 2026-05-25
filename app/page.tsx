import Image from 'next/image'
import Link from 'next/link'
import HeroCarousel from '@/components/sections/HeroCarousel'
import ServicesGrid from '@/components/sections/ServicesGrid'
import ApplicationsGrid from '@/components/sections/ApplicationsGrid'
import WhyPalmetto from '@/components/sections/WhyPalmetto'
import ServiceAreaCallout from '@/components/sections/ServiceAreaCallout'
import CTASection from '@/components/sections/CTASection'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/lib/data/siteConfig'
import { services } from '@/lib/data/services'

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  areaServed: siteConfig.serviceAreas.map((s) => ({
    '@type': 'State',
    name: s,
  })),
  serviceType: services.filter((s) => !s.comingSoon).map((s) => s.name),
}

export default function Home() {
  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Who We Are */}
      <section className="w-full bg-cream">
        <Container className="py-[64px] md:py-[96px]">
          <div className="grid lg:grid-cols-2 gap-[48px] items-center">
            <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden animate-fade-in">
              <Image
                src="/images/who-we-are.jpg"
                alt="Palmetto Fire Services technicians working on a riser"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="animate-fade-in-up">
              <p className="label-text text-maroon mb-[16px]">ABOUT PALMETTO</p>
              <h2 className="font-serif text-maroon text-[32px] md:text-[40px] lg:text-[44px] leading-tight mb-[24px]">
                A full-scope life safety partner, built on people.
              </h2>
              <p className="body-palatino-18 mb-[16px]">
                Palmetto Fire Services is a Little River, South Carolina–based
                contractor delivering design, installation, monitoring, and
                inspection of fire alarm, mass notification, nurse call, area
                of rescue, and access control systems across Myrtle Beach and
                surrounding areas.
              </p>
              <p className="body-palatino-18 mb-[32px]">
                We are proud to be part of the{' '}
                <a
                  href={siteConfig.parent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cloud font-semibold hover:underline"
                >
                  {siteConfig.parent.name}
                </a>{' '}
                platform — a family-owned holding company that keeps each local
                brand’s identity intact while investing deeply in its people.
              </p>
              <Button href="/about" variant="primary" size="lg">
                Our Story
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <ServicesGrid />

      {/* Applications Grid */}
      <ApplicationsGrid />

      {/* Why Palmetto */}
      <WhyPalmetto />

      {/* Service Area */}
      <ServiceAreaCallout />

      {/* CTA */}
      <CTASection
        headline="Ready to talk?"
        text="Whether you’re planning new construction, need an inspection, or have an existing system that needs service, we’re here to help."
        buttonText="Get in Touch"
        buttonHref="/contact"
        secondaryText={`Call ${siteConfig.phone}`}
        secondaryHref={siteConfig.phoneHref}
        variant="cream"
      />

      {/* Orange accent strip */}
      <div
        className="w-full h-[12px] bg-gradient-to-r from-cloud via-flame to-cloud"
        aria-hidden="true"
      />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
    </>
  )
}
