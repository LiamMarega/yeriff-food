import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { login } from './actions'


export default function AdminLogin() {


  
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-food-yellow mb-2">FOODIE Admin</h1>
          <p className="text-text-secondary">Inicia sesión para continuar</p>
        </div>

        <form 
        className="bento-card space-y-4">
          

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">
              Email
            </label>
            <input
              id="email" name="email" type="email" required
              className="w-full px-4 py-2 rounded-lg bg-primary border border-white/10 
                       focus:border-food-yellow focus:outline-none focus:ring-1 focus:ring-food-yellow"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-1">
              Contraseña
            </label>
            <input
              id="password" name="password" type="password" required
              className="w-full px-4 py-2 rounded-lg bg-primary border border-white/10 
                       focus:border-food-yellow focus:outline-none focus:ring-1 focus:ring-food-yellow"
            />
          </div>

          <button
            type="submit"
            formAction={login}
            className="w-full btn-primary bg-food-yellow hover:bg-food-yellow/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
          </button>
        </form>
      </div>
    </div>
  )
}