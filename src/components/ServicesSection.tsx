export default function ServicesSection() {
  const services = [
    {
      title: "Primary Care",
      description: "Comprehensive healthcare for adults including routine check-ups, illness treatment, and health maintenance.",
      icon: "🩺"
    },
    {
      title: "Preventive Medicine",
      description: "Preventive screenings, immunizations, and health education to maintain optimal health.",
      icon: "🛡️"
    },
    {
      title: "Chronic Disease Management",
      description: "Ongoing care for diabetes, hypertension, heart disease, and other chronic conditions.",
      icon: "📊"
    },
    {
      title: "Health Screenings",
      description: "Cancer screenings, cardiovascular assessments, and early detection programs.",
      icon: "🔍"
    },
    {
      title: "Wellness Consultations",
      description: "Nutrition counseling, exercise planning, and lifestyle modification programs.",
      icon: "💪"
    },
    {
      title: "Geriatric Care",
      description: "Specialized care addressing the unique health needs of older adults.",
      icon: "👴"
    }
  ]

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Medical Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services designed to meet your individual needs and promote 
            long-term health and wellness.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need more information about our services? Schedule a consultation to discuss your healthcare needs.
          </p>
          <a 
            href="/book-appointment"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  )
} 