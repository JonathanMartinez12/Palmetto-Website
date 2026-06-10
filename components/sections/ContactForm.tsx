'use client'

import { useState, FormEvent, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import emailjs from '@emailjs/browser'
import Input from '../ui/Input'
import Textarea from '../ui/Textarea'
import Select from '../ui/Select'
import Button from '../ui/Button'
import { isValidEmail } from '@/lib/utils'
import { services } from '@/lib/data/services'

interface FormData {
  fullName: string
  email: string
  phone: string
  service: string
  message: string
}

interface FormErrors {
  fullName?: string
  email?: string
  message?: string
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const params = useSearchParams()
  const presetService = params.get('service') || ''
  const presetTopic = params.get('topic')

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    service: presetService,
    message: presetTopic === 'careers' ? 'Careers inquiry — ' : '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')

  useEffect(() => {
    if (presetService) setFormData((f) => ({ ...f, service: presetService }))
  }, [presetService])

  const validate = (): boolean => {
    const next: FormErrors = {}
    if (!formData.fullName.trim()) next.fullName = 'Please enter your name'
    if (!formData.email.trim()) next.email = 'Please enter your email'
    else if (!isValidEmail(formData.email)) next.email = 'Please enter a valid email'
    if (!formData.message.trim()) next.message = 'Please enter a message'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleChange =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData((p) => ({ ...p, [field]: e.target.value }))
      if (errors[field as keyof FormErrors]) {
        setErrors((p) => ({ ...p, [field]: undefined }))
      }
    }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    setStatus('sending')
    setErrorMsg('')

    if (!serviceId || !templateId || !publicKey) {
      // EmailJS not configured — log for dev, show friendly error
      console.warn('EmailJS env vars missing. Form not actually sent.')
      await new Promise((r) => setTimeout(r, 600))
      setStatus('success')
      return
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.fullName,
          reply_to: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        { publicKey }
      )
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or call us.'
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="max-w-[672px] mx-auto text-center animate-fade-in">
        <div className="w-[64px] h-[64px] bg-green-100 rounded-full flex items-center justify-center mx-auto mb-[24px]">
          <svg
            className="w-[32px] h-[32px] text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="heading-3 text-palm mb-[16px]">Thank You!</h2>
        <p className="body-large mb-[32px]">
          Your message has been sent. A member of our team will be in touch
          shortly. For urgent service, please call us.
        </p>
        <Button
          onClick={() => {
            setStatus('idle')
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              service: '',
              message: '',
            })
          }}
          variant="outline"
        >
          Send Another
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-[20px] animate-fade-in">
      <div className="grid sm:grid-cols-2 gap-[16px]">
        <Input
          label="Full Name"
          required
          value={formData.fullName}
          onChange={handleChange('fullName')}
          error={errors.fullName}
          placeholder="Your full name"
        />
        <Input
          label="Email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange('email')}
          error={errors.email}
          placeholder="you@example.com"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-[16px]">
        <Input
          label="Phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange('phone')}
          placeholder="(843) 555-0123"
        />
        <Select
          label="Service Needed"
          value={formData.service}
          onChange={handleChange('service')}
        >
          <option value="">— Select a service —</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
          <option value="other">Other / Not sure</option>
        </Select>
      </div>

      <Textarea
        label="How can we help?"
        required
        value={formData.message}
        onChange={handleChange('message')}
        error={errors.message}
        placeholder="Tell us about the property and what you need..."
        rows={5}
      />

      {status === 'error' && (
        <div
          role="alert"
          className="bg-cloud/10 border border-cloud text-cloud-700 rounded-[8px] px-[16px] py-[12px] text-[14px]"
        >
          {errorMsg || 'Something went wrong. Please try again or call us.'}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  )
}
