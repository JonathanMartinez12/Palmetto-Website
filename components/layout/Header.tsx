'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import Button from '../ui/Button'
import { navigation, siteConfig } from '@/lib/data/siteConfig'
import { services } from '@/lib/data/services'
import { applications } from '@/lib/data/applications'

type DropdownKey = 'about' | 'services' | 'applications'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<DropdownKey | null>(null)
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (dropdownTimer.current) clearTimeout(dropdownTimer.current)
    }
  }, [])

  const handleDropdownEnter = (key: DropdownKey) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current)
    setOpenDropdown(key)
  }

  const handleDropdownLeave = () => {
    dropdownTimer.current = setTimeout(() => setOpenDropdown(null), 120)
  }

  const closeAll = () => {
    setMobileMenuOpen(false)
    setOpenDropdown(null)
    setMobileDropdownOpen(null)
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Utility Bar - maroon */}
      <div className="w-full bg-palm text-white">
        <div className="max-w-[1440px] mx-auto px-[16px] lg:px-[32px]">
          <div className="flex flex-col md:flex-row items-center justify-between py-[8px] md:h-[40px] gap-[6px] md:gap-[16px]">
            {/* Left: phone + email */}
            <div className="flex items-center gap-[16px] md:gap-[24px] flex-wrap justify-center md:justify-start">
              <a href={siteConfig.phoneHref} className="utility-link flex items-center gap-[6px]">
                <svg
                  className="w-[14px] h-[14px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.21l-1.7.85a11 11 0 005.2 5.2l.85-1.7a1 1 0 011.21-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.27 21 3 14.73 3 7V5z"
                  />
                </svg>
                {siteConfig.phone}
              </a>
              <a href={siteConfig.emailHref} className="utility-link hidden sm:flex items-center gap-[6px]">
                <svg
                  className="w-[14px] h-[14px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {siteConfig.email}
              </a>
            </div>

            {/* Right: portals + service area */}
            <div className="flex items-center gap-[16px] md:gap-[20px] flex-wrap justify-center md:justify-end">
              <a
                href={siteConfig.portals.customer}
                className="utility-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Customer Portal
              </a>
              <span className="text-white/30 hidden sm:inline" aria-hidden="true">|</span>
              <a
                href={siteConfig.portals.payment}
                className="utility-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Payment Portal
              </a>
              <span className="text-white/30 hidden sm:inline" aria-hidden="true">|</span>
              <span className="utility-link">{siteConfig.serviceAreaShort}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="w-full bg-white shadow-sm">
        <div className="max-w-[1440px] mx-auto px-[16px] lg:px-[32px]">
          <nav className="flex items-center py-[10px]" aria-label="Main navigation">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center flex-shrink-0"
              aria-label={`${siteConfig.name} Home`}
              onClick={closeAll}
            >
              <Image
                src="/palmetto-logo.png"
                alt={siteConfig.name}
                width={800}
                height={432}
                className="w-[180px] md:w-[220px] h-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-[28px] xl:gap-[40px] flex-1 justify-center">
              {navigation.main.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => handleDropdownEnter(item.hasDropdown as DropdownKey)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <Link
                        href={item.href}
                        className="nav-link-text hover:text-cloud transition-colors duration-200 whitespace-nowrap flex items-center gap-[4px]"
                        aria-expanded={openDropdown === item.hasDropdown}
                        aria-haspopup="true"
                      >
                        {item.name.toUpperCase()}
                        <svg
                          className="w-[12px] h-[12px]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </Link>
                      {openDropdown === item.hasDropdown && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-[8px] animate-fade-in">
                          <div className="bg-white shadow-xl border border-stone-100 rounded-[8px] py-[12px] min-w-[280px]">
                            {item.hasDropdown === 'about' &&
                              navigation.about.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  className="block px-[20px] py-[8px] text-[14px] text-maroon hover:bg-cream hover:text-cloud transition-colors font-medium"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            {item.hasDropdown === 'services' &&
                              services.map((svc) => (
                                <Link
                                  key={svc.slug}
                                  href={`/services/${svc.slug}`}
                                  className={`block px-[20px] py-[8px] text-[14px] transition-colors ${
                                    svc.isPlaceholder
                                      ? 'text-gray-400 hover:bg-gray-50'
                                      : 'text-maroon hover:bg-cream hover:text-cloud'
                                  }`}
                                >
                                  <span className="font-medium">{svc.name}</span>
                                  {svc.isPlaceholder && (
                                    <span className="ml-[8px] text-[11px] uppercase tracking-wide text-burnt font-semibold">
                                      Coming Soon
                                    </span>
                                  )}
                                </Link>
                              ))}
                            {item.hasDropdown === 'applications' &&
                              applications.map((app) => (
                                <Link
                                  key={app.slug}
                                  href={`/applications/${app.slug}`}
                                  className="block px-[20px] py-[8px] text-[14px] text-maroon hover:bg-cream hover:text-cloud transition-colors font-medium"
                                >
                                  {app.name}
                                </Link>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                }
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="nav-link-text hover:text-cloud transition-colors duration-200 whitespace-nowrap"
                  >
                    {item.name.toUpperCase()}
                  </Link>
                )
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <Button href="/contact" variant="primary" size="md">
                CONTACT
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden text-maroon p-[8px] ml-auto"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-[28px] h-[28px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-[28px] h-[28px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div
              id="mobile-menu"
              className="lg:hidden pb-[16px] border-t border-gray-200 animate-fade-in"
            >
              <div className="flex flex-col gap-[4px] pt-[16px]">
                {navigation.main.map((item) => {
                  if (item.hasDropdown) {
                    const key = item.hasDropdown
                    const isOpen = mobileDropdownOpen === key
                    return (
                      <div key={item.name} className="flex flex-col">
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            className="nav-link-text py-[10px] hover:text-cloud flex-1"
                            onClick={closeAll}
                          >
                            {item.name.toUpperCase()}
                          </Link>
                          <button
                            className="p-[10px] text-maroon"
                            onClick={() => setMobileDropdownOpen(isOpen ? null : key)}
                            aria-expanded={isOpen}
                            aria-label={`Toggle ${item.name} submenu`}
                          >
                            <svg
                              className={`w-[16px] h-[16px] transition-transform ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                        </div>
                        {isOpen && (
                          <div className="pl-[16px] pb-[8px] flex flex-col gap-[4px] border-l-[2px] border-cloud ml-[4px]">
                            {key === 'about' &&
                              navigation.about.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={closeAll}
                                  className="py-[6px] text-[14px] text-maroon hover:text-cloud"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            {key === 'services' &&
                              services.map((svc) => (
                                <Link
                                  key={svc.slug}
                                  href={`/services/${svc.slug}`}
                                  onClick={closeAll}
                                  className={`py-[6px] text-[14px] ${
                                    svc.isPlaceholder ? 'text-gray-400' : 'text-maroon hover:text-cloud'
                                  }`}
                                >
                                  {svc.name}
                                  {svc.isPlaceholder && (
                                    <span className="ml-[8px] text-[10px] uppercase tracking-wide text-burnt font-semibold">
                                      Coming Soon
                                    </span>
                                  )}
                                </Link>
                              ))}
                            {key === 'applications' &&
                              applications.map((app) => (
                                <Link
                                  key={app.slug}
                                  href={`/applications/${app.slug}`}
                                  onClick={closeAll}
                                  className="py-[6px] text-[14px] text-maroon hover:text-cloud"
                                >
                                  {app.name}
                                </Link>
                              ))}
                          </div>
                        )}
                      </div>
                    )
                  }
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="nav-link-text py-[10px] hover:text-cloud"
                      onClick={closeAll}
                    >
                      {item.name.toUpperCase()}
                    </Link>
                  )
                })}
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  className="w-full mt-[12px]"
                >
                  CONTACT
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
