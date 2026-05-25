import Container from '../layout/Container'
import Button from '../ui/Button'
import { siteConfig } from '@/lib/data/siteConfig'

export default function ServiceAreaCallout() {
  return (
    <section className="bg-palm section-padding relative overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-cloud via-burnt to-flame"
        aria-hidden="true"
      />
      <Container>
        <div className="grid lg:grid-cols-2 gap-[48px] items-center">
          <div className="animate-fade-in-up">
            <p className="label-text text-flame mb-[16px]">SERVICE AREA</p>
            <h2 className="font-serif text-white text-[36px] md:text-[42px] lg:text-[48px] leading-tight mb-[24px]">
              Protecting buildings across the Grand Strand.
            </h2>
            <p className="text-gray-200 text-[17px] leading-relaxed mb-[32px]">
              From our shop in Little River, South Carolina, Palmetto dispatches
              crews up and down the Myrtle Beach coast — meaning faster
              response, local relationships with AHJs, and a team that knows
              your market.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Request a Quote
            </Button>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-[12px] animate-slide-in-right"
            aria-label="Service areas"
          >
            {siteConfig.serviceAreas.map((area) => (
              <div
                key={area}
                className="bg-palm-700 border border-light-500/40 rounded-[8px] p-[24px] text-center flex flex-col justify-center min-h-[140px]"
              >
                <p className="font-serif text-flame text-[22px] md:text-[26px] leading-tight">
                  {area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
