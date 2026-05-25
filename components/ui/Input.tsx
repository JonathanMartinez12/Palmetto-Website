'use client'

import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-stone-700 mb-2">
            {label}
            {props.required && <span className="text-cloud ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-3 border rounded-lg
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-maroon focus:border-transparent
            ${error ? 'border-cloud' : 'border-stone-300'}
            ${className}
          `}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-cloud">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
