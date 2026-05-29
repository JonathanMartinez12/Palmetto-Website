// Each application currently has only summary-level copy supplied by the
// client. Detail pages render a hero + summary + "contact us" CTA until
// per-application long-form copy is provided.

export interface Application {
  slug: string
  name: string
  shortName: string
  summary: string
  image: string
  isPlaceholder?: boolean
}

export const applications: Application[] = [
  {
    slug: 'apartment-condo-communities',
    name: 'Apartment & Condo Communities',
    shortName: 'Apartments & Condos',
    summary:
      'Fire alarm, monitoring, and access control solutions for apartments, condos, and multi-family communities.',
    image: '/images/application-multifamily.jpg',
    isPlaceholder: true,
  },
  {
    slug: 'hotels-high-rise',
    name: 'Hotels & High-Rise Properties',
    shortName: 'Hotels & High-Rise',
    summary:
      'Voice evacuation, area of rescue, and integrated life safety for hospitality and multi-story properties.',
    image: '/images/application-hotel.jpg',
    isPlaceholder: true,
  },
  {
    slug: 'government-facilities',
    name: 'Government Facilities',
    shortName: 'Government',
    summary:
      'Fire alarm, mass notification, and access control for federal, state, and municipal facilities.',
    image: '/images/application-government.jpg',
    isPlaceholder: true,
  },
  {
    slug: 'healthcare-senior-housing',
    name: 'Healthcare & Senior Housing',
    shortName: 'Healthcare',
    summary:
      'Nurse call, fire alarm, and life safety solutions for hospitals, assisted living, and senior housing.',
    image: '/images/application-healthcare.jpg',
    isPlaceholder: true,
  },
  {
    slug: 'commercial-retail',
    name: 'Commercial & Retail Properties',
    shortName: 'Commercial / Retail',
    summary:
      'Life safety and security integration for stores, plazas, and standalone commercial buildings.',
    image: '/images/application-commercial.jpg',
    isPlaceholder: true,
  },
  {
    slug: 'educational-facilities',
    name: 'Educational Facilities',
    shortName: 'Education',
    summary:
      'Mass notification, access control, and fire alarm for K-12 districts and higher-education campuses.',
    image: '/images/application-education.jpg',
    isPlaceholder: true,
  },
  {
    slug: 'restaurants-hospitality',
    name: 'Restaurants & Hospitality',
    shortName: 'Restaurants',
    summary:
      'Fire alarm and monitoring services for restaurants, bars, and hospitality environments.',
    image: '/images/application-restaurant.jpg',
    isPlaceholder: true,
  },
]

export function getApplicationBySlug(slug: string): Application | undefined {
  return applications.find((a) => a.slug === slug)
}
