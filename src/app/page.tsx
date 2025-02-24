import { Metadata } from 'next'
import About from '@/components/sections/About'
import Audience from '@/components/sections/Audience'
import Features from '@/components/sections/Features'
import Terms from '@/components/sections/Terms'
import Footer from '@/components/layout/Footer'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Brilliance25 Affiliate Program - Partner in Transformation',
  description: 'Join our exclusive affiliate program and earn while helping others discover an extraordinary relationship with God. March 21st-23rd, 2025.',
}

export default function Home() {
  return (
    <div className="relative min-w-[200px]">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-white min-w-[200px]">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-24 pt-32 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <span className="text-base font-semibold leading-7 text-indigo-600 break-words">Partner with Brilliance25</span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl break-words leading-tight">
              Share Transformation, Earn Significantly
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 break-words">
              Join our exclusive affiliate program and earn $97 per ticket registration plus $1,000 for every conversion to Brilliant School of Leadership at the event. Partner with Brilliance25 - a transformative 3-day virtual experience with Graham Cooke + Team.
            </p>
            <p className="mt-4 text-base sm:text-lg font-semibold text-indigo-600 break-words">
              Event Date: March 21st-23rd, 2025 | $97 per Ticket + $1,000 Brilliant School of Leadership (BSOL) Enrollment Bonus
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6">
              <a
                href="#contact"
                className="w-full sm:w-auto rounded-md bg-indigo-600 px-4 sm:px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-center"
              >
                Become an Affiliate Partner
              </a>
              <a 
                href="https://brilliance25.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto text-base font-semibold leading-6 text-gray-900 text-center"
              >
                Learn about the event <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </section>

      {/* Affiliate Program Section */}
      <Features />

      {/* About Section */}
      <About />

      {/* Target Audience Section */}
      <Audience />

      {/* Resources Section */}
      <Terms />

      {/* Contact/Join Program Section */}
      <Contact />

      <Footer />
    </div>
  );
}
