
import {
  BuildingStorefrontIcon,
  StarIcon,
  PhotoIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

type Stats = {
  restaurants: number
  reviews: number
  media: number
  averageRating: number
}

export default async function AdminDashboard() {

  // const supabase = createClientComponentClient()
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/admin/login')
  }


  return (
    <div>
      <p>Hello {data.user.email} </p>
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bento-card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-text-secondary text-sm">Restaurantes</p>
              {/* <p className="text-3xl font-bold mt-2">{stats.restaurants}</p> */}
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
              {/* <p className="text-3xl font-bold mt-2">{stats.reviews}</p> */}
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
              {/* <p className="text-3xl font-bold mt-2">{stats.media}</p> */}
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
              {/* <p className="text-3xl font-bold mt-2">{stats.averageRating}</p> */}
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