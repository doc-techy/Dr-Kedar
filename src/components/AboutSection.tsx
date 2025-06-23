export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Dr. Kedar Hibare</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lead Consultant at SPARSH Hospital with expertise in cutting-edge diagnostic and 
            therapeutic solutions for respiratory conditions. Committed to excellence and 
            patient-centered care in interventional pulmonology.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Background</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Qualification:</strong> DNB (Respiratory Diseases), FCCP
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Postgraduate Training:</strong> St. John's National Academy of Health Sciences, Bengaluru
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>International Fellowship:</strong> Ruhrlandklinik – West German Lung Center, Essen, Germany
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Advanced Training:</strong> Interventional Pulmonology & Thoracic Oncology, Rajiv Gandhi Cancer Institute, New Delhi
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Experience:</strong> 15+ years in respiratory medicine and interventional procedures
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Expertise & Specializations</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Advanced Bronchoscopy</h4>
                <p className="text-blue-700 text-sm">
                  Rigid & Flexible bronchoscopy procedures for lung diagnosis
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">EBUS & Lung Biopsy</h4>
                <p className="text-blue-700 text-sm">
                  Endobronchial ultrasound and transbronchial cryobiopsy
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Airway Interventions</h4>
                <p className="text-blue-700 text-sm">
                  Cryotherapy, laser therapy, balloon dilation & stenting
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Thoracic Oncology</h4>
                <p className="text-blue-700 text-sm">
                  Specialized lung cancer diagnosis and treatment
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Interstitial Lung Disease</h4>
                <p className="text-blue-700 text-sm">
                  Complex lung disease diagnosis and management
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">3D Printing Innovation</h4>
                <p className="text-blue-700 text-sm">
                  Cutting-edge airway prostheses for complex disorders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 