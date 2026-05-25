import Link from 'next/link'
import Container from '../layout/Container'
import { services } from '@/lib/data/services'

interface ServicesGridProps {
  label?: string
  headline?: string
  intro?: string
  showComingSoon?: boolean
}

export default function ServicesGrid({
  label = 'WHAT WE DO',
  headline = 'Our Services',
  intro = 'Full-scope fire protection — engineered, installed, inspected, and serviced under one roof.',
  showComingSoon = false,
}: ServicesGridProps) {
  const list = showComingSoon ? services : services.filter((s) => !s.comingSoon)

  return (
    <section className="bg-white section-padding">
      <Container>
        <div className="text-center mb-[48px] animate-fade-in">
          <p className="label-text text-maroon mb-[16px]">{label}</p>
          <h2 className="heading-2 text-maroon mb-[16px]">{headline}</h2>
          <p className="body-large max-w-[720px] mx-auto">{intro}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {list.map((svc, i) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="group block bg-cream rounded-[8px] p-[24px] hover:shadow-lg hover:-translate-y-[2px] transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start justify-between mb-[12px]">
                <h3 className="heading-4 text-maroon group-hover:text-cloud transition-colors">
                  {svc.name}
                </h3>
                {svc.comingSoon && (
                  <span className="text-[10px] uppercase tracking-wide text-burnt font-bold bg-burnt/10 px-[8px] py-[2px] rounded-full flex-shrink-0 ml-[8px]">
                    Soon
                  </span>
                )}
              </div>
              <p className="body-text mb-[16px]">{svc.summary}</p>
              <span className="text-cloud text-[13px] font-semibold uppercase tracking-wide">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
