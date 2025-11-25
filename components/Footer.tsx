'use client'

import { Building2, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setTimeout(() => {
      setSubscribed(false)
      setEmail('')
    }, 3000)
  }

  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Ahead of the Market
              </h3>
              <p className="text-gray-400">
                Receive exclusive property listings, market insights, and investment opportunities directly to your inbox.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-600 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-600/30 whitespace-nowrap"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Luxe Estate</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Curating exceptional properties for discerning clients. Your journey to extraordinary living begins here.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-600 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-amber-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Our Services
                </a>
              </li>
              <li>
                <a href="#properties" className="text-gray-400 hover:text-amber-600 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-amber-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Featured Properties
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-amber-600 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-amber-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-amber-600 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-amber-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-amber-600 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-amber-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-600 transition-colors duration-300">
                  Property Sales
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-600 transition-colors duration-300">
                  Luxury Rentals
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-600 transition-colors duration-300">
                  Investment Advisory
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-600 transition-colors duration-300">
                  Property Management
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-600 transition-colors duration-300">
                  Market Analysis
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600 transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 leading-relaxed">
                    123 Luxury Avenue<br />
                    Beverly Hills, CA 90210
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600 transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <a href="tel:+13105551234" className="text-gray-400 hover:text-amber-600 transition-colors">
                    +1 (310) 555-1234
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <a href="mailto:info@luxeestate.com" className="text-gray-400 hover:text-amber-600 transition-colors">
                    info@luxeestate.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Luxe Estate Properties. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-gray-500 hover:text-amber-600 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-500 hover:text-amber-600 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-500 hover:text-amber-600 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
