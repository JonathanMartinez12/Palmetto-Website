export interface Application {
  slug: string
  name: string
  shortName: string
  tagline: string
  summary: string
  overview: string[]
  applicableServices: string[]
  considerations: string[]
  image: string
}

export const applications: Application[] = [
  {
    slug: 'apartment-condo-communities',
    name: 'Apartment & Condo Communities',
    shortName: 'Apartments & Condos',
    tagline: 'Life safety and access control engineered for residential occupancies.',
    summary:
      'Fire alarm, monitoring, and access control for apartments, condos, townhomes, and mixed-income housing.',
    overview: [
      'Multi-family buildings combine dozens of dwelling units, shared egress paths, and tight code requirements. Palmetto designs and installs systems that meet code on the first inspection and hold up to years of tenant turnover.',
      'We also manage ongoing inspection, testing, and monitoring — so property managers can hand the life safety side over and focus on residents.',
    ],
    applicableServices: [
      'fire-alarm-systems',
      'monitoring-services',
      'access-control-security-integration',
      'design-installation-lifecycle-support',
      'testing-inspections',
    ],
    considerations: [
      'NFPA 72 occupancy decisions',
      'Common area vs. unit-level coverage',
      'Resident notification & mass communication',
      'Unit entry coordination for annual ITM',
      'Turnover & vacancy inspection scheduling',
    ],
    image: '/images/application-multifamily.jpg',
  },
  {
    slug: 'hotels-high-rise',
    name: 'Hotels & High-Rise Properties',
    shortName: 'Hotels & High-Rise',
    tagline: 'Voice evacuation, area of rescue, and integrated security for hospitality and tall buildings.',
    summary:
      'High-occupancy fire alarm, mass notification, and area of rescue for hotels, resorts, and multi-story properties.',
    overview: [
      'Hotels and high-rises sit at the intersection of life safety and guest experience. Palmetto designs systems that meet voice evacuation requirements, integrate with property management workflows, and stay invisible to guests until they’re needed.',
      'Our crews are experienced working in occupied properties — minimizing disruption during install, testing, and upgrade work.',
    ],
    applicableServices: [
      'fire-alarm-systems',
      'mass-notification-systems',
      'area-of-rescue-systems',
      'monitoring-services',
      'access-control-security-integration',
      'design-installation-lifecycle-support',
      'testing-inspections',
    ],
    considerations: [
      'Voice evacuation & guest notification',
      'High-rise communication & firefighter phones',
      'Stairwell area of rescue stations',
      'After-hours testing & guest impact',
      'Integration with PMS / front desk',
    ],
    image: '/images/application-hotel.jpg',
  },
  {
    slug: 'healthcare-senior-housing',
    name: 'Healthcare & Senior Housing',
    shortName: 'Healthcare',
    tagline: 'Nurse call, fire alarm, and life safety for hospitals, ALFs, and SNFs.',
    summary:
      'UL 1069 nurse call alongside fire alarm, mass notification, and ITM for healthcare environments.',
    overview: [
      'Healthcare buildings have some of the most demanding life safety requirements anywhere — and the residents who depend on them deserve nothing less. Palmetto serves hospitals, assisted living, memory care, and skilled nursing with nurse call, fire alarm, mass notification, and access control under one roof.',
      'Every install is planned with patient impact in mind, and every ITM visit is documented to The Joint Commission / CMS standards your facility expects.',
    ],
    applicableServices: [
      'fire-alarm-systems',
      'mass-notification-systems',
      'nurse-call-systems',
      'area-of-rescue-systems',
      'monitoring-services',
      'access-control-security-integration',
      'design-installation-lifecycle-support',
      'testing-inspections',
    ],
    considerations: [
      'NFPA 99 healthcare facilities',
      'UL 1069 nurse call requirements',
      'CMS / TJC inspection documentation',
      'Patient & resident impact during work',
      'Memory care wandering protection',
    ],
    image: '/images/application-healthcare.jpg',
  },
  {
    slug: 'government-facilities',
    name: 'Government Facilities',
    shortName: 'Government',
    tagline: 'Code-compliant life safety for federal, state, and municipal buildings.',
    summary:
      'Fire alarm, mass notification, and access control for courthouses, offices, and public-sector campuses.',
    overview: [
      'Government work means working to spec — and Palmetto delivers. We design, install, and maintain fire alarm, mass notification, and access control for federal, state, and municipal facilities, including campuses with multiple buildings under a single monitoring footprint.',
      'We handle procurement requirements, security clearances where required, and documentation in the format the agency wants.',
    ],
    applicableServices: [
      'fire-alarm-systems',
      'mass-notification-systems',
      'area-of-rescue-systems',
      'monitoring-services',
      'access-control-security-integration',
      'design-installation-lifecycle-support',
      'testing-inspections',
    ],
    considerations: [
      'Spec & procurement compliance',
      'Multi-building campus monitoring',
      'Security clearance coordination',
      'After-hours testing windows',
      'Agency-specific documentation',
    ],
    image: '/images/application-government.jpg',
  },
  {
    slug: 'educational-facilities',
    name: 'Educational Facilities',
    shortName: 'Education',
    tagline: 'Mass notification, access control, and fire alarm for K-12 and higher ed.',
    summary:
      'Life safety and security integration for schools, colleges, and university campuses.',
    overview: [
      'Schools and campuses need systems that handle daily routines and rare emergencies equally well. Palmetto designs mass notification, access control, and fire alarm for K-12 districts and higher-ed institutions — with the lockdown, weather, and intercom integrations that modern schools rely on.',
      'We work around academic calendars to minimize disruption, and we deliver documentation that satisfies state education and local AHJ requirements.',
    ],
    applicableServices: [
      'fire-alarm-systems',
      'mass-notification-systems',
      'area-of-rescue-systems',
      'monitoring-services',
      'access-control-security-integration',
      'design-installation-lifecycle-support',
      'testing-inspections',
    ],
    considerations: [
      'Lockdown & shelter-in-place protocols',
      'Severe weather integration',
      'Intercom & PA integration',
      'Summer / break work windows',
      'State education compliance',
    ],
    image: '/images/application-education.jpg',
  },
  {
    slug: 'commercial-retail',
    name: 'Commercial & Retail Properties',
    shortName: 'Commercial / Retail',
    tagline: 'Full-service fire alarm and access control for stores, plazas, and commercial buildings.',
    summary:
      'Design, install, monitor, and service for shopping centers, strip malls, and standalone retail.',
    overview: [
      'Retail tenant fit-outs happen fast, and the life safety scope often lags behind the build schedule. Palmetto works directly with general contractors and landlords to keep fire alarm and access control work on the critical path.',
      'Once the system is in place, we manage annual ITM, monitoring, and access control changes so each tenant space stays compliant through every lease cycle.',
    ],
    applicableServices: [
      'fire-alarm-systems',
      'mass-notification-systems',
      'monitoring-services',
      'access-control-security-integration',
      'design-installation-lifecycle-support',
      'testing-inspections',
    ],
    considerations: [
      'Tenant fit-out coordination',
      'Landlord vs. tenant responsibility',
      'After-hours inspection scheduling',
      'AHJ submittal & turnaround',
      'Access control tenant changes',
    ],
    image: '/images/application-commercial.jpg',
  },
  {
    slug: 'restaurants-hospitality',
    name: 'Restaurants & Hospitality',
    shortName: 'Restaurants',
    tagline: 'Reliable fire alarm and monitoring for restaurants, bars, and event venues.',
    summary:
      'Code-compliant fire alarm and monitoring services for the food & beverage and hospitality industry.',
    overview: [
      'Restaurants and venues operate on tight margins and even tighter inspection cycles. Palmetto provides fire alarm install and service plus monitoring designed to keep your doors open and your AHJ happy — without surprise downtime.',
      'We schedule around service windows and document everything your insurance carrier and local fire marshal will ask for.',
    ],
    applicableServices: [
      'fire-alarm-systems',
      'monitoring-services',
      'design-installation-lifecycle-support',
      'testing-inspections',
    ],
    considerations: [
      'Off-hours service scheduling',
      'Inspection documentation for insurance',
      'Operating during install',
      'Coordination with kitchen suppression',
      'Multi-location reporting',
    ],
    image: '/images/application-restaurant.jpg',
  },
]

export function getApplicationBySlug(slug: string): Application | undefined {
  return applications.find((a) => a.slug === slug)
}
