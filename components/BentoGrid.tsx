import { StarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function BentoGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Hero Section */}
        <div className="md:col-span-3 bento-card bg-[url('/hero-food.jpg')] bg-cover bg-center relative overflow-hidden min-h-[300px] sm:min-h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
          <div className="relative p-6 sm:p-8 lg:p-12 h-full flex items-center">
            <div className="w-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="space-y-4 sm:space-y-6 max-w-xl">
                  <div className="flex flex-wrap gap-2">
                    <span className="category-tag">Street Food</span>
                    <span className="category-tag">Fine Dining</span>
                    <span className="category-tag">Casual</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    Descubre los <br />
                    <span className="text-food-yellow">Mejores Sabores</span><br />
                    de la Ciudad
                  </h1>
                  <p className="text-text-secondary text-sm sm:text-base max-w-md">
                    Explora reseñas auténticas de los restaurantes más emocionantes
                  </p>
                  <button className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base">
                    <MapPinIcon className="w-5 h-5" />
                    Explorar Cerca
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Review */}
        <div className="bento-card md:col-span-2">
          <div className="flex flex-col h-full">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:items-center mb-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">La Taberna Urbana</h3>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rating-badge">
                    <StarIcon className="w-4 h-4" />
                    4.8
                  </span>
                  <span className="text-sm text-text-secondary">
                    Fusión Mediterránea
                  </span>
                </div>
              </div>
              <span className="text-xs text-text-secondary">Hace 2 días</span>
            </div>
            <p className="text-text-secondary text-sm sm:text-base mb-4">
              "Una experiencia gastronómica única que combina sabores tradicionales
              con técnicas modernas. El pulpo a la brasa es imprescindible."
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-auto">
              <div className="relative h-20 sm:h-24 rounded-lg overflow-hidden">
                <Image
                  src="/dish-1.jpg"
                  alt="Plato 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-20 sm:h-24 rounded-lg overflow-hidden">
                <Image
                  src="/dish-2.jpg"
                  alt="Plato 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-20 sm:h-24 rounded-lg overflow-hidden hidden sm:block">
                <Image
                  src="/dish-3.jpg"
                  alt="Plato 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bento-card bg-accent/10">
          <div className="flex flex-col h-full">
            <h3 className="text-base sm:text-lg font-bold mb-4">Esta Semana</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-accent">24</p>
                <p className="text-xs sm:text-sm text-text-secondary">Nuevas Reseñas</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-food-yellow">12</p>
                <p className="text-xs sm:text-sm text-text-secondary">Nuevos Spots</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}