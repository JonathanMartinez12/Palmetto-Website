import Link from 'next/link'
import Container from '../layout/Container'
import { applications } from '@/lib/data/applications'

interface ApplicationsGridProps {
  label?: string
  headline?: string
  intro?: string
}

export default function ApplicationsGrid({
  label = 'WHO WE SERVE',
  headline = 'Applications',
  intro = 'From apartment complexes to industrial plants, we tailor fire protection to the property type.',
}: ApplicationsGridProps) {
  return (
    <section className="bg-cream section-padding">
      <Container>
        <div className="text-center mb-[48px] animate-fade-in">
          <p className="label-text text-maroon mb-[16px]">{label}</p>
          <h2 className="heading-2 text-maroon mb-[16px]">{headline}</h2>
          <p className="body-large max-w-[720px] mx-auto">{intro}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-[16px]">
          {applications.map((app, i) => (
            <Link
              key={app.slug}
              href={`/applications/${app.slug}`}
              className="group block bg-white rounded-[8px] p-[24px] border border-transparent hover:border-cloud hover:shadow-md transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <h3 className="text-maroon font-semibold text-[17px] mb-[8px] group-hover:text-cloud transition-colors">
                {app.name}
              </h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">{app.summary}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
