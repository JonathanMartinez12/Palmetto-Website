export interface Service {
  slug: string
  name: string
  shortName: string
  tagline: string
  summary: string
  overview: string[]
  features: string[]
  whoItsFor: string[]
  compliance?: string
  image: string
  comingSoon?: boolean
}

export const services: Service[] = [
  {
    slug: 'fire-alarm-systems',
    name: 'Fire Alarm Systems',
    shortName: 'Fire Alarms',
    tagline: 'Detection, notification, and control engineered and serviced to NFPA 72.',
    summary:
      'Addressable and conventional fire alarm systems — designed, installed, tested, and serviced end to end.',
    overview: [
      'Palmetto Fire Services delivers full life-cycle fire alarm work — from initial design and AHJ submittal through device installation, acceptance testing, and ongoing maintenance. We work across major manufacturers so your system fits your building, not the other way around.',
      'Every system we touch is commissioned against NFPA 72 and documented for easy annual testing and inspection.',
    ],
    features: [
      'Addressable & conventional design',
      'Smoke, heat & duct detection',
      'Voice evacuation integration',
      'Acceptance & annual testing',
      'System upgrades & retrofits',
      '24/7 monitoring integration',
    ],
    whoItsFor: [
      'apartment-condo-communities',
      'hotels-high-rise',
      'healthcare-senior-housing',
      'government-facilities',
      'educational-facilities',
      'commercial-retail',
      'restaurants-hospitality',
    ],
    compliance: 'NFPA 72',
    image: '/images/service-fire-alarm.jpg',
  },
  {
    slug: 'mass-notification-systems',
    name: 'Mass Notification Systems',
    shortName: 'Mass Notification',
    tagline: 'Targeted, multi-channel emergency communication for large occupancies.',
    summary:
      'Voice evacuation and emergency communication systems that reach the right people, in the right zone, at the right time.',
    overview: [
      'Mass notification goes beyond traditional fire alarm — delivering targeted messages by zone, integrating with severe weather alerts, lockdown protocols, and other emergency scenarios. Palmetto designs and installs ECS / MNS systems to meet NFPA 72 Chapter 24 and campus-specific requirements.',
      'We coordinate closely with facility safety teams and local AHJs so the system you install today can be reconfigured as protocols evolve.',
    ],
    features: [
      'Voice evacuation & paging',
      'Zoned & targeted messaging',
      'Severe weather integration',
      'Lockdown & shelter-in-place protocols',
      'Campus-wide notification',
      'Annual ITM',
    ],
    whoItsFor: [
      'hotels-high-rise',
      'healthcare-senior-housing',
      'government-facilities',
      'educational-facilities',
      'commercial-retail',
    ],
    compliance: 'NFPA 72 Chapter 24',
    image: '/images/service-mass-notification.jpg',
  },
  {
    slug: 'nurse-call-systems',
    name: 'Nurse Call Systems',
    shortName: 'Nurse Call',
    tagline: 'Reliable resident-to-staff communication for healthcare and senior housing.',
    summary:
      'UL 1069-listed nurse call systems for hospitals, assisted living, memory care, and skilled nursing.',
    overview: [
      'Nurse call is mission-critical infrastructure. Palmetto designs and installs UL 1069-listed systems that connect residents and patients to caregivers reliably — with the audit trail and staff workflow integrations modern facilities require.',
      'We service all major platforms and can upgrade aging systems incrementally so a single floor or wing can be modernized without taking the whole facility offline.',
    ],
    features: [
      'UL 1069-listed equipment',
      'Wired & wireless options',
      'Staff workflow integration',
      'Reporting & audit trail',
      'Phased upgrade paths',
      'Annual testing & service',
    ],
    whoItsFor: ['healthcare-senior-housing'],
    compliance: 'UL 1069, UL 2560',
    image: '/images/service-nurse-call.jpg',
  },
  {
    slug: 'area-of-rescue-systems',
    name: 'Area of Rescue Systems',
    shortName: 'Area of Rescue',
    tagline: 'Two-way emergency communication for accessible egress areas.',
    summary:
      'IBC and ADA-compliant area of rescue assistance systems for multi-story and public buildings.',
    overview: [
      'Area of rescue assistance systems are required in many multi-story and accessible buildings — providing two-way communication between people awaiting evacuation and emergency responders. Palmetto installs and services systems that meet IBC, ADA, and local AHJ requirements.',
      'We handle the design, head-end equipment, station hardware, and the annual testing required to keep the system inspection-ready.',
    ],
    features: [
      'Hands-free two-way communication',
      'Stairwell & elevator lobby stations',
      'ADA-compliant signage',
      'Central monitoring console',
      'Battery backup',
      'Annual testing & inspection',
    ],
    whoItsFor: [
      'hotels-high-rise',
      'government-facilities',
      'educational-facilities',
      'healthcare-senior-housing',
    ],
    compliance: 'IBC, ADA, NFPA 72',
    image: '/images/service-area-of-rescue.jpg',
  },
  {
    slug: 'monitoring-services',
    name: 'Monitoring Services',
    shortName: 'Monitoring',
    tagline: 'UL-listed central station monitoring with dispatch to your local AHJ.',
    summary:
      'Fire alarm and life safety signal monitoring on cellular, IP, and dual-path communicators.',
    overview: [
      'Palmetto monitors fire alarm, sprinkler supervisory, and security signals through a UL-listed central station — with redundant paths and rapid dispatch to the AHJ of record. Customers get a portal for real-time signal history, monthly reports, and contact roster management.',
      'Pair monitoring with our recurring inspection plan and your building stays inspection-ready year round, on one account and one invoice.',
    ],
    features: [
      'UL-listed central station',
      'Cellular, IP & dual-path communicators',
      'Signal history & reporting portal',
      'AHJ dispatch coordination',
      'Contact roster management',
      'Bundled with ITM available',
    ],
    whoItsFor: [
      'apartment-condo-communities',
      'hotels-high-rise',
      'healthcare-senior-housing',
      'government-facilities',
      'educational-facilities',
      'commercial-retail',
      'restaurants-hospitality',
    ],
    compliance: 'UL 827, NFPA 72',
    image: '/images/service-monitoring.jpg',
  },
  {
    slug: 'design-installation-lifecycle-support',
    name: 'Design, Installation & Lifecycle Support',
    shortName: 'Design & Install',
    tagline: 'Engineering, install, and long-term system support — handled in-house.',
    summary:
      'New construction, retrofit, and lifecycle management for every life safety system we offer.',
    overview: [
      'Palmetto provides the engineering and installation horsepower behind every system we sell. Our designers produce stamped drawings and battery calcs ready for AHJ submittal, and our field crews install with a focus on inspectable, maintainable work.',
      'Once a system is live, we stay with it — managing software updates, code-required upgrades, and end-of-life replacement planning so building owners are never caught off guard.',
    ],
    features: [
      'Engineered design & stamped drawings',
      'AHJ submittal & coordination',
      'New construction installation',
      'Retrofit & system upgrade',
      'Lifecycle & end-of-life planning',
      'Single point of accountability',
    ],
    whoItsFor: [
      'apartment-condo-communities',
      'hotels-high-rise',
      'healthcare-senior-housing',
      'government-facilities',
      'educational-facilities',
      'commercial-retail',
      'restaurants-hospitality',
    ],
    compliance: 'NFPA 72, IBC, NEC',
    image: '/images/service-design-install.jpg',
  },
  {
    slug: 'access-control-security-integration',
    name: 'Access Control & Security Integration',
    shortName: 'Access Control',
    tagline: 'Card access, intrusion, and video integrated with fire and life safety.',
    summary:
      'Unified access control, intrusion detection, and CCTV that work alongside your fire alarm system.',
    overview: [
      'Modern life safety doesn’t stop at the fire alarm panel. Palmetto designs and installs access control, intrusion detection, and video surveillance systems that integrate cleanly with fire alarm and mass notification — so doors release on alarm, video clips are tagged to events, and a single dashboard shows the whole building.',
      'We work with leading platforms and integrate with existing systems wherever possible to avoid forklift upgrades.',
    ],
    features: [
      'Card & mobile credential access',
      'Intrusion detection',
      'IP video surveillance',
      'Fire alarm & MNS integration',
      'Visitor management',
      'Hosted & on-prem options',
    ],
    whoItsFor: [
      'apartment-condo-communities',
      'hotels-high-rise',
      'healthcare-senior-housing',
      'government-facilities',
      'educational-facilities',
      'commercial-retail',
    ],
    compliance: 'UL 294, UL 1076',
    image: '/images/service-access-control.jpg',
  },
  {
    slug: 'testing-inspections',
    name: 'Testing & Inspections',
    shortName: 'Testing & Inspection',
    tagline: 'NFPA-compliant inspection, testing, and maintenance on every system we touch.',
    summary:
      'Annual, semi-annual, and quarterly ITM for fire alarm, nurse call, area of rescue, and access control.',
    overview: [
      'Testing and inspection is the backbone of a life safety program. Palmetto performs annual, semi-annual, and quarterly ITM on fire alarm, mass notification, nurse call, area of rescue, and access control systems — and we file documentation directly with your records so audits are painless.',
      'Customers on a Palmetto inspection plan get reminders before each visit, a portal with every report, and one number to call for any issue found in the field.',
    ],
    features: [
      'NFPA 72 annual & semi-annual testing',
      'Nurse call & area of rescue ITM',
      'Battery & device replacement',
      'Online inspection records',
      'AHJ filing on your behalf',
      'Single point of accountability',
    ],
    whoItsFor: [
      'apartment-condo-communities',
      'hotels-high-rise',
      'healthcare-senior-housing',
      'government-facilities',
      'educational-facilities',
      'commercial-retail',
      'restaurants-hospitality',
    ],
    compliance: 'NFPA 72, NFPA 25 (where applicable)',
    image: '/images/service-testing-inspection.jpg',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export const activeServices = services.filter((s) => !s.comingSoon)
export const futureServices = services.filter((s) => s.comingSoon)
