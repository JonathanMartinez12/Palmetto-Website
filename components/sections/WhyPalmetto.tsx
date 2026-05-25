import Container from '../layout/Container'

interface ValueColumn {
  title: string
  text: string
}

interface WhyPalmettoProps {
  label?: string
  headline?: string
  columns?: ValueColumn[]
}

const defaultColumns: ValueColumn[] = [
  {
    title: 'Full-Scope Expertise',
    text: 'Design, installation, monitoring, and inspection — all handled by our in-house team.',
  },
  {
    title: 'Local to the Grand Strand',
    text: 'Based in Little River, SC and serving Myrtle Beach and the surrounding areas with local crews.',
  },
  {
    title: 'NFPA-Compliant Work',
    text: 'Every system we touch is designed, installed, and tested to the NFPA standards that apply.',
  },
  {
    title: 'One Point of Contact',
    text: 'Fire alarm, mass notification, nurse call, access control, monitoring — one account, one call, one invoice.',
  },
]

export default function WhyPalmetto({
  label = 'WHY PALMETTO',
  headline = 'Why Palmetto Fire Services',
  columns = defaultColumns,
}: WhyPalmettoProps) {
  return (
    <section className="w-full bg-cream py-[40px]">
      <div className="w-full bg-white py-[60px] px-[24px] md:px-[40px] lg:px-[80px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-[48px] animate-fade-in">
            <p className="label-text text-maroon mb-[16px]">{label}</p>
            <h2 className="font-serif text-maroon text-[36px] md:text-[42px] lg:text-[48px] leading-tight">
              {headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] md:gap-[40px]">
            {columns.map((col, i) => (
              <div
                key={col.title}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div
                  className="w-[48px] h-[4px] bg-cloud mx-auto mb-[20px]"
                  aria-hidden="true"
                />
                <h3 className="heading-palatino-24 text-maroon mb-[12px]">{col.title}</h3>
                <p className="body-palatino-18 text-black">{col.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
