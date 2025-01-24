'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CameraIcon } from '@heroicons/react/24/solid'

const photos = [
  {
    id: 1,
    src: '/gallery/dish-1.jpg',
    alt: 'Plato gourmet',
    size: 'large',
    location: 'La Taberna Urbana',
    category: 'Plato Principal'
  },
  {
    id: 2,
    src: '/gallery/ambient-1.jpg',
    alt: 'Interior del restaurante',
    size: 'medium',
    location: 'El Rincón del Chef',
    category: 'Ambiente'
  },
  {
    id: 3,
    src: '/gallery/dish-2.jpg',
    alt: 'Postre artesanal',
    size: 'small',
    location: 'Dulce Pasión',
    category: 'Postre'
  },
  {
    id: 4,
    src: '/gallery/ambient-2.jpg',
    alt: 'Terraza del restaurante',
    size: 'medium',
    location: 'Vista Marina',
    category: 'Ambiente'
  },
  {
    id: 5,
    src: '/gallery/dish-3.jpg',
    alt: 'Entrada gourmet',
    size: 'small',
    location: 'Fusión Oriental',
    category: 'Entrada'
  },
  {
    id: 6,
    src: '/gallery/dish-4.jpg',
    alt: 'Plato principal',
    size: 'large',
    location: 'El Asador',
    category: 'Plato Principal'
  },
  {
    id: 7,
    src: '/gallery/ambient-3.jpg',
    alt: 'Bar del restaurante',
    size: 'medium',
    location: 'Coctelería Moderna',
    category: 'Ambiente'
  },
  {
    id: 8,
    src: '/gallery/dish-5.jpg',
    alt: 'Sushi variado',
    size: 'small',
    location: 'Sushi Master',
    category: 'Plato Principal'
  }
]

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'Plato Principal', 'Entrada', 'Postre', 'Ambiente']

  const filteredPhotos = selectedCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory)

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
              <CameraIcon className="w-8 h-8 text-food-yellow" />
              Galería Gastronómica
            </h2>
            <p className="text-text-secondary text-sm sm:text-base">
              Explora nuestra colección de momentos culinarios
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`category-tag ${
                  selectedCategory === category
                    ? 'bg-food-yellow text-primary'
                    : ''
                }`}
              >
                {category === 'all' ? 'Todos' : category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {filteredPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`bento-card group p-0 ${
                photo.size === 'large' 
                  ? 'col-span-2 row-span-2' 
                  : photo.size === 'medium'
                  ? 'col-span-2'
                  : ''
              }`}
            >
              <div className="relative w-full h-full min-h-[200px]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover rounded-xl sm:rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-black/0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm sm:text-base font-medium text-white mb-1">
                      {photo.location}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-300">
                      {photo.category}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}