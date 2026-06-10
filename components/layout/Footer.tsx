import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'
import { navigation, siteConfig } from '@/lib/data/siteConfig'
import { services } from '@/lib/data/services'

const utilityNav = [
  {
    label: 'Customer Portal (ServiceTrade)',
    href: siteConfig.portals.customer,
    external: true,
  },
  {
    label: 'Payment Portal',
    href: siteConfig.portals.payment,
    external: true,
  },
  {
    label: 'Certifications & Associations',
    href: '#',
  },
  {
    label: 'Service Areas',
    href: '#service-areas',
  },
]

export default function Footer() {
  return (
    <footer className="bg-palm text-white">
      <Container>
        {/* Utility Navigation row — Customer Portal, Payment Portal,
            Certifications & Associations, Service Areas. Mirrors the header
            utility bar so the four entry points are accessible at the top
            and bottom of every page. */}
        <div className="py-[24px] border-b border-palm-400/40">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-[12px]">
            {utilityNav.map((item) => (
              <li key={item.label}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-[13px] uppercase tracking-wide font-semibold text-cream-100 hover:text-flame transition-colors px-[12px] py-[8px] border border-light-500/30 rounded-[6px]"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-center text-[13px] uppercase tracking-wide font-semibold text-cream-100 hover:text-flame transition-colors px-[12px] py-[8px] border border-light-500/30 rounded-[6px]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Main footer grid */}
        <div className="py-[48px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center mb-[16px]"
              aria-label={`${siteConfig.name} Home`}
            >
              <Image
                src="/palmetto-logo-reverse.png"
                alt={siteConfig.name}
                width={800}
                height={432}
                className="w-[200px] h-auto"
              />
            </Link>
            <p className="text-cream-100/80 text-[14px] leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-[16px] mb-[16px] uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-[8px]">
              {navigation.footer.primary.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-cream-100/80 hover:text-flame transition-colors duration-200 text-[14px]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-[16px] mb-[16px] uppercase tracking-wide">
              Services
            </h3>
            <ul className="space-y-[8px]">
              {services.slice(0, 7).map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-cream-100/80 hover:text-flame transition-colors duration-200 text-[14px]"
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-flame hover:text-white transition-colors duration-200 text-[14px] font-semibold"
                >
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Certifications + Service Areas */}
          <div>
            <h3 className="text-white font-semibold text-[16px] mb-[16px] uppercase tracking-wide">
              Contact
            </h3>
            <address className="not-italic space-y-[10px] text-[14px] text-cream-100/80">
              <p>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state}{' '}
                {siteConfig.address.zip}
              </p>
              <p>
                <a
                  href={siteConfig.phoneHref}
                  className="hover:text-flame transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a
                  href={siteConfig.emailHref}
                  className="hover:text-flame transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </p>
            </address>

            {/* Certifications & Associations */}
            <div className="mt-[20px]">
              <p className="text-[12px] uppercase tracking-wide text-flame font-semibold mb-[4px]">
                Certifications & Associations
              </p>
              <p className="text-flame text-[13px] font-semibold leading-snug">
                {siteConfig.certifications.join(' • ')}
              </p>
            </div>

            {/* Service Areas */}
            <div id="service-areas" className="mt-[16px] scroll-mt-[80px]">
              <p className="text-[12px] uppercase tracking-wide text-flame font-semibold mb-[4px]">
                Service Areas
              </p>
              <p className="text-flame text-[14px] font-semibold">
                {siteConfig.serviceAreaShort}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="pt-[24px] pb-[24px] border-t border-palm-400/50">
          <p className="text-cream-100/60 text-[13px] text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-center md:gap-[12px] gap-[6px]">
            <span>© Copyright 2026 Atlantis Fire Protection, LLC</span>
            <span className="hidden md:inline text-cream-100/30">|</span>
            <a
              href="#"
              className="hover:text-flame transition-colors"
            >
              Privacy Policy
            </a>
            <span className="hidden md:inline text-cream-100/30">|</span>
            <a
              href="mailto:info@atlantisfire.com"
              className="hover:text-flame transition-colors break-all"
            >
              info@atlantisfire.com
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}
