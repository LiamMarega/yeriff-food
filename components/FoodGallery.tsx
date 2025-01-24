'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/solid'

const foodItems = [
  {
    id: 1,
    title: 'Hamburguesa Gourmet',
    image: 'https://hips.hearstapps.com/hmg-prod/images/hamburguesas-elle-gourmet-64d229000db87.jpg?crop=0.603xw:0.906xh;0.341xw,0.0938xh&resize=640:*',
    description: 'Deliciosa hamburguesa con carne premium y vegetales frescos'
  },
  {
    id: 2,
    title: 'Pizza Pepperoni',
    image: 'https://www.novachef.es/media/images/pizza-pepperoni.jpg',
    description: 'Pizza artesanal con pepperoni y queso mozzarella'
  },
  {
    id: 3,
    title: 'Sándwich Especial',
    image: 'https://finde.latercera.com/wp-content/uploads/2018/07/Papachecos-10.jpg',
    description: 'Sándwich gourmet con ingredientes seleccionados'
  }
]

export default function FoodGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const closeFullscreen = () => {
    setSelectedImage(null)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Nuestros Platos Destacados</h2>
        
        {/* Grid de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {foodItems.map((item) => (
            <motion.div
              key={item.id}
              className="bento-card group p-0 cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-black/0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal de pantalla completa */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeFullscreen}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeFullscreen}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors"
                  aria-label="Cerrar imagen"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>

                {foodItems.map((item) => {
                  if (item.id === selectedImage) {
                    return (
                      <div key={item.id} className="relative w-full">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/75 via-black/50 to-transparent">
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-200 text-sm sm:text-base">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    )
                  }
                  return null
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}