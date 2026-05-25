import Container from '../layout/Container'
import Button from '../ui/Button'

interface PageHeroProps {
  label?: string
  headline: string
  body?: string
  ctaText?: string
  ctaHref?: string
}

export default function PageHero({
  label,
  headline,
  body,
  ctaText,
  ctaHref,
}: PageHeroProps) {
  return (
    <section className="bg-cream section-padding overflow-hidden">
      <Container>
        <div className="max-w-[768px] mx-auto text-center animate-fade-in">
          {label && <p className="label-text text-maroon mb-[16px]">{label}</p>}
          <h1 className="font-serif text-maroon text-[36px] md:text-[42px] lg:text-[48px] leading-tight mb-[24px]">
            {headline}
          </h1>
          {body && <p className="body-large mb-[32px]">{body}</p>}
          {ctaText && ctaHref && (
            <Button href={ctaHref} variant="primary" size="lg">
              {ctaText}
            </Button>
          )}
        </div>
      </Container>
    </section>
  )
}
