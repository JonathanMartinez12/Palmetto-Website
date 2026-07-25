import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/sections/PageHero'
import CTASection from '@/components/sections/CTASection'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { getApplicationHrefForText } from '@/lib/data/applications'
import { siteConfig } from '@/lib/data/siteConfig'

export const metadata: Metadata = {
  title: 'About',
  description: `${siteConfig.legalName} — advanced life safety solutions built on trust and reliability, serving Myrtle Beach and surrounding communities for more than 17 years.`,
}

const commitmentBullets = [
  'Responsive local support from experienced professionals',
  'Clear communication throughout projects and service work',
  'Long-term customer relationships built on trust',
  'Dependable inspection, monitoring, and maintenance support',
  'Solutions designed around reliability and compliance',
]

const technologies = [
  'Edwards EST fire alarm and mass notification systems',
  'Talk-A-Phone emergency communication systems',
  'Stanley Healthcare solutions',
  'RS2 Technologies',
  'Telecor systems',
  'IDenticard access control and digital imaging systems',
  'UL listed central station monitoring services',
]

const facilities = [
  'Apartment and condo communities',
  'Hotels and high-rise properties',
  'Healthcare and senior housing facilities',
  'Government buildings',
  'Educational facilities',
  'Commercial and retail properties',
  'Restaurants and hospitality environments',
]

const accentColors = ['bg-cloud', 'bg-burnt', 'bg-flame', 'bg-light-600', 'bg-maroon'] as const

