import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import CTASection from '@/components/sections/CTASection'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/lib/data/siteConfig'

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${siteConfig.name} — a Little River, South Carolina-based life safety contractor serving Myrtle Beach and surrounding areas as part of the Atlantis Fire Protection family.`,
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="ABOUT PALMETTO"
        headline="Built on people. Proven by results."
        body="We’re a South Carolina-based life safety contractor delivering design, installation, monitoring, and inspection across Myrtle Beach and the surrounding areas — with the culture and bench strength of a national platform behind us."
      />

      {/* Our Story */}
      <section className="w-full bg-white">
        <Container className="py-[64px] md:py-[96px]">
          <div className="grid lg:grid-cols-2 gap-[48px] items-center">
            <div className="animate-fade-in-up">
              <p className="label-text text-maroon mb-[16px]">OUR STORY</p>
              <h2 className="font-serif text-maroon text-[32px] md:text-[40px] lg:text-[44px] leading-tight mb-[24px]">
                A fast-growing contractor built around technicians.
              </h2>
              <p className="body-palatino-18 mb-[16px]">
                Palmetto Fire Services was founded to deliver full-scope fire
                protection services the way they should be done — with a team
                that treats every technician, engineer, and project manager as
                a partner in the work.
              </p>
              <p className="body-palatino-18 mb-[16px]">
                Our crews design, install, monitor, and inspect fire alarm,
                mass notification, nurse call, area of rescue, and access
                control systems across the Myrtle Beach area. We handle the
                engineering in-house, coordinate directly with AHJs, and manage
                ongoing inspection plans so building owners never have to chase
                paperwork.
              </p>
              <p className="body-palatino-18">
                {/* TODO: real copy from client */}
                Today Palmetto is one of the fastest-growing providers in the
                region, and we’re just getting started.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden animate-fade-in">
              <Image
                src="/images/about-story.jpg"
                alt="Palmetto Fire Services team on a job site"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Our Promise */}
      <section className="w-full bg-cream">
        <Container className="py-[64px] md:py-[96px]">
          <div className="max-w-[900px] mx-auto text-center animate-fade-in">
            <p className="label-text text-maroon mb-[16px]">OUR PROMISE</p>
            <h2 className="font-serif text-maroon text-[32px] md:text-[40px] lg:text-[44px] leading-tight mb-[32px]">
              Do the work right, on time, and stand behind it.
            </h2>
            <div className="grid md:grid-cols-3 gap-[32px] text-left">
              {[
                {
                  title: 'Engineered Correctly',
                  text: 'Every design starts with the right hazard classification and ends with a system that passes the first AHJ review.',
                },
                {
                  title: 'Installed Cleanly',
                  text: 'Field crews who take pride in inspectable, maintainable work — because we’re the team coming back to service it.',
                },
                {
                  title: 'Serviced for the Long Haul',
                  text: 'Annual inspections, emergency service, and documentation kept inspection-ready in a portal you control.',
                },
              ].map((v, i) => (
                <div
                  key={v.title}
                  className="bg-white rounded-[8px] p-[24px] shadow-sm animate-fade-in-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-[48px] h-[4px] bg-cloud mb-[16px]" aria-hidden="true" />
                  <h3 className="heading-4 text-maroon mb-[12px]">{v.title}</h3>
                  <p className="body-text">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Our Partner: Atlantis Fire */}
      <section className="w-full bg-maroon">
        <Container className="py-[64px] md:py-[96px]">
          <div className="grid lg:grid-cols-2 gap-[48px] items-center">
            <div className="animate-fade-in-up">
              <p className="label-text text-flame mb-[16px]">OUR PARTNER</p>
              <h2 className="font-serif text-white text-[32px] md:text-[40px] lg:text-[44px] leading-tight mb-[24px]">
                Backed by Atlantis Fire Protection.
              </h2>
              <p className="text-gray-200 text-[17px] leading-relaxed mb-[16px]">
                Palmetto is proud to be part of the {siteConfig.parent.name}{' '}
                family — a family-owned holding company of regionally strong
                fire protection companies across the U.S.
              </p>
              <p className="text-gray-200 text-[17px] leading-relaxed mb-[32px]">
                The partnership gives us access to shared engineering
                expertise, procurement advantages, and best-practice sharing
                with sister companies — without changing the local identity or
                culture that our customers count on.
              </p>
              <div className="flex flex-wrap gap-[12px]">
                <Button href="/about/our-partner" variant="primary" size="lg">
                  Learn More
                </Button>
                <Button
                  href={siteConfig.parent.url}
                  external
                  variant="outline"
                  size="lg"
                  className="!bg-transparent !border-white !text-white hover:!bg-white hover:!text-maroon"
                >
                  Visit Atlantis Fire
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden bg-maroon-700 animate-slide-in-right">
              <Image
                src="/images/atlantis-partner.jpg"
                alt="Atlantis Fire Protection family of companies"
                fill
                className="object-cover opacity-90"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        headline="Have a project in mind?"
        text="Tell us about the building and we’ll put the right team on it."
        buttonText="Contact Palmetto"
        buttonHref="/contact"
        variant="cream"
      />
    </>
  )
}
