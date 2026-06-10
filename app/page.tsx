import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/lib/data/siteConfig'
import { services } from '@/lib/data/services'
import { applications } from '@/lib/data/applications'

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.legalName,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  areaServed: siteConfig.serviceAreas.map((s) => ({ '@type': 'State', name: s })),
  serviceType: services.map((s) => s.name),
}

const commitmentBullets = [
  'Responsive local service',
  'Clear communication',
  'Dependable support',
  'Long-term system reliability',
  'Code-compliant solutions',
]

const accentColors = ['bg-cloud', 'bg-burnt', 'bg-flame', 'bg-light-600', 'bg-maroon'] as const

// Home Row 3 tiles — matches the client copy doc verbatim. Monitoring,
// Testing & Inspections is shown as a single combined tile on the home
// page, but the detail-page navigation has them as two separate pages.
const homeServiceTiles = [
  {
    name: 'Fire Alarm Systems',
    summary:
      'Design, installation, upgrades, inspections, monitoring, and ongoing support for commercial fire alarm systems',
    href: '/services/fire-alarm-systems',
  },
  {
    name: 'Mass Notification Systems',
    summary:
      'Emergency communication systems designed to quickly distribute critical information during emergencies and facility-wide events',
    href: '/services/mass-notification-systems',
  },
  {
    name: 'Nurse Call Systems',
    summary:
      'Reliable communication systems that support faster response times and improved patient care environments',
    href: '/services/nurse-call-systems',
  },
  {
    name: 'Area of Rescue Systems',
    summary:
      'Code-compliant emergency communication solutions that support occupant safety and evacuation procedures',
    href: '/services/area-of-rescue-systems',
  },
  {
    name: 'Monitoring, Testing & Inspections',
    summary:
      'UL listed central station monitoring, testing, preventative maintenance, and NFPA-focused inspections',
    href: '/services/monitoring-services',
  },
  {
    name: 'Access Control & Security Integration',
    summary:
      'Integrated access control, security, and digital imaging systems designed to improve visibility and facility management',
    href: '/services/access-control-security-integration',
  },
  {
    name: 'Design & Installation Services',
    summary:
      'Advanced system design, ADA upgrades, elevator recall solutions, and technology integration services',
    href: '/services/design-installation-lifecycle-support',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-palm" aria-label="Hero">
        <div className="relative h-[520px] md:h-[620px] lg:h-[680px]">
          <Image
            src="/images/hero-home.jpg"
            alt="Palmetto Fire Services team supporting a commercial fire alarm system"
            fill
            priority
            className="object-cover animate-hero-zoom"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-palm-900/85 via-palm-800/70 to-palm-600/60"
            aria-hidden="true"
          />
          <div className="relative h-full z-10">
            <div className="max-w-[1440px] h-full mx-auto px-[24px] md:px-[40px] lg:px-[80px] flex items-center">
              <div className="max-w-[760px] animate-fade-in-up">
                <p className="label-text text-flame mb-[16px]">{siteConfig.legalName}</p>
                <h1 className="font-serif text-white text-[40px] md:text-[52px] lg:text-[64px] leading-[1.1] mb-[24px]">
                  Advanced Life Safety. Trusted Local Service.
                </h1>
                <p className="text-white/90 text-[17px] md:text-[19px] leading-relaxed mb-[32px] max-w-[640px]">
                  We provide integrated fire alarm and life safety solutions designed to
                  protect people, properties, and critical facilities with responsive
                  service, trusted technology, and long-term support.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Request Service
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROW 1 — Integrated Life Safety callout */}
      <section className="w-full bg-cream relative overflow-hidden">
        <Container className="py-[64px] md:py-[96px]">
          <div className="max-w-[900px] mx-auto text-center animate-fade-in">
            <h2 className="font-serif text-palm text-[30px] md:text-[36px] lg:text-[42px] leading-tight mb-[24px]">
              Integrated Life Safety Solutions Across Myrtle Beach and the Carolinas
            </h2>
            <p className="body-large text-stone-700 mb-[32px]">
              When it comes to life safety systems, reliability and responsiveness matter.
              From fire alarm systems and emergency communication to monitoring,
              inspections, and preventative maintenance, Palmetto Fire helps protect your
              people, your property, and your peace of mind.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Request a Quote
            </Button>
          </div>
        </Container>
      </section>

      {/* ROW 2 — Life Safety Systems Built Around Reliability */}
      <section className="w-full bg-white">
        <Container className="py-[64px] md:py-[96px]">
          <div className="grid lg:grid-cols-2 gap-[48px] items-center">
            <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden border border-stone-100 animate-fade-in">
              <Image
                src="/images/about-reliability.jpg"
                alt="Palmetto Fire technician inspecting a commercial fire alarm panel"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="animate-fade-in-up">
              <p className="label-text text-palm mb-[16px]">ABOUT PALMETTO FIRE</p>
              <h2 className="font-serif text-palm text-[30px] md:text-[36px] lg:text-[42px] leading-tight mb-[24px]">
                Life Safety Systems Built Around Reliability
              </h2>
              <p className="body-palatino-18 mb-[16px]">
                Palmetto Fire has built its reputation by helping customers navigate
                complex life safety requirements with dependable systems and responsive
                local support.
              </p>
              <p className="body-palatino-18 mb-[16px]">
                Founded more than 17 years ago, Palmetto Fire specializes in commercial
                fire alarm systems, nurse call systems, mass notification, and area of
                rescue solutions for facilities where code compliance, occupant safety,
                and system performance are critical.
              </p>
              <p className="body-palatino-18 mb-[16px]">
                As an EST Authorized Strategic Partner, Palmetto Fire provides advanced
                technology solutions that are user-friendly, code-compliant, and designed
                for long-term value and reliability.
              </p>
              <blockquote className="border-l-[4px] border-flame bg-cream rounded-r-[8px] pl-[20px] pr-[16px] py-[16px] my-[24px]">
                <p className="body-palatino-18 text-palm font-medium italic">
                  We don’t believe in one-size-fits-all systems. We believe every
                  facility deserves solutions designed around its specific operational
                  and safety needs.
                </p>
              </blockquote>
              <Button href="/about" variant="primary" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ROW 3 — A Complete Life Safety Technology Partner */}
      <section className="w-full bg-cream">
        <Container className="py-[64px] md:py-[96px]">
          <div className="max-w-[900px] mx-auto text-center mb-[48px] animate-fade-in">
            <p className="label-text text-palm mb-[16px]">WHAT WE DO</p>
            <h2 className="font-serif text-palm text-[30px] md:text-[36px] lg:text-[42px] leading-tight mb-[24px]">
              A Complete Life Safety Technology Partner
            </h2>
            <p className="body-large text-stone-700">
              Palmetto Fire Services provides integrated fire alarm and life safety
              solutions under one roof, helping customers simplify compliance, improve
              communication, and maintain dependable protection across their facilities.
            </p>
          </div>

          <p className="text-center label-text text-burnt mb-[24px]">Our Services Include</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[16px] max-w-[1200px] mx-auto">
            {homeServiceTiles.map((tile, i) => {
              const accent = accentColors[i % accentColors.length]
              return (
                <Link
                  key={tile.name}
                  href={tile.href}
                  className="group block bg-white rounded-[8px] p-[24px] border border-stone-100 hover:border-cloud hover:shadow-md transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div
                    className={`w-[40px] h-[3px] ${accent} mb-[12px]`}
                    aria-hidden="true"
                  />
                  <h3 className="text-palm font-semibold text-[17px] mb-[8px] group-hover:text-cloud transition-colors">
                    {tile.name}
                  </h3>
                  <p className="text-stone-600 text-[14px] leading-relaxed">
                    {tile.summary}
                  </p>
                </Link>
              )
            })}
          </div>

          <p className="max-w-[900px] mx-auto text-center body-palatino-18 text-stone-700 mt-[48px]">
            As technology and code requirements evolve, Palmetto Fire continues investing
            in solutions that help customers protect people, simplify operations, and
            support long-term facility performance.
          </p>
        </Container>
      </section>

      {/* ROW 4 — Built on Long-Term Relationships */}
      <section className="w-full bg-palm relative overflow-hidden">
        <Container className="py-[64px] md:py-[96px]">
          <div className="max-w-[900px] mx-auto animate-fade-in-up">
            <p className="label-text text-flame mb-[16px]">OUR COMMITMENT</p>
            <h2 className="font-serif text-white text-[30px] md:text-[36px] lg:text-[42px] leading-tight mb-[24px]">
              Built on Long-Term Relationships and Responsive Service
            </h2>
            <p className="text-cream-100 text-[17px] leading-relaxed mb-[16px]">
              What truly sets Palmetto Fire apart isn’t just the systems we install.
              It’s the trust we build with the customers who depend on them every day.
            </p>
            <p className="text-cream-100 text-[17px] leading-relaxed mb-[24px]">
              Our customers work with a team that understands their facilities, their
              compliance requirements, and the importance of dependable communication
              during critical situations. We believe responsiveness, consistency, and
              accountability still matter.
            </p>
            <p className="label-text text-flame mb-[16px]">That commitment means:</p>
            <ul className="grid sm:grid-cols-2 gap-[12px] mb-[24px]">
              {commitmentBullets.map((b, i) => {
                const accent = accentColors[i % accentColors.length]
                return (
                  <li
                    key={b}
                    className="flex items-start gap-[12px] bg-palm-700/60 border border-light-500/30 rounded-[8px] px-[16px] py-[12px]"
                  >
                    <span
                      className={`w-[10px] h-[10px] bg-stone-400 rounded-full flex-shrink-0 mt-[6px]`}
                      aria-hidden="true"
                    />
                    <span className="text-white font-medium">{b}</span>
                  </li>
                )
              })}
            </ul>
            <p className="text-cream-100 text-[17px] leading-relaxed mb-[32px]">
              At Palmetto Fire, we understand life safety systems are not optional. They
              are essential. When customers need support, we answer the call and stand
              behind our work.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Request Service
            </Button>
          </div>
        </Container>
      </section>

      {/* ROW 5 — Experience and Technology You Can Trust */}
      <section className="w-full bg-white">
        <Container className="py-[64px] md:py-[96px]">
          <div className="max-w-[900px] mx-auto animate-fade-in">
            <p className="label-text text-palm mb-[16px]">EXPERIENCE & TECHNOLOGY</p>
            <h2 className="font-serif text-palm text-[30px] md:text-[36px] lg:text-[42px] leading-tight mb-[24px]">
              Experience and Technology You Can Trust
            </h2>
            <p className="body-palatino-18 mb-[16px]">
              The Palmetto Fire team includes experienced professionals trained to
              support complex commercial fire alarm and life safety systems across
              multiple industries and facility types.
            </p>
            <p className="body-palatino-18 mb-[16px]">
              As an EST Authorized Strategic Partner, Palmetto Fire works with leading
              technologies and manufacturers including Edwards EST, Talk-A-Phone,
              Stanley Healthcare, RS2 Technologies, Telecor, and IDenticard systems.
            </p>
            <p className="body-palatino-18">
              We invest in training, technology, and long-term customer support because
              life safety systems require experience, precision, and accountability.
            </p>
          </div>
        </Container>
      </section>

      {/* ROW 6 — Who We Serve */}
      <section className="w-full bg-cream">
        <Container className="py-[64px] md:py-[96px]">
          <div className="max-w-[900px] mx-auto text-center mb-[48px] animate-fade-in">
            <p className="label-text text-palm mb-[16px]">WHO WE SERVE</p>
            <h2 className="font-serif text-palm text-[30px] md:text-[36px] lg:text-[42px] leading-tight mb-[24px]">
              Who We Serve
            </h2>
            <p className="body-large text-stone-700">
              Palmetto Fire proudly supports a wide range of facilities and industries,
              including:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[16px] max-w-[1200px] mx-auto">
            {applications.map((app, i) => {
              const hoverBorders = [
                'hover:border-cloud',
                'hover:border-burnt',
                'hover:border-flame',
                'hover:border-light-500',
                'hover:border-maroon',
              ]
              const hoverBorder = hoverBorders[i % hoverBorders.length]
              return (
                <Link
                  key={app.slug}
                  href={`/applications/${app.slug}`}
                  className={`group block bg-white rounded-[8px] p-[24px] border border-stone-100 ${hoverBorder} hover:shadow-md transition-all duration-300 animate-fade-in-up`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <h3 className="text-palm font-semibold text-[17px] mb-[8px] group-hover:text-cloud transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-stone-600 text-[14px] leading-relaxed">
                    {app.summary}
                  </p>
                </Link>
              )
            })}
          </div>

          <div className="max-w-[900px] mx-auto text-center mt-[48px]">
            <p className="body-palatino-18 text-stone-700 mb-[24px]">
              Whether you operate a single facility or manage multiple properties,
              Palmetto Fire delivers dependable life safety solutions tailored to your
              environment and operational needs.
            </p>
            <Button href="/applications" variant="primary" size="lg">
              Learn More
            </Button>
          </div>
        </Container>
      </section>

      {/* ROW 7 — Atlantis Fire Partnership */}
      <section className="w-full bg-palm relative overflow-hidden">
        <Container className="py-[64px] md:py-[96px]">
          <div className="grid lg:grid-cols-5 gap-[48px] items-center">
            <div className="lg:col-span-3 animate-fade-in-up">
              <p className="label-text text-flame mb-[16px]">OUR PARTNER</p>
              <h2 className="font-serif text-white text-[30px] md:text-[36px] lg:text-[42px] leading-tight mb-[24px]">
                Proud to be part of Atlantis Fire Protection
              </h2>
              <p className="text-cream-100 text-[17px] leading-relaxed mb-[16px]">
                Palmetto Fire Services is proud to be part of the Atlantis Fire family
                of companies. That partnership provides access to additional resources,
                operational support, shared expertise, and long-term growth
                opportunities while allowing Palmetto to remain locally focused,
                responsive, and relationship-driven.
              </p>
              <p className="text-cream-100 text-[17px] leading-relaxed mb-[32px]">
                Customers continue working with the same trusted local team while
                benefiting from the strength and support of a growing fire protection
                platform.
              </p>
              <Button href="/about/our-partner" variant="primary" size="lg">
                Learn More
              </Button>
            </div>
            <div className="lg:col-span-2 animate-slide-in-right">
              <div className="bg-white rounded-[8px] p-[32px] flex items-center justify-center min-h-[200px] border border-light-500/30">
                <Image
                  src="/images/atlantis-logo.png"
                  alt="Atlantis Fire Protection"
                  width={400}
                  height={200}
                  className="w-full h-auto max-w-[280px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CLOSING CTA — Let's Protect What Matters */}
      <section className="w-full bg-cream relative overflow-hidden">
        <Container className="py-[64px] md:py-[96px]">
          <div className="max-w-[768px] mx-auto text-center animate-fade-in">
            <h2 className="font-serif text-palm text-[30px] md:text-[36px] lg:text-[42px] leading-tight mb-[16px]">
              Let’s Protect What Matters
            </h2>
            <p className="body-large text-stone-700 mb-[32px]">
              If you’re looking for a life safety partner who delivers responsive
              service, dependable systems, and long-term support, Palmetto Fire Services
              is ready to help.
            </p>
            <div className="flex flex-wrap gap-[12px] justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Request Service
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Our Team
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
    </>
  )
}
