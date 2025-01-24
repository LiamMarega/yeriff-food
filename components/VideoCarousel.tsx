'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PlayIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const videoReviews = [
  {
    id: 1,
    thumbnail: '/review-1.jpg',
    title: 'El Rincón del Chef',
    description: 'Un viaje por los sabores de la cocina mediterránea',
    duration: '3:45',
    author: 'María Foodie',
    rating: 4.8
  },
  {
    id: 2,
    thumbnail: '/review-2.jpg',
    title: 'Sushi Master',
    description: 'La mejor experiencia japonesa en la ciudad',
    duration: '4:20',
    author: 'Carlos Gourmet',
    rating: 4.9
  },
  {
    id: 3,
    thumbnail: '/review-3.jpg',
    title: 'La Trattoria',
    description: 'Pasta artesanal y pizzas al horno de leña',
    duration: '5:15',
    author: 'Ana Delights',
    rating: 4.7
  }
]

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [visibleVideos, setVisibleVideos] = useState(3)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    updateVisibleVideos()
    window.addEventListener('resize', updateVisibleVideos)
    return () => window.removeEventListener('resize', updateVisibleVideos)
  }, [])

  const updateVisibleVideos = () => {
    if (window.innerWidth >= 1024) {
      setVisibleVideos(3) // Desktop
    } else if (window.innerWidth >= 768) {
      setVisibleVideos(2) // Tablet
    } else {
      setVisibleVideos(1) // Mobile
    }
  }

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videoReviews.length)
  }

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videoReviews.length) % videoReviews.length)
  }

  if (!mounted) {
    return null // Evita el renderizado inicial en el servidor
  }

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Video Reseñas</h2>
            <p className="text-text-secondary text-sm sm:text-base">
              Explora nuestras últimas reseñas en video
            </p>
          </div>
          <div className="flex gap-2 self-end sm:self-auto">
            <button
              onClick={prevVideo}
              className="p-2 rounded-full bg-primary hover:bg-food-yellow hover:text-primary transition-colors"
              aria-label="Anterior video"
            >
              <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextVideo}
              className="p-2 rounded-full bg-primary hover:bg-food-yellow hover:text-primary transition-colors"
              aria-label="Siguiente video"
            >
              <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        <div ref={containerRef} className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[...Array(visibleVideos)].map((_, i) => {
              const videoIndex = (currentIndex + i) % videoReviews.length
              const video = videoReviews[videoIndex]
              return (
                <motion.div
                  key={`${video.id}-${i}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="bento-card group cursor-pointer"
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayIcon className="w-12 h-12 sm:w-16 sm:h-16 text-food-yellow" />
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/75 text-white text-xs sm:text-sm px-2 py-1 rounded">
                      {video.duration}
                    </span>
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-base sm:text-lg font-bold">{video.title}</h3>
                      <span className="rating-badge text-xs sm:text-sm">
                        ★ {video.rating}
                      </span>
                    </div>
                    <p className="text-text-secondary text-xs sm:text-sm mb-2">
                      {video.description}
                    </p>
                    <p className="text-food-yellow text-xs sm:text-sm">
                      {video.author}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}