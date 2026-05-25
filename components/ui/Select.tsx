'use client'

import { SelectHTMLAttributes, forwardRef, ReactNode } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  children: ReactNode
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, className = '', children, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-stone-700 mb-2">
            {label}
            {props.required && <span className="text-cloud ml-1">*</span>}
          </label>
        )}
        <select
          ref={ref}
          className={`
            w-full px-4 py-3 border rounded-lg bg-white
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-maroon focus:border-transparent
            ${error ? 'border-cloud' : 'border-stone-300'}
            ${className}
          `}
          {...props}
        >
          {children}
        </select>
        {error && <p className="mt-1 text-sm text-cloud">{error}</p>}
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select
