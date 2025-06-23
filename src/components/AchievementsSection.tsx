export default function AchievementsSection() {
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
    <section id="achievements" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-soft"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-soft"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            Excellence & Recognition
          </div>
          <h2 className="section-title text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Achievements & <span className="text-gradient">Recognition</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Pioneer in Interventional Pulmonology in India with international recognition and 
            outstanding contributions to respiratory medicine research and education.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in hover-lift"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="card p-8 group-hover:shadow-2xl transition-all duration-300">
                <div className="text-4xl mb-4 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                  {stat.icon}
                </div>
                <div className={`stat-number mb-2 ${stat.color}`}>{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-fade-in">Awards & Recognition</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="group card p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 bg-gradient-to-r ${achievement.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {achievement.year === "2020-24" ? "📊" : achievement.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className="text-3xl mr-3">{achievement.icon}</span>
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {achievement.title}
                      </h4>
                    </div>
                    <p className={`font-semibold mb-3 bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                      {achievement.organization}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className={`h-1 bg-gradient-to-r ${achievement.gradient} rounded-full mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Memberships */}
        <div className="mb-20 animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Professional Memberships</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memberships.map((membership, index) => (
              <div 
                key={index} 
                className="group card p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${membership.color} rounded-xl flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300`}>
                    {membership.short}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {membership.short}
                    </h4>
                    <p className="text-sm text-gray-600">{membership.name}</p>
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