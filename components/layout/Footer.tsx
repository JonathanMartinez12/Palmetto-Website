import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'
import { navigation, siteConfig } from '@/lib/data/siteConfig'
import { activeServices } from '@/lib/data/services'

export default function Footer() {
  return (
    <footer className="bg-palm text-white">
      <Container>
        <div className="py-[56px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-[16px]" aria-label={`${siteConfig.name} Home`}>
              <Image
                src="/palmetto-logo-reverse.png"
                alt={siteConfig.name}
                width={800}
                height={432}
                className="w-[200px] h-auto"
              />
            </Link>
            <p className="text-gray-300 text-[14px] leading-relaxed mb-[12px]">
              {siteConfig.description}
            </p>
            <p className="text-flame text-[13px] font-semibold uppercase tracking-wide">
              {siteConfig.certifications.join(' • ')}
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
                    className="text-gray-300 hover:text-flame transition-colors duration-200 text-[14px]"
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
              {activeServices.slice(0, 6).map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-gray-300 hover:text-flame transition-colors duration-200 text-[14px]"
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

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-[16px] mb-[16px] uppercase tracking-wide">
              Contact
            </h3>
            <address className="not-italic space-y-[10px] text-[14px] text-gray-300">
              <p>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
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
                  className="hover:text-flame transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
            </address>
            <div className="mt-[16px]">
              <p className="text-[12px] uppercase tracking-wide text-burnt font-semibold mb-[4px]">
                Service Area
              </p>
              <p className="text-[14px] text-gray-300">
                {siteConfig.serviceAreas.join(' • ')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-[24px] pb-[24px] border-t border-palm-400/50 flex flex-col md:flex-row items-center justify-between gap-[12px]">
          <p className="text-gray-400 text-[13px]">{siteConfig.copyright}</p>
          <p className="text-gray-400 text-[13px]">
            A proud member of the{' '}
            <a
              href={siteConfig.parent.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-flame hover:text-white transition-colors font-semibold"
            >
              {siteConfig.parent.name}
            </a>{' '}
            family.
          </p>
        </div>
      </Container>
    </footer>
  )
}
