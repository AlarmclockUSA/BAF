'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          <Image
            src="/Brilliant Perspectives_Dark.png"
            alt="Brilliant Perspectives"
            width={200}
            height={60}
            className="h-auto w-auto"
          />
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Brilliance25. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 