'use client'
import { useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function VideoPublicationsSection() {
  const { isDarkMode } = useTheme()
  const [activeTab, setActiveTab] = useState<'videos' | 'publications'>('videos')
  const [videosToShow, setVideosToShow] = useState(6) // 2 rows * 3 columns
  const [publicationsToShow, setPublicationsToShow] = useState(6) // 2 rows * 3 columns
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [currentPublicationIndex, setCurrentPublicationIndex] = useState(0)

  const scrollVideosLeft = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1)
    }
  }

  const scrollVideosRight = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1)
    }
  }

  const scrollPublicationsLeft = () => {
    if (currentPublicationIndex > 0) {
      setCurrentPublicationIndex(currentPublicationIndex - 1)
    }
  }

  const scrollPublicationsRight = () => {
    if (currentPublicationIndex < publications.length - 1) {
      setCurrentPublicationIndex(currentPublicationIndex + 1)
    }
  }

  const videos = [
    {
      id: 1,
      title: "Advanced Bronchoscopy Techniques",
      description: "Comprehensive guide to interventional pulmonology procedures and modern diagnostic techniques.",
      thumbnail: "/thumbnail/image1.png",
      duration: "15:30",
      views: "2.3K",
      date: "Dec 2024",
      category: "Medical Education",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      id: 2,
      title: "Lung Cancer Diagnosis & Treatment",
      description: "Latest advances in thoracic oncology and personalized treatment approaches.",
      thumbnail: "/thumbnail/image2.png",
      duration: "22:15",
      views: "1.8K",
      date: "Nov 2024",
      category: "Oncology",
      gradient: "from-teal-500 to-teal-600",
      bgGradient: "from-teal-50 to-teal-100"
    },
    {
      id: 3,
      title: "3D Printing in Airway Disorders",
      description: "Pioneering research on 3D printing applications in respiratory medicine.",
      thumbnail: "/thumbnail/image3.png",
      duration: "18:45",
      views: "3.1K",
      date: "Oct 2024",
      category: "Research",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100"
    },
    {
      id: 4,
      title: "Endobronchial Ultrasound (EBUS)",
      description: "Advanced diagnostic techniques using EBUS for lung cancer staging and diagnosis.",
      thumbnail: "/thumbnail/image4.png",
      duration: "12:20",
      views: "1.5K",
      date: "Sep 2024",
      category: "Diagnostics",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100"
    },
    {
      id: 5,
      title: "Airway Stenting Procedures",
      description: "Comprehensive overview of airway stenting techniques and patient management.",
      thumbnail: "/thumbnail/image5.png",
      duration: "20:10",
      views: "2.1K",
      date: "Aug 2024",
      category: "Intervention",
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100"
    },
    {
      id: 6,
      title: "Pleural Disease Management",
      description: "Diagnosis and treatment of pleural effusions and pneumothorax management.",
      thumbnail: "/thumbnail/image6.png",
      duration: "16:35",
      views: "1.9K",
      date: "Jul 2024",
      category: "Pleural Medicine",
      gradient: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-red-100"
    },
    {
      id: 7,
      title: "Interstitial Lung Disease",
      description: "Understanding ILD diagnosis, classification, and treatment strategies.",
      thumbnail: "/thumbnail/image1.png",
      duration: "19:25",
      views: "2.7K",
      date: "Jun 2024",
      category: "ILD",
      gradient: "from-indigo-500 to-indigo-600",
      bgGradient: "from-indigo-50 to-indigo-100"
    },
    {
      id: 8,
      title: "Thoracoscopy Techniques",
      description: "Minimally invasive procedures for pleural and lung disease diagnosis.",
      thumbnail: "/thumbnail/image2.png",
      duration: "14:50",
      views: "1.6K",
      date: "May 2024",
      category: "Surgery",
      gradient: "from-pink-500 to-pink-600",
      bgGradient: "from-pink-50 to-pink-100"
    },
    {
      id: 9,
      title: "Respiratory Function Testing",
      description: "Comprehensive guide to pulmonary function tests and interpretation.",
      thumbnail: "/thumbnail/image3.png",
      duration: "17:40",
      views: "2.4K",
      date: "Apr 2024",
      category: "Testing",
      gradient: "from-cyan-500 to-cyan-600",
      bgGradient: "from-cyan-50 to-cyan-100"
    }
  ]

  const publications = [
    {
      id: 1,
      title: "Case series of Y shaped self-expanding metallic stents (Y-SEMS) for central airway obstruction - Experience of deployment with 'Single Guide Wire' technique",
      journal: "ResearchGate Publication",
      year: "2025",
      authors: "Kedar Hibare, Rajiv Goyal, Manish Kumar Aggarwal, Chetan Nemani, Avinash Murugan",
      description: "Case series exploring the deployment of Y-shaped self-expanding metallic stents for central airway obstruction using a novel 'Single Guide Wire' technique.",
      impact: "High Impact",
      citations: "Recent",
      category: "Case Series",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      link: "https://www.researchgate.net/publication/389400307_Case_series_of_Y_shaped_self-expanding_metallic_stents_Y-SEMS_for_central_airway_obstruction_-_Experience_of_deployment_with_'Single_Guide_Wire'_technique"
    },
    {
      id: 2,
      title: "Effect on the Prevalence of Various Diffuse Parenchymal Lung Diseases due to Paradigm Change in the Guidelines",
      journal: "ResearchGate Publication",
      year: "2023",
      authors: "Kedar Hibare, H Kumar, PH Manjunath, C Sagar, BJ Khan",
      description: "Analysis of how paradigm changes in clinical guidelines affect the prevalence and diagnosis of various diffuse parenchymal lung diseases.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Clinical Study",
      gradient: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-red-100",
      link: "https://www.researchgate.net/publication/366895539_Effect_on_the_Prevalence_of_Various_Diffuse_Parenchymal_Lung_Diseases_due_to_Paradigm_Change_in_the_Guidelines?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ"
    },
    {
      id: 3,
      title: "Rapid Prototyping Techniques for Manufacturing Fully Customized Airway Stents",
      journal: "ResearchGate Publication",
      year: "2022",
      authors: "Kedar Hibare, Lutz Freitag, Manuel Gerold, Kaid Darwiche, Paul Zarogoulidis",
      description: "Pioneering research on rapid prototyping techniques for manufacturing fully customized airway stents using advanced 3D printing technology.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Original Research",
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
      link: "https://www.researchgate.net/publication/366956380_Rapid_Prototyping_Techniques_for_Manufacturing_Fully_Customized_Airway_Stents?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ"
    },
    {
      id: 4,
      title: "Scientific Predictors of Disease Outcomes: No Crystal Balls or Parrots Picking Cards",
      journal: "ResearchGate Publication",
      year: "2022",
      authors: "Kedar Hibare, Murali Mohan",
      description: "Critical analysis of scientific predictors in disease outcomes, addressing limitations and reliability of prognostic factors in clinical practice.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Review Article",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      link: "https://www.researchgate.net/publication/364747629_Scientific_predictors_of_disease_outcomes_No_crystal_balls_or_parrots_picking_cards?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ"
    },
    {
      id: 5,
      title: "Role of medical thoracoscopy in the treatment of complicated parapneumonic effusions",
      journal: "ResearchGate Publication",
      year: "2021",
      authors: "Kedar Hibare, Ramanjaneya Ranganatha, Syed Tousheed, Bangalore Venkatraman Murali Mohan, Vellaichamy Muthupandi Annapandian",
      description: "Comprehensive study on the role and efficacy of medical thoracoscopy in treating complicated parapneumonic effusions with clinical outcomes.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Clinical Study",
      gradient: "from-indigo-500 to-indigo-600",
      bgGradient: "from-indigo-50 to-indigo-100",
      link: "https://www.researchgate.net/publication/349742665_Role_of_medical_thoracoscopy_in_the_treatment_of_complicated_parapneumonic_effusions?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ"
    },
    {
      id: 6,
      title: "Tracheobronchial stent sizing and deployment practices airway stenting practices around the world: a survey study",
      journal: "ResearchGate Publication",
      year: "2020",
      authors: "Kedar Hibare, Roshen Mathew, Levent Dalar, Winnie Elma Roy",
      description: "Global survey study examining tracheobronchial stent sizing and deployment practices in airway stenting across different international centers.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Survey Study",
      gradient: "from-teal-500 to-teal-600",
      bgGradient: "from-teal-50 to-teal-100",
      link: "https://www.researchgate.net/publication/344726969_Tracheobronchial_stent_sizing_and_deployment_practices_airway_stenting_practices_around_the_world_a_survey_study?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ"
    },
    {
      id: 7,
      title: "Yield of pleural biopsy in different types of tubercular effusion",
      journal: "ResearchGate Publication",
      year: "2020",
      authors: "Kedar Hibare, Syed Tousheed, Ramanjenaya Ranganatha",
      description: "Clinical investigation evaluating the diagnostic yield of pleural biopsy in various types of tubercular effusions.",
      impact: "Medium Impact",
      citations: "Multiple",
      category: "Clinical Study",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      link: "https://www.researchgate.net/publication/343330254_Yield_of_pleural_biopsy_in_different_types_of_tubercular_effusion?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ"
    },
    {
      id: 8,
      title: "Airway Stents: Changing paradigms in the management of airway stenosis",
      journal: "Conference Paper",
      year: "2019",
      authors: "Kedar Hibare, Abhinav Singla, Faustina Funke, Kaid Darwiche",
      description: "Conference paper discussing changing paradigms in the management of airway stenosis through the use of airway stents.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Conference Paper",
      gradient: "from-cyan-500 to-cyan-600",
      bgGradient: "from-cyan-50 to-cyan-100",
      link: "https://www.researchgate.net/publication/337587321_Airway_Stents_Changing_paradigms_in_the_management_of_airway_stenosis"
    },
    {
      id: 9,
      title: "Bronchoscopic lung cryobiopsy: An Indian Association for Bronchology position statement",
      journal: "Article",
      year: "2019",
      authors: "Sahajal Dhooria, Ritesh Agarwal, Inderpaul Singh Sehgal, Thangakunam Balamugesh, Kedar Hibare",
      description: "Position statement on bronchoscopic lung cryobiopsy (BLC), a novel technique for obtaining lung tissue for the diagnosis of diffuse parenchymal lung diseases, addressing standardization needs.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Position Statement",
      gradient: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100",
      link: "https://www.researchgate.net/publication/330041761_Bronchoscopic_lung_cryobiopsy_An_Indian_Association_for_Bronchology_position_statement?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ"
    },
    {
      id: 10,
      title: "Cryobiopsy of the Pleura: An Improved Diagnostic Tool",
      journal: "Article",
      year: "2018",
      authors: "Syed Tousheed, Poojaramuddanahally Hanumantharayappa Manjunath, Sagar Chandrasekar, Ranganatha Ramanjaneya, Kedar Hibare",
      description: "Research on cryobiopsy of the pleura as an improved diagnostic tool, offering advantages over standard biopsy forceps in medical thoracoscopy for pleural disease diagnosis.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Original Research",
      gradient: "from-violet-500 to-violet-600",
      bgGradient: "from-violet-50 to-violet-100",
      link: "https://www.researchgate.net/publication/322168382_Cryobiopsy_of_the_Pleura_An_Improved_Diagnostic_Tool?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ"
    },
    {
      id: 11,
      title: "Development of bulla in the ipsilateral untreated lobe following Endoscopic Lung Volume Reduction (ELVR) with valves",
      journal: "Conference Paper",
      year: "2017",
      authors: "Jane Winantea, Kedar Hibare, Kaid Darwiche",
      description: "Case study on the development of bulla in the ipsilateral untreated lobe following Endoscopic Lung Volume Reduction (ELVR) with valves.",
      impact: "Medium Impact",
      citations: "Multiple",
      category: "Case Study",
      gradient: "from-amber-500 to-amber-600",
      bgGradient: "from-amber-50 to-amber-100",
      link: "https://www.researchgate.net/publication/321926320_Development_of_bulla_in_the_ipsilateral_untreated_lobe_following_Endoscopic_Lung_Volume_Reduction_ELVR_with_valves?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ"
    },
    {
      id: 12,
      title: "Radial endobronchial ultrasound for the diagnosis of bronchoscopically invisible lesions: First case series from India",
      journal: "Article",
      year: "2017",
      authors: "Kedar Hibare, Rajiv Goyal, Chetan Nemani, Ullas Batra",
      description: "First case series from India on radial endobronchial ultrasound (R-EBUS) for diagnosing peripheral, bronchoscopically invisible pulmonary lesions, offering a safer alternative to transthoracic needle aspiration.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Case Series",
      gradient: "from-rose-500 to-rose-600",
      bgGradient: "from-rose-50 to-rose-100",
      link: "https://www.researchgate.net/publication/312017279_Radial_endobronchial_ultrasound_for_the_diagnosis_of_bronchoscopically_invisible_lesions_First_case_series_from_India?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ"
    },
    {
      id: 13,
      title: "Foreign body in the lung following dental procedure",
      journal: "Article",
      year: "2016",
      authors: "Kedar Hibare",
      description: "Case report of a foreign body (dental drill) aspiration in an adult patient during a dental procedure, requiring unique innovative techniques for extraction due to peripheral location and thin sharp tip.",
      impact: "Medium Impact",
      citations: "Multiple",
      category: "Case Report",
      gradient: "from-sky-500 to-sky-600",
      bgGradient: "from-sky-50 to-sky-100",
      link: "https://www.researchgate.net/publication/309558042_Foreign_body_in_the_lung_following_dental_procedure?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ"
    },
    {
      id: 14,
      title: "Features predicting malignancy in mediastinal lymph nodes by endobronchial ultrasound in Indian setting: Is it different?",
      journal: "Article",
      year: "2016",
      authors: "Jeenam Shah, Rajiv Goyal, Chetan Nemani, Kedar Hibare",
      description: "Study assessing the utility of EBUS morphology of lymph nodes in predicting malignancy in Indian setting, evaluating ultrasound morphological characteristics for staging lung malignancies.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Clinical Study",
      gradient: "from-lime-500 to-lime-600",
      bgGradient: "from-lime-50 to-lime-100",
      link: "https://www.researchgate.net/publication/309574463_Features_predicting_malignancy_in_mediastinal_lymph_nodes_by_endobronchial_ultrasound_in_Indian_setting_Is_it_different?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ"
    },
    {
      id: 15,
      title: "A low-cost method of managing pleural effusions",
      journal: "Conference Paper",
      year: "2013",
      authors: "Kedar Hibare",
      description: "Discussion on a cost-effective way of managing pleural effusions, addressing challenges in India where lymphocyte-dominant exudative pleural effusions are usually empirically treated as tubercular.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Conference Paper",
      gradient: "from-fuchsia-500 to-fuchsia-600",
      bgGradient: "from-fuchsia-50 to-fuchsia-100",
      link: "https://www.researchgate.net/publication/309574838_A_low-cost_method_of_managing_pleural_effusions?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ"
    },
    {
      id: 16,
      title: "Indian smokers: A faster downhill course?",
      journal: "Conference Paper",
      year: "2011",
      authors: "Kedar Hibare",
      description: "Research on smoking patterns and health outcomes in Indian population, examining the progression and impact of smoking-related diseases.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Conference Paper",
      gradient: "from-stone-500 to-stone-600",
      bgGradient: "from-stone-50 to-stone-100",
      link: "https://www.researchgate.net/publication/287841514_Indian_smokers_A_faster_downhill_course?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ"
    },

  ]

  const handleLoadMore = () => {
    if (activeTab === 'videos') {
      setVideosToShow(prev => Math.min(prev + 3, videos.length))
    } else {
      setPublicationsToShow(prev => Math.min(prev + 3, publications.length))
    }
  }

  const handleLoadLess = () => {
    if (activeTab === 'videos') {
      setVideosToShow(6)
    } else {
      setPublicationsToShow(6)
    }
  }

  const displayedVideos = videos.slice(0, videosToShow)
  const displayedPublications = publications.slice(0, publicationsToShow)

  return (
    <section id="video-publications" className="relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            Knowledge Sharing
          </div> */}
          <h2 className={`text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Educational Videos & Publications</span>
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Educational content and research publications showcasing expertise in interventional pulmonology and respiratory medicine.
          </p> */}
        </div>

        {/* Responsive Toggle Buttons */}
        <div className="flex justify-center mb-8 sm:mb-10 lg:mb-1">
          <div className={`${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} rounded-lg sm:rounded-xl p-1 shadow-lg relative w-fit mx-auto`}>
            {/* Animated background slider */}
            <div 
              className={`absolute top-1 bottom-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-md sm:rounded-lg transition-all duration-500 ease-in-out ${
                activeTab === 'videos' 
                  ? 'left-1 w-[calc(50%-0.25rem)]' 
                  : 'left-[calc(50%-0.25rem)] w-[calc(50%-0.25rem)]'
              }`}
            ></div>
            
            <div className="flex relative z-10">
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md sm:rounded-lg font-medium text-xs sm:text-sm transition-all duration-500 flex items-center gap-1 sm:gap-2 cursor-pointer ${
                  activeTab === 'videos'
                    ? 'text-white shadow-md'
                    : `${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-white/5' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`
                }`}
              >
                <span className="text-sm sm:text-lg">🎥</span>
                <span className="hidden sm:inline">Educational Videos</span>
                <span className="sm:hidden">Videos</span>
              </button>
              <button
                onClick={() => setActiveTab('publications')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md sm:rounded-lg font-medium text-xs sm:text-sm transition-all duration-500 flex items-center gap-1 sm:gap-2 cursor-pointer ${
                  activeTab === 'publications'
                    ? 'text-white shadow-md'
                    : `${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-white/5' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`
                }`}
              >
                <span className="text-sm sm:text-lg">📚</span>
                <span className="hidden sm:inline">Research Publications</span>
                <span className="sm:hidden">Publications</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'videos' ? (
          <div>
            {/* Mobile carousel for videos */}
            <div className="sm:hidden pt-4 pb-8">
              {videos.slice(currentVideoIndex, currentVideoIndex + 1).map((video) => (
                <div key={video.id} className={`group ${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 relative animate-fade-in`}>
                  {/* Specular highlights */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                  {/* Video Thumbnail */}
                  <div className="relative h-48 overflow-hidden">
                    {/* Thumbnail Image */}
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 h-16">
                        <svg className="w-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Duration badge */}
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
                      {video.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{video.views} views</span>
                      <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{video.date}</span>
                    </div>
                    
                    <h4 className={`text-base font-bold ${isDarkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'} transition-colors duration-300 leading-tight`}>
                      {video.title}
                    </h4>
                    
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm leading-relaxed`}>
                      {video.description}
                    </p>
                    
                    <div className={`h-1 bg-gradient-to-r ${video.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>
                </div>
              ))}
              
              {/* Mobile navigation controls below content */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <button 
                  onClick={scrollVideosLeft} 
                  disabled={currentVideoIndex === 0}
                  className={`${isDarkMode ? 'text-white/80 hover:text-white disabled:text-white/30' : 'text-gray-700 hover:text-gray-900 disabled:text-gray-300'} p-2 rounded-full border ${isDarkMode ? 'border-white/20 hover:border-white/40 disabled:border-white/10' : 'border-gray-300 hover:border-gray-400 disabled:border-gray-200'} transition-all duration-300 disabled:cursor-not-allowed`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {/* Round slider indicators */}
                <div className="flex items-center gap-2">
                  {videos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentVideoIndex(index)}
                      className={`transition-all duration-300 rounded-full ${
                        currentVideoIndex === index
                          ? `${isDarkMode ? 'bg-white' : 'bg-gray-900'} w-2.5 h-2.5`
                          : `${isDarkMode ? 'bg-white/30 hover:bg-white/50' : 'bg-gray-400 hover:bg-gray-600'} w-2 h-2`
                      }`}
                      aria-label={`Go to video ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={scrollVideosRight} 
                  disabled={currentVideoIndex === videos.length - 1}
                  className={`${isDarkMode ? 'text-white/80 hover:text-white disabled:text-white/30' : 'text-gray-700 hover:text-gray-900 disabled:text-gray-300'} p-2 rounded-full border ${isDarkMode ? 'border-white/20 hover:border-white/40 disabled:border-white/10' : 'border-gray-300 hover:border-gray-400 disabled:border-gray-200'} transition-all duration-300 disabled:cursor-not-allowed`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Desktop Videos Grid */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 sm:pt-6 sm:pb-12">
              {(displayedVideos.length > 0 ? displayedVideos : videos).map((video) => (
                <div key={video.id} className={`group ${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 relative`}>
                  {/* Specular highlights */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                  {/* Video Thumbnail */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    {/* Thumbnail Image */}
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800 ml-0.5 sm:ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Duration badge */}
                    <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-black/80 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-medium">
                      {video.duration}
                    </div>
                    
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{video.views} views</span>
                      <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{video.date}</span>
                    </div>
                    
                    <h4 className={`text-sm sm:text-base font-bold ${isDarkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'} transition-colors duration-300 leading-tight line-clamp-2`}>
                      {video.title}
                    </h4>
                    
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-xs sm:text-sm leading-relaxed line-clamp-2`}>
                      {video.description}
                    </p>
                    
                    <div className={`h-1 bg-gradient-to-r ${video.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More/Less Buttons - Responsive */}
            {videos.length > 6 && (
              <div className="flex justify-center">
                {videosToShow < videos.length ? (
                  <button
                    onClick={handleLoadMore}
                    className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Load More Videos ({videos.length - videosToShow} remaining)
                  </button>
                ) : (
                  <button
                    onClick={handleLoadLess}
                    className="bg-gray-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Show Less
                  </button>
                )}
              </div>
            )}
          </div>
        ) : (
          <div>
            {/* ResearchGate Stats */}
            {/* <div className={`${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10' : 'bg-white border border-gray-200'} rounded-2xl p-6 mb-8`}>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg font-bold mb-2`}>
                    ResearchGate Profile
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                    Total: <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold`}>17 publications</span> • 
                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold ml-1`}>3,282+ reads</span> • 
                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold ml-1`}>102+ citations</span>
                  </p>
                </div>
                <a 
                  href="https://www.researchgate.net/profile/Kedar-Hibare-2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center gap-2`}
                >
                  View on ResearchGate
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div> */}
            
            {/* Mobile carousel for publications */}
            <div className="sm:hidden pt-4 pb-8">
              {publications.slice(currentPublicationIndex, currentPublicationIndex + 1).map((publication) => (
                <a
                  key={publication.id}
                  href={publication.link || "https://www.researchgate.net/profile/Kedar-Hibare-2"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block ${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden cursor-pointer animate-fade-in`}
                  aria-label={`Read publication: ${publication.title} on ResearchGate`}
                >
                  {/* External link indicator */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <svg className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  {/* Specular highlights */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  {/* Title Section */}
                  <div className="mb-4">
                    <h4 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} leading-tight mb-2`}>
                      {publication.title}
                    </h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-3`}>
                      {publication.authors}
                    </p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                      {publication.description || "Research publication in the field of interventional pulmonology and respiratory medicine."}
                    </p>
                  </div>

                  {/* Separator */}
                  <div className={`border-t ${isDarkMode ? 'border-white/20' : 'border-gray-200'} mb-4`}></div>

                  {/* Bottom Section */}
                  <div className="flex items-center justify-between">
                    {/* Publication Details */}
                    <div className="space-y-2">
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {publication.journal}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {publication.year}
                        </p>
                        {publication.citations && (
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${isDarkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                            {publication.citations} citations
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Read Paper Button */}
                    <div 
                      className={`${isDarkMode ? 'text-red-400' : 'text-red-500'} flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all duration-300 relative z-10`}
                    >
                      <span>Read Paper</span>
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
              
              {/* Mobile navigation controls below content */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <button 
                  onClick={scrollPublicationsLeft} 
                  disabled={currentPublicationIndex === 0}
                  className={`${isDarkMode ? 'text-white/80 hover:text-white disabled:text-white/30' : 'text-gray-700 hover:text-gray-900 disabled:text-gray-300'} p-2 rounded-full border ${isDarkMode ? 'border-white/20 hover:border-white/40 disabled:border-white/10' : 'border-gray-300 hover:border-gray-400 disabled:border-gray-200'} transition-all duration-300 disabled:cursor-not-allowed`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {/* Round slider indicators */}
                <div className="flex items-center gap-2">
                  {publications.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPublicationIndex(index)}
                      className={`transition-all duration-300 rounded-full ${
                        currentPublicationIndex === index
                          ? `${isDarkMode ? 'bg-white' : 'bg-gray-900'} w-2.5 h-2.5`
                          : `${isDarkMode ? 'bg-white/30 hover:bg-white/50' : 'bg-gray-400 hover:bg-gray-600'} w-2 h-2`
                      }`}
                      aria-label={`Go to publication ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={scrollPublicationsRight} 
                  disabled={currentPublicationIndex === publications.length - 1}
                  className={`${isDarkMode ? 'text-white/80 hover:text-white disabled:text-white/30' : 'text-gray-700 hover:text-gray-900 disabled:text-gray-300'} p-2 rounded-full border ${isDarkMode ? 'border-white/20 hover:border-white/40 disabled:border-white/10' : 'border-gray-300 hover:border-gray-400 disabled:border-gray-200'} transition-all duration-300 disabled:cursor-not-allowed`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Desktop Publications Grid */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-12 lg:pb-16">
              {displayedPublications.map((publication) => (
                <a
                  key={publication.id}
                  href={publication.link || "https://www.researchgate.net/profile/Kedar-Hibare-2"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block ${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden cursor-pointer`}
                  aria-label={`Read publication: ${publication.title} on ResearchGate`}
                >
                  {/* External link indicator */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <svg className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  {/* Specular highlights */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  {/* Title Section */}
                  <div className="mb-3 sm:mb-4">
                    <h4 className={`text-base sm:text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} leading-tight mb-2`}>
                      {publication.title}
                    </h4>
                    <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2 sm:mb-3`}>
                      {publication.authors}
                    </p>
                    <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                      {publication.description || "Research publication in the field of interventional pulmonology and respiratory medicine."}
                    </p>
                  </div>

                  {/* Separator */}
                  <div className={`border-t ${isDarkMode ? 'border-white/20' : 'border-gray-200'} mb-3 sm:mb-4`}></div>

                  {/* Bottom Section */}
                  <div className="flex items-center justify-between">
                    {/* Publication Details */}
                    <div className="space-y-1 sm:space-y-2">
                      <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {publication.journal}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {publication.year}
                        </p>
                        {publication.citations && (
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${isDarkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                            {publication.citations} citations
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Read Paper Button - Visual indicator only since entire card is clickable */}
                    <div 
                      className={`${isDarkMode ? 'text-red-400' : 'text-red-500'} flex items-center gap-1 text-xs sm:text-sm font-medium group-hover:gap-2 transition-all duration-300 relative z-10`}
                    >
                      <span>Read Paper</span>
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Load More/Less Buttons - Responsive */}
            {publications.length > 6 && (
              <div className="flex justify-center sm:mt-8">
                {publicationsToShow < publications.length ? (
                  <button
                    onClick={handleLoadMore}
                    className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Load More Publications ({publications.length - publicationsToShow} remaining)
                  </button>
                ) : (
                  <button
                    onClick={handleLoadLess}
                    className="bg-gray-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Show Less
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
