import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/PageHero'
import CTASection from '@/components/sections/CTASection'
import Container from '@/components/layout/Container'
import { services } from '@/lib/data/services'
import { siteConfig } from '@/lib/data/siteConfig'

export const metadata: Metadata = {
  title: 'Services',
  description: `${siteConfig.name} provides integrated fire alarm and life safety solutions including fire alarm systems, mass notification, nurse call, area of rescue, monitoring, access control, and design & installation services.`,
}

const accentColors = ['bg-cloud', 'bg-burnt', 'bg-flame', 'bg-light-600', 'bg-maroon'] as const

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        label="SERVICES"
        headline="A Complete Life Safety Technology Partner"
        body="Palmetto Fire Services provides integrated fire alarm and life safety solutions under one roof, helping customers simplify compliance, improve communication, and maintain dependable protection across their facilities."
      />

      <section className="w-full bg-white">
        <Container className="py-[64px] md:py-[96px]">
          <p className="text-center label-text text-burnt mb-[24px]">Our Services Include</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[16px] max-w-[1200px] mx-auto">
            {services.map((svc, i) => {
              const accent = accentColors[i % accentColors.length]
              return (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="group block bg-cream rounded-[8px] p-[24px] border border-stone-100 hover:border-cloud hover:shadow-md transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className={`w-[40px] h-[3px] ${accent} mb-[12px]`} aria-hidden="true" />
                  <h2 className="text-palm font-semibold text-[17px] mb-[8px] group-hover:text-cloud transition-colors">
                    {svc.name}
                  </h2>
                  <p className="text-stone-600 text-[14px] leading-relaxed">
                    {svc.summary}
                  </p>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>

      <CTASection
        headline="Let’s Protect What Matters"
        text="If you’re looking for a life safety partner who delivers responsive service, dependable systems, and long-term support, Palmetto Fire Services is ready to help."
        buttonText="Request a Quote"
        buttonHref="/contact"
        variant="cream"
      />
    </>
  )
}
