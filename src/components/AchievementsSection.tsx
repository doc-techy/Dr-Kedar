export default function AchievementsSection() {
  const achievements = [
    {
      year: "2024",
      title: "First in India - IAB Recognition",
      organization: "Indian Association of Bronchology",
      description: "First in India to complete Interventional Pulmonology & Thoracic Oncology Fellowship"
    },
    {
      year: "2023",
      title: "International Training Fellowship",
      organization: "Ruhrlandklinik - West German Lung Center",
      description: "Advanced training in Interventional Pulmonology & Thoracic Oncology in Germany"
    },
    {
      year: "2022",
      title: "Social Media Committee Chair",
      organization: "World Association of Bronchology & Interventional Pulmonology (WABIP)",
      description: "Leadership role in global pulmonology professional organization"
    },
    {
      year: "2020-24",
      title: "Medical Research Publications",
      organization: "International Medical Journals",
      description: "Over 20 publications and 4 book chapters in renowned journals including Journal of Bronchology"
    }
  ]

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "20+", label: "Research Publications" },
    { number: "4", label: "Training Workshops Led" },
    { number: "First", label: "In India - IAB Fellowship" }
  ]

  return (
    <section id="achievements" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Achievements & Recognition</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pioneer in Interventional Pulmonology in India with international recognition and 
            outstanding contributions to respiratory medicine research and education.
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
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
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

        {/* Professional Memberships */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Professional Memberships</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium">
              World Association of Bronchology & Interventional Pulmonology (WABIP)
            </div>
            <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium">
              European Association of Bronchology & Interventional Pulmonology
            </div>
            <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium">
              Indian Association of Bronchology
            </div>
            <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium">
              European Respiratory Society (ERS)
            </div>
            <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium">
              American College of Chest Physicians (ACCP)
            </div>
            <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium">
              Indian Chest Society
            </div>
          </div>
        </div>

        {/* Areas of Research Interest */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Research Interests</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">3D Printing Technology</h4>
              <p className="text-gray-600 text-sm">Airway prostheses for complex disorders</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Artificial Intelligence</h4>
              <p className="text-gray-600 text-sm">AI applications in pulmonology</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Interventional Pulmonology</h4>
              <p className="text-gray-600 text-sm">Advanced minimally invasive procedures</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Pulmonary Vascular Disease</h4>
              <p className="text-gray-600 text-sm">Complex lung circulation disorders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 