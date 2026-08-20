'use client'

import { TextareaHTMLAttributes, forwardRef } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm text-stone-700 mb-2">
            {label}
            {props.required && <span className="text-cloud ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          className={`
            w-full px-4 py-3 border rounded-lg
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-maroon focus:border-transparent
            resize-vertical min-h-[120px]
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

Textarea.displayName = 'Textarea'

export default Textarea
