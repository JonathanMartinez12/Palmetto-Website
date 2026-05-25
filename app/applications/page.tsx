import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import ApplicationsGrid from '@/components/sections/ApplicationsGrid'
import CTASection from '@/components/sections/CTASection'
import { siteConfig } from '@/lib/data/siteConfig'

export const metadata: Metadata = {
  title: 'Applications',
  description: `Fire protection for every building type — ${siteConfig.name} serves apartments, commercial, industrial, office, and mixed-use properties across the Carolinas.`,
}

export default function ApplicationsIndexPage() {
  return (
    <>
      <PageHero
        label="APPLICATIONS"
        headline="Every property type. The right system."
        body="Fire protection isn’t one-size-fits-all. Here’s how we tailor design, installation, and inspection to the buildings we protect most."
      />
      <ApplicationsGrid
        label="PROPERTY TYPES"
        headline="Where We Work"
        intro="Click any application below to see the services that apply and the considerations that matter."
      />
      <CTASection
        headline="Don’t see your property type?"
        text="We protect all kinds of buildings — reach out and we’ll tell you exactly how we’d approach yours."
        buttonText="Contact Us"
        buttonHref="/contact"
        variant="cream"
      />
    </>
  )
}
