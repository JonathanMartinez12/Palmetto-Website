'use client'

import Link from 'next/link'
import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'maroon' | 'burnt'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 btn-text'

  const variants = {
    primary:
      'bg-cloud text-white hover:bg-cloud-600 focus:ring-cloud shadow-md hover:shadow-lg',
    secondary:
      'bg-palm text-white hover:bg-palm-600 focus:ring-palm shadow-md hover:shadow-lg',
    outline:
      'border-2 border-palm text-palm hover:bg-palm hover:text-white focus:ring-palm',
    ghost:
      'text-palm hover:text-cloud focus:ring-maroon',
    maroon:
      'bg-maroon text-white hover:bg-maroon-600 focus:ring-maroon shadow-md hover:shadow-lg',
    burnt:
      'bg-burnt text-white hover:bg-burnt-600 focus:ring-burnt shadow-md hover:shadow-lg',
  }

  const sizes = {
    sm: 'w-[130px] h-[30px] text-[12px]',
    md: 'w-[158px] h-[34px] text-[14px]',
    lg: 'w-[180px] h-[40px] text-[14px]',
  }

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={buttonClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}
