'use client'

export default function Contact() {
  return (
    <section id="contact" className="relative isolate bg-black">
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
                Don't miss this opportunity to create significant income while making a lasting impact. Reach out now to secure your position as a Brilliance25 affiliate partner.
              </p>
              <div className="mt-12 space-y-4">
                <div className="flex items-center text-lg text-indigo-200">
                  <span className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full mr-3" />
                  Earn 100% commission on all ticket sales ($97 per registration)
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
  )
} 