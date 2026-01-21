'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionBackground from '@/components/SectionBackground'
import { useTheme } from '@/contexts/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'

export default function AsthmaBlogPost() {
  const { isDarkMode } = useTheme()
  
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
        </>
      )}
      
      <Header />
      
      {/* Main content */}
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
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Asthma Triggers & Simple Precautions That Really Help
            </h1>
            <div className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <p className="mb-4">
                Asthma control is not just about inhalers. It also depends on identifying asthma triggers and taking simple, practical precautions at home and outdoors.
              </p>
              <p>
                Small, consistent lifestyle changes can significantly improve asthma control and reduce flare-ups.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/asthma.jpeg"
              alt="Mastering Asthma Triggers: Your 12-Point Guide"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Introduction */}
          <div className={`mb-12 p-8 rounded-2xl ${
            isDarkMode 
              ? 'bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-400/30' 
              : 'bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200'
          }`}>
            <p className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Here are 12 simple but important precautions every person with asthma should know.
            </p>
          </div>

          {/* Main Content */}
          <div className={`prose prose-lg max-w-none ${
            isDarkMode 
              ? 'prose-invert prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-li:text-gray-300' 
              : 'prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-li:text-gray-700'
          }`}>
            
            {/* Point 1 */}
            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                1. Avoid dust exposure
              </h2>
              <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Dust is one of the most common asthma triggers.
              </p>
              <ul className={`list-disc list-inside space-y-2 text-lg ml-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Use a vacuum cleaner instead of brooming—brooming disturbs settled dust and spreads it into the air.</li>
                <li>Activities like shifting homes, cleaning cupboards, renovation, or painting are well-known asthma triggers due to increased dust exposure.</li>
                <li>If unavoidable, wear a mask and ensure good ventilation.</li>
              </ul>
            </section>

            {/* Point 2 */}
            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                2. Sun-dry bedsheets and pillow covers twice a week
              </h2>
              <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Bedsheets and pillows commonly harbour house dust mites, one of the most frequent allergens seen on allergy testing in asthma.
              </p>
              <ul className={`list-disc list-inside space-y-2 text-lg ml-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>The simplest and most effective way to reduce dust mites is sun-drying.</li>
                <li>Fix a routine—many patients find Wednesdays and Sundays easy to remember.</li>
              </ul>
            </section>

            {/* Point 3 */}
            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                3. Wash or change curtains regularly
              </h2>
              <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Curtains collect dust just like bedsheets.
              </p>
              <ul className={`list-disc list-inside space-y-2 text-lg ml-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Wash curtains at least once a month or change them regularly to reduce allergen load and asthma symptoms.</li>
              </ul>
            </section>

            {/* Point 4 */}
            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                4. Check for damp walls and mould
              </h2>
              <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Humidity and dampness encourage fungal growth (such as aspergillus), a common allergen in people with asthma.
              </p>
              <ul className={`list-disc list-inside space-y-2 text-lg ml-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Dampness is often seen in bathrooms with poor ventilation or rooms with false ceilings.</li>
                <li>Identifying and correcting damp areas is an important preventive strategy for asthma control.</li>
              </ul>
            </section>

            {/* Point 5 */}
            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                5. Avoid allergens you're sensitive to
              </h2>
              <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Asthma triggers may include foods, pets, medications, or environmental substances.
              </p>
              <ul className={`list-disc list-inside space-y-2 text-lg ml-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Often, it is the colouring agents or preservatives rather than the food itself that cause symptoms.</li>
                <li>Be cautious before completely avoiding foods—observe patterns and discuss them with your doctor.</li>
              </ul>
            </section>

            {/* Point 6 */}
            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                6. Avoid irritants
              </h2>
              <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Even non-allergic irritants can worsen asthma symptoms, including:
              </p>
              <ul className={`list-disc list-inside space-y-2 text-lg ml-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Cigarette smoke</li>
                <li>Incense sticks and mosquito coils</li>
                <li>Strong perfumes or chemical smells</li>
                <li>Pollen</li>
              </ul>
              <p className={`text-lg mt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Reducing exposure helps keep the airways calm and responsive to treatment.
              </p>
            </section>

            {/* Point 7 */}
            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                7. Clean air-conditioner filters regularly
              </h2>
              <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Air-conditioner filters can harbour dust and fungal spores, which can trigger asthma.
              </p>
              <ul className={`list-disc list-inside space-y-2 text-lg ml-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Clean AC filters on a fixed schedule to prevent recirculation of allergens.</li>
              </ul>
            </section>

            {/* Point 8 */}
            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                8. Take asthma medications daily—even when symptom-free
              </h2>
              <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Many patients stop inhalers once they feel better due to fear of addiction or side effects.
              </p>
              <ul className={`list-disc list-inside space-y-2 text-lg ml-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Asthma involves chronic airway inflammation, which takes 14–21 days to settle.</li>
                <li>Inhalers are safe for long-term use.</li>
                <li>Stopping inhalers early, reducing doses, or using them only "as needed" often leads to poor asthma control and repeated symptoms.</li>
              </ul>
              <p className={`text-sm italic mt-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                (More on inhalers in an upcoming post.)
              </p>
            </section>

            {/* Point 9 */}
            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                9. Get the annual flu vaccine
              </h2>
              <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Most asthma flare-ups begin with viral infections.
              </p>
              <ul className={`list-disc list-inside space-y-2 text-lg ml-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>The influenza vaccine is recommended yearly for people with asthma.</li>
                <li>It significantly reduces asthma exacerbations.</li>
              </ul>
              <p className={`text-lg mt-4 font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                In asthma, prevention truly is better than cure.
              </p>
            </section>

            {/* Point 10 */}
            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                10. Smoking and asthma don't mix
              </h2>
              <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Smoking causes permanent and irreversible lung damage.
              </p>
              <ul className={`list-disc list-inside space-y-2 text-lg ml-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>It worsens airway inflammation.</li>
                <li>It reduces the effectiveness of inhaled asthma medications.</li>
                <li>If quitting feels difficult, seek professional help—support improves success rates.</li>
              </ul>
              <p className={`text-sm italic mt-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                (More on smoking cessation in future posts.)
              </p>
            </section>

            {/* Point 11 */}
            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                11. Exercise—yes, but wisely
              </h2>
              <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Exercise has many benefits, even for people with asthma.
              </p>
              <ul className={`list-disc list-inside space-y-2 text-lg ml-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>In some individuals, cold air or hyperventilation can trigger symptoms (exercise-induced asthma).</li>
                <li>Start slowly, increase intensity gradually.</li>
                <li>Use your inhaler before exercise if advised and always carry one.</li>
                <li>Consult your doctor if symptoms worsen during physical activity.</li>
              </ul>
            </section>

            {/* Point 12 */}
            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                12. Address obesity
              </h2>
              <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Recent research shows obesity is a pro-inflammatory state that can worsen asthma control.
              </p>
              <ul className={`list-disc list-inside space-y-2 text-lg ml-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Regular exercise and dietary modifications help.</li>
                <li>Aim for a realistic and sustainable weight goal.</li>
              </ul>
              <p className={`text-lg mt-4 font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Better weight control often leads to better asthma control.
              </p>
            </section>

            {/* Summary Section */}
            <section className={`mb-12 p-8 rounded-2xl ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-400/30' 
                : 'bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200'
            }`}>
              <h2 className={`text-3xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                In summary
              </h2>
              <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Asthma is a highly controllable condition when medications are used correctly and triggers are minimized.
              </p>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Awareness, routine, and consistency go a long way in helping you breathe better and live more freely.
              </p>
              <p className={`text-lg mt-4 italic ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                More asthma-related topics—including inhalers, lifestyle strategies, and prevention tips—coming soon on LungFocus.
              </p>
            </section>
          </div>

          {/* Call to Action */}
          <div className={`mt-16 text-center p-8 rounded-2xl ${
            isDarkMode 
              ? 'bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-400/30' 
              : 'bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Need Help Managing Your Asthma?
            </h3>
            <p className={`text-lg mb-6 ${
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