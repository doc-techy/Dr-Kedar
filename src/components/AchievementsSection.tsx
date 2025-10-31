'use client'
import { useTheme } from '@/contexts/ThemeContext'

export default function AchievementsSection() {
  const { isDarkMode } = useTheme()
  const achievements = [
    {
      year: "2024",
      title: "First in India - IAB Recognition",
      organization: "Indian Association of Bronchology",
      description: "First in India to complete Interventional Pulmonology & Thoracic Oncology Fellowship",
      icon: "🥇",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      year: "2023",
      title: "International Training Fellowship",
      organization: "Ruhrlandklinik - West German Lung Center",
      description: "Advanced training in Interventional Pulmonology & Thoracic Oncology in Germany",
      icon: "🌍",
      gradient: "from-blue-500 to-teal-500"
    },
    {
      year: "2022",
      title: "Social Media Committee Chair",
      organization: "World Association of Bronchology & Interventional Pulmonology (WABIP)",
      description: "Leadership role in global pulmonology professional organization",
      icon: "👨‍💼",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      year: "2020-24",
      title: "Medical Research Publications",
      organization: "International Medical Journals",
      description: "Over 20 publications and 4 book chapters in renowned journals including Journal of Bronchology",
      icon: "📚",
      gradient: "from-green-500 to-blue-500"
    }
  ]

  const stats = [
    { number: "15+", label: "Years Experience", icon: "⏰", color: "text-blue-600" },
    { number: "20+", label: "Research Publications", icon: "📄", color: "text-teal-600" },
    { number: "4", label: "Training Workshops Led", icon: "🏫", color: "text-purple-600" },
    { number: "First", label: "In India - IAB Fellowship", icon: "🥇", color: "text-orange-600" }
  ]

  const memberships = [
    { name: "World Association of Bronchology & Interventional Pulmonology", short: "WABIP", color: "bg-blue-600" },
    { name: "European Association of Bronchology & Interventional Pulmonology", short: "EABIP", color: "bg-teal-600" },
    { name: "Indian Association of Bronchology", short: "IAB", color: "bg-orange-600" },
    { name: "European Respiratory Society", short: "ERS", color: "bg-purple-600" },
    { name: "American College of Chest Physicians", short: "ACCP", color: "bg-green-600" },
    { name: "Indian Chest Society", short: "ICS", color: "bg-red-600" }
  ]

  const researchInterests = [
    { title: "3D Printing Technology", description: "Airway prostheses for complex disorders", icon: "🖨️" },
    { title: "Artificial Intelligence", description: "AI applications in pulmonology", icon: "🤖" },
    { title: "Interventional Pulmonology", description: "Advanced minimally invasive procedures", icon: "⚕️" },
    { title: "Pulmonary Vascular Disease", description: "Complex lung circulation disorders", icon: "💓" }
  ]

  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full filter blur-3xl opacity-30 animate-pulse-soft"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full filter blur-3xl opacity-30 animate-pulse-soft"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          {/* <div className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            Excellence & Recognition
          </div> */}
          <h2 className={`text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Achievements & Recognition</span>
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
            Pioneer in Interventional Pulmonology in India with international recognition and 
            outstanding contributions to respiratory medicine research and education.
          </p>
        </div>

        {/* Statistics */}
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in hover-lift"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 group-hover:shadow-2xl transition-all duration-300 rounded-2xl">
                <div className="text-4xl mb-4 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                  {stat.icon}
                </div>
                <div className={`stat-number mb-2 ${stat.color}`}>{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Awards - Responsive Grid */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`group ${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} p-4 sm:p-5 lg:p-6 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 animate-fade-in rounded-xl sm:rounded-2xl relative overflow-hidden`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {/* Specular highlights for Liquid Glass effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="hidden sm:flex flex-shrink-0">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${achievement.gradient} rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {achievement.year === "2020-24" ? "📊" : achievement.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center items-center mb-1 sm:mb-2 space-y-1 sm:space-y-0">
                      <span className="hidden sm:inline text-lg sm:text-xl lg:text-2xl mr-2">{achievement.icon}</span>
                          <h4 className={`text-xs sm:text-base lg:text-lg font-bold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                            {achievement.title}
                          </h4>
                        </div>
                        <p className={`font-semibold mb-1 sm:mb-2 text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {achievement.organization}
                        </p>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed text-xs sm:text-sm`}>
                          {achievement.description}
                        </p>
                    <div className={`h-1 bg-gradient-to-r ${achievement.gradient} rounded-full mt-2 sm:mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Memberships */}
        <div className="mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <h3 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-center mb-8 sm:mb-10 lg:mb-12`}>
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Professional Memberships</span>
          </h3>
          
          {/* Responsive Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {memberships.map((membership, index) => (
              <div 
                key={index} 
                className={`group ${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} p-4 sm:p-5 lg:p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 rounded-xl sm:rounded-2xl relative overflow-hidden`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Specular highlights */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex flex-col sm:flex-row sm:items-center items-center text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className={`hidden sm:flex w-10 h-10 sm:w-12 sm:h-12 ${membership.color} rounded-lg sm:rounded-xl items-center justify-center text-white font-bold text-xs sm:text-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    {membership.short}
                  </div>
                  <div className="min-w-0 flex-1 w-full">
                    <h4 className={`font-semibold text-xs sm:text-base ${isDarkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'} transition-colors duration-300`}>
                      {membership.short}
                    </h4>
                    <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>{membership.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Call to Action */}
        {/* <div className="mt-20 text-center animate-fade-in">
          <div className="card bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Experience World-Class Pulmonology Care</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Book your consultation with India's pioneering interventional pulmonologist and benefit from cutting-edge respiratory care.
            </p>
            <a 
              href="/book-appointment"
              className="btn-primary bg-white text-blue-600 hover:bg-blue-50 text-lg group inline-block"
            >
              <span className="flex items-center justify-center gap-2">
                Schedule Your Consultation
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div> */}
      </div>
      

      
    </section>
  )
} 




// <div className="mt-8 animate-fade-in">
//           <div className="bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 rounded-2xl p-6 text-white">
//             <h3 className="text-2xl font-bold mb-4 text-center">Why Choose Dr. Kedar Hibare?</h3>
            
//             <div className="grid md:grid-cols-3 gap-4">
//               {achievements.map((achievement) => (
//                 <div key={achievement.id} className="text-center">
//                   <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
//                     <span className="text-2xl">{achievement.icon}</span>
//                   </div>
//                   <h4 className="text-lg font-bold mb-1">{achievement.title}</h4>
//                   <p className="text-blue-100 text-sm leading-relaxed">{achievement.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>