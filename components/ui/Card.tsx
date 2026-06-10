import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'cream' | 'white' | 'maroon'
}

export default function Card({
  children,
  className = '',
  variant = 'default',
}: CardProps) {
  const variants = {
    default: 'bg-white shadow-md',
    cream: 'bg-cream',
    white: 'bg-white',
    maroon: 'bg-palm text-white',
  }

  return (
    <div className={`rounded-[8px] p-[24px] md:p-[32px] ${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}

interface ValueCardProps {
  title: string
  text: string
  className?: string
}

export function ValueCard({ title, text, className = '' }: ValueCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <h3 className="heading-4 text-palm mb-[12px]">{title}</h3>
      <p className="body-text">{text}</p>
    </div>
  )
}

interface FeatureCardProps {
  title: string
  text: string
  className?: string
}

export function FeatureCard({ title, text, className = '' }: FeatureCardProps) {
  return (
    <Card className={`h-full ${className}`}>
      <h3 className="heading-4 text-palm mb-[16px]">{title}</h3>
      <p className="body-text">{text}</p>
    </Card>
  )
}
