'use client'

import { HeartIcon, CurrencyDollarIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Premium Event Value',
    description: 'Partner with a transformative event featuring Graham Cooke. Your audience gets life-changing content, and you earn 100% of every ticket sale.',
    icon: SparklesIcon,
  },
  {
    name: 'Two Revenue Streams',
    description: 'Earn from both ticket sales ($97 per registration) and BSL conversions ($1,000 bonus per conversion) during the event.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Lasting Impact',
    description: 'Help others discover their extraordinary relationship with God while building a sustainable income through ongoing event partnerships.',
    icon: HeartIcon,
  },
  {
    name: 'Full Support',
    description: 'Get comprehensive support including marketing materials, tracking tools, and dedicated affiliate management to maximize your success.',
    icon: UserGroupIcon,
  },
]

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Partner With Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Double Your Impact, Maximize Your Earnings
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Partner with Brilliance25 to create both immediate and long-term income streams. Earn 100% commission on event tickets plus substantial bonuses when attendees join the Brilliant School of Leadership.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 