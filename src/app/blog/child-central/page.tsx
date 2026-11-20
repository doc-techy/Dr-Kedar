'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionBackground from '@/components/SectionBackground'
import { useTheme } from '@/contexts/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'

export default function ChildCentralBlogPost() {
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
              Complete Pulmonology Care at Child Central, Koramangala
            </h1>
            <div className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <p className="mb-4">
                By Dr Kedar Hibare, Consultant Pulmonologist
              </p>
              <p>
                For over 15 years, Child Central in Koramangala&apos;s 3rd Block has been a trusted name in children&apos;s healthcare. Founded by Dr Jagdish Chinnappa, a paediatrician known for his work in paediatric pulmonology, allergy and sleep medicine, it has grown into an established centre of excellence for paediatric care.
              </p>
            </div>
          </div>

          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/pulmonology-care.jpg"
              alt="Pulmonology care: asthma, COPD, cough, breathlessness and sleep"
              width={1280}
              height={720}
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
                Adult pulmonology at Child Central
              </h2>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Now the centre is expanding into adult pulmonology, and I have started seeing adult patients here. I&apos;m Dr Kedar Hibare, a pulmonologist with over 15 years of experience, including more than a decade at Narayana Health. I now lead Clinical and Interventional Pulmonology at Sparsh Hospital, Hennur Road. At Child Central, I see the full range of adult lung problems: asthma, COPD, allergy, chronic cough, progressive breathlessness, sleep problems, interstitial lung disease, pulmonary vascular disease and pleural disease. Procedures, when needed, are done at Sparsh.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                What to expect at your visit
              </h2>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Every appointment is 20 minutes, so there is time to listen, take a detailed history, examine you and arrange the tests you need. I want you to leave feeling heard, understood and cared for. Please bring your old chest X-rays and CT scans, preferably on a CD, since they hold more images and show how your condition has changed over time. I also teach every patient how to use their inhalers, with videos, because incorrect technique is very common.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                When you should come in
              </h2>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Please don&apos;t wait if you have a cough lasting more than 2–3 weeks, breathlessness that keeps getting worse, blood in your sputum, unexplained weight or appetite loss, or loud snoring with daytime sleepiness. Self-medicating only delays the right diagnosis.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Who this service is for
              </h2>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                The service is for adults over 18. Teenagers between 12 and 18 may be managed together with a paediatrician. A lung function lab offering spirometry, impulse oscillometry and FeNO is coming soon, along with allergy testing. Sleep studies are available through a collaborating centre in HSR Layout. Our hope is to grow into complete pulmonology care at Child Central, for children and adults alike.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                When to visit
              </h2>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Dr Kedar Hibare is available Monday to Friday, 5:00–7:30 PM, preferably by appointment. The consultation fee is ₹1,000. Lung function tests, allergy tests and vaccinations are charged separately. Emergencies can&apos;t be managed at the centre, and patients will be directed to a hospital that can care for them.
              </p>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Book at lungfocus.com, or call 80500 35925 / 080 4093 3525.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                The team at Child Central
              </h2>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Child Central also brings together a wider team under one roof. Dr Chandan Gaddehosur, a paedodontist, leads paediatric dentistry, and Mohandas and his team provide physiotherapy for children. Growing Minds, led by Anagha Pandit, Head of Therapy and Wellbeing, includes Niharika Aravindan (clinical nutritionist and therapist), Deesha Lala (psychologist), Latha Prakash (special educator) and Divya (speech therapist). Dr Akhila Nagaraj, a specialist in paediatric development and behavioural medicine, will be joining soon.
              </p>
            </section>

            <section className={`mb-12 p-8 rounded-2xl ${
              isDarkMode
                ? 'bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-400/30'
                : 'bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200'
            }`}>
              <p className={`text-sm font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Dr Kedar Hibare, Consultant Pulmonologist, Child Central, Koramangala
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
              Book a Visit
            </h3>
            <p className={`text-sm mb-6 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Appointments are Monday to Friday, 5:00–7:30 PM. Call 80500 35925 or 080 4093 3525, or book online.
            </p>
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ38mrlL_bXxaDY5Mz4F7Ka2pdKFlWB1J0KLfLloqJ_rGIEmMMSrwFw_kTd0Ylip4a3de3yG2IDn?gv=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 text-white px-8 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-lg"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
