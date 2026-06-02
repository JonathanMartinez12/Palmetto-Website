// Application sections render heading → intro paragraphs → bullets (either
// free-form strings or service slugs that resolve to internal links)
// → closing paragraphs.

export interface ApplicationSection {
  heading?: string
  intro?: string[]
  // serviceLinks resolves slugs to the service detail pages so the support
  // grid doubles as cross-navigation back into the Services section.
  serviceLinks?: string[]
  bullets?: string[]
  closing?: string[]
}

export interface Application {
  slug: string
  name: string
  shortName: string
  tagline?: string
  summary: string
  heroBody?: string[]
  supportSection?: ApplicationSection
  advantageSection?: ApplicationSection
  closingHeading?: string
  closingText?: string
  image: string
}

const standardServiceLinks = [
  'fire-alarm-systems',
  'mass-notification-systems',
  'monitoring-services',
  'testing-inspections',
  'area-of-rescue-systems',
  'access-control-security-integration',
  'design-installation-lifecycle-support',
]

export const applications: Application[] = [
  {
    slug: 'apartment-condo-communities',
    name: 'Apartment & Condo Communities',
    shortName: 'Apartments & Condos',
    tagline: 'Life Safety Solutions for Apartment & Condo Communities',
    summary:
      'Fire alarm, monitoring, and access control solutions for apartments, condos, and multi-family communities.',
    heroBody: [
      'Apartment and condo properties require dependable life safety systems that help protect residents, support code compliance, and minimize disruption to daily operations. From inspections and monitoring to emergency communication and ongoing service, property managers need responsive partners they can rely on.',
      'Palmetto Fire Services supports apartment and condo communities throughout Myrtle Beach and surrounding areas with integrated fire alarm and life safety solutions designed for multi-family environments.',
    ],
    supportSection: {
      heading: 'Supporting Safety, Compliance & Reliable Communication',
      intro: [
        'Palmetto Fire works closely with property managers, ownership groups, and facility teams to help ensure life safety systems remain compliant, functional, and ready when needed.',
      ],
      serviceLinks: standardServiceLinks,
      closing: [
        'We understand the importance of inspection readiness, resident communication, code compliance, and responsive service within occupied residential properties.',
      ],
    },
    advantageSection: {
      heading: 'The Palmetto Fire Advantage for Apartment & Condo Communities',
      bullets: [
        'Responsive local service and support',
        'Dependable monitoring and inspection scheduling',
        'Clear communication and documentation',
        'Support for individual properties and multi-property portfolios',
        'Integrated life safety and emergency communication solutions',
        'Long-term service relationships built on reliability',
      ],
      closing: [
        'Palmetto Fire helps apartment and condo communities maintain dependable life safety protection while supporting the operational needs of property managers and ownership teams.',
      ],
    },
    closingHeading: 'Let’s Help Protect Your Community',
    closingText:
      'If you manage an apartment or condo community, contact Palmetto Fire today for dependable life safety system support and service.',
    image: '/images/application-multifamily.jpg',
  },
  {
    slug: 'hotels-high-rise',
    name: 'Hotels & High-Rise Properties',
    shortName: 'Hotels & High-Rise',
    tagline: 'Life Safety Solutions for Hotels & High-Rise Properties',
    summary:
      'Voice evacuation, area of rescue, and integrated life safety for hospitality and multi-story properties.',
    heroBody: [
      'Hotels and high-rise properties require dependable life safety systems that support occupant safety, emergency communication, and code compliance in complex, high-occupancy environments. From guest safety and evacuation support to inspections and monitoring, these facilities depend on systems that perform reliably every day.',
      'Palmetto Fire Services supports hotels and high-rise properties throughout Myrtle Beach and surrounding communities with integrated fire alarm and life safety solutions tailored to hospitality and multi-story environments.',
    ],
    supportSection: {
      heading: 'Supporting Safety, Compliance & Guest Confidence',
      intro: [
        'Palmetto Fire works closely with property owners, facility managers, and hospitality teams to help ensure life safety systems remain compliant, operational, and ready when needed.',
      ],
      serviceLinks: standardServiceLinks,
      closing: [
        'We understand the importance of minimizing disruption to guests and operations while maintaining dependable protection and inspection readiness across occupied properties.',
      ],
    },
    advantageSection: {
      heading: 'The Palmetto Fire Advantage for Hotels & High-Rise Properties',
      bullets: [
        'Responsive local service and support',
        'Dependable monitoring and inspection scheduling',
        'Experience working in occupied facilities',
        'Clear communication and documentation',
        'Integrated emergency communication solutions',
        'Long-term system support and lifecycle planning',
      ],
      closing: [
        'Palmetto Fire helps hotels and high-rise facilities maintain reliable life safety protection while supporting the operational demands of hospitality and multi-story properties.',
      ],
    },
    closingHeading: 'Let’s Help Protect Your Property and Guests',
    closingText:
      'If you manage a hotel or high-rise property, contact Palmetto Fire today for dependable life safety system support and service.',
    image: '/images/application-hotel.jpg',
  },
  {
    slug: 'healthcare-senior-housing',
    name: 'Healthcare & Senior Housing',
    shortName: 'Healthcare',
    tagline: 'Life Safety Solutions for Healthcare & Senior Housing Facilities',
    summary:
      'Nurse call, fire alarm, and life safety solutions for hospitals, assisted living, and senior housing.',
    heroBody: [
      'Healthcare and senior housing facilities require dependable life safety systems that support patient care, resident safety, emergency communication, and regulatory compliance. These environments depend on systems that function reliably while supporting staff efficiency and occupant well-being.',
      'Palmetto Fire Services supports healthcare and senior housing facilities throughout Myrtle Beach and surrounding communities with integrated fire alarm and life safety solutions tailored to healthcare and care-focused environments.',
    ],
    supportSection: {
      heading: 'Supporting Safety, Communication & Compliance',
      intro: [
        'Palmetto Fire works closely with facility administrators, maintenance teams, and healthcare professionals to help ensure life safety systems remain compliant, operational, and dependable for patients, residents, staff, and visitors.',
      ],
      serviceLinks: [
        'fire-alarm-systems',
        'mass-notification-systems',
        'nurse-call-systems',
        'monitoring-services',
        'testing-inspections',
        'area-of-rescue-systems',
        'access-control-security-integration',
        'design-installation-lifecycle-support',
      ],
      closing: [
        'We understand the importance of minimizing disruption within occupied care environments while maintaining dependable communication systems, inspection readiness, and long-term system reliability.',
      ],
    },
    advantageSection: {
      heading: 'The Palmetto Fire Advantage for Healthcare & Senior Housing Facilities',
      bullets: [
        'Responsive local service and support',
        'Dependable inspection and maintenance scheduling',
        'Integrated communication and life safety solutions',
        'Experience working in occupied healthcare environments',
        'Clear documentation and compliance support',
        'Long-term system planning and lifecycle support',
      ],
      closing: [
        'Palmetto Fire helps healthcare and senior housing facilities maintain dependable protection, communication, and compliance while supporting the daily needs of patients, residents, caregivers, and staff.',
      ],
    },
    closingHeading: 'Let’s Help Protect Your Facility and Residents',
    closingText:
      'If you manage a healthcare or senior housing facility, contact Palmetto Fire today for dependable life safety system support and service.',
    image: '/images/application-healthcare.jpg',
  },
  {
    slug: 'government-facilities',
    name: 'Government Facilities',
    shortName: 'Government',
    tagline: 'Life Safety Solutions for Government Facilities',
    summary:
      'Fire alarm, mass notification, and access control for federal, state, and municipal facilities.',
    heroBody: [
      'Government facilities require dependable life safety systems that support occupant safety, emergency preparedness, security, and regulatory compliance. From municipal buildings and public safety facilities to administrative offices and community spaces, these environments depend on reliable systems and responsive support.',
      'Palmetto Fire Services supports government facilities throughout Myrtle Beach and surrounding communities with integrated fire alarm and life safety solutions designed for public sector environments.',
    ],
    supportSection: {
      heading: 'Supporting Safety, Compliance & Emergency Preparedness',
      intro: [
        'Palmetto Fire works closely with facility managers, municipal leaders, and public agencies to help ensure life safety systems remain compliant, operational, and ready when needed.',
      ],
      serviceLinks: standardServiceLinks,
      closing: [
        'We understand the importance of dependable communication systems, inspection readiness, security integration, and responsive support within government and public-use facilities.',
      ],
    },
    advantageSection: {
      heading: 'The Palmetto Fire Advantage for Government Facilities',
      bullets: [
        'Responsive local service and support',
        'Dependable inspection and maintenance scheduling',
        'Integrated life safety and security solutions',
        'Clear communication and documentation',
        'Experience supporting compliance-focused environments',
        'Long-term system planning and lifecycle support',
      ],
      closing: [
        'Palmetto Fire helps government facilities maintain reliable protection, communication, and operational readiness while supporting the needs of employees, visitors, and the communities they serve.',
      ],
    },
    closingHeading: 'Let’s Help Protect Your Facility and Community',
    closingText:
      'If you manage a government facility, contact Palmetto Fire today for dependable life safety system support and service.',
    image: '/images/application-government.jpg',
  },
  {
    slug: 'commercial-retail',
    name: 'Commercial & Retail Properties',
    shortName: 'Commercial / Retail',
    tagline: 'Life Safety Solutions for Commercial & Retail Properties',
    summary:
      'Life safety and security integration for stores, plazas, and standalone commercial buildings.',
    heroBody: [
      'Commercial and retail properties require dependable life safety systems that support occupant safety, business continuity, and code compliance while minimizing disruption to daily operations. From shopping centers and office complexes to retail stores and mixed-use developments, these facilities depend on systems that function reliably every day.',
      'Palmetto Fire Services supports commercial and retail properties throughout Myrtle Beach and surrounding communities with integrated fire alarm and life safety solutions tailored to commercial environments.',
    ],
    supportSection: {
      heading: 'Supporting Safety, Compliance & Business Continuity',
      intro: [
        'Palmetto Fire works closely with property owners, facility managers, tenants, and operations teams to help ensure life safety systems remain compliant, operational, and ready when needed.',
      ],
      serviceLinks: standardServiceLinks,
      closing: [
        'We understand the importance of responsive service, inspection readiness, tenant coordination, and dependable communication systems within active commercial properties.',
      ],
    },
    advantageSection: {
      heading: 'The Palmetto Fire Advantage for Commercial & Retail Properties',
      bullets: [
        'Responsive local service and support',
        'Dependable inspection and maintenance scheduling',
        'Integrated life safety and security solutions',
        'Clear communication and documentation',
        'Support for single-site and multi-property portfolios',
        'Long-term system planning and lifecycle support',
      ],
      closing: [
        'Palmetto Fire helps commercial and retail properties maintain dependable life safety protection while supporting day-to-day operations and long-term facility management goals.',
      ],
    },
    closingHeading: 'Let’s Help Protect Your Property and Operations',
    closingText:
      'If you manage a commercial or retail property, contact Palmetto Fire today for dependable life safety system support and service.',
    image: '/images/application-commercial.jpg',
  },
  {
    slug: 'educational-facilities',
    name: 'Educational Facilities',
    shortName: 'Education',
    tagline: 'Life Safety Solutions for Educational Facilities',
    summary:
      'Mass notification, access control, and fire alarm for K-12 districts and higher-education campuses.',
    heroBody: [
      'Educational facilities require dependable life safety systems that help protect students, faculty, staff, and visitors while supporting emergency preparedness and code compliance. Schools, campuses, and educational environments depend on reliable communication systems and responsive support to help maintain safe learning environments.',
      'Palmetto Fire Services supports educational facilities throughout Myrtle Beach and surrounding communities with integrated fire alarm and life safety solutions designed for schools and campus environments.',
    ],
    supportSection: {
      heading: 'Supporting Safety, Communication & Campus Preparedness',
      intro: [
        'Palmetto Fire works closely with administrators, facility managers, and campus teams to help ensure life safety systems remain compliant, operational, and ready when needed.',
      ],
      serviceLinks: standardServiceLinks,
      closing: [
        'We understand the importance of dependable emergency communication, inspection readiness, and minimizing disruption within active educational environments.',
      ],
    },
    advantageSection: {
      heading: 'The Palmetto Fire Advantage for Educational Facilities',
      bullets: [
        'Responsive local service and support',
        'Dependable inspection and maintenance scheduling',
        'Integrated emergency communication solutions',
        'Experience supporting occupied campus environments',
        'Clear documentation and compliance support',
        'Long-term system planning and lifecycle support',
      ],
      closing: [
        'Palmetto Fire helps educational facilities maintain dependable life safety protection while supporting the operational and communication needs of schools, campuses, and educational organizations.',
      ],
    },
    closingHeading: 'Let’s Help Protect Your Students, Staff & Campus',
    closingText:
      'If you manage an educational facility, contact Palmetto Fire today for dependable life safety system support and service.',
    image: '/images/application-education.jpg',
  },
  {
    slug: 'restaurants-hospitality',
    name: 'Restaurants & Hospitality',
    shortName: 'Restaurants',
    tagline: 'Life Safety Solutions for Restaurants & Hospitality Environments',
    summary:
      'Fire alarm and monitoring services for restaurants, bars, and hospitality environments.',
    heroBody: [
      'Restaurants and hospitality properties require dependable life safety systems that support guest safety, emergency communication, and code compliance while minimizing disruption to daily operations. These environments depend on reliable systems and responsive support to help maintain safe, welcoming experiences for guests and staff.',
      'Palmetto Fire Services supports restaurants and hospitality properties throughout Myrtle Beach and surrounding communities with integrated fire alarm and life safety solutions tailored to hospitality-focused environments.',
    ],
    supportSection: {
      heading: 'Supporting Safety, Compliance & Guest Experience',
      intro: [
        'Palmetto Fire works closely with property owners, managers, and operations teams to help ensure life safety systems remain compliant, operational, and ready when needed.',
      ],
      serviceLinks: standardServiceLinks,
      closing: [
        'We understand the importance of responsive service, inspection readiness, emergency communication, and minimizing disruption within active restaurants, hotels, entertainment venues, and hospitality environments.',
      ],
    },
    advantageSection: {
      heading: 'The Palmetto Fire Advantage for Restaurants & Hospitality Properties',
      bullets: [
        'Responsive local service and support',
        'Dependable inspection and maintenance scheduling',
        'Integrated life safety and communication solutions',
        'Experience working in occupied hospitality environments',
        'Clear communication and documentation',
        'Long-term system planning and lifecycle support',
      ],
      closing: [
        'Palmetto Fire helps restaurants and hospitality properties maintain dependable life safety protection while supporting guest experience, operational continuity, and long-term facility management goals.',
      ],
    },
    closingHeading: 'Let’s Help Protect Your Guests, Staff & Property',
    closingText:
      'If you manage a restaurant or hospitality property, contact Palmetto Fire today for dependable life safety system support and service.',
    image: '/images/application-restaurant.jpg',
  },
]

export function getApplicationBySlug(slug: string): Application | undefined {
  return applications.find((a) => a.slug === slug)
}
