import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/PageHero'
import CTASection from '@/components/sections/CTASection'
import Container from '@/components/layout/Container'
import { siteConfig } from '@/lib/data/siteConfig'

export const metadata: Metadata = {
  title: 'Industries Served',
  description: `${siteConfig.name} provides integrated fire alarm and life safety solutions across a wide range of industries — commercial, hospitality, healthcare, government, education, multi-family, and more.`,
}

const accentColors = ['bg-cloud', 'bg-burnt', 'bg-flame', 'bg-light-600', 'bg-maroon'] as const

interface IndustryBlock {
  heading: string
  intro: string
  envLabel: string // "Common environments include:" or "Palmetto Fire supports:"
  environments: string[]
  closing: string
  href: string
}

const industries: IndustryBlock[] = [
  {
    heading: 'Commercial & Retail Properties',
    intro:
      'Palmetto Fire supports commercial and retail properties of all sizes, from standalone buildings to multi-property portfolios. Our systems and services help property owners and managers maintain compliance, improve safety, and support uninterrupted operations.',
    envLabel: 'Common commercial environments include:',
    environments: [
      'Office buildings',
      'Retail stores and shopping centers',
      'Mixed-use developments',
      'Professional and commercial facilities',
    ],
    closing:
      'Our team understands the importance of responsive service, dependable communication systems, and minimal disruption to business operations.',
    href: '/applications/commercial-retail',
  },
  {
    heading: 'Hotels & High-Rise Properties',
    intro:
      'Hospitality and high-rise environments require dependable life safety systems designed to support occupant safety, emergency communication, and inspection readiness.',
    envLabel: 'Palmetto Fire supports:',
    environments: [
      'Hotels and resorts',
      'High-rise residential buildings',
      'Hospitality properties',
      'Entertainment and public assembly spaces',
    ],
    closing:
      'We understand the importance of maintaining reliable systems while minimizing disruption to guests and operations.',
    href: '/applications/hotels-high-rise',
  },
  {
    heading: 'Apartment & Condo Communities',
    intro:
      'Palmetto Fire works closely with property managers, ownership groups, and facility teams to support life safety systems across apartment and condo communities.',
    envLabel: 'We help properties maintain dependable protection through:',
    environments: [
      'Routine inspections and testing',
      'Monitoring and emergency communication support',
      'Responsive service and repairs',
      'Clear documentation and compliance support',
      'Support for single properties and large portfolios',
    ],
    closing: '',
    href: '/applications/apartment-condo-communities',
  },
  {
    heading: 'Healthcare & Senior Housing Facilities',
    intro:
      'Healthcare and senior housing environments require dependable communication systems and life safety solutions that support patient care, resident safety, and regulatory compliance.',
    envLabel: 'Palmetto Fire supports:',
    environments: [
      'Healthcare facilities',
      'Senior living communities',
      'Assisted living facilities',
      'Medical offices and care environments',
    ],
    closing:
      'Our team understands the importance of reliable communication, responsive support, and minimizing disruption within occupied care facilities.',
    href: '/applications/healthcare-senior-housing',
  },
  {
    heading: 'Government & Municipal Facilities',
    intro:
      'Government facilities require dependable life safety systems that support public safety, emergency preparedness, and long-term operational reliability.',
    envLabel: 'Palmetto Fire supports:',
    environments: [
      'Municipal buildings',
      'Government offices',
      'Public facilities',
      'Community and administrative buildings',
    ],
    closing:
      'We help government facilities maintain compliant, dependable systems designed to support employees, visitors, and the communities they serve.',
    href: '/applications/government-facilities',
  },
  {
    heading: 'Educational Facilities',
    intro:
      'Educational environments depend on reliable communication systems and life safety technologies to help protect students, faculty, and staff.',
    envLabel: 'Palmetto Fire provides support for:',
    environments: [
      'Schools and educational campuses',
      'Administrative buildings',
      'Institutional facilities',
      'Campus and student environments',
    ],
    closing:
      'Our team works to minimize disruption while helping schools maintain dependable communication and compliant life safety systems.',
    href: '/applications/educational-facilities',
  },
  {
    heading: 'Restaurants & Hospitality Environments',
    intro:
      'Restaurants and hospitality properties require dependable life safety systems that support guest safety, operational continuity, and emergency preparedness.',
    envLabel: 'Palmetto Fire supports:',
    environments: [
      'Restaurants and dining facilities',
      'Hospitality properties',
      'Entertainment venues',
      'Public gathering spaces',
    ],
    closing:
      'We help facilities maintain dependable systems while supporting guest experience and day-to-day operations.',
    href: '/applications/restaurants-hospitality',
  },
]

