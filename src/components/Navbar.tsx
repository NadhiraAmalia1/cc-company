'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Teams', href: '/teams' },
  { name: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold tracking-wider">capturie.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`hover:text-gray-300 transition-all ${
                pathname === link.href
                  ? 'text-white font-semibold underline underline-offset-4'
                  : ''
              }`}
            >
              {link.name}
            </Link>
          ))}

          {user ? (
            <>
              <span className="text-sm text-gray-300">
                {user.email} ({user.role})
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-all"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden px-6 pt-4 pb-6 flex flex-col gap-4 bg-black/90 text-white"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg hover:text-gray-300 ${
                  pathname === link.href
                    ? 'text-white font-semibold underline underline-offset-4'
                    : ''
                }`}
              >
                {link.name}
              </Link>
            ))}

            {user ? (
              <>
                <span className="text-sm text-gray-300">
                  {user.email} ({user.role})
                </span>
                <button
                  onClick={() => {
                    handleLogout()
                    setIsOpen(false)
                  }}
                  className="mt-2 px-4 py-2 rounded-full border border-white text-center hover:bg-white hover:text-black"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-4 py-2 rounded-full border border-white text-center hover:bg-white hover:text-black"
              >
                Login
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}