import Link from 'next/link'
import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'

export default function NotFound() {
  return (
    <section className="bg-cream section-padding">
      <Container>
        <div className="max-w-[640px] mx-auto text-center animate-fade-in">
          <p className="label-text text-cloud mb-[16px]">404</p>
          <h1 className="text-palm text-[36px] md:text-[48px] leading-tight mb-[16px]">
            Page not found.
          </h1>
          <p className="body-large mb-[32px]">
            The page you were looking for doesn’t exist or may have moved.
          </p>
          <div className="flex flex-wrap gap-[12px] justify-center">
            <Button href="/" variant="primary" size="lg">
              Back Home
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
