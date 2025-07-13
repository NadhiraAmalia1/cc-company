'use client'

import { motion } from 'framer-motion'

export default function CompanyHistorySection() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Story
        </motion.h2>
        <motion.p
          className="text-gray-400 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Captiera began with a vision to create emotional, memorable visuals. From a small creative room to a full-blown agency, our passion for capturing stories has never changed. Our milestones include campaigns for global fashion houses, local brands, and meaningful documentaries.
        </motion.p>
      </div>
    </section>
  )
}