export default function AboutPage() {
  return (
    <>
      <PageHero
        label={siteConfig.legalName.toUpperCase()}
        headline="Advanced Life Safety Solutions Built on Trust and Reliability"
        body="Palmetto Fire Services was built on the belief that life safety systems should do more than meet code requirements. They should provide dependable protection, clear communication, and confidence for the people who rely on them every day."
      />

      {/* Intro continued */}
      <section className="w-full bg-white">
        <Container className="py-[48px] md:py-[64px]">
          <div className="max-w-[820px] mx-auto animate-fade-in">
            <p className="body-palatino-18 mb-[16px]">
              For more than 17 years, Palmetto Fire has served Myrtle Beach and
              surrounding communities with integrated fire alarm and life safety
              solutions designed to protect people, properties, and critical facilities.
              Over the years, the company has built a strong reputation through
              responsive service, technical expertise, and long-term customer
              relationships grounded in trust.
            </p>
            <p className="body-palatino-18">
              Today, that commitment to reliability and accountability continues to
              define who we are.
            </p>
          </div>
        </Container>
      </section>

      {/* A Company Built Around Life Safety Expertise */}
      <section className="w-full bg-cream">
        <Container className="py-[64px] md:py-[96px]">
          <div className="grid lg:grid-cols-2 gap-[48px] items-center">
            <div className="animate-fade-in-up">
              <p className="label-text text-burnt mb-[16px]">EXPERTISE</p>
              <h2 className="font-serif text-palm text-[30px] md:text-[36px] lg:text-[42px] leading-tight mb-[24px]">
                A Company Built Around Life Safety Expertise
              </h2>
              <p className="body-palatino-18 mb-[16px]">
                Palmetto Fire specializes in commercial fire alarm systems, mass
                notification systems, nurse call systems, area of rescue systems,
                monitoring, inspections, and integrated life safety technologies.
              </p>
              <p className="body-palatino-18 mb-[16px]">
                From healthcare and education to hospitality, government, and
                commercial facilities, Palmetto Fire works closely with customers to design,
                install, inspect, monitor, and maintain systems that support occupant
                safety and code compliance while remaining practical and user-friendly
                for day-to-day operations.
              </p>
              <p className="body-palatino-18 mb-[16px]">
                As an EST Authorized Strategic Partner, Palmetto Fire delivers advanced
                technology solutions backed by trusted manufacturers, experienced
                professionals, and responsive local support.
              </p>
              <p className="body-palatino-18">
                Over the years, customers have continued turning to Palmetto Fire because
                they know the team will be there when it matters most.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden border border-stone-100 animate-fade-in">
              <Image
                src="/images/about-expertise.jpg"
                alt="Palmetto Fire technician working on a commercial fire alarm system"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Service and Responsiveness Still Matter */}
      <section className="w-full bg-white">
        <Container className="py-[64px] md:py-[96px]">
          <div className="max-w-[900px] mx-auto animate-fade-in-up">
            <p className="label-text text-palm mb-[16px]">RESPONSIVENESS</p>
            <h2 className="font-serif text-palm text-[30px] md:text-[36px] lg:text-[42px] leading-tight mb-[24px]">
              Service and Responsiveness Still Matter
            </h2>
            <p className="body-palatino-18 mb-[16px]">
              At Palmetto Fire, we understand that life safety systems are critical
              systems. Customers depend on them to function properly during
              emergencies, inspections, and everyday operations.
            </p>
            <p className="body-palatino-18 mb-[16px]">
              That’s why responsiveness, communication, and accountability remain
              central to how we operate.
            </p>
            <p className="body-palatino-18 mb-[24px]">
              Our customers work with people who understand their facilities, their
              systems, and their expectations. We believe long-term relationships
              matter, and we work hard to earn and maintain trust through consistent
              support and dependable service.
            </p>
            <p className="label-text text-burnt mb-[16px]">
              That commitment shows up in real ways:
            </p>
            <ul className="grid sm:grid-cols-2 gap-[12px] mb-[24px]">
              {commitmentBullets.map((b, i) => {
                const accent = accentColors[i % accentColors.length]
                return (
                  <li
                    key={b}
                    className="flex items-start gap-[12px] bg-cream border border-stone-100 rounded-[8px] px-[16px] py-[12px]"
                  >
                    <span
                      className={`w-[10px] h-[10px] bg-stone-400 rounded-full flex-shrink-0 mt-[6px]`}
                      aria-hidden="true"
                    />
                    <span className="text-palm font-medium">{b}</span>
                  </li>
                )
              })}
            </ul>
            <p className="body-palatino-18">
              At Palmetto Fire, we believe customers deserve more than a vendor. They
              deserve a partner who understands the importance of protecting people and
              supporting critical operations.
            </p>
          </div>
        </Container>
      </section>

      {/* Experience and Technology That Perform When It Counts */}
      <section className="w-full bg-cream">
        <Container className="py-[64px] md:py-[96px]">
          <div className="max-w-[900px] mx-auto animate-fade-in-up">
            <p className="label-text text-palm mb-[16px]">EXPERIENCE & TECHNOLOGY</p>
            <h2 className="font-serif text-palm text-[30px] md:text-[36px] lg:text-[42px] leading-tight mb-[24px]">
              Experience and Technology That Perform When It Counts
            </h2>
            <p className="body-palatino-18 mb-[24px]">
              Palmetto Fire works with leading manufacturers and technologies to
              deliver dependable fire alarm and life safety systems tailored to each
              facility’s needs.
            </p>

            <p className="label-text text-burnt mb-[16px]">
              Our team supports systems and technologies including:
            </p>
            <ul className="grid sm:grid-cols-2 gap-[10px] mb-[32px]">
              {technologies.map((t, i) => {
                const accent = accentColors[i % accentColors.length]
                return (
                  <li
                    key={t}
                    className="flex items-start gap-[12px] bg-white border border-stone-100 rounded-[8px] px-[16px] py-[12px]"
                  >
                    <span
                      className={`w-[8px] h-[8px] bg-stone-400 rounded-full flex-shrink-0 mt-[8px]`}
                      aria-hidden="true"
                    />
                    <span className="text-palm font-medium text-[15px]">{t}</span>
                  </li>
                )
              })}
            </ul>

            <p className="body-palatino-18 mb-[16px]">
              Our experience spans a wide range of commercial and institutional
              facilities throughout South Carolina and surrounding areas, including:
            </p>
            <ul className="flex flex-wrap gap-[8px] mb-[24px]">
              {facilities.map((f) => {
                const href = getApplicationHrefForText(f)
                const chipClass =
                  'text-[13px] font-semibold uppercase tracking-wide text-palm bg-white border border-stone-200 rounded-full px-[14px] py-[6px] transition-colors'
                return (
                  <li key={f}>
                    {href ? (
                      <Link
                        href={href}
                        className={`${chipClass} hover:border-cloud hover:text-cloud inline-block`}
                      >
                        {f}
                      </Link>
                    ) : (
                      <span className={`${chipClass} inline-block`}>{f}</span>
                    )}
                  </li>
                )
              })}
            </ul>

            <p className="body-palatino-18">
              Every system we support reflects our commitment to reliability, code
              compliance, and long-term customer support.
            </p>
          </div>
        </Container>
      </section>

      {/* Growing with Purpose as Part of the Atlantis Fire Family */}
      <section className="w-full bg-palm relative overflow-hidden">
        <Container className="py-[64px] md:py-[96px]">
          <div className="grid lg:grid-cols-2 gap-[48px] items-center">
            <div className="animate-fade-in-up">
              <p className="label-text text-flame mb-[16px]">ATLANTIS FIRE FAMILY</p>
              <h2 className="font-serif text-white text-[30px] md:text-[36px] lg:text-[42px] leading-tight mb-[24px]">
                Growing with Purpose as Part of the Atlantis Fire Family
              </h2>
              <p className="text-cream-100 text-[17px] leading-relaxed mb-[16px]">
                In 2026, Palmetto Fire Services became part of the Atlantis Fire
                Protection family of companies. Atlantis Fire recognized Palmetto Fire for its
                strong reputation, technical expertise, customer relationships, and
                long-standing commitment to service.
              </p>
              <p className="text-cream-100 text-[17px] leading-relaxed mb-[16px]">
                The partnership allows Palmetto Fire to continue serving customers with the
                same trusted local team while gaining access to additional resources,
                operational support, and long-term growth opportunities.
              </p>
              <p className="text-cream-100 text-[17px] leading-relaxed mb-[16px]">
                Most importantly, Palmetto Fire remains focused on what has always mattered
                most: responsive service, dependable systems, and protecting the
                communities we serve.
              </p>
              <p className="text-cream-100 text-[17px] leading-relaxed italic mb-[32px]">
                Simply put: Palmetto Fire Services gained additional support and
                resources while remaining locally focused and relationship-driven.
              </p>
              <Button href="/about/our-partner" variant="burnt" size="lg">
                Learn More
              </Button>
            </div>
            <div className="bg-white rounded-[8px] p-[32px] flex items-center justify-center min-h-[220px] border border-light-500/30 animate-slide-in-right">
              <Image
                src="/images/atlantis-logo.png"
                alt="Atlantis Fire Protection"
                width={600}
                height={523}
                className="w-full h-auto max-w-[280px]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Built to Protect What Matters Most — closing */}
      <section className="w-full bg-cream relative overflow-hidden">
        <Container className="py-[64px] md:py-[96px]">
          <div className="max-w-[820px] mx-auto text-center animate-fade-in">
            <h2 className="font-serif text-palm text-[30px] md:text-[36px] lg:text-[42px] leading-tight mb-[16px]">
              Built to Protect What Matters Most
            </h2>
            <p className="body-large text-stone-700 mb-[16px]">
              Whether you need a trusted partner for fire alarm systems, emergency
              communication technologies, inspections, monitoring, or long-term life
              safety support, Palmetto Fire is ready to help.
            </p>
            <p className="body-large text-stone-700 mb-[32px]">
              We believe reliability matters. Responsiveness matters. And the people
              behind the systems matter too.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
