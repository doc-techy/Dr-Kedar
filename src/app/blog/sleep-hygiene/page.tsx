'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionBackground from '@/components/SectionBackground'
import { useTheme } from '@/contexts/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'

export default function SleepHygieneBlogPost() {
  const { isDarkMode } = useTheme()

  const heading = `text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`
  const body = `text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`
  const list = `list-disc list-inside space-y-2 text-sm ml-4 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`

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
            <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Your Bedroom Is Not a Newsroom
            </h1>
            <p className={`italic text-base md:text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              By Dr Kedar Hibare, Consultant Pulmonologist, Child Central
            </p>
            <div className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <p className="mb-4">
                My phone sleeps next to me. I&apos;m a doctor, so please don&apos;t do as I do.
              </p>
              <p className="mb-4">
                There is a reason for it. Hospital calls come at odd hours, and sometimes someone needs advice. That&apos;s part of the job. But here&apos;s the part I&apos;m not particularly proud of: the call ends, I&apos;m wide awake in the dark, and before I know it, I&apos;m doom-scrolling through my phone!
              </p>
              <p className="mb-4">
                One notification leads to another. A news headline becomes a video, a video becomes a WhatsApp message, and suddenly it&apos;s an hour or two past bedtime.
              </p>
              <p className="mb-4">Sound familiar?</p>
              <p className="mb-4">
                Doctors are probably among the worst offenders when it comes to following some of the advice we give our patients and sleep is no exception.
              </p>
              <p>
                So let&apos;s talk about sleep hygiene. And no, it has nothing to do with clean bedsheets! It is about the habits, routines and environment that influence how well we sleep.
              </p>
            </div>
          </div>

          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
            <Image
              src="/images/sleep-hygiene.png"
              alt="Healthy sleep habits: a regular schedule, a calming routine, fewer stimulants, a quiet dark bedroom, daylight and a lighter evening meal"
              width={1200}
              height={2932}
              className="w-full h-auto"
              quality={100}
              unoptimized
              priority
            />
          </div>

          <div className={`prose prose-base max-w-none ${
            isDarkMode
              ? 'prose-invert prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-li:text-gray-300'
              : 'prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-li:text-gray-700'
          }`}>
            <p className={body}>
              There are plenty of recommendations, but you don&apos;t have to overhaul your life overnight. Start with one or two changes, stick with them for a couple of weeks. (Read the book Atomic Habits?)
            </p>

            <section className="mb-12">
              <h2 className={heading}>Turn off the breaking news</h2>
              <p className={body}>
                If I could give you just one piece of advice, it would be this: keep your phone off the dinner table and, ideally, out of the bedroom.
              </p>
              <p className={body}>
                I&apos;m certainly not anti-technology. I&apos;d probably struggle to get through a day without my phone. But somewhere along the way, scrolling has replaced the quiet time we once had before going to bed.
              </p>
              <p className={body}>
                The problem is that our brains don&apos;t necessarily switch off when we put the phone down. News updates, social media feeds, work messages and endless videos keep our minds engaged when they should be winding down. The bedroom television isn&apos;t much better. There is always one more episode on Netflix to watch!
              </p>
              <p className={body}>
                Try giving your phone a charging spot outside the bedroom. A simple alarm clock can take care of the morning wake-up call.
              </p>
              <p className={body}>
                If you need your phone nearby, as I do, silence all notifications except essential calls. And when that important call ends, resist the temptation to check everything else.
              </p>
              <p className={body}>Easier said than done. I know!</p>
            </section>

            <section className="mb-12">
              <h2 className={heading}>Reset your body clock</h2>
              <p className={body}>
                Our bodies have an internal clock, known as the circadian rhythm. It regulates when we feel awake and when we feel sleepy.
              </p>
              <p className={body}>
                One of the simplest ways to keep it on track is to wake up at roughly the same time every day, including weekends.
              </p>
              <p className={body}>
                Get some natural daylight soon after waking up. Morning light helps regulate your body clock and reinforces the natural sleep-wake cycle.
              </p>
              <p className={body}>A few other things matter:</p>
              <ul className={list}>
                <li><strong>Caffeine:</strong> Enjoy your coffee, but preferably in the morning. Avoid it in the late afternoon and evening.</li>
                <li><strong>Alcohol:</strong> It may help you fall asleep initially, but it disrupts sleep quality and causes more awakenings later in the night.</li>
                <li>
                  <strong>Nicotine:</strong> It is a stimulant and can interfere with sleep. If you smoke, consider seeking help to quit. Our{' '}
                  <Link
                    href="/blog/smoking-cessation"
                    className={`underline font-semibold whitespace-nowrap ${isDarkMode ? 'text-teal-300 hover:text-teal-200' : 'text-teal-700 hover:text-teal-800'}`}
                  >
                    Quit Smoking Clinic
                  </Link>
                  {' '}at Child Central can help.
                </li>
                <li><strong>Naps:</strong> If you need one, keep it short (around 20–30 minutes) and preferably before 3 p.m.</li>
                <li><strong>Exercise:</strong> Regular physical activity improves sleep, although vigorous exercise immediately before bedtime may leave some people too stimulated to settle down.</li>
              </ul>
              <p className={body}>
                Small changes, consistently practised, can make a considerable difference.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={heading}>Sign off for the night</h2>
              <p className={body}>Your evening routine matters more than you might think.</p>
              <p className={body}>
                Try having an early, relatively light dinner — although consistency matters more than a particular time. Avoid very heavy meals close to bedtime, especially if you experience acidity or reflux. A gentle walk after dinner can help with digestion and is a good way to unwind.
              </p>
              <p className={body}>
                Before going to bed, give yourself some time to slow down. Dim the lights, take a warm shower, read a book or listen to something relaxing. Repeating the same routine every night helps your body recognise that bedtime is approaching.
              </p>
              <p className={body}>And what if you wake up in the middle of the night?</p>
              <p className={body}>
                I have my own routine. If a hospital call wakes me and sleep refuses to return, I sometimes pick up a book and read until I feel sleepy again. If you find yourself lying awake for a prolonged period, try getting out of bed, keeping the lights dim, and returning when you feel sleepy.
              </p>
              <p className={body}>
                What I try not to do is reach for my phone. Some nights I succeed. Others, well, I&apos;m still a work in progress!
              </p>
              <p className={body}>
                There is one more thing worth trying: <strong>park your worries before bedtime.</strong>
              </p>
              <p className={body}>
                Spend a few minutes in the evening writing down tomorrow&apos;s tasks, pending work and anything that&apos;s bothering you. It may help stop your mind from running through an endless mental to-do list when you should be sleeping.
              </p>
              <p className={body}>
                We are often excellent at imagining the worst possible scenarios. Unfortunately, worrying about tomorrow rarely solves tomorrow&apos;s problems. It just steals tonight&apos;s sleep.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={heading}>Keep the bedroom off-air</h2>
              <p className={body}>
                Think of your bedroom as a space reserved primarily for sleep and intimacy. Keep it cool, dark and quiet. Comfortable bedding, appropriate room temperature and minimal distractions can make a difference.
              </p>
              <p className={body}>
                Avoid turning your bedroom into an extension of your living room or workplace. Work calls, television, laptops and endless scrolling have a way of following us everywhere.
              </p>
              <p className={body}>
                Your bedroom should be where the day ends, not where another one begins.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={heading}>Little eyes are watching</h2>
              <p className={body}>
                Children learn more from what we do than from what we tell them. If we insist that children put their phones away at dinner but continue scrolling ourselves, what message are we sending?
              </p>
              <p className={body}>
                Our habits around technology, mealtimes and bedtime shape how our children approach these things too.
              </p>
              <p className={body}>
                Good sleep habits are not just something we teach. They are something we demonstrate.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={heading}>Tonight, start with one thing</h2>
              <p className={body}>
                You don&apos;t need an elaborate sleep routine, expensive gadgets or a complete lifestyle makeover.
              </p>
              <p className={body}>Start with one change tonight:</p>
              <ul className={list}>
                <li>Keep your phone off the dinner table.</li>
                <li>Charge it outside your bedroom.</li>
                <li>Fix a consistent wake-up time.</li>
                <li>Put tomorrow&apos;s worries on paper before going to bed.</li>
              </ul>
              <p className={body}>Pick one. Stick with it for two weeks before adding another.</p>
              <p className={body}>
                And remember, persistent difficulty falling asleep, staying asleep or waking up feeling unrefreshed shouldn&apos;t always be dismissed as poor sleep hygiene. Sometimes there is an underlying sleep disorder, such as insomnia or obstructive sleep apnoea, that needs medical attention.
              </p>
              <p className={body}>
                If you&apos;re struggling with sleep despite making these changes, read my article on insomnia or book a consultation with me at Child Central, Koramangala, through{' '}
                <a
                  href="https://www.lungfocus.com"
                  className={`underline font-semibold ${isDarkMode ? 'text-blue-300 hover:text-blue-200' : 'text-blue-700 hover:text-blue-800'}`}
                >
                  www.lungfocus.com
                </a>
                .
              </p>
              <p className={`text-base md:text-lg font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Because sleep is not wasted time. It is when your body and brain do some of their most important work.
              </p>
              <p className={`italic text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                – Dr Kedar Hibare
                <br />
                Consultant Pulmonologist, Child Central, Koramangala
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
              Struggling with sleep?
            </h3>
            <p className={`text-sm mb-6 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              If falling asleep, staying asleep or waking unrefreshed is still a problem, book a consultation at Child Central, Koramangala.
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
