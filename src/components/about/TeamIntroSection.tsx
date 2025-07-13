'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const team = [
  {
    name: 'Livia Tan',
    role: 'Co-Founder & Creative Lead',
    photo: '/meow.jpg',
    bio: 'Leads the visual direction and ensures each shoot reflects Captiera’s signature style.',
  },
  {
    name: 'Aaron Malik',
    role: 'Studio Photographer',
    photo: '/aaron.jpg',
    bio: 'Master of lighting and storytelling through stills.',
  },
]

export default function TeamIntroSection() {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="bg-black border border-gray-700 p-6 rounded-xl text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image src={member.photo} alt={member.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{member.name}</h4>
                  <p className="text-sm text-gray-400">{member.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-300">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}