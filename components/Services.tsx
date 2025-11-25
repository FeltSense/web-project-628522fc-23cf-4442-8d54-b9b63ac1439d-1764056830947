'use client';

import { Building2, Search, Video, Users } from 'lucide-react';
import { useState } from 'react';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Building2,
      title: 'Luxury Property Showcase',
      description: 'Curated carousel of premium listings with stunning photography and detailed property information.',
      features: ['High-res imagery', '360° views', 'Floor plans']
    },
    {
      icon: Search,
      title: 'Advanced Search Filters',
      description: 'Intelligent search tools to find your perfect property by location, price range, and amenities.',
      features: ['Location mapping', 'Price analytics', 'Custom alerts']
    },
    {
      icon: Video,
      title: 'Virtual Tour Integration',
      description: 'Immersive 3D walkthroughs and interactive galleries that bring properties to life from anywhere.',
      features: ['3D walkthroughs', 'Video tours', 'AR preview']
    },
    {
      icon: Users,
      title: 'Expert Agent Network',
      description: 'Connect with verified luxury real estate professionals who understand your unique needs.',
      features: ['Verified agents', 'Direct messaging', '24/7 support']
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Exceptional Service
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Experience a seamless journey in luxury real estate with our comprehensive suite of premium services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative bg-white rounded-xl p-8 shadow-lg transition-all duration-300 ${
                  isHovered ? 'transform -translate-y-2 shadow-2xl' : ''
                }`}
              >
                {/* Icon Container */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6 transition-all duration-300 ${
                  isHovered ? 'bg-amber-600 scale-110' : 'bg-slate-800'
                }`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Decorative Element */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-600/5 to-transparent rounded-bl-full transition-opacity duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
