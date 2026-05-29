export const siteConfig = {
  name: 'Palmetto Fire Services',
  legalName: 'Palmetto Fire Services, LLC',
  shortName: 'Palmetto Fire',
  tagline: 'Advanced Life Safety. Trusted Local Service.',
  description:
    'Palmetto Fire Services provides integrated fire alarm and life safety solutions designed to protect people, properties, and critical facilities with responsive service, trusted technology, and long-term support.',
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
    latitude: 33.8782,
    longitude: -78.6483,
  },
  serviceAreas: ['South Carolina', 'North Carolina'],
  serviceAreaShort: 'SC • NC',
  certifications: ['EST Authorized Strategic Partner'],
  portals: {
    // TODO: real ServiceTrade portal link from client
    customer: '#',
    // TODO: real payment portal link from client
    payment: '#',
  },
  parent: {
    name: 'Atlantis Fire Protection',
    shortName: 'Atlantis Fire',
    url: 'https://atlantis-fire.vercel.app',
  },
  copyright: `Palmetto Fire Services, LLC © ${new Date().getFullYear()}`,
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
    { name: 'About Palmetto Fire Services', href: '/about' },
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
