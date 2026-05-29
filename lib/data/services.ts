// A service may either be "fully written" (rich content from the client copy
// doc) or a "placeholder" awaiting detailed copy. The detail page template
// renders a complete layout for fully-written services and a minimal hero +
// CTA for placeholders.

export interface Section {
  heading?: string
  intro?: string
  paragraphs?: string[]
  bullets?: string[]
}

export interface Service {
  slug: string
  name: string
  shortName: string
  tagline: string
  summary: string
  heroBody?: string
  servicesSection?: Section // "Our [X] Services" block
  whyMattersSection?: Section // "Why [X] Matter"
  approachSection?: Section // "The Palmetto Fire Approach"
  technologySection?: Section // "Experience and Technology You Can Trust"
  whoWeServeSection?: Section // "Who We Serve"
  closingHeading?: string
  closingText?: string
  image: string
  isPlaceholder?: boolean
}

export const services: Service[] = [
  {
    slug: 'fire-alarm-systems',
    name: 'Fire Alarm Systems',
    shortName: 'Fire Alarms',
    tagline: 'Reliable Design, Installation, Monitoring & Long-Term Support',
    summary:
      'Design, installation, upgrades, inspections, monitoring, and ongoing support for commercial fire alarm systems.',
    heroBody:
      'Fire alarm systems are one of the most important components of a building’s life safety infrastructure. When properly designed, installed, monitored, and maintained, they provide early detection, clear communication, and dependable protection during emergencies. Palmetto Fire Services provides complete fire alarm system solutions for commercial and institutional facilities throughout Myrtle Beach and surrounding communities. Our systems are designed to support code compliance, occupant safety, and long-term reliability.',
    servicesSection: {
      heading: 'Our Fire Alarm Services',
      intro:
        'Palmetto Fire Services supports fire alarm systems from initial design through ongoing inspections, monitoring, and long-term system support, including:',
      bullets: [
        'System design and engineering',
        'Installation for new construction and existing facilities',
        'Inspections and testing',
        'Service, troubleshooting, and repairs',
        'System upgrades and modifications',
        'UL listed central station monitoring',
        'ADA upgrades and elevator recall solutions',
        'Support for advanced EST fire alarm systems and related technologies',
      ],
      paragraphs: [
        'Our team works closely with property owners, facility managers, contractors, and authorities having jurisdiction to help ensure systems meet applicable codes, operational needs, and local requirements.',
      ],
    },
    whyMattersSection: {
      heading: 'Why Fire Alarm Systems Matter',
      paragraphs: [
        'Fire alarm systems play a critical role in protecting occupants and supporting emergency response efforts. Systems that are outdated, improperly maintained, or not routinely inspected can create unnecessary risks, compliance issues, and operational disruptions.',
        'Routine inspections, monitoring, and preventative service help:',
      ],
      bullets: [
        'Provide early detection and occupant notification',
        'Support code compliance and inspection readiness',
        'Reduce liability and operational downtime',
        'Protect people, facilities, and critical assets',
        'Keep systems functioning as intended',
        'Support emergency communication and response coordination',
      ],
    },
    approachSection: {
      heading: 'The Palmetto Fire Services Approach',
      paragraphs: [
        'At Palmetto Fire Services, fire alarm service is built around responsiveness, reliability, and accountability. We understand customers depend on these systems every day, and especially during emergencies.',
        'Our customers work with a local team that understands their facilities, their compliance requirements, and the importance of dependable system performance. When service is needed, we respond quickly, communicate clearly, and follow through until the issue is resolved.',
        'Palmetto Fire focuses on proactive system support to help customers identify and resolve issues before they become larger problems. We believe every facility deserves life safety systems that are reliable, practical, and supported by experienced professionals who stand behind their work.',
      ],
    },
    technologySection: {
      heading: 'Experience and Technology You Can Trust',
      paragraphs: [
        'As an EST Authorized Strategic Partner, Palmetto Fire Services works with advanced fire alarm and emergency communication technologies trusted across commercial, healthcare, hospitality, government, and educational environments.',
        'Our team supports a wide range of fire alarm systems and technologies, including:',
      ],
      bullets: [
        'Edwards EST fire alarm systems',
        'Mass notification systems',
        'Voice evacuation systems',
        'Central station monitoring services',
        'Integrated emergency communication technologies',
        'ADA and code-compliance upgrades',
      ],
    },
    whoWeServeSection: {
      heading: 'Who We Serve',
      bullets: [
        'Commercial & Retail Properties',
        'Apartment & Condo Communities',
        'Hotels & High-Rise Properties',
        'Healthcare & Senior Housing Facilities',
        'Government Buildings',
        'Educational Facilities',
        'Restaurants & Hospitality Environments',
      ],
      paragraphs: [
        'Whether you manage a single property or multiple facilities, Palmetto Fire Services provides dependable fire alarm solutions tailored to your operational and life safety needs.',
      ],
    },
    closingHeading: 'Let’s Keep Your System Ready',
    closingText:
      'If you need fire alarm system design, installation, inspections, monitoring, upgrades, or ongoing service support, contact Palmetto Fire Services today.',
    image: '/images/service-fire-alarm.jpg',
  },
  {
    slug: 'mass-notification-systems',
    name: 'Mass Notification Systems',
    shortName: 'Mass Notification',
    tagline: 'Reliable Emergency Communication When Every Second Matters',
    summary:
      'Emergency communication systems designed to quickly distribute critical information during emergencies and facility-wide events.',
    heroBody:
      'Mass notification systems play a critical role in protecting occupants during emergencies by delivering clear, immediate communication across facilities and campuses. Whether responding to fire events, severe weather, security threats, or other emergencies, dependable communication systems help people respond quickly and safely. Palmetto Fire Services provides mass notification system design, installation, integration, and ongoing support for commercial and institutional facilities throughout Myrtle Beach and surrounding communities.',
    servicesSection: {
      heading: 'Our Mass Notification Services',
      intro:
        'Palmetto Fire supports mass notification systems from initial planning through long-term operation and maintenance, including:',
      bullets: [
        'System design and engineering',
        'New system installation',
        'Integration with fire alarm and emergency communication systems',
        'Voice evacuation systems',
        'Speaker and paging systems',
        'Emergency communication upgrades',
        'Inspections and testing',
        'System service and troubleshooting',
        'Preventative maintenance and ongoing support',
        'Code-compliant emergency communication solutions',
      ],
      paragraphs: [
        'Our team works closely with facility owners, property managers, contractors, and authorities having jurisdiction to help ensure systems meet operational needs and applicable life safety requirements.',
      ],
    },
    whyMattersSection: {
      heading: 'Why Mass Notification Systems Matter',
      paragraphs: [
        'During emergencies, communication is critical. Mass notification systems help facilities quickly deliver important instructions and information to building occupants, helping improve response times and support safer evacuations or shelter procedures.',
        'Modern emergency communication systems help facilities:',
      ],
      bullets: [
        'Provide clear emergency instructions',
        'Improve occupant awareness during emergencies',
        'Support coordinated evacuation procedures',
        'Enhance communication during severe weather or security events',
        'Support code compliance and emergency preparedness efforts',
        'Reduce confusion during critical situations',
      ],
    },
    approachSection: {
      heading: 'The Palmetto Fire Approach',
      paragraphs: [
        'At Palmetto Fire, we understand emergency communication systems must be dependable, practical, and easy to operate during high-pressure situations.',
        'Our team focuses on designing systems that work reliably while remaining user-friendly for facility personnel and first responders. We take the time to understand each facility’s layout, operational needs, and communication requirements to help deliver solutions that perform when they are needed most.',
        'Customers rely on Palmetto Fire because we provide responsive service, experienced support, and long-term accountability behind every system we install and maintain.',
      ],
    },
    technologySection: {
      heading: 'Experience and Technology You Can Trust',
      paragraphs: [
        'As an EST Authorized Strategic Partner, Palmetto Fire Services works with advanced emergency communication and life safety technologies trusted across commercial, healthcare, hospitality, education, and government environments.',
        'Our team supports:',
      ],
      bullets: [
        'EST fire alarm and mass notification systems',
        'Voice evacuation systems',
        'Integrated emergency communication technologies',
        'Area-wide occupant notification systems',
        'Emergency paging and communication solutions',
        'Integrated life safety technologies',
      ],
    },
    whoWeServeSection: {
      heading: 'Who We Serve',
      bullets: [
        'Commercial & Retail Properties',
        'Apartment & Condo Communities',
        'Hotels & High-Rise Properties',
        'Healthcare & Senior Housing Facilities',
        'Government Buildings',
        'Educational Facilities',
        'Restaurants & Hospitality Environments',
      ],
      paragraphs: [
        'Whether you manage a single facility or a large campus environment, Palmetto Fire Services provides dependable emergency communication solutions tailored to your facility’s needs.',
      ],
    },
    closingHeading: 'Let’s Improve Emergency Communication at Your Facility',
    closingText:
      'If you need mass notification system design, installation, inspections, upgrades, or ongoing support, contact Palmetto Fire Services today.',
    image: '/images/service-mass-notification.jpg',
  },
  {
    slug: 'nurse-call-systems',
    name: 'Nurse Call Systems',
    shortName: 'Nurse Call',
    tagline: 'Reliable Communication Systems for Healthcare & Senior Living Facilities',
    summary:
      'Reliable communication systems that support faster response times and improved patient care environments.',
    heroBody:
      'Nurse call systems play a critical role in patient care, staff communication, and occupant safety within healthcare and senior living environments. Reliable systems help improve response times, support staff efficiency, and provide patients and residents with confidence that assistance is always within reach. Palmetto Fire Services provides nurse call system design, installation, integration, and ongoing support for healthcare, senior housing, and assisted living facilities throughout Myrtle Beach and surrounding communities.',
    servicesSection: {
      heading: 'Our Nurse Call Services',
      intro:
        'Palmetto Fire supports nurse call systems from initial planning through long-term service and support, including:',
      bullets: [
        'System design and engineering',
        'New system installation',
        'System upgrades and expansions',
        'Integration with life safety and communication systems',
        'Patient and resident communication systems',
        'Inspections and testing',
        'System troubleshooting and repairs',
        'Preventative maintenance',
        'Ongoing service and technical support',
        'Technology integration and modernization',
      ],
      paragraphs: [
        'Our team works closely with facility administrators, contractors, and healthcare personnel to help ensure systems are dependable, user-friendly, and aligned with operational needs.',
      ],
    },
    whyMattersSection: {
      heading: 'Why Nurse Call Systems Matter',
      paragraphs: [
        'In healthcare and senior living environments, communication systems directly impact response times, patient experience, staff coordination, and occupant safety.',
        'Modern nurse call systems help facilities:',
      ],
      bullets: [
        'Improve communication between patients and staff',
        'Support faster response times',
        'Enhance resident and patient safety',
        'Improve staff workflow and efficiency',
        'Reduce communication delays',
        'Support long-term operational reliability',
      ],
    },
    approachSection: {
      heading: 'The Palmetto Fire Approach',
      paragraphs: [
        'At Palmetto Fire, we understand nurse call systems are mission-critical communication tools that healthcare teams rely on every day.',
        'Our approach focuses on reliability, ease of use, and long-term system performance. We work closely with facilities to understand their operational requirements and provide solutions that support both staff efficiency and occupant care.',
        'Customers trust Palmetto Fire because we provide responsive local service, experienced support, and long-term accountability behind every system we install and maintain.',
      ],
    },
    technologySection: {
      heading: 'Experience and Technology You Can Trust',
      paragraphs: [
        'Palmetto Fire works with trusted manufacturers and technologies designed specifically for healthcare and senior living environments.',
        'Our team supports:',
      ],
      bullets: [
        'Telecor nurse call systems',
        'Integrated communication technologies',
        'Emergency communication systems',
        'Life safety system integration',
        'Facility-wide communication solutions',
        'Monitoring and support services',
      ],
    },
    whoWeServeSection: {
      heading: 'Who We Serve',
      bullets: [
        'Healthcare Facilities',
        'Hospitals & Medical Offices',
        'Senior Living Communities',
        'Assisted Living Facilities',
        'Rehabilitation Centers',
        'Long-Term Care Facilities',
        'Government & Institutional Healthcare Environments',
      ],
      paragraphs: [
        'Whether you operate a single facility or manage multiple healthcare properties, Palmetto Fire Services provides dependable nurse call solutions tailored to your operational and communication needs.',
      ],
    },
    closingHeading: 'Let’s Support Better Communication and Care',
    closingText:
      'If you need nurse call system design, installation, upgrades, inspections, or ongoing support, contact Palmetto Fire Services today.',
    image: '/images/service-nurse-call.jpg',
  },
  {
    slug: 'area-of-rescue-systems',
    name: 'Area of Rescue Systems',
    shortName: 'Area of Rescue',
    tagline: '',
    summary:
      'Code-compliant emergency communication solutions that support occupant safety and evacuation procedures.',
    image: '/images/service-area-of-rescue.jpg',
    isPlaceholder: true,
  },
  {
    slug: 'monitoring-testing-inspections',
    name: 'Monitoring, Testing & Inspections',
    shortName: 'Monitoring & Inspections',
    tagline: '',
    summary:
      'UL listed central station monitoring, testing, preventative maintenance, and NFPA-focused inspections.',
    image: '/images/service-monitoring.jpg',
    isPlaceholder: true,
  },
  {
    slug: 'access-control-security-integration',
    name: 'Access Control & Security Integration',
    shortName: 'Access Control',
    tagline: '',
    summary:
      'Integrated access control, security, and digital imaging systems designed to improve visibility and facility management.',
    image: '/images/service-access-control.jpg',
    isPlaceholder: true,
  },
  {
    slug: 'design-installation-services',
    name: 'Design & Installation Services',
    shortName: 'Design & Install',
    tagline: '',
    summary:
      'Advanced system design, ADA upgrades, elevator recall solutions, and technology integration services.',
    image: '/images/service-design-install.jpg',
    isPlaceholder: true,
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export const activeServices = services
