'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Creative Direction',
    description: 'We conceptualize your story and bring your vision to life.',
    image: '/assets/creative.jpg',
  },
  {
    title: 'Studio Photography',
    description: 'Professional studio sessions for brands, models, and more.',
    image: '/assets/studio.jpg',
  },
]

export default function ServicesPreview() {
  return (
    <section className="w-full bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We offer creative solutions for brands and individuals to tell their visual stories.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="relative w-full h-56">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/services"
            className="inline-block bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition"
          >
            See All Services
          </Link>
        </div>
      </div>
    </section>
  )
}