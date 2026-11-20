'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionBackground from '@/components/SectionBackground'
import { useTheme } from '@/contexts/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'

export default function TuberculosisBlogPost() {
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
              Tuberculosis (TB): Why Six Months Matters More Than Six Weeks
            </h1>
            <div className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <p className="mb-4">
                TB can frighten patients and carry stigma, but it is a completely curable disease when treatment is taken correctly. Here is what every patient should know before and during treatment.
              </p>
              <p>
                Your 6-point guide to TB treatment.
              </p>
            </div>
          </div>

          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/tb-treatment.jpeg"
              alt="Understanding tuberculosis: a comprehensive guide"
              width={1920}
              height={1080}
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
                1. Get the diagnosis confirmed first
              </h2>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                TB treatment means four powerful antibiotics for months, with potential side effects, so confirm TB before starting. Tests include sputum testing, culture, or a biopsy of the affected site. Other conditions, such as sarcoidosis, can look like TB, so sometimes more tests may be needed.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                2. Give a good sputum sample
              </h2>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Two samples are usually needed: one spot sample and one early-morning sample.
              </p>
              <ul className={`list-disc list-inside space-y-2 text-sm ml-4 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Early-morning sample: brush your teeth first, and have no tea or coffee.</li>
                <li>Spot sample: rinse your mouth first.</li>
                <li>Sit on a chair and take a few quick deep breaths with your mouth.</li>
                <li>Cough deeply and bring up sputum from within the chest, not just saliva.</li>
                <li>Don’t touch the inside of the container.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                3. Know how long treatment lasts
              </h2>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Treatment usually lasts 6 months:
              </p>
              <ul className={`list-disc list-inside space-y-2 text-sm ml-4 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Intensive phase (2 months): 4 drugs</li>
                <li>Continuation phase (4 months): 3 drugs</li>
              </ul>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                TB bacteria grow slowly, which is why treatment takes this long. The shorter 4-month regimens recommended by WHO are not yet part of the national programme, so 6 months remains the standard.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                4. Don’t stop when you feel better
              </h2>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Many people start feeling better by 2–3 weeks, while others take a little longer. That is exactly when the burden of taking four tablets starts to feel heavy. Feeling better doesn’t mean the bacteria are gone. Take every dose until your doctor declares you cured.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                5. Government or private: both work
              </h2>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Government TB treatment is free and the medicines are of good quality. You may also choose private treatment. The choice usually comes down to cost and convenience. For drug-resistant TB, bedaquiline and delamanid are available only through the government programme, so use it.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                6. Drug-resistant TB is largely preventable
              </h2>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Resistance can come from catching a resistant strain, or from wrong doses, missed doses or incomplete treatment. Take the right dose, for the right duration.
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
                TB is completely curable. Take every dose, for the full duration, until your doctor says you’re cured.
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
              If you have a cough that lasts more than two weeks, or blood in your sputum, or have been told you have TB, book a consultation for a proper assessment and treatment plan.
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
