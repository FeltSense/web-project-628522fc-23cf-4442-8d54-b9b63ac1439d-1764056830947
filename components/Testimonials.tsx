'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "The attention to detail and professionalism exceeded all expectations. Our dream home became a reality thanks to their exceptional service.",
      author: "Victoria Chen",
      role: "Luxury Home Buyer",
      location: "Beverly Hills, CA",
      avatar: "https://i.pravatar.cc/150?img=47"
    },
    {
      id: 2,
      quote: "Unparalleled expertise in the luxury market. They understood our vision and delivered beyond what we imagined possible.",
      author: "Marcus Wellington",
      role: "Estate Investor",
      location: "Manhattan, NY",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
      id: 3,
      quote: "A seamless experience from start to finish. Their dedication to excellence is evident in every interaction.",
      author: "Isabelle Rousseau",
      role: "Property Developer",
      location: "Miami Beach, FL",
      avatar: "https://i.pravatar.cc/150?img=32"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">Client Stories</span>
          </div>
          <h2 className="text-5xl font-light text-slate-800 mb-4">Testimonials</h2>
          <div className="w-24 h-px bg-amber-600 mx-auto"></div>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-12 rounded-sm shadow-lg border-t-4 border-amber-600 transition-all duration-500">
            <div className="flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="mb-8 relative">
                <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-amber-600/20">
                  <Image
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].author}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Quote */}
              <svg className="w-12 h-12 text-amber-600/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <p className="text-2xl font-light text-slate-700 italic mb-8 leading-relaxed">
                "{testimonials[activeIndex].quote}"
              </p>

              {/* Author Info */}
              <div>
                <h4 className="text-xl font-semibold text-slate-800 mb-1">
                  {testimonials[activeIndex].author}
                </h4>
                <p className="text-amber-600 text-sm font-medium mb-1">
                  {testimonials[activeIndex].role}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonials[activeIndex].location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 ${
                index === activeIndex
                  ? 'w-12 h-3 bg-amber-600 rounded-full'
                  : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-amber-600/50'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  </button>);
}
