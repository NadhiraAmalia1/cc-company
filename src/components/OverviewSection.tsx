'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function OverviewSection() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Gambar */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{  opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-64 md:h-80 relative rounded-lg overflow-hidden"
        >
          <img
            src="/assets/about.jpg"
            alt="Capturie behind the scenes"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Teks & Tombol */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Tentang Capturie</h2>
          <p className="text-gray-300 leading-relaxed">
            Capturie is a photography agency that prioritizes visual storytelling.
            We capture important moments—from personal portraits to brand campaigns.
            By combining aesthetics and emotion, we deliver work that transcends words.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Read Article
          </Link>
        </motion.div>
      </div>
    </section>
  )
}