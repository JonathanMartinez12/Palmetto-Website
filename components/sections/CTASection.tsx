import Container from '../layout/Container'
import Button from '../ui/Button'

interface CTASectionProps {
  headline: string
  text: string
  buttonText: string
  buttonHref: string
  variant?: 'cream' | 'white' | 'maroon'
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
  const bg = { cream: 'bg-cream', white: 'bg-white', maroon: 'bg-maroon' }
  const heading = { cream: 'text-maroon', white: 'text-maroon', maroon: 'text-white' }
  const body = { cream: 'text-gray-600', white: 'text-gray-600', maroon: 'text-gray-200' }

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
                variant={variant === 'maroon' ? 'outline' : 'outline'}
                size="lg"
                className={
                  variant === 'maroon'
                    ? '!bg-transparent !border-white !text-white hover:!bg-white hover:!text-maroon'
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
