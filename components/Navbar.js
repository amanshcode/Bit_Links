import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-purple-700 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-3">

        {/* Logo */}
        <div className="font-bold text-2xl mb-3 md:mb-0">
          <Link href="/">BitLinks</Link>
        </div>

        {/* Navigation */}
        <ul className="flex flex-wrap justify-center items-center gap-4">
          <Link href="/"><li>Home</li></Link>
          <Link href="/about"><li>About</li></Link>
          <Link href="/shorten"><li>Shorten</li></Link>
          <Link href="/contact"><li>Contact Us</li></Link>

          <li className="flex gap-3">
            <Link href="/shorten">
              <button className="bg-purple-500 rounded-lg shadow-lg px-3 py-1 font-bold cursor-pointer">
                Try Now
              </button>
            </Link>

            <Link href="https://github.com/amanshcode">
              <button className="bg-purple-500 rounded-lg shadow-lg px-3 py-1 font-bold cursor-pointer">
                GitHub
              </button>
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar