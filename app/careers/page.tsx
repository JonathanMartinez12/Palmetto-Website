import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CTASection from '@/components/sections/CTASection'
import { siteConfig } from '@/lib/data/siteConfig'

export const metadata: Metadata = {
  title: 'Careers',
  description: `Careers at ${siteConfig.name} — join a fast-growing life safety team serving the Carolinas.`,
}

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="CAREERS"
        headline="Careers at Palmetto Fire Services"
        body="Detailed information for this page is coming soon. Contact Palmetto Fire Services today to learn more."
      />

      <CTASection
        headline="Want to join our team?"
        text="Reach out and we’ll be in touch."
        buttonText="Contact Us"
        buttonHref="/contact"
        variant="cream"
      />
    </>
  )
}
