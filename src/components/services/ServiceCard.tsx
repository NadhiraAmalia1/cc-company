import Image from 'next/image'

type Props = {
  title: string
  description: string
  price: string
  image: string
}

export default function ServiceCard({ title, description, price, image }: Props) {
  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-teal-500/30 transition duration-300">
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <p className="text-teal-400 font-semibold text-lg">{price}</p>
      </div>
    </div>
  )
}