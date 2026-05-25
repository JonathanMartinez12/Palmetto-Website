import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/lib/data/siteConfig'

export const metadata: Metadata = {
  title: 'Careers',
  description: `Join ${siteConfig.name} — a fast-growing life safety contractor hiring fire alarm technicians, inspectors, and project managers across the Myrtle Beach area.`,
}

const reasons = [
  {
    title: 'Built on technicians',
    text: 'We’re a field-first company. Leadership came up through the trades, and the people swinging wrenches set the standard.',
  },
  {
    title: 'Invested in growth',
    text: 'NICET study support, paid certifications, and a path from apprentice to foreman to superintendent.',
  },
  {
    title: 'Real benefits',
    text: 'Competitive pay, company truck programs where applicable, health insurance, PTO, and retirement.',
  },
  {
    title: 'Backed by a platform',
    text: `Part of the ${siteConfig.parent.name} family — local identity, national resources.`,
  },
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="CAREERS"
        headline="Come build with us."
        body="We’re hiring fire alarm technicians, low-voltage installers, inspectors, designers, and project managers across the Myrtle Beach area."
      />

      <section className="bg-white section-padding">
        <Container>
          <div className="text-center mb-[48px] animate-fade-in">
            <p className="label-text text-maroon mb-[16px]">WHY PALMETTO</p>
            <h2 className="heading-2 text-maroon">A place to build a long career.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="bg-cream rounded-[8px] p-[24px] animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-[48px] h-[4px] bg-cloud mb-[16px]"
                  aria-hidden="true"
                />
                <h3 className="heading-4 text-maroon mb-[8px]">{r.title}</h3>
                <p className="body-text">{r.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Positions — placeholder until client provides list */}
      <section className="bg-cream section-padding">
        <Container>
          <div className="max-w-[820px] mx-auto text-center">
            <p className="label-text text-maroon mb-[16px]">OPEN POSITIONS</p>
            <h2 className="heading-2 text-maroon mb-[24px]">
              We’re always hiring.
            </h2>
            {/* TODO: real copy from client - swap in live job list */}
            <p className="body-large mb-[32px]">
              We don’t maintain a public listing for every role — if you’re a
              fire alarm technician, low-voltage installer, inspector,
              designer, or project manager with experience in the Carolinas,
              we want to hear from you. Send us a note with your background
              and we’ll be in touch.
            </p>
            <Button
              href="/contact?topic=careers"
              variant="primary"
              size="lg"
            >
              Apply / Introduce Yourself
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