export default function IndustriesServedPage() {
  return (
    <>
      <PageHero
        label="INDUSTRIES SERVED"
        headline="Life Safety Solutions Across Diverse Industries"
        body="Palmetto Fire Services works with a wide range of industries, providing integrated fire alarm and life safety solutions tailored to each environment’s operational needs, compliance requirements, and communication challenges."
      />

      {/* Intro continued */}
      <section className="w-full bg-white">
        <Container className="py-[48px] md:py-[64px]">
          <div className="max-w-[820px] mx-auto text-center animate-fade-in">
            <p className="body-palatino-18 mb-[32px]">
              Throughout Myrtle Beach and surrounding communities, customers rely on
              Palmetto Fire for responsive service, dependable support, and long-term
              life safety system expertise across a variety of commercial and
              institutional environments.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cloud text-white hover:bg-cloud-600 transition-all duration-300 shadow-md hover:shadow-lg btn-text w-[180px] h-[40px] text-[14px]"
            >
              Request Service
            </Link>
          </div>
        </Container>
      </section>

      {/* Per-industry blocks. Alternating cream/white backgrounds with a
          left accent strip rotating through the warm palette. */}
      {industries.map((industry, i) => {
        const accent = accentColors[i % accentColors.length]
        const bg = i % 2 === 0 ? 'bg-cream' : 'bg-white'
        return (
          <section key={industry.heading} className={`w-full ${bg}`}>
            <Container className="py-[56px] md:py-[80px]">
              <div className="max-w-[900px] mx-auto animate-fade-in-up">
                <div className="flex items-center gap-[12px] mb-[20px]">
                  <span className={`w-[40px] h-[3px] ${accent}`} aria-hidden="true" />
                  <p className="label-text text-burnt">INDUSTRY</p>
                </div>
                <h2 className="font-serif text-maroon text-[28px] md:text-[32px] lg:text-[36px] leading-tight mb-[24px]">
                  {industry.heading}
                </h2>
                <p className="body-palatino-18 mb-[20px]">{industry.intro}</p>
                <p className="label-text text-burnt mb-[12px]">{industry.envLabel}</p>
                <ul className="grid sm:grid-cols-2 gap-[8px] mb-[24px]">
                  {industry.environments.map((env, j) => {
                    const dot = accentColors[j % accentColors.length]
                    return (
                      <li
                        key={env}
                        className="flex items-start gap-[10px] bg-white border border-stone-100 rounded-[8px] px-[14px] py-[10px]"
                      >
                        <span
                          className={`w-[8px] h-[8px] bg-stone-400 rounded-full flex-shrink-0 mt-[7px]`}
                          aria-hidden="true"
                        />
                        <span className="text-maroon font-medium text-[14px]">
                          {env}
                        </span>
                      </li>
                    )
                  })}
                </ul>
                {industry.closing && (
                  <p className="body-palatino-18 mb-[24px]">{industry.closing}</p>
                )}
                <Link
                  href={industry.href}
                  className="inline-flex items-center text-cloud font-semibold hover:text-cloud-600 transition-colors text-[15px]"
                >
                  Learn More →
                </Link>
              </div>
            </Container>
          </section>
        )
      })}

      {/* Closing — A Trusted Life Safety Partner Across Industries */}
      <section className="w-full bg-palm relative overflow-hidden">
        <Container className="py-[64px] md:py-[96px]">
          <div className="max-w-[820px] mx-auto text-center animate-fade-in">
            <p className="label-text text-flame mb-[16px]">ACROSS INDUSTRIES</p>
            <h2 className="font-serif text-white text-[28px] md:text-[34px] lg:text-[40px] leading-tight mb-[24px]">
              A Trusted Life Safety Partner Across Industries
            </h2>
            <p className="text-cream-100 text-[17px] leading-relaxed mb-[16px]">
              While every industry has unique operational and compliance requirements,
              Palmetto Fire approaches every project with the same commitment to
              responsive service, dependable systems, and long-term customer support.
            </p>
            <p className="text-cream-100 text-[17px] leading-relaxed">
              If your facility requires reliable fire alarm and life safety solutions,
              contact Palmetto Fire Services today for more information.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        headline="Request Service"
        text="Contact Palmetto Fire Services today for dependable life safety system support and service."
        buttonText="Request Service"
        buttonHref="/contact"
        variant="cream"
      />
    </>
  )
}
