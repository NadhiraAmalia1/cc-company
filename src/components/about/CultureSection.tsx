'use client'

import { motion } from 'framer-motion'

export default function CultureSection() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Culture
        </motion.h2>
        <motion.p
          className="text-gray-400 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          At Captiera, we believe in collaboration, honesty, and bold creativity. We empower each team member to express their artistry while staying rooted in client goals. Our studio is a safe space for experimentation, laughter, and growth.
        </motion.p>
      </div>
    </section>
  )
}