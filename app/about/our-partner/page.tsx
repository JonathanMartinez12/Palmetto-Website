import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/lib/data/siteConfig'

export const metadata: Metadata = {
  title: 'Our Partner — Atlantis Fire Protection',
  description: `Palmetto Fire Services is proud to be part of the ${siteConfig.parent.name} family — a strategic partnership built on shared values, long-term thinking, and dependable life safety solutions.`,
}

const partnershipBenefits = [
  'Long-term operational stability',
  'Shared expertise across leading fire protection companies',
  'Additional resources and infrastructure',
  'Support for responsible growth and expanded capabilities',
  'Investment in technology, systems, and training',
]

const growthInvestments = [
  'Advanced life safety technologies',
  'Training and certifications',
  'Expanded service capabilities',
  'Monitoring and support infrastructure',
  'Long-term customer relationships',
  'Responsive local service',
]

const accentColors = ['bg-cloud', 'bg-burnt', 'bg-flame', 'bg-light-600', 'bg-maroon'] as const

export default function OurPartnerPage() {
  return (
    <>
      <PageHero
        label="OUR PARTNER — ATLANTIS FIRE PROTECTION"
        headline="A Strategic Partnership Built on Shared Values"
        body={`Palmetto Fire Services is proud to be part of the ${siteConfig.parent.name} family of companies. Our partnership is built on shared values, long-term thinking, and a commitment to delivering dependable life safety solutions backed by responsive local service.`}
      />

      {/* Atlantis Fire — what they are */}
      <section className="w-full bg-white">
        <Container className="py-[48px] md:py-[64px]">
          <div className="grid lg:grid-cols-5 gap-[48px] items-center">
            <div className="lg:col-span-3 max-w-[720px] animate-fade-in">
              <p className="body-palatino-18">
                Atlantis Fire is not a private equity roll-up or short-term investment
                platform. It is a fire protection-focused organization built to support
                strong local operating companies, preserve culture, invest in people,
                and create long-term value for customers and employees alike.
              </p>
            </div>
            <div className="lg:col-span-2 bg-cream border border-light-500/30 rounded-[8px] p-[32px] flex items-center justify-center min-h-[180px] animate-slide-in-right">
              <Image
                src="/images/atlantis-logo.png"
                alt="Atlantis Fire Protection"
                width={400}
                height={200}
                className="w-full h-auto max-w-[260px]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Why Atlantis Chose Palmetto Fire Services */}
      <section className="w-full bg-cream">
        <Container className="py-[64px] md:py-[96px]">
          <div className="max-w-[900px] mx-auto animate-fade-in-up">
            <p className="label-text text-burnt mb-[16px]">THE MATCH</p>
            <h2 className="font-serif text-maroon text-[30px] md:text-[36px] lg:text-[42px] leading-tight mb-[24px]">
              Why Atlantis Chose Palmetto Fire Services
            </h2>
            <p className="body-palatino-18 mb-[16px]">
              What drew Atlantis Fire to Palmetto Fire Services was not just growth
              potential. It was reputation, technical expertise, and a long-standing
              commitment to customer relationships.
            </p>
            <p className="body-palatino-18 mb-[16px]">
              Over more than 17 years, Paul and Sara Brown built Palmetto Fire Services
              into a respected life safety company known for responsive service,
              trusted technology solutions, and dependable support throughout Myrtle
              Beach and surrounding communities.
            </p>
            <p className="body-palatino-18 mb-[16px]">
              Palmetto’s focus on accountability, customer care, and long-term
              relationships closely aligns with Atlantis Fire’s philosophy of
              supporting exceptional operators and building companies customers can
              trust year after year.
            </p>
            <p className="body-palatino-18">
              That alignment made Palmetto a natural fit within the Atlantis Fire
              family.
            </p>
          </div>
        </Container>
      </section>

      {/* What the Partnership Means for Our Customers */}
      <section className="w-full bg-white">
        <Container className="py-[64px] md:py-[96px]">
          <div className="max-w-[900px] mx-auto animate-fade-in-up">
            <p className="label-text text-maroon mb-[16px]">FOR OUR CUSTOMERS</p>
            <h2 className="font-serif text-maroon text-[30px] md:text-[36px] lg:text-[42px] leading-tight mb-[24px]">
              What the Partnership Means for Our Customers
            </h2>
            <p className="body-palatino-18 mb-[16px]">
              For Palmetto customers, the Atlantis partnership strengthens what already
              works.
            </p>
            <p className="body-palatino-18 mb-[24px]">
              Palmetto Fire remains locally led, responsive, and relationship-driven.
              Customers continue working with the same trusted team, the same
              experienced professionals, and the same people who understand their
              systems and facilities.
            </p>
            <p className="label-text text-burnt mb-[16px]">What Atlantis adds is support:</p>
            <ul className="grid sm:grid-cols-2 gap-[12px] mb-[24px]">
              {partnershipBenefits.map((b, i) => {
                const accent = accentColors[i % accentColors.length]
                return (
                  <li
                    key={b}
                    className="flex items-start gap-[12px] bg-cream border border-stone-100 rounded-[8px] px-[16px] py-[12px]"
                  >
                    <span
                      className={`w-[10px] h-[10px] ${accent} rounded-full flex-shrink-0 mt-[6px]`}
                      aria-hidden="true"
                    />
                    <span className="text-maroon font-medium">{b}</span>
                  </li>
                )
              })}
            </ul>
            <p className="body-palatino-18">
              The result is a stronger Palmetto Fire while maintaining the local
              accountability and responsive service customers have trusted for years.
            </p>
          </div>
        </Container>
      </section>

      {/* Built for Long-Term Growth */}
      <section className="w-full bg-palm relative overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-cloud via-burnt to-flame"
          aria-hidden="true"
        />
        <Container className="py-[64px] md:py-[96px]">
          <div className="max-w-[900px] mx-auto animate-fade-in-up">
            <p className="label-text text-flame mb-[16px]">LONG-TERM GROWTH</p>
            <h2 className="font-serif text-white text-[30px] md:text-[36px] lg:text-[42px] leading-tight mb-[24px]">
              Built for Long-Term Growth
            </h2>
            <p className="text-cream-100 text-[17px] leading-relaxed mb-[16px]">
              Atlantis Fire takes a long-term approach to growth focused on building
              durable fire protection companies that prioritize safety, reliability,
              customer relationships, and people.
            </p>
            <p className="text-cream-100 text-[17px] leading-relaxed mb-[24px]">
              That approach allows Palmetto Fire Services to continue investing in:
            </p>
            <ul className="grid sm:grid-cols-2 gap-[12px] mb-[24px]">
              {growthInvestments.map((g, i) => {
                const accent = accentColors[i % accentColors.length]
                return (
                  <li
                    key={g}
                    className="flex items-start gap-[12px] bg-palm-700/60 border border-light-500/30 rounded-[8px] px-[16px] py-[12px]"
                  >
                    <span
                      className={`w-[10px] h-[10px] ${accent} rounded-full flex-shrink-0 mt-[6px]`}
                      aria-hidden="true"
                    />
                    <span className="text-white font-medium">{g}</span>
                  </li>
                )
              })}
            </ul>
            <p className="text-cream-100 text-[17px] leading-relaxed">
              All while staying true to the culture and reputation that built Palmetto
              Fire Services.
            </p>
          </div>
        </Container>
      </section>

      {/* Learn More About Atlantis Fire — closing */}
      <section className="w-full bg-cream relative overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-cloud via-burnt to-flame"
          aria-hidden="true"
        />
        <Container className="py-[64px] md:py-[96px]">
          <div className="max-w-[820px] mx-auto text-center animate-fade-in">
            <h2 className="font-serif text-maroon text-[30px] md:text-[36px] lg:text-[42px] leading-tight mb-[16px]">
              Learn More About Atlantis Fire
            </h2>
            <p className="body-large text-stone-700 mb-[32px]">
              To learn more about Atlantis Fire, including its mission, leadership
              team, and growing family of operating companies.
            </p>
            <Button href={siteConfig.parent.url} external variant="primary" size="lg">
              Visit Atlantis Fire
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
