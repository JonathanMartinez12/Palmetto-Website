import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import CTASection from '@/components/sections/CTASection'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/lib/data/siteConfig'

export const metadata: Metadata = {
  title: 'Our Partner — Atlantis Fire',
  description: `Palmetto Fire Services is a proud member of the ${siteConfig.parent.name} family — a multi-brand life safety platform with local roots and national resources.`,
}

export default function OurPartnerPage() {
  return (
    <>
      <PageHero
        label="OUR PARTNER"
        headline="Backed by Atlantis Fire Protection."
        body={`Palmetto Fire Services is part of the ${siteConfig.parent.name} family — a multi-brand life safety platform that keeps each local company's identity intact while investing deeply in its people.`}
      />

      {/* Partnership overview */}
      <section className="w-full bg-white">
        <Container className="py-[64px] md:py-[96px]">
          <div className="grid lg:grid-cols-2 gap-[48px] items-center">
            <div className="animate-fade-in-up">
              <p className="label-text text-maroon mb-[16px]">THE PARTNERSHIP</p>
              <h2 className="font-serif text-maroon text-[32px] md:text-[40px] lg:text-[44px] leading-tight mb-[24px]">
                Local identity. National resources.
              </h2>
              {/* TODO: real copy from client - partnership story / history */}
              <p className="body-palatino-18 mb-[16px]">
                Palmetto serves the Myrtle Beach area with the same team,
                trucks, and local relationships we always have — but with the
                engineering, procurement, and back-office strength of a
                national platform behind us.
              </p>
              <p className="body-palatino-18 mb-[32px]">
                The Atlantis platform invests in the trades — supporting
                technician certifications, sharing best practices across
                sister companies, and giving our team paths to grow they
                wouldn’t have at a smaller shop.
              </p>
              <Button
                href={siteConfig.parent.url}
                external
                variant="primary"
                size="lg"
              >
                Visit Atlantis Fire
              </Button>
            </div>

            <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden bg-cream animate-fade-in">
              <Image
                src="/images/atlantis-partner.jpg"
                alt="Atlantis Fire Protection family of companies"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* What this means for customers */}
      <section className="w-full bg-cream">
        <Container className="py-[64px] md:py-[96px]">
          <div className="max-w-[900px] mx-auto text-center animate-fade-in">
            <p className="label-text text-maroon mb-[16px]">WHAT IT MEANS FOR YOU</p>
            <h2 className="font-serif text-maroon text-[32px] md:text-[40px] lg:text-[44px] leading-tight mb-[32px]">
              The same people, with more behind them.
            </h2>
            <div className="grid md:grid-cols-3 gap-[32px] text-left">
              {[
                {
                  title: 'Local Crews',
                  text: 'The technicians, designers, and project managers you work with day-to-day are right here in the Carolinas.',
                },
                {
                  title: 'Deeper Bench',
                  text: 'Engineering support, code expertise, and specialty equipment available across the Atlantis network when a project calls for it.',
                },
                {
                  title: 'Long-Term Stability',
                  text: 'A platform that invests in equipment, training, and benefits — so the team you trust stays for the long haul.',
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

      <CTASection
        headline="Want to learn more?"
        text="We’re happy to walk through how the Atlantis partnership shapes our work."
        buttonText="Contact Palmetto"
        buttonHref="/contact"
        variant="white"
      />
    </>
  )
}
