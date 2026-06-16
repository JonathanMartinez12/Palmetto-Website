import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/lib/data/siteConfig'

export const metadata: Metadata = {
  title: 'Careers',
  description: `Build your future with ${siteConfig.name}. We're committed to building a team of skilled professionals who take pride in their work, support one another, and deliver exceptional service.`,
}

const whyJoinBullets = [
  'Team-oriented, family-focused culture',
  'Experienced and accessible leadership',
  'Opportunities for training and professional growth',
  'Respect for craftsmanship, accountability, and service',
  'Long-term career growth and stability',
]

const accentColors = ['bg-cloud', 'bg-burnt', 'bg-flame', 'bg-light-600', 'bg-maroon'] as const

const hrEmail = 'HR@AtlantisFire.com'

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="CAREERS"
        headline="Careers at Palmetto Fire Services"
        body="Build Your Future with Palmetto Fire"
      />

      {/* Intro */}
      <section className="w-full bg-white">
        <Container className="py-[48px] md:py-[64px]">
          <div className="max-w-[820px] mx-auto animate-fade-in">
            <p className="body-palatino-18">
              At Palmetto Fire Services, our people are the foundation of everything we
              do. We’re committed to building a team of skilled professionals who take
              pride in their work, support one another, and deliver exceptional
              service.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Join */}
      <section className="w-full bg-cream">
        <Container className="py-[64px] md:py-[96px]">
          <div className="max-w-[820px] mx-auto animate-fade-in-up">
            <p className="label-text text-burnt mb-[16px]">WHY JOIN</p>
            <h2 className="font-serif text-palm text-[30px] md:text-[36px] lg:text-[42px] leading-tight mb-[24px]">
              Why Join Palmetto Fire Services
            </h2>
            <ul className="grid sm:grid-cols-2 gap-[12px] mb-[32px]">
              {whyJoinBullets.map((b, i) => {
                const accent = accentColors[i % accentColors.length]
                return (
                  <li
                    key={b}
                    className="flex items-start gap-[12px] bg-white border border-stone-100 rounded-[8px] px-[16px] py-[12px]"
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
            <p className="body-palatino-18 mb-[16px]">
              We’re always interested in connecting with talented professionals across
              field operations, inspections, service, sales, administration, and
              support functions.
            </p>
            <p className="body-palatino-18">
              If you’re looking for a rewarding career with a company that values its
              people, we’d love to hear from you.
            </p>
          </div>
        </Container>
      </section>

      {/* Part of the Atlantis Fire Family */}
      <section className="w-full bg-palm relative overflow-hidden">
        <Container className="py-[64px] md:py-[96px]">
          <div className="grid lg:grid-cols-5 gap-[48px] items-center max-w-[1100px] mx-auto">
            <div className="lg:col-span-3 animate-fade-in-up">
              <p className="label-text text-flame mb-[16px]">ATLANTIS FIRE FAMILY</p>
              <h2 className="font-serif text-white text-[28px] md:text-[34px] lg:text-[40px] leading-tight mb-[24px]">
                Part of the Atlantis Fire Family
              </h2>
              <p className="text-cream-100 text-[17px] leading-relaxed">
                Palmetto Fire Services is proud to be part of Atlantis Fire, a
                founder-friendly organization dedicated to supporting exceptional fire
                protection companies. Through shared resources, operational expertise,
                and a people-first approach, Atlantis Fire helps its companies grow while
                preserving the local culture, relationships, and reputation that make
                each business successful.
              </p>
            </div>

            <div className="lg:col-span-2 bg-white rounded-[8px] p-[32px] flex items-center justify-center min-h-[200px] border border-light-500/30 animate-slide-in-right">
              <Image
                src="/images/atlantis-logo.png"
                alt="Atlantis Fire Protection"
                width={400}
                height={200}
                className="w-full h-auto max-w-[280px]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Interested in Joining Our Team? */}
      <section className="w-full bg-white">
        <Container className="py-[64px] md:py-[96px]">
          <div className="max-w-[820px] mx-auto text-center animate-fade-in">
            <p className="label-text text-palm mb-[16px]">JOIN OUR TEAM</p>
            <h2 className="font-serif text-palm text-[30px] md:text-[36px] lg:text-[42px] leading-tight mb-[24px]">
              Interested in Joining Our Team
            </h2>
            <p className="body-large text-stone-700 mb-[32px]">
              Questions about career opportunities? Contact our recruiting team at{' '}
              <a
                href={`mailto:${hrEmail}`}
                className="text-cloud font-semibold hover:underline"
              >
                {hrEmail}
              </a>
              .
            </p>
            <Button href={`mailto:${hrEmail}`} variant="primary" size="lg">
              Contact Recruiting
            </Button>
          </div>
        </Container>
      </section>

      {/* Equal Employment Opportunity Statement */}
      <section className="w-full bg-cream">
        <Container className="py-[64px] md:py-[96px]">
          <div className="max-w-[820px] mx-auto animate-fade-in-up">
            <p className="label-text text-burnt mb-[16px]">EEO STATEMENT</p>
            <h2 className="font-serif text-palm text-[28px] md:text-[32px] lg:text-[36px] leading-tight mb-[24px]">
              Equal Employment Opportunity Statement
            </h2>
            <p className="body-palatino-18">
              Palmetto Fire Services is an Equal Opportunity Employer. We are committed
              to providing equal employment opportunities to all applicants and
              employees and to fostering an inclusive workplace. Employment decisions
              are made without regard to race, color, religion, sex, sexual
              orientation, gender identity, national origin, age, disability, genetic
              information, veteran status, or any other characteristic protected by
              applicable federal, state, or local law.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
