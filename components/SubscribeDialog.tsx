'use client'

import { useState } from 'react'
import { EnvelopeIcon, XMarkIcon } from '@heroicons/react/24/solid'

export default function SubscribeDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el email al backend
    setStatus('success')
    setTimeout(() => {
      onClose()
      setStatus('idle')
      setEmail('')
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-secondary max-w-md w-full rounded-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-secondary hover:text-white"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <EnvelopeIcon className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">¡Gracias por suscribirte!</h3>
            <p className="text-text-secondary">
              Te mantendremos informado sobre las mejores ofertas gastronómicas.
            </p>
          </div>
        ) : (
          <>
            <div className="w-16 h-16 bg-food-yellow/10 rounded-full flex items-center justify-center mb-4">
              <EnvelopeIcon className="w-8 h-8 text-food-yellow" />
            </div>
            <h3 className="text-xl font-bold mb-2">¡No te pierdas nada!</h3>
            <p className="text-text-secondary mb-6">
              Suscríbete para recibir las mejores ofertas y recomendaciones gastronómicas de tu ciudad.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-2 rounded-lg bg-primary border border-white/10 
                           focus:border-food-yellow focus:outline-none focus:ring-1 focus:ring-food-yellow"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary bg-food-yellow hover:bg-food-yellow/90"
              >
                Suscribirse
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}