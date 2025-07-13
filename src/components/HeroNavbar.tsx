'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'

export default function CapturieHero() {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX)
      setMouseY(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0
  const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0

  const offsetX = mouseX - centerX
  const offsetY = mouseY - centerY

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* ✅ Navbar tetap bisa diklik */}
      <Navbar />

      {/* ✅ Bungkus semua background animasi dalam pointer-events-none */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          animate={{ x: offsetX * 0.01, y: offsetY * 0.01 }}
          transition={{ type: 'spring', stiffness: 30 }}
        >
          <Image src="/bg.jpg" alt="BG" fill className="object-cover opacity-80" />
        </motion.div>

        <motion.div
          className="absolute w-72 h-72 top-[10%] left-[15%]"
          animate={{ x: offsetX * 0.03, y: offsetY * 0.03 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <Image src="/assets/camera.png" alt="Light" fill className="object-contain" />
        </motion.div>

        <motion.div
          className="absolute w-64 h-64 top-[40%] left-[20%]"
          animate={{ x: offsetX * 0.04, y: offsetY * 0.04 }}
          transition={{ type: 'spring', stiffness: 60 }}
        >
          <Image src="/assets/camera.png" alt="Camera" fill className="object-contain" />
        </motion.div>

        <motion.div
          className="absolute w-80 h-80 top-[35%] left-[50%]"
          animate={{ x: offsetX * 0.06, y: offsetY * 0.06 }}
          transition={{ type: 'spring', stiffness: 70 }}
        >
          <Image src="/assets/camera.png" alt="Face" fill className="object-contain" />
        </motion.div>
      </div>

      {/* ✅ Bagian teks dan tombol bisa diklik */}
      <div className="absolute z-10 w-full h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wider">capturie.</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">a visual photo agency</p>
      </div>
    </div>
  )
}