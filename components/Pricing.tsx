'use client';

import { Check, Star, Sparkles } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-slate-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Limited Time Pre-Order Offer
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Exclusive Launch Pricing
          </h2>
          <p className="text-xl text-slate-600">
            Secure your premium membership at a special introductory rate. 
            Join the elite community of luxury real estate professionals.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-200 transform hover:scale-105 transition-all duration-300">
            {/* Premium Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-bl-3xl font-bold text-sm flex items-center gap-1">
              <Star className="w-4 h-4 fill-current" />
              BEST VALUE
            </div>

            <div className="p-10">
              {/* Plan Name */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Founding Member
                </h3>
                <p className="text-slate-600">
                  Lifetime access to premium features
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-start justify-center gap-1 mb-2">
                  <span className="text-3xl font-bold text-slate-800 mt-2">$</span>
                  <span className="text-7xl font-bold text-slate-900">29</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-slate-500 line-through text-lg">$99</span>
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Save 71%
                  </span>
                </div>
                <p className="text-slate-600 mt-2 text-sm">
                  One-time payment • No recurring fees
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {[
                  'Unlimited property listings',
                  'Premium analytics dashboard',
                  'Priority customer support',
                  'Advanced search filters',
                  'Market insights & reports',
                  'Mobile app access',
                  'Exclusive networking events',
                  'Early access to new features'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-amber-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
                className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Pre-Order Now - $29
              </button>

              {/* Trust Indicators */}
              <div className="mt-6 text-center">
                <p className="text-sm text-slate-500 mb-3">
                  🔒 Secure payment powered by Stripe
                </p>
                <div className="flex items-center justify-center gap-4 text-xs text-slate-400">
                  <span>✓ 30-day money back</span>
                  <span>•</span>
                  <span>✓ Instant access</span>
                  <span>•</span>
                  <span>✓ Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-8 text-center">
            <p className="text-slate-600 font-medium mb-3">
              Join <span className="text-amber-600 font-bold">2,847</span> founding members
            </p>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
              ))}
              <span className="ml-2 text-slate-700 font-semibold">4.9/5</span>
              <span className="text-slate-500 ml-1">(1,203 reviews)</span>
            </div>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">
            Have questions about our pricing?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors"
          >
            Contact our sales team
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
