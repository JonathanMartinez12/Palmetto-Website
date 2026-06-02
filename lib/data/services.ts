// A Section block lays out content as: heading → intro paragraphs → bullets
// → closing paragraphs. Any field is optional; the detail-page template
// renders only what's present.

export interface Section {
  heading?: string
  intro?: string[]
  bullets?: string[]
  closing?: string[]
}

export interface Service {
  slug: string
  name: string
  shortName: string
  tagline: string
  summary: string
  heroBody?: string
  servicesSection?: Section
  whyMattersSection?: Section
  approachSection?: Section
  technologySection?: Section
  whoWeServeSection?: Section
  closingHeading?: string
  closingText?: string
  image: string
  isPlaceholder?: boolean
}

const standardWhoWeServe = [
  'Commercial & Retail Properties',
  'Apartment & Condo Communities',
  'Hotels & High-Rise Properties',
  'Healthcare & Senior Housing Facilities',
  'Government Buildings',
  'Educational Facilities',
  'Restaurants & Hospitality Environments',
]

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
      intro: [
        'Palmetto Fire Services supports fire alarm systems from initial design through ongoing inspections, monitoring, and long-term system support, including:',
      ],
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
      closing: [
        'Our team works closely with property owners, facility managers, contractors, and authorities having jurisdiction to help ensure systems meet applicable codes, operational needs, and local requirements.',
      ],
    },
    whyMattersSection: {
      heading: 'Why Fire Alarm Systems Matter',
      intro: [
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
      closing: [
        'Palmetto Fire focuses on proactive system support to help customers identify and resolve issues before they become larger problems.',
      ],
    },
    approachSection: {
      heading: 'The Palmetto Fire Services Approach',
      intro: [
        'At Palmetto Fire Services, fire alarm service is built around responsiveness, reliability, and accountability. We understand customers depend on these systems every day, and especially during emergencies.',
        'Our customers work with a local team that understands their facilities, their compliance requirements, and the importance of dependable system performance. When service is needed, we respond quickly, communicate clearly, and follow through until the issue is resolved.',
        'We believe every facility deserves life safety systems that are reliable, practical, and supported by experienced professionals who stand behind their work.',
      ],
    },
    technologySection: {
      heading: 'Experience and Technology You Can Trust',
      intro: [
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
      closing: [
        'Palmetto Fire combines experienced local support with trusted technologies designed for long-term reliability and performance.',
      ],
    },
    whoWeServeSection: {
      heading: 'Who We Serve',
      bullets: standardWhoWeServe,
      closing: [
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
      intro: [
        'Palmetto Fire supports mass notification systems from initial planning through long-term operation and maintenance, including:',
      ],
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
      closing: [
        'Our team works closely with facility owners, property managers, contractors, and authorities having jurisdiction to help ensure systems meet operational needs and applicable life safety requirements.',
      ],
    },
    whyMattersSection: {
      heading: 'Why Mass Notification Systems Matter',
      intro: [
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
      closing: [
        'For many facilities, mass notification systems are no longer optional. They are an important part of a comprehensive life safety strategy.',
      ],
    },
    approachSection: {
      heading: 'The Palmetto Fire Approach',
      intro: [
        'At Palmetto Fire, we understand emergency communication systems must be dependable, practical, and easy to operate during high-pressure situations.',
        'Our team focuses on designing systems that work reliably while remaining user-friendly for facility personnel and first responders. We take the time to understand each facility’s layout, operational needs, and communication requirements to help deliver solutions that perform when they are needed most.',
        'Customers rely on Palmetto Fire because we provide responsive service, experienced support, and long-term accountability behind every system we install and maintain.',
      ],
    },
    technologySection: {
      heading: 'Experience and Technology You Can Trust',
      intro: [
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
      closing: [
        'Palmetto Fire combines trusted technology with experienced local support to help facilities improve communication, preparedness, and occupant safety.',
      ],
    },
    whoWeServeSection: {
      heading: 'Who We Serve',
      bullets: standardWhoWeServe,
      closing: [
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
      intro: [
        'Palmetto Fire supports nurse call systems from initial planning through long-term service and support, including:',
      ],
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
      closing: [
        'Our team works closely with facility administrators, contractors, and healthcare personnel to help ensure systems are dependable, user-friendly, and aligned with operational needs.',
      ],
    },
    whyMattersSection: {
      heading: 'Why Nurse Call Systems Matter',
      intro: [
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
      closing: [
        'Dependable communication systems help facilities create safer, more responsive environments for patients, residents, caregivers, and staff.',
      ],
    },
    approachSection: {
      heading: 'The Palmetto Fire Approach',
      intro: [
        'At Palmetto Fire, we understand nurse call systems are mission-critical communication tools that healthcare teams rely on every day.',
        'Our approach focuses on reliability, ease of use, and long-term system performance. We work closely with facilities to understand their operational requirements and provide solutions that support both staff efficiency and occupant care.',
        'Customers trust Palmetto Fire because we provide responsive local service, experienced support, and long-term accountability behind every system we install and maintain.',
      ],
    },
    technologySection: {
      heading: 'Experience and Technology You Can Trust',
      intro: [
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
      closing: [
        'As an EST Authorized Strategic Partner, Palmetto combines advanced technology with experienced local support to help facilities maintain dependable communication systems and safe care environments.',
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
      closing: [
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
    tagline: 'Reliable Emergency Communication for Safer Evacuation Support',
    summary:
      'Code-compliant emergency communication solutions that support occupant safety and evacuation procedures.',
    heroBody:
      'Area of rescue systems provide critical emergency communication for individuals who may require assistance during building evacuations. These systems help occupants communicate with emergency personnel and first responders during fire alarms, power outages, and other emergency situations. Palmetto Fire Services provides area of rescue system design, installation, integration, inspections, and ongoing support for commercial and institutional facilities throughout Myrtle Beach and surrounding communities.',
    servicesSection: {
      heading: 'Our Area of Rescue Services',
      intro: [
        'Palmetto Fire Services supports area of rescue systems from initial planning through long-term maintenance and support, including:',
      ],
      bullets: [
        'System design and engineering',
        'New system installation',
        'Emergency communication system integration',
        'Code-compliant system upgrades',
        'ADA-related communication solutions',
        'Inspections and testing',
        'System troubleshooting and repairs',
        'Preventative maintenance',
        'Monitoring and support services',
        'Integration with fire alarm and life safety systems',
      ],
      closing: [
        'Our team works closely with facility owners, contractors, architects, and authorities having jurisdiction to help ensure systems meet applicable code requirements and operational needs.',
      ],
    },
    whyMattersSection: {
      heading: 'Why Area of Rescue Systems Matter',
      intro: [
        'During emergencies, clear communication can make a critical difference for occupants who may need evacuation assistance. Area of rescue systems help provide a safe, reliable communication point between building occupants and emergency responders.',
        'These systems help facilities:',
      ],
      bullets: [
        'Support occupant safety during evacuations',
        'Improve emergency communication capabilities',
        'Meet applicable ADA and life safety code requirements',
        'Assist first responders during emergencies',
        'Provide reliable communication during power loss or emergency events',
        'Enhance overall life safety preparedness',
      ],
      closing: [
        'For many commercial and institutional facilities, area of rescue systems are an important component of a complete life safety strategy.',
      ],
    },
    approachSection: {
      heading: 'The Palmetto Fire Approach',
      intro: [
        'At Palmetto Fire, we understand area of rescue systems must function reliably during critical situations.',
        'Our team focuses on designing and supporting systems that are dependable, easy to use, and properly integrated with the facility’s broader life safety infrastructure. We work closely with customers to help ensure systems are properly maintained, compliant, and ready when needed.',
        'Customers trust Palmetto Fire because we provide responsive service, experienced support, and accountability behind every system we install and maintain.',
      ],
    },
    technologySection: {
      heading: 'Experience and Technology You Can Trust',
      intro: [
        'Palmetto Fire works with trusted life safety and emergency communication technologies designed for commercial, healthcare, hospitality, educational, and government facilities.',
        'Our team supports:',
      ],
      bullets: [
        'Area of rescue communication systems',
        'Emergency communication technologies',
        'Integrated fire alarm and notification systems',
        'ADA-related communication solutions',
        'Voice and emergency paging systems',
        'Life safety system integration',
      ],
      closing: [
        'As an EST Authorized Strategic Partner, Palmetto combines advanced technologies with responsive local support to help facilities maintain dependable emergency communication capabilities.',
      ],
    },
    whoWeServeSection: {
      heading: 'Who We Serve',
      bullets: standardWhoWeServe,
      closing: [
        'Whether you operate a single building or manage multiple facilities, Palmetto Fire Services provides dependable area of rescue solutions tailored to your facility’s safety and compliance needs.',
      ],
    },
    closingHeading: 'Let’s Strengthen Your Life Safety Systems',
    closingText:
      'If you need area of rescue system design, installation, inspections, upgrades, or ongoing support, contact Palmetto Fire Services today.',
    image: '/images/service-area-of-rescue.jpg',
  },
  {
    slug: 'monitoring-services',
    name: 'Monitoring Services',
    shortName: 'Monitoring',
    tagline: 'Reliable 24/7 Monitoring for Critical Life Safety Systems',
    summary:
      'UL listed central station monitoring for fire alarm, emergency communication, and integrated life safety systems.',
    heroBody:
      'Life safety systems are only effective if emergency signals are received and responded to quickly. Reliable monitoring services help ensure fire alarms, emergency communication systems, and critical notifications are transmitted properly when every second matters. Palmetto Fire Services provides UL listed central station monitoring services for commercial and institutional facilities throughout Myrtle Beach and surrounding communities, helping customers maintain dependable protection and rapid emergency response support.',
    servicesSection: {
      heading: 'Our Monitoring Services',
      intro: [
        'Palmetto Fire provides monitoring support for a wide range of life safety and emergency communication systems, including:',
      ],
      bullets: [
        'UL listed central station monitoring',
        'Fire alarm monitoring',
        'Emergency communication monitoring',
        'Signal verification and notification services',
        'Monitoring for new and existing systems',
        'System connectivity support',
        'Monitoring account setup and coordination',
        'Ongoing monitoring support and troubleshooting',
        'Integrated life safety system support',
        'Responsive customer service and technical assistance',
      ],
      closing: [
        'Our team works closely with facility owners, property managers, and contractors to help ensure monitoring systems remain connected, functional, and ready to respond when needed.',
      ],
    },
    whyMattersSection: {
      heading: 'Why Monitoring Services Matter',
      intro: [
        'When a fire alarm or emergency communication system activates, immediate response is critical. Monitoring services help ensure emergency signals are transmitted properly and addressed quickly, even when facilities are unoccupied.',
        'Reliable monitoring services help facilities:',
      ],
      bullets: [
        'Support faster emergency response',
        'Provide around-the-clock system oversight',
        'Improve occupant protection',
        'Reduce risks associated with missed alarm events',
        'Support code compliance and life safety requirements',
        'Provide peace of mind for building owners and managers',
      ],
      closing: [
        'Monitoring is an essential part of maintaining a dependable life safety system and ensuring emergency communication functions as intended.',
      ],
    },
    approachSection: {
      heading: 'The Palmetto Services Approach',
      intro: [
        'At Palmetto Fire, monitoring support goes beyond simply connecting a system to a central station.',
        'We work closely with customers to help ensure systems are functioning properly, communication pathways remain reliable, and issues are addressed quickly when they arise. Our team understands the importance of dependable emergency communication and responsive support.',
        'Customers trust Palmetto Fire because we provide local accountability, experienced technical support, and long-term service relationships built around responsiveness and reliability.',
      ],
    },
    technologySection: {
      heading: 'Experience and Technology You Can Trust',
      intro: [
        'Palmetto Fire supports monitoring solutions for a wide range of commercial and institutional life safety systems.',
        'Our team provides support for:',
      ],
      bullets: [
        'Fire alarm monitoring systems',
        'Mass notification systems',
        'Integrated emergency communication technologies',
        'Commercial life safety systems',
        'UL listed central station monitoring services',
        'EST fire alarm and notification systems',
      ],
      closing: [
        'As an EST Authorized Strategic Partner, Palmetto combines advanced life safety technologies with dependable monitoring support and responsive local service.',
      ],
    },
    whoWeServeSection: {
      heading: 'Who We Serve',
      bullets: standardWhoWeServe,
      closing: [
        'Whether you manage a single facility or multiple properties, Palmetto Fire provides dependable monitoring services tailored to your operational and life safety needs.',
      ],
    },
    closingHeading: 'Let’s Keep Your Systems Connected and Protected',
    closingText:
      'If you need fire alarm monitoring, central station services, or ongoing life safety system support, contact Palmetto Fire today.',
    image: '/images/service-monitoring.jpg',
  },
  {
    slug: 'design-installation-lifecycle-support',
    name: 'Design, Installation & Lifecycle Support',
    shortName: 'Design & Install',
    tagline:
      'Complete Life Safety System Support from Planning Through Long-Term Operation',
    summary:
      'Advanced system design, ADA upgrades, elevator recall solutions, and technology integration services.',
    heroBody:
      'Life safety systems require more than installation alone. Effective protection depends on proper system design, code compliance, professional installation, ongoing maintenance, and long-term support throughout the life of the system. Palmetto Fire Services provides complete design, installation, and lifecycle support services for fire alarm, emergency communication, and integrated life safety systems throughout Myrtle Beach and surrounding communities.',
    servicesSection: {
      heading: 'Our Design & Lifecycle Support Services',
      intro: [
        'Palmetto Fire supports life safety systems through every stage of the process, including:',
      ],
      bullets: [
        'System design and engineering',
        'New construction installation',
        'Retrofit and renovation projects',
        'Fire alarm system integration',
        'Mass notification system integration',
        'Nurse call system installation',
        'Area of rescue system installation',
        'ADA upgrades and code-compliance improvements',
        'Elevator recall solutions',
        'System expansions and upgrades',
        'Preventative maintenance programs',
        'Ongoing inspections, monitoring, and service support',
      ],
      closing: [
        'Our team works closely with owners, contractors, facility managers, architects, and authorities having jurisdiction to help ensure systems are designed and installed to meet operational goals and applicable code requirements.',
      ],
    },
    whyMattersSection: {
      heading: 'Why Lifecycle Support Matters',
      intro: [
        'Life safety systems are long-term investments that require ongoing attention to remain dependable, compliant, and effective.',
        'A properly supported system helps facilities:',
      ],
      bullets: [
        'Maintain code compliance',
        'Improve long-term system reliability',
        'Reduce unexpected operational disruptions',
        'Simplify future upgrades and expansions',
        'Improve communication and occupant safety',
        'Protect investments over the life of the system',
        'Support inspection readiness and emergency preparedness',
      ],
      closing: [
        'Facilities that take a proactive approach to system maintenance and support are better positioned to avoid costly problems and maintain dependable life safety protection.',
      ],
    },
    approachSection: {
      heading: 'The Palmetto Fire Approach',
      intro: [
        'At Palmetto Fire, we believe successful life safety systems begin with thoughtful planning and continue through long-term customer support.',
        'Our team works to understand each facility’s operational needs, communication requirements, and long-term goals before recommending solutions. We focus on systems that are dependable, practical, user-friendly, and designed to perform reliably for years to come.',
        'Customers trust Palmetto Fire because we provide responsive local service, experienced technical expertise, and accountability behind every phase of the project and every system we support.',
      ],
    },
    technologySection: {
      heading: 'Experience and Technology You Can Trust',
      intro: [
        'As an EST Authorized Strategic Partner, Palmetto Fire works with trusted manufacturers and advanced life safety technologies used across commercial and institutional environments.',
        'Our team supports:',
      ],
      bullets: [
        'EST fire alarm systems',
        'Mass notification systems',
        'Voice evacuation systems',
        'Nurse call systems',
        'Area of rescue communication systems',
        'Integrated life safety technologies',
        'Emergency communication systems',
        'ADA and code-compliance upgrades',
      ],
      closing: [
        'Palmetto Fire combines advanced technology solutions with experienced local support to help customers maintain dependable, code-compliant systems throughout the life of their facilities.',
      ],
    },
    whoWeServeSection: {
      heading: 'Who We Serve',
      bullets: standardWhoWeServe,
      closing: [
        'Whether you are planning a new facility, upgrading an existing system, or looking for long-term support, Palmetto Fire Services provides dependable life safety solutions tailored to your needs.',
      ],
    },
    closingHeading: 'Let’s Build a Reliable Long-Term Life Safety Strategy',
    closingText:
      'If you need life safety system design, installation, upgrades, inspections, or ongoing support, contact Palmetto Fire Services today.',
    image: '/images/service-design-install.jpg',
  },
  {
    slug: 'access-control-security-integration',
    name: 'Access Control & Security Integration',
    shortName: 'Access Control',
    tagline: 'Integrated Security Solutions Designed to Improve Safety and Visibility',
    summary:
      'Integrated access control, security, and digital imaging systems designed to improve visibility and facility management.',
    heroBody:
      'Modern facilities require more than standalone security systems. Integrated access control and security technologies help organizations manage building access, improve visibility, enhance occupant safety, and support day-to-day operations across a wide range of environments. Palmetto Fire Services provides access control and security integration solutions for commercial and institutional facilities throughout Myrtle Beach and surrounding communities.',
    servicesSection: {
      heading: 'Our Access Control & Security Services',
      intro: [
        'Palmetto Fire supports access control and integrated security systems from initial planning through installation and long-term support, including:',
      ],
      bullets: [
        'Access control system design and installation',
        'Card access and credential systems',
        'Door access management systems',
        'Integrated security technologies',
        'Digital imaging and identification systems',
        'Video surveillance system integration',
        'System upgrades and expansions',
        'System troubleshooting and repairs',
        'Preventative maintenance and ongoing support',
        'Integration with life safety and emergency communication systems',
      ],
      closing: [
        'Our team works closely with facility owners, property managers, contractors, and administrators to help ensure systems align with operational needs, security goals, and long-term facility management requirements.',
      ],
    },
    whyMattersSection: {
      heading: 'Why Access Control & Security Integration Matter',
      intro: [
        'Integrated security systems help facilities better manage access, improve visibility, and support safer environments for employees, residents, patients, students, and visitors.',
        'Modern access control and security systems help facilities:',
      ],
      bullets: [
        'Control and monitor building access',
        'Improve occupant and property security',
        'Support emergency response coordination',
        'Reduce unauthorized access risks',
        'Simplify credential and access management',
        'Improve visibility across facilities and campuses',
        'Integrate security with broader life safety systems',
      ],
      closing: [
        'As facilities become more connected and security expectations continue to evolve, integrated systems play an increasingly important role in protecting people and operations.',
      ],
    },
    approachSection: {
      heading: 'The Palmetto Fire Approach',
      intro: [
        'At Palmetto Fire, we understand security systems must be dependable, practical, and easy to manage on a daily basis.',
        'Our team works closely with customers to design solutions tailored to their facility layout, operational needs, and long-term goals. We focus on systems that provide reliable performance while remaining flexible and scalable as facilities grow and evolve.',
        'Customers trust Palmetto Fire because we provide responsive service, experienced technical support, and long-term accountability behind every system we install and maintain.',
      ],
    },
    technologySection: {
      heading: 'Experience and Technology You Can Trust',
      intro: [
        'Palmetto Fire works with trusted manufacturers and integrated security technologies designed for commercial and institutional environments.',
        'Our team supports:',
      ],
      bullets: [
        'IDenticard access control and digital imaging systems',
        'RS2 Technologies',
        'Integrated access management systems',
        'Video surveillance integration',
        'Credential and identification technologies',
        'Integrated life safety and security systems',
        'Emergency communication integration',
      ],
      closing: [
        'As an EST Authorized Strategic Partner, Palmetto combines advanced security technologies with dependable local support to help facilities improve safety, visibility, and operational control.',
      ],
    },
    whoWeServeSection: {
      heading: 'Who We Serve',
      bullets: standardWhoWeServe,
      closing: [
        'Whether you manage a single building or multiple facilities, Palmetto Fire provides integrated access control and security solutions tailored to your environment and operational needs.',
      ],
    },
    closingHeading: 'Let’s Strengthen Your Facility’s Security and Safety',
    closingText:
      'If you need access control systems, security integration, system upgrades, or ongoing support, contact Palmetto Fire today.',
    image: '/images/service-access-control.jpg',
  },
  {
    slug: 'testing-inspections',
    name: 'Testing & Inspections',
    shortName: 'Testing & Inspections',
    tagline:
      'Reliable Inspections and Testing to Help Keep Your Facility Protected and Compliant',
    summary:
      'Inspection, testing, and preventative maintenance services for fire alarm, emergency communication, and integrated life safety systems.',
    heroBody:
      'Routine testing and inspections are essential to maintaining dependable life safety systems. Proper inspections help identify issues early, support code compliance, and ensure systems function properly when emergencies occur. Palmetto Fire Services provides testing and inspection services for fire alarm, emergency communication, and integrated life safety systems throughout Myrtle Beach and surrounding communities.',
    servicesSection: {
      heading: 'Our Testing & Inspection Services',
      intro: [
        'Palmetto Fire provides comprehensive inspection and testing services for a wide range of life safety systems, including:',
      ],
      bullets: [
        'Fire alarm system inspections',
        'Mass notification system testing',
        'Emergency communication system inspections',
        'Nurse call system testing and support',
        'Area of rescue system inspections',
        'System troubleshooting and diagnostics',
        'Preventative maintenance services',
        'Code-compliance inspections',
        'Inspection documentation and reporting',
        'System deficiency identification and recommendations',
        'Ongoing inspection scheduling and support',
      ],
      closing: [
        'Our team works closely with facility owners, property managers, and authorities having jurisdiction to help ensure systems meet applicable code requirements and remain ready for operation.',
      ],
    },
    whyMattersSection: {
      heading: 'Why Testing & Inspections Matter',
      intro: [
        'Life safety systems must perform properly during emergencies. Regular inspections and testing help facilities identify issues before they become larger safety or compliance problems.',
        'Routine inspections help facilities:',
      ],
      bullets: [
        'Maintain code compliance',
        'Improve system reliability',
        'Reduce unexpected failures and downtime',
        'Support occupant safety',
        'Identify deficiencies before emergencies occur',
        'Prepare for AHJ and insurance inspections',
        'Extend the life of critical systems',
      ],
      closing: [
        'Proactive testing and preventative maintenance help facilities avoid unnecessary disruptions while maintaining dependable protection.',
      ],
    },
    approachSection: {
      heading: 'The Palmetto Fire Approach',
      intro: [
        'At Palmetto Fire, inspections are about more than checking boxes. Our team focuses on helping customers understand the condition of their systems and identifying issues that could impact reliability, compliance, or occupant safety.',
        'We believe communication, responsiveness, and accountability matter throughout the inspection process. Customers trust Palmetto Fire because we provide clear reporting, dependable scheduling, and experienced technical support backed by long-term service relationships.',
        'Our goal is to help facilities stay prepared, compliant, and protected year-round.',
      ],
    },
    technologySection: {
      heading: 'Experience and Technology You Can Trust',
      intro: [
        'Palmetto Fire supports inspections and testing for a wide range of commercial and institutional life safety systems.',
        'Our team provides support for:',
      ],
      bullets: [
        'EST fire alarm systems',
        'Mass notification systems',
        'Emergency communication technologies',
        'Nurse call systems',
        'Area of rescue systems',
        'Integrated life safety systems',
        'UL listed monitoring systems',
        'ADA and code-compliance upgrades',
      ],
      closing: [
        'As an EST Authorized Strategic Partner, Palmetto Fire combines experienced local service with trusted technologies and dependable long-term support.',
      ],
    },
    whoWeServeSection: {
      heading: 'Who We Serve',
      bullets: standardWhoWeServe,
      closing: [
        'Whether you manage a single facility or multiple properties, Palmetto Fire provides dependable inspection and testing services tailored to your operational and compliance needs.',
      ],
    },
    closingHeading: 'Let’s Keep Your Systems Ready',
    closingText:
      'If you need inspections, testing, preventative maintenance, or ongoing life safety system support, contact Palmetto Fire Services today.',
    image: '/images/service-testing-inspections.jpg',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export const activeServices = services
