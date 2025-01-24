'use client'

import { useEffect, useState } from 'react'
import {
  BuildingStorefrontIcon,
  StarIcon,
  PhotoIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

type Stats = {
  restaurants: number
  reviews: number
  media: number
  averageRating: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    restaurants: 0,
    reviews: 0,
    media: 0,
    averageRating: 0
  })
  const [isLoading, setIsLoading] = useState(true)
  // const supabase = createClientComponentClient()

  // useEffect(() => {
  //   const fetchStats = async () => {
  //     const [
  //       { count: restaurantsCount },
  //       { count: reviewsCount },
  //       { count: mediaCount },
  //       { data: ratingData }
  //     ] = await Promise.all([
  //       supabase.from('restaurants').select('*', { count: 'exact', head: true }),
  //       supabase.from('reviews').select('*', { count: 'exact', head: true }),
  //       supabase.from('media').select('*', { count: 'exact', head: true }),
  //       supabase.from('reviews').select('rating')
  //     ])

  //     const avgRating = ratingData?.length
  //       ? ratingData.reduce((acc, curr) => acc + curr.rating, 0) / ratingData.length
  //       : 0

  //     setStats({
  //       restaurants: restaurantsCount || 0,
  //       reviews: reviewsCount || 0,
  //       media: mediaCount || 0,
  //       averageRating: Number(avgRating.toFixed(1))
  //     })
  //     setIsLoading(false)
  //   }

  //   fetchStats()
  // }, [supabase])

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-32 bg-secondary rounded-xl mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-24 bg-secondary rounded-xl"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bento-card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-text-secondary text-sm">Restaurantes</p>
              <p className="text-3xl font-bold mt-2">{stats.restaurants}</p>
            </div>
            <div className="p-3 bg-food-yellow/10 rounded-lg">
              <BuildingStorefrontIcon className="w-6 h-6 text-food-yellow" />
            </div>
          </div>
        </div>

        <div className="bento-card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-text-secondary text-sm">Reseñas</p>
              <p className="text-3xl font-bold mt-2">{stats.reviews}</p>
            </div>
            <div className="p-3 bg-food-yellow/10 rounded-lg">
              <StarIcon className="w-6 h-6 text-food-yellow" />
            </div>
          </div>
        </div>

        <div className="bento-card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-text-secondary text-sm">Media</p>
              <p className="text-3xl font-bold mt-2">{stats.media}</p>
            </div>
            <div className="p-3 bg-food-yellow/10 rounded-lg">
              <PhotoIcon className="w-6 h-6 text-food-yellow" />
            </div>
          </div>
        </div>

        <div className="bento-card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-text-secondary text-sm">Rating Promedio</p>
              <p className="text-3xl font-bold mt-2">{stats.averageRating}</p>
            </div>
            <div className="p-3 bg-food-yellow/10 rounded-lg">
              <ChartBarIcon className="w-6 h-6 text-food-yellow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}