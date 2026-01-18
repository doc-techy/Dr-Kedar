'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'

export default function FaqSection() {
  const { isDarkMode } = useTheme()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "So… what exactly is Pulmonology?",
      answer: "Pulmonology is the medical specialty that looks after your lungs and breathing system. As a Pulmonologist, I help patients with problems like breathlessness, chronic cough, asthma, COPD, lung infections, interstitial lung diseases, lung cancer, and more. In short—if it affects your breathing, it falls under Pulmonology.",
    },
    {
      question: "Then who is an Interventional Pulmonologist?",
      answer: "A Pulmonologist who is specially trained to perform advanced procedures using a bronchoscope (a thin camera passed through the airway). These procedures help us diagnose lung diseases accurately, treat airway blockages, and avoid or reduce the need for open surgery. It's a highly specialised area that combines medicine, imaging, and minimally invasive techniques.",
    },
    {
      question: "What kind of procedures do you actually perform?",
      answer: "I perform a range of procedures including bronchoscopy, EBUS-TBNA for diagnosis and staging, removal of airway foreign bodies, airway stenting, heat-based techniques (APC, electrocautery), cryotherapy, medical thoracoscopy, and pleural biopsies. All procedures are done with the goal of maximum benefit and minimum invasiveness.",
    },
    {
      question: "Where can I consult you in Bengaluru?",
      answer: "I practise at multiple centres: Sparsh Hospital (available during the day), Marvel Hospital (Monday, Wednesday, Friday), and ChanRe Veena Rheumatology & Immunology Center (Tuesday, Thursday). Patients commonly visit from Koramangala, Indiranagar, HSR Layout, BTM Layout, and areas around Silk Board Junction.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="pb-16 lg:pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className={`hidden md:block ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-lg max-w-3xl mx-auto`}>
            Find answers to common questions about respiratory health and interventional pulmonology
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {faqs.map((faq, index) => {
            const gradients = [
              { from: 'from-blue-500', to: 'to-cyan-500', border: 'border-blue-500/20' },
              { from: 'from-purple-500', to: 'to-pink-500', border: 'border-purple-500/20' },
              { from: 'from-teal-500', to: 'to-emerald-500', border: 'border-teal-500/20' },
              { from: 'from-indigo-500', to: 'to-blue-500', border: 'border-indigo-500/20' }
            ]
            const gradient = gradients[index]
            const isOpen = openIndex === index

            return (
              <div 
                key={index} 
                className={`${isDarkMode ? 'bg-white/5' : 'bg-white'} border border-black rounded-2xl transition-all duration-300 relative overflow-hidden ${
                  isOpen ? 'shadow-2xl' : 'hover:-translate-y-1 hover:shadow-2xl'
                }`}
              >
                {/* Gradient overlay when open */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient.from} ${gradient.to} ${isOpen ? 'opacity-10' : 'opacity-0'} transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Question Header - Clickable */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className={`w-full text-left p-6 pb-4 ${isOpen ? 'pb-4' : ''} focus:outline-none md:focus:ring-2 md:focus:ring-inset ${isDarkMode ? 'md:focus:ring-blue-500/50' : 'md:focus:ring-blue-500'}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className={`text-base sm:text-lg font-bold flex-1 ${isDarkMode ? 'text-white' : 'text-gray-900'} ${
                        isOpen ? `text-transparent bg-gradient-to-r ${gradient.from} ${gradient.to} bg-clip-text` : ''
                      } transition-all duration-300`}>
                        {faq.question}
                      </h3>
                      {/* Chevron Icon */}
                      <div className={`flex-shrink-0 mt-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <svg 
                          className={`w-6 h-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  {/* Answer - Collapsible */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className={`px-6 pb-6 pt-0`}>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-sm sm:text-base`}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Read More Link */}
        <div className="text-center">
          <Link 
            href="/faq"
            className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105' 
                : 'bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:shadow-2xl hover:shadow-blue-600/50 hover:scale-105'
            }`}
          >
            Read More FAQs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
