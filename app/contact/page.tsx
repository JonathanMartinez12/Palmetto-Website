import type { Metadata } from 'next'
import { Suspense } from 'react'
import PageHero from '@/components/sections/PageHero'
import ContactForm from '@/components/sections/ContactForm'
import ContactInfo from '@/components/sections/ContactInfo'
import Container from '@/components/layout/Container'
import { siteConfig } from '@/lib/data/siteConfig'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact ${siteConfig.name} — call ${siteConfig.phone} or email ${siteConfig.email}. Serving the Carolinas from Little River, South Carolina.`,
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="CONTACT"
        headline="Get in Touch"
        body="Whether you’re planning a new install, need an inspection scheduled, or have an existing system that needs service, we’re here to help."
      />

      <section className="bg-white section-padding">
        <Container>
          <div className="grid lg:grid-cols-2 gap-[48px] items-start">
            <div>
              <h2 className="font-serif text-maroon text-[28px] md:text-[32px] leading-tight mb-[24px]">
                Send us a message.
              </h2>
              <Suspense fallback={<div className="h-[400px]" aria-hidden="true" />}>
                <ContactForm />
              </Suspense>
            </div>
            <ContactInfo />
          </div>
        </Container>
      </section>
    </>
  )
}
