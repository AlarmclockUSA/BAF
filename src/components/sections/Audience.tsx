'use client'

import { HomeModernIcon, BriefcaseIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

const audiences = [
  {
    name: 'Christian Leaders',
    description: 'Church leaders, pastors, and ministry heads who want to provide transformative resources to their community while creating an additional revenue stream.',
    icon: HomeModernIcon,
  },
  {
    name: 'Business Professionals',
    description: 'Christian entrepreneurs and business leaders looking to combine their business acumen with spiritual impact and significant earning potential.',
    icon: BriefcaseIcon,
  },
  {
    name: 'Community Builders',
    description: 'Network leaders and influencers who serve a community of growth-minded believers seeking deeper spiritual connection.',
    icon: UserGroupIcon,
  },
  {
    name: 'Content Creators',
    description: 'Christian bloggers, podcasters, and content creators who want to offer high-value spiritual growth resources to their audience.',
    icon: AcademicCapIcon,
  },
]

export default function Audience() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Perfect For</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Who Should Become an Affiliate?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our affiliate program is designed for individuals and organizations who are passionate about spiritual growth and want to create meaningful impact while generating significant income.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {audiences.map((audience) => (
              <div key={audience.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <audience.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {audience.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{audience.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 