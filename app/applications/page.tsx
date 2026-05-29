import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/PageHero'
import CTASection from '@/components/sections/CTASection'
import Container from '@/components/layout/Container'
import { applications } from '@/lib/data/applications'
import { siteConfig } from '@/lib/data/siteConfig'

export const metadata: Metadata = {
  title: 'Applications',
  description: `${siteConfig.name} supports a wide range of facilities and industries — apartments, hotels, healthcare, government, commercial, education, and hospitality.`,
}

const hoverBorders = [
  'hover:border-cloud',
  'hover:border-burnt',
  'hover:border-flame',
  'hover:border-light-500',
  'hover:border-maroon',
] as const

export default function ApplicationsIndexPage() {
  return (
    <>
      <PageHero
        label="WHO WE SERVE"
        headline="Who We Serve"
        body="Palmetto Fire proudly supports a wide range of facilities and industries. Whether you operate a single facility or manage multiple properties, Palmetto Fire delivers dependable life safety solutions tailored to your environment and operational needs."
      />

      <section className="w-full bg-cream">
        <Container className="py-[64px] md:py-[96px]">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[16px] max-w-[1200px] mx-auto">
            {applications.map((app, i) => {
              const hoverBorder = hoverBorders[i % hoverBorders.length]
              return (
                <Link
                  key={app.slug}
                  href={`/applications/${app.slug}`}
                  className={`group block bg-white rounded-[8px] p-[24px] border border-stone-100 ${hoverBorder} hover:shadow-md transition-all duration-300 animate-fade-in-up`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <h2 className="text-maroon font-semibold text-[17px] mb-[8px] group-hover:text-cloud transition-colors">
                    {app.name}
                  </h2>
                  <p className="text-stone-600 text-[14px] leading-relaxed">
                    {app.summary}
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
