'use client'

import { useState } from 'react'
import { Tab, Dialog } from '@headlessui/react'
import { RocketLaunchIcon, AcademicCapIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const steps = [
  {
    name: 'Step 1: Exclusive Limitless Podcast Episode',
    description: 'Host Graham Cooke & Dionne van Zyl for an exclusive live Limitless podcast episode on your platform. This personalized session introduces your community to Brilliant through an intimate conversation. One exclusive episode per affiliate.',
    features: [
      'Exclusive live podcast episode',
      'Direct access to Graham & Dionne',
      'Personalized for your audience',
      'Unique content for your platform'
    ],
    icon: RocketLaunchIcon,
  },
  {
    name: 'Step 2: "Living Limitless" Free Event',
    description: 'Start by promoting our free pre-event featuring Graham Cooke, Ray Higdon, and Dionne van Zyl. This event is designed to introduce participants to the transformative journey ahead. Earn $97 per Brilliance25 registration from this event.',
    features: [
      'Free event - easy to promote',
      'Features all three main speakers',
      'Perfect introduction to Brilliance25',
      '$97 per event registration'
    ],
    icon: RocketLaunchIcon,
  },
  {
    name: 'Step 3: Brilliance25 & BSOL Opportunity',
    description: 'As participants experience Brilliance25, they will have the opportunity to join the Brilliant School of Leadership. You earn $1,000 for every BSOL conversion during the event.',
    features: [
      '$1,000 per BSOL conversion',
      'Ongoing transformation journey',
      'Higher-ticket opportunity',
      'Long-term value for participants'
    ],
    icon: AcademicCapIcon,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function EarningsCalculator() {
  const [registrations, setRegistrations] = useState(50)
  const [bsolConversionRate, setBsolConversionRate] = useState(14)
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false)

  const ticketPrice = 97
  const bsolCommission = 1000
  const bsolConversions = Math.round(registrations * (bsolConversionRate / 100))
  
  const ticketEarnings = registrations * ticketPrice
  const bsolEarnings = bsolConversions * bsolCommission
  const totalEarnings = ticketEarnings + bsolEarnings

  return (
    <>
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
          Calculate Your Potential Earnings
        </h3>
        
        <div className="space-y-6 sm:space-y-8">
          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
              Number of Brilliance25 Registrations: {registrations}
            </label>
            <input
              type="range"
              min="10"
              max="200"
              value={registrations}
              onChange={(e) => setRegistrations(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-1">
              <span>10</span>
              <span>200</span>
            </div>
          </div>

          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
              BSOL Conversion Rate: {bsolConversionRate}%
            </label>
            <p className="text-xs text-gray-500 mb-2">Based on last year's conversion rate of 14%</p>
            <input
              type="range"
              min="0"
              max="40"
              value={bsolConversionRate}
              onChange={(e) => setBsolConversionRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-1">
              <span>0%</span>
              <span>40%</span>
            </div>
          </div>

          <div className="pt-4 sm:pt-6 border-t border-gray-200">
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <p className="text-xs sm:text-sm text-gray-600">Event Ticket Earnings</p>
                <p className="text-xl sm:text-2xl font-bold text-indigo-600">${ticketEarnings.toLocaleString()}</p>
                <p className="text-xs text-gray-500">From {registrations} registrations</p>
              </div>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <p className="text-xs sm:text-sm text-gray-600">BSOL Commission</p>
                <p className="text-xl sm:text-2xl font-bold text-indigo-600">${bsolEarnings.toLocaleString()}</p>
                <p className="text-xs text-gray-500">From {bsolConversions} conversions</p>
              </div>
              <div className="bg-indigo-50 p-3 sm:p-4 rounded-lg">
                <p className="text-xs sm:text-sm text-gray-600">Total Potential Earnings</p>
                <p className="text-xl sm:text-2xl font-bold text-indigo-600">${totalEarnings.toLocaleString()}</p>
                <p className="text-xs text-gray-500">Combined earnings</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsDisclaimerOpen(true)}
            className="text-sm text-indigo-600 hover:text-indigo-800 underline"
          >
            View Earnings Disclaimer
          </button>
        </div>
      </div>

      <Dialog
        open={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-2xl rounded-2xl bg-white p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <Dialog.Title className="text-xl sm:text-2xl font-bold text-gray-900">
                Brilliance 2025 Affiliate Earnings Disclaimer
              </Dialog.Title>
              <button
                onClick={() => setIsDisclaimerOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="prose prose-indigo max-w-none">
              <p className="text-base text-gray-600 mb-6">
                As a Brilliance 2025 affiliate, we believe in transparency and honesty in all communications about our program. Please read this disclaimer carefully before participating in our affiliate program.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Earnings Disclosure</h3>
              <p className="text-base text-gray-600 mb-6">
                The affiliate earnings examples, projections, or testimonials presented in our marketing materials represent potential earnings that affiliates may make promoting Brilliance 2025. These figures are used for illustrative purposes only and should not be considered as guaranteed results or typical earnings.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Individual Results May Vary</h3>
              <p className="text-base text-gray-600 mb-4">
                The income you earn as a Brilliance 2025 affiliate depends on multiple factors, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Your personal marketing efforts and skills</li>
                <li>The size and engagement level of your audience</li>
                <li>The time and resources you invest in promotion</li>
                <li>Market conditions and competition</li>
                <li>Your understanding of our message and audience</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">No Guarantees</h3>
              <p className="text-base text-gray-600 mb-6">
                We do not guarantee that you will earn any specific amount through the Brilliance 2025 affiliate program. We cannot be held responsible for any financial decisions you make based on the potential earnings presented.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Legal Compliance</h3>
              <p className="text-base text-gray-600 mb-6">
                As an affiliate, you agree to comply with all applicable laws and regulations regarding affiliate marketing.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Questions or Concerns</h3>
              <p className="text-base text-gray-600">
                If you have any questions about these disclaimers or our affiliate program, please contact our support team at{' '}
                <a 
                  href="mailto:Matt@brilliantperspectives.com"
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  Matt@brilliantperspectives.com
                </a>.
              </p>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => setIsDisclaimerOpen(false)}
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              >
                I Understand
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}

export default function Features() {
  const [showContact, setShowContact] = useState(false)

  return (
    <>
      {/* About Brilliance25 Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">About The Event</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Brilliance25: A Transformative Virtual Experience
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              March 21st-23rd, 2025 | A 3-day journey to discover an extraordinary relationship with God
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <Tab.Group>
              <Tab.List className="flex space-x-4 rounded-xl bg-white p-1 mb-8">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-3 text-sm font-medium leading-5',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-indigo-600 text-white shadow'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    )
                  }
                >
                  The Experience
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-3 text-sm font-medium leading-5',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-indigo-600 text-white shadow'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    )
                  }
                >
                  The Journey
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                    {/* Event Details */}
                    <div className="bg-white p-10 rounded-2xl shadow-sm">
                      <div className="space-y-6 text-base leading-7 text-gray-600">
                        <p className="text-lg font-medium text-gray-800">
                          At Brilliance25, we&apos;re inviting you into an extraordinary relationship with God - one where you discover that His focus isn&apos;t on fixing what&apos;s wrong with you, but on delighting in who you already are in Christ. This is the kind of relationship you were created for.
                        </p>
                        <p>
                          Through powerful teachings, interactive sessions, and prophetic ministry, participants will:
                        </p>
                        <ul className="space-y-4">
                          <li className="flex items-center">
                            <span className="h-2 w-2 bg-indigo-600 rounded-full mr-3" />
                            Our most powerful and transformative event of the year
                          </li>
                          <li className="flex items-center">
                            <span className="h-2 w-2 bg-indigo-600 rounded-full mr-3" />
                            Reaching a global audience
                          </li>
                          <li className="flex items-center">
                            <span className="h-2 w-2 bg-indigo-600 rounded-full mr-3" />
                            Countless testimonies of freedom and discovering what a new nature in Christ really means
                          </li>
                          <li className="flex items-center">
                            <span className="h-2 w-2 bg-indigo-600 rounded-full mr-3" />
                            Opens enrollment to our yearly school "Brilliant School of Leadership"
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Speakers */}
                    <div className="bg-white p-10 rounded-2xl shadow-sm">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        World-Class Speakers
                      </h3>
                      <div className="space-y-8">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-indigo-100 overflow-hidden">
                            <Image
                              src="/Graham.png"
                              alt="Graham Cooke"
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-indigo-600">Graham Cooke</h4>
                            <p className="mt-2 text-gray-600">
                              Internationally renowned speaker and author, known for his unique perspective on walking with God and prophetic ministry. Brilliant Perspectives.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-indigo-100 overflow-hidden">
                            <Image
                              src="/Ray.png"
                              alt="Ray Higdon"
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-indigo-600">Ray Higdon</h4>
                            <p className="mt-2 text-gray-600">
                              Speaker, Author and transformative leader specializing in mindset and personal development. Higdon Group.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-indigo-100 overflow-hidden">
                            <Image
                              src="/Dionne.jpg"
                              alt="Dionne van Zyl"
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-indigo-600">Dionne van Zyl</h4>
                            <p className="mt-2 text-gray-600">
                              Gifted minister and teacher, bringing fresh insights into spiritual growth and transformation. Brilliant Perspectives.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    <div className="flex flex-col bg-white p-8 rounded-2xl shadow-sm">
                      <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white text-sm">01</span>
                        Embracing Your New Self in God
                      </dt>
                      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                        <p className="flex-auto">Begin your journey by discovering how deeply God delights in you. Break free from performance-based relationship and step into the joy of being His beloved. Experience the transformative power of seeing yourself through His eyes of love.</p>
                      </dd>
                    </div>

                    <div className="flex flex-col bg-white p-8 rounded-2xl shadow-sm">
                      <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white text-sm">02</span>
                        Embracing a New Way of Living with God
                      </dt>
                      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                        <p className="flex-auto">Learn the art of living from His presence rather than for His presence. Discover practical ways to recognize and respond to His voice in every moment. Transform occasional encounters into continuous communion.</p>
                      </dd>
                    </div>

                    <div className="flex flex-col bg-white p-8 rounded-2xl shadow-sm">
                      <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white text-sm">03</span>
                        Embrace a New Way of Learning with God
                      </dt>
                      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                        <p className="flex-auto">Step into a lifestyle of continuous wonder and delight. Embrace the adventure of walking with God in every circumstance. Learn to see challenges as opportunities for deeper intimacy and discover the joy of partnering with Him in your everyday life.</p>
                      </dd>
                    </div>
                  </dl>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Your Success Is Our Priority</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Equipped for Excellence
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide you with everything needed to succeed - from exclusive podcast content and promotional materials to personalized support and real-time tracking. Our comprehensive program ensures you have the tools and resources to maximize both impact and earnings.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none">
              {/* First Two Steps */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col bg-white p-10 rounded-2xl shadow-sm">
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                    <RocketLaunchIcon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {steps[0].name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{steps[0].description}</p>
                    <ul className="mt-8 space-y-3">
                      {steps[0].features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <span className="h-2 w-2 bg-indigo-600 rounded-full mt-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>

                <div className="flex flex-col bg-white p-10 rounded-2xl shadow-sm">
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                    <RocketLaunchIcon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {steps[1].name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{steps[1].description}</p>
                    <ul className="mt-8 space-y-3">
                      {steps[1].features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <span className="h-2 w-2 bg-indigo-600 rounded-full mt-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </div>

              {/* Third Step - Full Width */}
              <div className="flex flex-col bg-gradient-to-br from-indigo-50 via-white to-indigo-50 p-10 rounded-2xl shadow-lg border border-indigo-100 mt-8">
                <dt className="flex items-center gap-x-3 text-xl font-bold leading-7 text-indigo-900">
                  <AcademicCapIcon className="h-6 w-6 flex-none text-indigo-600" aria-hidden="true" />
                  {steps[2].name}
                </dt>
                <dd className="mt-6 flex flex-auto flex-col">
                  <p className="flex-auto text-lg leading-8 text-indigo-900">{steps[2].description}</p>
                  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps[2].features.map((feature) => (
                      <div key={feature} className="flex items-center gap-x-3 bg-white/80 p-4 rounded-xl">
                        <span className="h-3 w-3 bg-indigo-600 rounded-full flex-shrink-0" />
                        <span className="text-base font-medium text-indigo-900">{feature}</span>
                      </div>
                    ))}
                  </div>
                </dd>
              </div>
            </dl>

            <div className="mt-16">
              <EarningsCalculator />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section - Full Width */}
      <section className="relative isolate bg-black">
        <div className="mx-auto px-6 py-32 sm:py-40 lg:py-52 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-x-16 gap-y-20 lg:grid-cols-2 lg:items-center">
              {/* Left Column */}
              <div className="lg:pr-12">
                <h2 className="text-base font-semibold leading-7 text-indigo-400">Join Our Program</h2>
                <p className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                  Ready to Start Earning?
                </p>
                <p className="mt-8 text-lg leading-8 text-gray-300">
                  Don&apos;t miss this opportunity to create significant income while making a lasting impact. Reach out now to secure your position as a Brilliance25 affiliate partner.
                </p>
                <div className="mt-12 space-y-4">
                  <div className="flex items-center text-lg text-indigo-200">
                    <span className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full mr-3" />
                    Earn $97 per ticket registration
                  </div>
                  <div className="flex items-center text-lg text-indigo-200">
                    <span className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full mr-3" />
                    Plus $1,000 for every BSOL enrollment
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:pl-12 lg:border-l lg:border-white/10">
                <div className="max-w-xl lg:ml-auto">
                  <div className="relative rounded-3xl bg-gray-900/80 p-12">
                    <div className="text-center mb-8">
                      <p className="text-xl font-semibold text-indigo-400">Contact Now to Get Started</p>
                      <h3 className="mt-4 text-4xl font-bold text-white">Matt Higham</h3>
                      <p className="mt-4 text-2xl text-indigo-200">Marketing and Technology Director<br />Brilliant Perspectives</p>
                    </div>
                    
                    <div className="mt-12 space-y-8 text-center">
                      {!showContact ? (
                        <button
                          onClick={() => setShowContact(true)}
                          className="block w-full text-3xl font-medium text-white hover:text-indigo-400 transition-colors bg-indigo-600/20 rounded-lg py-4 px-6"
                        >
                          Click to Reveal Contact Information
                        </button>
                      ) : (
                        <>
                          <a 
                            href="tel:530-488-9518" 
                            className="block text-3xl font-medium text-white hover:text-indigo-400 transition-colors"
                          >
                            530-488-9518
                          </a>
                          <a 
                            href="mailto:Matt@brilliantperspectives.com" 
                            className="block text-3xl font-medium text-white hover:text-indigo-400 transition-colors"
                          >
                            Matt@brilliantperspectives.com
                          </a>
                        </>
                      )}
                    </div>
                    <p className="mt-12 text-center text-indigo-200 text-xl">
                      Let's discuss how you can become part of this exclusive program
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 