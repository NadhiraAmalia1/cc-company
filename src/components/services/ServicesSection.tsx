// src/components/services/ServicesSection.tsx 
import ServiceCard from './ServiceCard'

const services = [ 
    { title: 'Studio Photography', 
      description: 'Perfect lighting and backdrop for your portrait or commercial needs.', 
     price: 'Rp500.000 / session', 
     image: '/assets/studio-photo.jpg', }, 
     { title: 'Outdoor Photoshoot', 
        description: 'Capture beautiful moments in natural surroundings.', 
        price: 'Rp750.000 / session', image: '/assets/outdoor-photo.jpg', }, 
        { title: 'Wedding Photography', description: 'Preserve your special day with our professional coverage.', price: 'Rp2.000.000 / day', image: '/services/wedding.jpg', }, { title: 'Product Photoshoot', description: 'High-quality shots to make your product shine.', price: 'Rp600.000 / session', image: '/services/product.jpg', }, ]

export default function ServicesSection() { 
    return ( 
    <section className="bg-black text-white py-20 px-6"> 
    <div className="max-w-6xl mx-auto"> 
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2> 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"> {services.map((service, index) => 
        ( <ServiceCard key={index} {...service} /> ))} </div> </div> </section> ) }