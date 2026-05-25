'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Button from '../ui/Button'
import { siteConfig } from '@/lib/data/siteConfig'

interface Slide {
  image: string
  alt: string
}

const slides: Slide[] = [
  { image: '/images/hero-alarm.jpg', alt: 'Fire alarm control panel' },
  { image: '/images/hero-mass-notification.jpg', alt: 'Mass notification system' },
  { image: '/images/hero-team.jpg', alt: 'Palmetto Fire Services team at work' },
]

export default function HeroCarousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-maroon" aria-label="Hero">
      <div className="relative h-[520px] md:h-[620px] lg:h-[680px]">
        {slides.map((slide, i) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              i === active ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={i !== active}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={i === 0}
              className={`object-cover ${i === active ? 'animate-hero-zoom' : ''}`}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Navy gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-maroon-800/85 via-maroon-700/70 to-maroon-600/60"
          aria-hidden="true"
        />

        {/* Copy */}
        <div className="relative h-full z-10">
          <div className="max-w-[1440px] h-full mx-auto px-[24px] md:px-[40px] lg:px-[80px] flex items-center">
            <div className="max-w-[720px] animate-fade-in-up">
              <p className="label-text text-flame mb-[16px]">
                {siteConfig.certifications.join(' • ')} CERTIFIED
              </p>
              <h1 className="font-serif text-white text-[40px] md:text-[52px] lg:text-[64px] leading-[1.1] mb-[24px]">
                Life safety, done right the first time.
              </h1>
              <p className="text-white/90 text-[17px] md:text-[19px] leading-relaxed mb-[32px] max-w-[600px]">
                {siteConfig.tagline}. From design and installation to monitoring
                and inspection, Palmetto is your single source for fire alarm,
                mass notification, nurse call, area of rescue, and access
                control systems.
              </p>
              <div className="flex flex-wrap gap-[12px]">
                <Button href="/services" variant="primary" size="lg">
                  Our Services
                </Button>
                <Button
                  href={siteConfig.phoneHref}
                  variant="outline"
                  size="lg"
                  className="!bg-white/10 !border-white !text-white hover:!bg-white hover:!text-maroon"
                >
                  {siteConfig.phone}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 z-10 flex gap-[8px]">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-[6px] rounded-full transition-all ${
                i === active ? 'w-[32px] bg-flame' : 'w-[12px] bg-white/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
