export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Dr. Kedar Hibare </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Committed to excellence in patient care with a focus on building lasting relationships 
            and providing personalized treatment plans.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Background</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Medical Degree:</strong> Harvard Medical School, Doctor of Medicine (2008)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Residency:</strong> Internal Medicine, Johns Hopkins Hospital (2008-2011)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Board Certification:</strong> American Board of Internal Medicine
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Experience:</strong> 15+ years in clinical practice
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Specializations</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Preventive Care</h4>
                <p className="text-blue-700 text-sm">
                  Annual physicals, screenings, and vaccination programs
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Chronic Disease</h4>
                <p className="text-blue-700 text-sm">
                  Diabetes, hypertension, and heart disease management
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Geriatric Care</h4>
                <p className="text-blue-700 text-sm">
                  Comprehensive care for older adults
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Wellness Programs</h4>
                <p className="text-blue-700 text-sm">
                  Lifestyle counseling and health optimization
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 