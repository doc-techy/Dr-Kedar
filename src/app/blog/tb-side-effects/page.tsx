'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionBackground from '@/components/SectionBackground'
import { useTheme } from '@/contexts/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'

export default function TbSideEffectsBlogPost() {
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

          <div className="mb-12">
            <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Worse on TB Treatment? Read This Before You Stop
            </h1>
            <div className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <p className="mb-4">
                TB medicines are strong, and side effects can happen. Most are manageable, and stopping on your own is the one thing that can put your cure at risk. Here is what to expect and what to do.
              </p>
              <p>
                Your 6-point guide to living with TB treatment.
              </p>
            </div>
          </div>

          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/tb-medicines.jpeg"
              alt="Standard TB medicines: rifampicin, ethambutol, pyrazinamide and isoniazid"
              width={1200}
              height={881}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className={`prose prose-base max-w-none ${
            isDarkMode
              ? 'prose-invert prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-li:text-gray-300'
              : 'prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-li:text-gray-700'
          }`}>
            <section className="mb-12">
              <h2 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                1. Know the common side effects
              </h2>
              <ul className={`list-disc list-inside space-y-2 text-sm ml-4 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Rifampicin: nausea, flu-like symptoms, and orange-red urine, sweat and tears. This colour change is expected.</li>
                <li>Isoniazid (INH): tingling or numbness in the hands and feet, rash, liver problems.</li>
                <li>Pyrazinamide: joint pain, nausea.</li>
                <li>Ethambutol: blurred vision or trouble seeing colours.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                2. Don’t stop medicines on your own
              </h2>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                If you notice a side effect, consult your doctor first. Most can be managed without stopping treatment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                3. Watch your liver
              </h2>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                About 4–8% of people develop liver problems from TB medicines. Your doctor will check liver function before starting and again around days 4, 7, 14 and 28 (your schedule may differ). Tell your doctor at once if you have yellow eyes or skin, or nausea and vomiting that continue after the first few days.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                4. Not all TB is contagious
              </h2>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Only sputum-positive lung TB spreads to others. TB of the lymph nodes or other organs is unlikely to. If you have lung TB:
              </p>
              <ul className={`list-disc list-inside space-y-2 text-sm ml-4 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Cover your cough with a mask or kerchief.</li>
                <li>Never spit in the open.</li>
                <li>Keep a distance from children and the elderly.</li>
                <li>Continue these precautions through the whole 2-month intensive phase.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                5. Support your recovery
              </h2>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Eat a nutritious diet, avoid alcohol and smoking, and start gentle walking once you feel up to it. If you have diabetes or HIV, keep them well controlled.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                6. Ask about screening for your family
              </h2>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Close contacts, especially children and the elderly, should talk to a doctor about getting checked.
              </p>
            </section>

            <section className={`mb-12 p-8 rounded-2xl ${
              isDarkMode
                ? 'bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-400/30'
                : 'bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200'
            }`}>
              <h2 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                The Bottom Line
              </h2>
              <p className={`text-sm font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Side effects are common but manageable. If they appear, don’t stop. Get advice and have them managed.
              </p>
            </section>
          </div>

          <div className={`mt-16 text-center p-8 rounded-2xl ${
            isDarkMode
              ? 'bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-400/30'
              : 'bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200'
          }`}>
            <h3 className={`text-lg font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Need Help?
            </h3>
            <p className={`text-sm mb-6 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              If you’re on TB treatment and have side effects, or you’re worried about your liver tests, book a consultation so we can manage them without interrupting your treatment.
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
