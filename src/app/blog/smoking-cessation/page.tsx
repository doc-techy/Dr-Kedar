'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionBackground from '@/components/SectionBackground'
import { useTheme } from '@/contexts/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'

const benefits = [
  { time: '20 minutes', detail: 'Pulse and blood pressure return to normal.' },
  { time: '8 hours', detail: 'Oxygen levels improve, and nicotine and carbon monoxide fall by over 50%.' },
  { time: '24 hours', detail: 'Carbon monoxide is cleared.' },
  { time: '48 hours', detail: 'Smell and taste return.' },
  { time: '3–9 months', detail: 'Less coughing, and lung function improves by up to 10%.' },
  { time: '1 year', detail: 'Heart disease risk is halved.' },
  { time: '10 years', detail: 'Lung cancer risk is halved.' },
  { time: '15 years', detail: 'Heart disease risk matches a non-smoker’s.' },
]

export default function SmokingCessationBlogPost() {
  const { isDarkMode } = useTheme()

  const heading = `text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`
  const body = `text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`

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
              Quit Smoking: Simple Steps That Really Help
            </h1>
            <div className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <p className="mb-4">
                Smoking causes permanent, irreversible lung damage, to the person who smokes and to everyone who breathes their smoke. Quitting is hard, but the benefits begin within minutes, and a plan works better than willpower alone.
              </p>
            </div>
          </div>

          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/quit-smoking.jpeg"
              alt="When you quit smoking: recovery from 20 minutes to 15 years"
              width={1020}
              height={477}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className={`prose prose-base max-w-none ${
            isDarkMode
              ? 'prose-invert prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-li:text-gray-300'
              : 'prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-li:text-gray-700'
          }`}>
            <h2 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Your 10-Point Guide to Quitting
            </h2>

            <section className="mb-12">
              <h2 className={heading}>1. Set a quit date and tell everyone</h2>
              <p className={body}>
                Tell your family and close relatives. They are the people most likely to support you when your focus slips.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={heading}>2. Know how dependent you are</h2>
              <p className={body}>
                Doctors use the Fagerström test to measure nicotine dependence. If you smoke fewer than 10 cigarettes a day, you usually don’t need medication. Heavier smokers often do.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={heading}>3. Stay away from your triggers</h2>
              <p className={body}>
                That could be your favourite tea stall, a party with alcohol, or a friend who smokes and asks for company. Avoid these in the first few weeks.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={heading}>4. Make smoking inconvenient</h2>
              <ul className={`list-disc list-inside space-y-2 text-sm ml-4 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Buy small quantities, so each cigarette takes an effort to get.</li>
                <li>Keep your lighter and cigarettes apart. Never carry them together.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className={heading}>5. Delay, distract, talk</h2>
              <p className={body}>
                A craving passes if you don’t give in. Drink water, go for a walk, or call someone close who understands that you’re trying to quit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={heading}>6. Don’t use smoking to handle stress</h2>
              <p className={body}>
                It doesn’t solve the problem. It only postpones it. Facing the problem directly works better.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={heading}>7. There is no safe substitute</h2>
              <p className={body}>
                Vaping has its own lung risks, so it isn’t a way to quit. Bidis, hookah and chewing tobacco are just as harmful, and all are linked to COPD and cancer.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={heading}>8. There’s no shame in asking for help</h2>
              <p className={body}>
                Proven options include nicotine replacement (patches or gum), bupropion and varenicline, along with psychological support. A quit-smoking clinic with a doctor and psychologist improves your chances.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={heading}>9. A slip is not a failure</h2>
              <p className={body}>
                People who make more quit attempts are more likely to quit for good. Work out what triggered the slip, then try something different next time.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={heading}>10. It is never too late</h2>
              <p className={body}>
                The benefits start early:
              </p>
              <ul className={`space-y-2 text-sm ml-4 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {benefits.map((item) => (
                  <li key={item.time} className="flex gap-3">
                    <span className={`shrink-0 font-semibold w-28 ${isDarkMode ? 'text-teal-300' : 'text-teal-700'}`}>
                      {item.time}
                    </span>
                    <span>{item.detail}</span>
                  </li>
                ))}
              </ul>
              <p className={body}>
                The benefits come quickly, but the damage takes years to fade, so the earlier you quit, the better.
              </p>
            </section>

            <section className={`mb-12 p-8 rounded-2xl ${
              isDarkMode
                ? 'bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-400/30'
                : 'bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200'
            }`}>
              <h2 className={heading}>Quit for the people around you</h2>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Second-hand smoke affects children’s lung development and can cause poor growth in pregnancy. If there is a child or a pregnancy at home, let that be your reason to quit.
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
              Need help?
            </h3>
            <p className={`text-sm mb-6 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              The Quit Smoking Programme at Child Central, Koramangala is led by a pulmonologist and supported by a psychologist, with a full assessment and a plan made for you. Book a consultation to get started.
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
