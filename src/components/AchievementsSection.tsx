export default function AchievementsSection() {
  const achievements = [
    {
      year: "2023",
      title: "Top Doctor Award",
      organization: "City Medical Association",
      description: "Recognized for excellence in patient care and community service"
    },
    {
      year: "2022",
      title: "Best Primary Care Physician",
      organization: "Regional Healthcare Awards",
      description: "Voted by peers for outstanding clinical expertise"
    },
    {
      year: "2021",
      title: "Patient Choice Award",
      organization: "Healthcare Excellence Board",
      description: "Highest patient satisfaction ratings in the region"
    },
    {
      year: "2020",
      title: "Medical Research Publication",
      organization: "Journal of Internal Medicine",
      description: "Published research on preventive care protocols"
    }
  ]

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "5000+", label: "Patients Treated" },
    { number: "98%", label: "Patient Satisfaction" },
    { number: "24/7", label: "Emergency Support" }
  ]

  return (
    <section id="achievements" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Achievements & Recognition</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Committed to excellence in healthcare with a track record of recognition and 
            outstanding patient outcomes.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Awards */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">Awards & Recognition</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg border border-blue-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                    {achievement.year}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-blue-600 font-medium mb-2">
                      {achievement.organization}
                    </p>
                    <p className="text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Professional Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium">
              Board Certified Internal Medicine
            </div>
            <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium">
              Advanced Life Support
            </div>
            <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium">
              Geriatric Medicine
            </div>
            <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium">
              Preventive Medicine
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 