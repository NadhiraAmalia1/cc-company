// src/components/services/ServiceTestimonial.tsx 
'use client'

import { useState } from 'react' 
import { motion } from 'framer-motion'

type Testimonial = { name: string; service: string; quote: string }

const testimonials: Testimonial[] = [ { name: 'Aulia', service: 'Studio Photography', quote: 'The lighting and direction were spot on! Loved the results.', }, { name: 'Reza', service: 'Wedding Photography', quote: 'Captiera captured every moment beautifully on our big day!', }, { name: 'Mira', service: 'Product Photoshoot', quote: 'They made our brand look premium. Highly recommend!', }, { name: 'Tania', service: 'Outdoor Photoshoot', quote: 'Fun shoot and stunning outdoor locations. Will book again!', }, { name: 'Dika', service: 'Wedding Photography', quote: 'Our wedding album turned out magical. Thanks Captiera!', }, { name: 'Nadya', service: 'Studio Photography', quote: 'Perfectly captured every detail. Great lighting too.', }, ]

export default function ServiceTestimonial() { const [index, setIndex] = useState(0)

const next = () => { if (index + 3 < testimonials.length) setIndex(index + 3) }

const prev = () => { if (index - 3 >= 0) setIndex(index - 3) }

return ( <section className="bg-zinc-950 text-white py-20 px-6"> <div className="max-w-5xl mx-auto text-center"> <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>

<div className="grid md:grid-cols-3 gap-6 mb-8">
      {testimonials.slice(index, index + 3).map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="bg-gray-800 p-6 rounded-xl shadow-md"
        >
          <p className="text-teal-400 font-semibold mb-1">{t.service}</p>
          <blockquote className="text-gray-300 italic mb-2">“{t.quote}”</blockquote>
          <p className="text-gray-500 text-sm">— {t.name}</p>
        </motion.div>
      ))}
    </div>

    <div className="flex justify-center gap-4">
      <button
        onClick={prev}
        className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm disabled:opacity-30"
        disabled={index === 0}
      >
        Previous
      </button>
      <button
        onClick={next}
        className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm disabled:opacity-30"
        disabled={index + 3 >= testimonials.length}
      >
        Next
      </button>
    </div>
  </div>
</section>

) }