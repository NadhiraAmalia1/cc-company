'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Amanda Lee',
    role: 'Creative Director at Nova',
    photo: '/client1.jpg',
    quote:
      'Captiera captured our brand essence perfectly. The results were beyond expectations!',
  },
  {
    name: 'David Kim',
    role: 'CEO of LensCraft',
    photo: '/client2.jpg',
    quote:
      'Working with Captiera was seamless. Their attention to detail is truly top-tier.',
  },
]

export default function TestimonialSection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hear real stories from people who’ve worked with us.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-gray-900 rounded-2xl p-6 text-left shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <p className="text-sm text-gray-300 mb-4 italic">“{t.quote}”</p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src={t.photo} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">{t.name}</h4>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}