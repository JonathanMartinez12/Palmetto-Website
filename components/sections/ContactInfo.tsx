import { siteConfig } from '@/lib/data/siteConfig'

export default function ContactInfo() {
  const { latitude, longitude } = siteConfig.geo
  // Google's unauthenticated `/maps?q=...&output=embed` endpoint has become
  // unreliable and now frequently returns its own "Oops! Something went
  // wrong" error page in the iframe. We don't have a Google Maps API key on
  // file, so use OpenStreetMap's free, keyless embed instead — it never
  // requires billing/auth and renders the same pin at our known coordinates.
  const delta = 0.01
  const bbox = [
    longitude - delta,
    latitude - delta,
    longitude + delta,
    latitude + delta,
  ].join('%2C')
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${latitude}%2C${longitude}`
  const googleMapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    siteConfig.address.full
  )}`

  return (
    <div className="bg-cream rounded-[8px] p-[32px]">
      <h2 className="text-palm text-[28px] md:text-[32px] leading-tight mb-[24px]">
        Visit, call, or write.
      </h2>

      <div className="space-y-[20px] mb-[32px]">
        <div>
          <p className="label-text text-palm mb-[4px]">OFFICE</p>
          <address className="not-italic text-palm text-[16px] leading-relaxed">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.city}, {siteConfig.address.state}{' '}
            {siteConfig.address.zip}
          </address>
        </div>

        <div>
          <p className="label-text text-palm mb-[4px]">PHONE</p>
          <a
            href={siteConfig.phoneHref}
            className="text-palm text-[18px] font-bold hover:text-cloud transition-colors"
          >
            {siteConfig.phone}
          </a>
        </div>

        <div>
          <p className="label-text text-palm mb-[4px]">EMAIL</p>
          <a
            href={siteConfig.emailHref}
            className="text-palm text-[16px] hover:text-cloud transition-colors break-all"
          >
            {siteConfig.email}
          </a>
        </div>

        <div>
          <p className="label-text text-palm mb-[4px]">SERVICE AREA</p>
          <div className="flex flex-wrap gap-[8px] mt-[8px]">
            {siteConfig.serviceAreas.map((s) => (
              <span
                key={s}
                className="bg-white border border-maroon/20 text-palm text-[13px] font-bold uppercase tracking-wide px-[12px] py-[4px] rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <a
        href={googleMapsHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mb-[8px] text-cloud text-[14px] font-bold hover:text-cloud-600 transition-colors"
      >
        Open in Google Maps ↗
      </a>

      <div className="rounded-[8px] overflow-hidden border border-maroon/10 aspect-video">
        <iframe
          src={mapSrc}
          title={`Map of ${siteConfig.address.full}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}
