'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setIsLoading(true)
  //   setError('')

  //   const { error } = await supabase.auth.signInWithPassword({
  //     email,
  //     password
  //   })

  //   if (error) {
  //     setError('Credenciales inválidas')
  //     setIsLoading(false)
  //   } else {
  //     router.push('/admin')
  //   }
  // }

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-food-yellow mb-2">FOODIE Admin</h1>
          <p className="text-text-secondary">Inicia sesión para continuar</p>
        </div>

        <form 
        // onSubmit={handleLogin} 
        className="bento-card space-y-4">
          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-primary border border-white/10 
                       focus:border-food-yellow focus:outline-none focus:ring-1 focus:ring-food-yellow"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-1">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-primary border border-white/10 
                       focus:border-food-yellow focus:outline-none focus:ring-1 focus:ring-food-yellow"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn-primary bg-food-yellow hover:bg-food-yellow/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>
      </div>
    </div>
  )
}