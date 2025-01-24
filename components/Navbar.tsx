'use client'

import { useState } from 'react'
import Link from 'next/link'
import SubscribeDialog from './SubscribeDialog'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <nav className="fixed w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="text-xl font-bold text-food-yellow">
              FOODIE
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/reviews" className="nav-link">
                RESEÑAS
              </Link>
              <Link href="/top-spots" className="nav-link">
                TOP SPOTS
              </Link>
              <Link href="/map" className="nav-link">
                MAPA GASTRO
              </Link>
              <button 
                className="btn-primary bg-food-yellow hover:bg-food-yellow/90"
                onClick={() => setIsDialogOpen(true)}
              >
                Entérate
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Abrir menú</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-secondary/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/reviews"
                className="block px-3 py-2 nav-link"
                onClick={() => setIsOpen(false)}
              >
                RESEÑAS
              </Link>
              <Link
                href="/top-spots"
                className="block px-3 py-2 nav-link"
                onClick={() => setIsOpen(false)}
              >
                TOP SPOTS
              </Link>
              <Link
                href="/map"
                className="block px-3 py-2 nav-link"
                onClick={() => setIsOpen(false)}
              >
                MAPA GASTRO
              </Link>
              <button 
                className="w-full text-left px-3 py-2 btn-primary bg-food-yellow hover:bg-food-yellow/90"
                onClick={() => {
                  setIsOpen(false)
                  setIsDialogOpen(true)
                }}
              >
                Entérate
              </button>
            </div>
          </div>
        )}
      </nav>

      <SubscribeDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </>
  )
}