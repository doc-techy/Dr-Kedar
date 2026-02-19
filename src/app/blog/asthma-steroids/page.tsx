'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionBackground from '@/components/SectionBackground'
import { useTheme } from '@/contexts/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'

export default function AsthmaSteroidsBlogPost() {
  const { isDarkMode } = useTheme()
  
  return (
    <div className={`min-h-screen relative ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <SectionBackground variant="gradient" />
      
      {isDarkMode && (
        <>
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-500/40 to-purple-600/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-tr from-teal-500/40 to-cyan-600/40 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-500/40 to-rose-600/40 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-1/3 w-40 h-40 bg-gradient-to-br from-indigo-500/40 to-blue-600/40 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </>
      )}
      
      <Header />
      
      <main className={`relative pt-32 pb-20 ${isDarkMode ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/blog"
            className={`inline-flex items-center mb-8 transition-colors ${
              isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
            }`}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Article Header */}
          <div className="mb-12">
            <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Steroids in Asthma: What Really Matters
            </h1>
            <div className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <p className="mb-4">
                Steroids are central to asthma treatment, yet they are often misunderstood. The confusion usually arises from not distinguishing between inhaled steroids and oral steroids. While both have a role in asthma care, they are not the same in dose, action, or safety profile.
              </p>
              <p>
                Here are four important differences that every patient should understand.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto">
            <Image
              src="/images/astma2.jpeg"
              alt="Steroids in Asthma: What Really Matters"
              width={800}
              height={533}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Main Content */}
          <div className={`prose prose-base max-w-none ${
            isDarkMode 
              ? 'prose-invert prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-li:text-gray-300' 
              : 'prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-li:text-gray-700'
          }`}>
            
            {/* Point 1 */}
            <section className="mb-12">
              <h2 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                1. The Dose Is Very Different
              </h2>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                The amount of steroid delivered through an inhaler is extremely small compared to oral tablets.
              </p>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                A typical inhaled steroid dose may be around 200 micrograms (mcg), whereas oral steroids are prescribed in milligram (mg) doses — often 30–40 mg during exacerbations. This difference in dosing matters. Inhaled steroids use minimal medication to achieve maximum local benefit, which is one reason they are preferred for long-term control.
              </p>
            </section>

            {/* Point 2 */}
            <section className="mb-12">
              <h2 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                2. They Work Faster
              </h2>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Inhaled steroids begin acting within minutes (often under 10 minutes) because they reach the lungs directly.
              </p>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Oral steroids must first be absorbed into the bloodstream and then distributed through the body, which means they generally take 3–4 hours to begin working. For day-to-day asthma control, quicker onset through inhalation offers a clear advantage.
              </p>
            </section>

            {/* Point 3 */}
            <section className="mb-12">
              <h2 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                3. Targeted vs Systemic Action
              </h2>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Asthma is a disease of the lungs.
              </p>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Inhaled steroids are delivered directly into the airways — exactly where inflammation exists. Oral steroids, on the other hand, enter the bloodstream and are distributed to multiple organs, even those that do not require treatment.
              </p>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Targeted therapy allows effective control while limiting unnecessary exposure to the rest of the body.
              </p>
            </section>

            {/* Point 4 */}
            <section className="mb-12">
              <h2 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                4. Side Effects: Very Different Profiles
              </h2>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Inhaled steroids are generally very safe. The two side effects to be mindful of are:
              </p>
              <ul className={`list-disc list-inside space-y-2 text-sm ml-4 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Oral ulcers — prevented by gargling after use and by using a spacer</li>
                <li>Change in voice (hoarseness) — uncommon and usually corrected by adjusting the formulation or technique</li>
              </ul>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Long-term oral steroid use, however, may lead to more significant systemic effects such as:
              </p>
              <ul className={`list-disc list-inside space-y-2 text-sm ml-4 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Raises blood pressure</li>
                <li>Increased blood sugars</li>
                <li>Causes bone loss (osteoporosis)</li>
                <li>Salt and water retention</li>
              </ul>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                That said, short courses of oral steroids during asthma exacerbations — when prescribed appropriately — can be life-saving. The key is proper indication, dose, and duration under medical supervision.
              </p>
            </section>

            {/* Practical Reminder */}
            <section className={`mb-12 p-8 rounded-2xl ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-400/30' 
                : 'bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200'
            }`}>
              <h2 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                A Practical Reminder
              </h2>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Steroids, whether inhaled or oral, should always be used as prescribed. Never start, stop, or alter doses without medical advice. During worsening symptoms, consult your doctor before using steroids or antibiotics.
              </p>
              <p className={`text-sm font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                When used correctly, inhaled steroids remain the safest and most effective foundation for long-term asthma control.
              </p>
            </section>
          </div>

          {/* Call to Action */}
          <div className={`mt-16 text-center p-8 rounded-2xl ${
            isDarkMode 
              ? 'bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-400/30' 
              : 'bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200'
          }`}>
            <h3 className={`text-lg font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Need Help Managing Your Asthma?
            </h3>
            <p className={`text-sm mb-6 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Schedule a consultation to discuss your asthma management and personalized treatment plan
            </p>
            <Link
              href="/book-appointment"
              className="inline-block bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 text-white px-8 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-lg"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
