"use client"
import React from 'react';
import Image from 'next/image';
import ContactForm from './ContactForm';

const EnergyLandingHero = () => {
  return (
    <section className="relative min-h-screen bg-slate-50 pt-20 pb-12 overflow-hidden">
      {/* Decorative vertical text sidebar */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center rotate-90 origin-right mr-4 select-none pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.6em] text-slate-300 font-bold whitespace-nowrap">
          Exceptional Service to our clients
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline Section */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-3xl md:text-4xl lg:text-[48px] font-serif text-slate-900 leading-tight mb-6 max-w-[1200px] mx-auto">
            Navigating Global Energy Markets with Confidence and Expert Precision
          </h1>
          <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Left Column: Service Message and List */}
          <div className="w-full lg:w-1/2 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="relative mb-16">
              <div className="absolute -top-6 -left-6 w-20 h-20 border-t-2 border-l-2 border-emerald-200"></div>
              <p className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-800 leading-[1.15] relative z-10 italic">
                "We <span className="text-emerald-700 not-italic font-sans font-bold uppercase tracking-tighter">Provide</span> exceptional service to our clients"
              </p>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 border-b-2 border-r-2 border-emerald-200"></div>
            </div>

            <div className="mt-12 space-y-6">
              <h3 className="text-xl font-serif text-slate-800">Why Investors Choose Bernadette Energy:</h3>
              <ul className="space-y-4">
                {[
                  { title: "Strategic Market Intelligence", desc: "Gain a competitive edge with our deep-dive fundamental and technical analysis across all major energy commodities." },
                  { title: "Risk Management Excellence", desc: "Sophisticated strategies designed to protect capital and capitalize on volatility in complex energy markets." },
                  { title: "Personalized Client Partnership", desc: "Our commitment to delivering exceptional service means we work closely with you to meet your unique financial objectives." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}:</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-24 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-serif text-emerald-800 mb-2">
                  Partner with Us Today
                </h2>
                <p className="text-slate-500 text-sm">
                  Experience the difference of working with market leaders.
                </p>
              </div>
              
              <ContactForm isLeadForm={true} />
              
              <p className="mt-6 text-[10px] text-slate-400 leading-relaxed">
                By submitting this request, I consent that I am over 18 years of age. I also agree to receive occasional communication from Bernadette Energy regarding market insights and specialized services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergyLandingHero;
