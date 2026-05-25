import Link from 'next/link'
import Container from '../layout/Container'
import { applications } from '@/lib/data/applications'

interface ApplicationsGridProps {
  label?: string
  headline?: string
  intro?: string
}

const hoverBorders = [
  'hover:border-cloud',
  'hover:border-burnt',
  'hover:border-flame',
  'hover:border-light-500',
  'hover:border-maroon',
] as const

export default function ApplicationsGrid({
  label = 'WHO WE SERVE',
  headline = 'Applications',
  intro = 'From apartment complexes to healthcare campuses, we tailor life safety to the property type.',
}: ApplicationsGridProps) {
  return (
    <section className="bg-cream section-padding">
      <Container>
        <div className="text-center mb-[48px] animate-fade-in">
          <p className="label-text text-maroon mb-[16px]">{label}</p>
          <h2 className="heading-2 text-maroon mb-[16px]">{headline}</h2>
          <p className="body-large max-w-[720px] mx-auto">{intro}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[16px]">
          {applications.map((app, i) => {
            const hoverBorder = hoverBorders[i % hoverBorders.length]
            return (
              <Link
                key={app.slug}
                href={`/applications/${app.slug}`}
                className={`group block bg-white rounded-[8px] p-[24px] border border-stone-100 ${hoverBorder} hover:shadow-md transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <h3 className="text-maroon font-semibold text-[17px] mb-[8px] group-hover:text-cloud transition-colors">
                  {app.name}
                </h3>
                <p className="text-stone-600 text-[14px] leading-relaxed">{app.summary}</p>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
