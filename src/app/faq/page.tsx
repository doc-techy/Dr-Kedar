'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionBackground from '@/components/SectionBackground'
import { useTheme } from '@/contexts/ThemeContext'

export default function FAQ() {
  const { isDarkMode } = useTheme()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "So… what exactly is Pulmonology?",
      gradient: { from: 'from-blue-500', to: 'to-teal-500', border: 'border-blue-500/20' },
      topBar: 'from-blue-500 via-purple-500 to-teal-500',
      answer: (
        <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-3 leading-relaxed`}>
          <p>Pulmonology is the medical specialty that looks after your lungs and breathing system.</p>
          <p>As a Pulmonologist, I help patients with problems like:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Breathlessness</li>
            <li>Chronic cough</li>
            <li>Asthma and COPD</li>
            <li>Lung infections (including pneumonia and TB)</li>
            <li>Interstitial lung diseases</li>
            <li>Lung nodules and lung cancer</li>
            <li>Fluid around the lungs (pleural effusion)</li>
            <li>Pulmonary embolism and pulmonary hypertension</li>
          </ul>
          <p>In short—if it affects your breathing, it falls under Pulmonology.</p>
        </div>
      )
    },
    {
      question: "Then who is an Interventional Pulmonologist?",
      gradient: { from: 'from-teal-500', to: 'to-cyan-500', border: 'border-teal-500/20' },
      topBar: 'from-teal-500 via-cyan-500 to-blue-500',
      answer: (
        <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-3 leading-relaxed`}>
          <p>Pulmonologist who is specially trained to perform advanced procedures using a bronchoscope (a thin camera passed through the airway).</p>
          <p>These procedures help us:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Diagnose lung diseases accurately</li>
            <li>Treat airway blockages</li>
            <li>Avoid or reduce the need for open surgery</li>
          </ul>
          <p>It's a highly specialised area that combines medicine, imaging, and minimally invasive techniques.</p>
        </div>
      )
    },
    {
      question: "What kind of procedures do you actually perform?",
      gradient: { from: 'from-purple-500', to: 'to-pink-500', border: 'border-purple-500/20' },
      topBar: 'from-purple-500 via-pink-500 to-rose-500',
      answer: (
        <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-4 leading-relaxed`}>
          <p>Good question—and this is where Interventional Pulmonology really helps patients.</p>
          
          <div>
            <h3 className="font-semibold mb-2 text-lg">For diagnosis and staging</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Bronchoscopy</li>
              <li>EBUS-TBNA (ultrasound-guided biopsies for lymph nodes and lung lesions)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-lg">For airway problems</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Removal of airway foreign bodies</li>
              <li>Rigid bronchoscopy</li>
              <li>Airway stenting (silicone and metallic stents)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-lg">For tumours and airway narrowing</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Heat-based techniques like APC and electrocautery</li>
              <li>Cold therapy using cryotherapy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-lg">For pleural (fluid-related) problems</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Medical thoracoscopy (semi-rigid and rigid)</li>
              <li>Pleural biopsies and effusion management</li>
            </ul>
          </div>

          <p>All of these are done with the goal of maximum benefit and minimum invasiveness.</p>
        </div>
      )
    },
    {
      question: "Where can I consult you in Bengaluru?",
      gradient: { from: 'from-indigo-500', to: 'to-blue-500', border: 'border-indigo-500/20' },
      topBar: 'from-indigo-500 via-blue-500 to-cyan-500',
      answer: (
        <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-3 leading-relaxed`}>
          <p>I practise at multiple centres so patients can choose what's most convenient.</p>
          <ul className="space-y-3">
            <li>
              <strong className="font-semibold">Sparsh Hospital</strong> — This is where I am available during the day.
            </li>
            <li>
              <strong className="font-semibold">Marvel Hospital</strong> — Monday, Wednesday and Friday
            </li>
            <li>
              <strong className="font-semibold">ChanRe Veena Rheumatology & Immunology Center</strong> — Tuesday and Thursday
            </li>
          </ul>
        </div>
      )
    },
    {
      question: "Which areas is it easy to reach you from?",
      gradient: { from: 'from-emerald-500', to: 'to-teal-500', border: 'border-emerald-500/20' },
      topBar: 'from-emerald-500 via-teal-500 to-cyan-500',
      answer: (
        <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-3 leading-relaxed`}>
          <p>Patients commonly visit me from: Koramangala, Indiranagar, HSR Layout, BTM Layout, Ejipura, Jayanagar, JP Nagar, Sarjapur Road, Kudulu Gate, and areas around Silk Board Junction.</p>
          <p>If you've searched for a Pulmonologist near Koramangala, lung specialist near Silk Board, or Interventional Pulmonologist in Bengaluru, my clinics are well connected to these areas.</p>
        </div>
      )
    },
    {
      question: "What are your main areas of interest?",
      gradient: { from: 'from-blue-500', to: 'to-indigo-500', border: 'border-blue-500/20' },
      topBar: 'from-blue-500 via-indigo-500 to-purple-500',
      answer: (
        <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-3 leading-relaxed`}>
          <p>I treat all lung diseases, but my special interests include:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Interventional Pulmonology</li>
            <li>Lung cancer diagnosis and staging</li>
            <li>Interstitial lung diseases</li>
            <li>Pulmonary embolism and pulmonary hypertension</li>
            <li>Complex pleural diseases</li>
            <li>Advanced airway disorders</li>
          </ul>
        </div>
      )
    },
    {
      question: "Where did you train?",
      gradient: { from: 'from-cyan-500', to: 'to-blue-500', border: 'border-cyan-500/20' },
      topBar: 'from-cyan-500 via-blue-500 to-indigo-500',
      answer: (
        <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-3 leading-relaxed`}>
          <p>I completed my post-graduation (DNB – Respiratory Diseases) from <strong>St. John's National Academy of Health Sciences, Bengaluru</strong>.</p>
          <p>I then pursued a Fellowship in Interventional Pulmonology & Thoracic Oncology at <strong>Rajiv Gandhi Cancer Institute & Research Centre, New Delhi</strong>.</p>
          <p>I've also trained internationally at:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Serdang Hospital, Malaysia</li>
            <li>National University Hospital, Singapore</li>
            <li>Ruhrlandklinik – West German Lung Center, Essen, Germany</li>
          </ul>
          <p>These experiences shaped how I approach both complex procedures and everyday lung problems.</p>
        </div>
      )
    },
    {
      question: "Where did you practise earlier?",
      gradient: { from: 'from-purple-500', to: 'to-pink-500', border: 'border-purple-500/20' },
      topBar: 'from-purple-500 via-pink-500 to-rose-500',
      answer: (
        <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-3 leading-relaxed`}>
          <p>I spent over 15 years at <strong>Narayana Health – Mazumdar Shaw Medical Center</strong> - I started there as a Junior Consultant later an Interventional Pulmonologist, and had the privilege of setting up the Interventional Pulmonology Unit at the centre.</p>
          <p>In March 2025, I moved to Sparsh Hospital, Hennur Road, where I now serve as Lead – Clinical & Interventional Pulmonologist.</p>
        </div>
      )
    },
    {
      question: "Do you only see complicated cases?",
      gradient: { from: 'from-teal-500', to: 'to-green-500', border: 'border-teal-500/20' },
      topBar: 'from-teal-500 via-green-500 to-emerald-500',
      answer: (
        <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-3 leading-relaxed`}>
          <p>Not at all!</p>
          <p>Many patients come to me for: Persistent cough, breathing difficulty, wheezing etc or with a diagnosis of -</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Asthma and COPD</li>
            <li>Recurrent chest infections</li>
            <li>Post-COVID lung issues</li>
            <li>TB and post-TB lung problems</li>
          </ul>
          <p>Procedures are done only when needed, not by default.</p>
        </div>
      )
    },
    {
      question: "What should I bring for my first visit?",
      gradient: { from: 'from-blue-500', to: 'to-cyan-500', border: 'border-blue-500/20' },
      topBar: 'from-blue-500 via-cyan-500 to-teal-500',
      answer: (
        <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-3 leading-relaxed`}>
          <p>This really helps us use your time well:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>All current medications (or photos of them)</li>
            <li>Old medical records or discharge summaries</li>
            <li>Previous chest X-rays and CT scans</li>
          </ul>
          <p>Comparing old and new reports often changes decisions completely.</p>
        </div>
      )
    },
    {
      question: "Why do you insist on CT scan CDs?",
      gradient: { from: 'from-indigo-500', to: 'to-purple-500', border: 'border-indigo-500/20' },
      topBar: 'from-indigo-500 via-purple-500 to-pink-500',
      answer: (
        <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-3 leading-relaxed`}>
          <p>Because CDs show the entire scan, not just selected images.</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Films show limited cuts</li>
            <li>CDs allow detailed review, comparison, and accurate diagnosis</li>
          </ul>
          <p>This is especially important for ILD, lung nodules, and cancer evaluation.</p>
        </div>
      )
    },
    {
      question: "Do I need a referral to consult you?",
      gradient: { from: 'from-rose-500', to: 'to-pink-500', border: 'border-rose-500/20' },
      topBar: 'from-rose-500 via-pink-500 to-purple-500',
      answer: (
        <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
          <p>No - You can book an appointment directly if you're worried about your lungs or breathing.</p>
        </div>
      )
    },
    {
      question: "When should I not delay seeing a Pulmonologist?",
      gradient: { from: 'from-amber-500', to: 'to-orange-500', border: 'border-amber-500/20' },
      topBar: 'from-amber-500 via-orange-500 to-red-500',
      answer: (
        <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-3 leading-relaxed`}>
          <p>Please don't ignore:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Breathlessness</li>
            <li>Cough lasting more than 3 weeks</li>
            <li>Blood in sputum</li>
            <li>Recurrent pneumonia</li>
            <li>Unexplained weight loss</li>
            <li>Abnormal chest X-ray or CT scan</li>
          </ul>
          <p>Early evaluation almost always means simpler treatment.</p>
        </div>
      )
    },
    {
      question: "Do you manage lung cancer patients?",
      gradient: { from: 'from-red-500', to: 'to-rose-500', border: 'border-red-500/20' },
      topBar: 'from-red-500 via-rose-500 to-pink-500',
      answer: (
        <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
          <p>Yes - I'm involved in diagnosis, staging, airway management, and palliative procedures, working closely with oncology teams when required.</p>
        </div>
      )
    },
  ]
  
  return (
    <div className={`min-h-screen relative ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Uniform background for entire webpage */}
      <SectionBackground variant="gradient" />
      
      {/* Background floating circles for Liquid Glass effect - only in dark mode */}
      {isDarkMode && (
        <>
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-500/40 to-purple-600/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-tr from-teal-500/40 to-cyan-600/40 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-500/40 to-rose-600/40 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-1/3 w-40 h-40 bg-gradient-to-br from-indigo-500/40 to-blue-600/40 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-gradient-to-tr from-purple-500/35 to-pink-500/35 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </>
      )}
      
      <Header />
      
      {/* Main content */}
      <main className={`pt-28 pb-12 sm:py-20 lg:py-32 ${isDarkMode ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4 sm:mb-6 leading-tight`}>
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h1>
            <div className={`hidden md:block ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed space-y-4 max-w-3xl mx-auto text-left`}>
              <p>
                Welcome to the inaugural post of the <strong className="font-semibold text-blue-600 dark:text-blue-400">Lung Focus</strong> Blog! When it comes to respiratory health, we know you have questions. Whether you are dealing with a persistent cough, managing a chronic condition like COPD, or have been referred for an "interventional" procedure, clarity is the first step toward healing.
              </p>
              <p>
                In this FAQ, we address the most common queries our patients have, from what exactly an interventional pulmonologist does to how you can find me across Bengaluru.
              </p>
              <p>
                Let's make lung health simple, clear, and a little less intimidating.
              </p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              const { gradient, topBar } = faq

              return (
                <div 
                  key={index} 
                  className={`${isDarkMode ? 'bg-white/5' : 'bg-white'} border border-black rounded-2xl transition-all duration-300 relative overflow-hidden ${
                    isOpen ? 'shadow-2xl' : ''
                  }`}
                >
                  {/* Gradient overlay when open */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient.from} ${gradient.to} ${isOpen ? 'opacity-10' : 'opacity-0'} transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Question Header - Clickable */}
                    <button
                      onClick={() => toggleFaq(index)}
                      className={`w-full text-left p-4 sm:p-6 pb-4 focus:outline-none md:focus:ring-2 md:focus:ring-inset ${isDarkMode ? 'md:focus:ring-blue-500/50' : 'md:focus:ring-blue-500'}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h2 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold flex-1 ${isDarkMode ? 'text-white' : 'text-gray-900'} ${
                          isOpen ? `text-transparent bg-gradient-to-r ${gradient.from} ${gradient.to} bg-clip-text` : ''
                        } transition-all duration-300 leading-tight`}>
                          {faq.question}
                        </h2>
                        {/* Chevron Icon */}
                        <div className={`flex-shrink-0 mt-0.5 sm:mt-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                          <svg 
                            className={`w-5 h-5 sm:w-6 sm:h-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
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
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Closing Note */}
            <div className={`${isDarkMode ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10' : 'bg-gradient-to-br from-blue-50 to-purple-50'} rounded-2xl p-6 sm:p-8 relative overflow-hidden mt-8 sm:mt-12`}>
              <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  One last thing…
                </span>
              </h2>
              <div className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'} space-y-3 sm:space-y-4 leading-relaxed text-base sm:text-lg`}>
                <p>Breathing problems are often underestimated—but lungs matter every minute of your life.</p>
                <p>If something doesn't feel right, it's worth getting checked.</p>
                <p>
                  You're welcome to book an appointment through <strong className="font-semibold text-blue-600 dark:text-blue-400">LungFocus</strong>, and we'll take it from there—step by step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
