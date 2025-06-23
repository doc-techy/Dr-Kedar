export default function ServicesSection() {
  const services = [
    {
      title: "Advanced Bronchoscopy",
      description: "Rigid & Flexible bronchoscopy procedures for precise lung diagnosis and treatment planning.",
      icon: "🫁"
    },
    {
      title: "Endobronchial Ultrasound (EBUS)",
      description: "TBNA & Transbronchial Cryobiopsy for accurate tissue sampling and lung disease diagnosis.",
      icon: "🔬"
    },
    {
      title: "Airway Interventions",
      description: "Cryotherapy, APC, Laser Therapy, Balloon Dilation & Airway Stenting for airway tumors.",
      icon: "⚕️"
    },
    {
      title: "Lung Cancer Diagnosis",
      description: "Comprehensive thoracic oncology care with cutting-edge diagnostic and treatment solutions.",
      icon: "🎯"
    },
    {
      title: "Interstitial Lung Diseases",
      description: "Expert diagnosis and management of complex lung conditions and pulmonary fibrosis.",
      icon: "📊"
    },
    {
      title: "Therapeutic Thoracoscopy",
      description: "Minimally invasive procedures including pleuroscopy and IPC placement for lung conditions.",
      icon: "🔧"
    }
  ]

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pulmonology Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive respiratory care services with advanced interventional pulmonology 
            procedures designed to provide precise diagnosis and effective treatment for lung diseases.
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
            Need specialized respiratory care? Schedule a consultation to discuss your pulmonary health needs.
          </p>
          <a 
            href="/book-appointment"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </section>
  )
} 