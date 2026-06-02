import Container from '../layout/Container'
import Button from '../ui/Button'

interface CTASectionProps {
  headline: string
  text: string
  buttonText: string
  buttonHref: string
  variant?: 'cream' | 'white' | 'palm' | 'maroon'
  secondaryText?: string
  secondaryHref?: string
}

export default function CTASection({
  headline,
  text,
  buttonText,
  buttonHref,
  variant = 'cream',
  secondaryText,
  secondaryHref,
}: CTASectionProps) {
  const bg = {
    cream: 'bg-cream',
    white: 'bg-white',
    palm: 'bg-palm',
    maroon: 'bg-maroon',
  }
  const heading = {
    cream: 'text-maroon',
    white: 'text-maroon',
    palm: 'text-white',
    maroon: 'text-white',
  }
  const body = {
    cream: 'text-stone-600',
    white: 'text-stone-600',
    palm: 'text-cream-200',
    maroon: 'text-cream-200',
  }
  const isDark = variant === 'palm' || variant === 'maroon'

  return (
    <section className={`${bg[variant]} section-padding`}>
      <Container>
        <div className="max-w-[768px] mx-auto text-center animate-fade-in">
          <h2 className={`heading-2 ${heading[variant]} mb-[16px]`}>{headline}</h2>
          <p className={`body-large ${body[variant]} mb-[32px]`}>{text}</p>
          <div className="flex flex-wrap gap-[12px] justify-center">
            <Button href={buttonHref} variant="primary" size="lg">
              {buttonText}
            </Button>
            {secondaryText && secondaryHref && (
              <Button
                href={secondaryHref}
                variant="outline"
                size="lg"
                className={
                  isDark
                    ? '!bg-transparent !border-white !text-white hover:!bg-white hover:!text-palm'
                    : ''
                }
              >
                {secondaryText}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
