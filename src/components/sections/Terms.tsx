'use client'

const terms = [
  {
    title: 'Program Overview',
    description: 'The Brilliance25 Affiliate Program is designed to promote event registrations through an exclusive network of high-impact partners.',
    points: [
      'Exclusive program for partners with 500+ registration potential',
      'Unique tracking link provided for each affiliate',
      'Sales tracking for both full payments and monthly installments',
      'Real-time dashboard access for performance monitoring'
    ]
  },
  {
    title: 'Commission Structure',
    description: 'Our two-step commission structure maximizes your earning potential:',
    points: [
      'Step 1: "Living Limitlessly" Free Event - 100% commission on all Brilliance25 registrations',
      'Step 2: Brilliance25 Event - $1,000 commission for each Brilliant School of Leadership (BSOL) conversion',
      'Real-time tracking and reporting of all conversions',
      'Commissions paid promptly after each qualifying event'
    ]
  },
  {
    title: 'Payment Schedule',
    description: 'Clear and reliable payment process for all affiliates:',
    points: [
      'BSOL conversion commissions processed within 30 days of event completion',
      'Event registration commissions paid after the refund period',
      'Multiple payment methods available for your convenience',
      'Detailed earnings reports provided with each payment'
    ]
  },
  {
    title: 'Affiliate Responsibilities',
    description: 'To maintain the integrity of our program, affiliates agree to:',
    points: [
      'Promote events with authenticity and ethical marketing practices',
      'Use only approved marketing materials and messaging',
      'Maintain confidentiality of affiliate program details',
      'Regularly engage with affiliate support team for optimal results'
    ]
  }
]

export default function Terms() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Program Details</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Terms and Conditions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Clear, transparent terms designed for mutual success in promoting Brilliance25.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          {terms.map((term, sectionIndex) => (
            <div key={term.title} className="mb-16 last:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {term.title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {term.description}
              </p>
              <ul className="space-y-4">
                {term.points.map((point, index) => (
                  <li key={index} className="flex gap-x-3 text-base text-gray-600">
                    <span className="font-semibold text-indigo-600">{sectionIndex + 1}.{index + 1}</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-base text-gray-600">
            By applying to become an affiliate, you agree to these terms and conditions. We reserve the right to modify these terms with notice to all active affiliates.
          </p>
        </div>
      </div>
    </div>
  )
} 