'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { 
  HomeIcon, 
  BuildingStorefrontIcon,
  StarIcon,
  PhotoIcon,
  TagIcon,
  ArrowLeftOnRectangleIcon 
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // useEffect(() => {
  //   const checkAuth = async () => {
      
  //     if (!session) {
  //       router.push('/admin/login')
  //     } else {
  //       setIsLoading(false)
  //     }
  //   }

  //   checkAuth()
  // }, [router, supabase])

  // const handleSignOut = async () => {
  //   await supabase.auth.signOut()
  //   router.push('/admin/login')
  // }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-food-yellow"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-primary flex">
      {/* Sidebar */}
      <aside className="w-64 bg-secondary border-r border-white/5">
        <div className="h-16 flex items-center px-6 border-b border-white/5">
          <Link href="/admin" className="text-xl font-bold text-food-yellow">
            FOODIE Admin
          </Link>
        </div>
        <nav className="p-4 space-y-2">
          <Link
            href="/admin"
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 text-text-secondary hover:text-white transition-colors"
          >
            <HomeIcon className="w-5 h-5" />
            Dashboard
          </Link>
          <Link
            href="/admin/restaurants"
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 text-text-secondary hover:text-white transition-colors"
          >
            <BuildingStorefrontIcon className="w-5 h-5" />
            Restaurantes
          </Link>
          <Link
            href="/admin/reviews"
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 text-text-secondary hover:text-white transition-colors"
          >
            <StarIcon className="w-5 h-5" />
            Reseñas
          </Link>
          <Link
            href="/admin/media"
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 text-text-secondary hover:text-white transition-colors"
          >
            <PhotoIcon className="w-5 h-5" />
            Media
          </Link>
          <Link
            href="/admin/categories"
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 text-text-secondary hover:text-white transition-colors"
          >
            <TagIcon className="w-5 h-5" />
            Categorías
          </Link>
        </nav>
        <div className="absolute bottom-0 w-64 p-4 border-t border-white/5">
          <button
            // onClick={handleSignOut}
            className="flex items-center gap-2 px-4 py-2 w-full rounded-lg hover:bg-white/5 text-text-secondary hover:text-white transition-colors"
          >
            <ArrowLeftOnRectangleIcon className="w-5 h-5" />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="h-16 bg-secondary border-b border-white/5"></div>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}