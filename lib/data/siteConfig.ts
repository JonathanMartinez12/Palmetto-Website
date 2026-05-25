export const siteConfig = {
  name: 'Palmetto Fire Services',
  shortName: 'Palmetto Fire',
  tagline: 'Life safety, fire alarm, and security integration across the Carolinas',
  description:
    'Palmetto Fire Services delivers design, installation, monitoring, testing, and inspection of fire alarm, mass notification, nurse call, area of rescue, and access control systems across Myrtle Beach and surrounding areas.',
  url: 'https://palmettofireservices.com',
  phone: '843-399-9390',
  phoneHref: 'tel:+18433999390',
  email: 'info@palmettofireservices.com',
  emailHref: 'mailto:info@palmettofireservices.com',
  address: {
    street: '1303 State Highway 57 South',
    city: 'Little River',
    state: 'SC',
    zip: '29566',
    full: '1303 State Highway 57 South, Little River, SC 29566',
  },
  mailingAddress: {
    street: 'PO Box 55',
    city: 'Little River',
    state: 'SC',
    zip: '29566',
    full: 'PO Box 55, Little River, SC 29566',
  },
  geo: {
    // Little River, SC
    latitude: 33.8782,
    longitude: -78.6483,
  },
  serviceAreas: ['Myrtle Beach', 'Grand Strand', 'Coastal Carolinas'],
  serviceAreaShort: 'Myrtle Beach & Surrounding Areas',
  certifications: ['NFPA', 'NICET'],
  portals: {
    // TODO: real ServiceTrade portal link from client
    customer: '#',
    // TODO: real payment portal link from client
    payment: '#',
  },
  parent: {
    name: 'Atlantis Fire Protection',
    url: 'https://atlantis-fire.vercel.app',
  },
  copyright: `Palmetto Fire Services © ${new Date().getFullYear()}`,
}

export const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about', hasDropdown: 'about' as const },
    { name: 'Services', href: '/services', hasDropdown: 'services' as const },
    { name: 'Applications', href: '/applications', hasDropdown: 'applications' as const },
    { name: 'Careers', href: '/careers' },
  ],
  about: [
    { name: 'Our Story', href: '/about' },
    { name: 'Our Partner — Atlantis Fire', href: '/about/our-partner' },
  ],
  footer: {
    primary: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Our Partner', href: '/about/our-partner' },
      { name: 'Services', href: '/services' },
      { name: 'Applications', href: '/applications' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
  },
}
