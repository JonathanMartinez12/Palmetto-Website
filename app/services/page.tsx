import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import CTASection from '@/components/sections/CTASection'
import { siteConfig } from '@/lib/data/siteConfig'

export const metadata: Metadata = {
  title: 'Fire Protection Services',
  description: `Explore ${siteConfig.name}’s life safety services — fire alarm, mass notification, nurse call, area of rescue, monitoring, access control, design & install, and inspections across the Myrtle Beach area.`,
}

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        label="SERVICES"
        headline="Everything you need. One call."
        body="From initial design and installation through ongoing monitoring and annual inspections, Palmetto handles the full life cycle of your life safety systems."
      />
      <ServicesGrid
        label="OUR CAPABILITIES"
        headline="What We Do"
        intro="Eight specialized service lines — all under one roof, all backed by NFPA-compliant documentation."
        showComingSoon
      />
      <CTASection
        headline="Not sure where to start?"
        text="Tell us about the building and we’ll point you to the right service."
        buttonText="Contact Us"
        buttonHref="/contact"
        variant="cream"
      />
    </>
  )
}
