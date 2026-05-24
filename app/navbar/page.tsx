import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
<nav className="w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold"
        >
          MyApp
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
