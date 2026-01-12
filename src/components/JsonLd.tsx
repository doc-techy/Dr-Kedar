export default function JsonLd() {
  // TODO: Add social media and other profile URLs to sameAs array below
  // This helps Google consolidate all profiles into one Knowledge Panel
  // Add URLs like: LinkedIn, ResearchGate, Twitter, Facebook, Instagram, other hospital profiles
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Kedar Hibare",
    "alternateName": "Dr. Kedar Hibare - Interventional Pulmonologist",
    "jobTitle": "Lead Consultant - Clinical & Interventional Pulmonologist",
    "description": "Expert Interventional Pulmonologist specializing in minimally invasive procedures for complex respiratory conditions, EBUS procedures, thoracic oncology, and airway interventions. First in India to complete Interventional Pulmonology & Thoracic Oncology Fellowship.",
    "url": "https://www.drkedarhibare.com",
    "image": "https://www.drkedarhibare.com/images/Dr-Kedar-Hibare-01.jpeg",
    "telephone": "+91-80-6122-2000",
    "email": "info@drkedarhibare.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "HBR Layout, Hennur Road",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560043",
      "addressCountry": "IN"
    },
    "worksFor": {
      "@type": "Hospital",
      "name": "SPARSH Hospital",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "HBR Layout, Hennur Road",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560043",
        "addressCountry": "IN"
      }
    },
    "medicalSpecialty": [
      "Interventional Pulmonology",
      "Pulmonology",
      "Respiratory Medicine",
      "Thoracic Oncology",
      "Interstitial Lung Disease",
      "Pulmonary Hypertension"
    ],
    "award": [
      "First in India - IAB Recognition (2024)",
      "International Training Fellowship - Ruhrlandklinik, West German Lung Center (2023)",
      "Social Media Committee Chair - World Association of Bronchology & Interventional Pulmonology (WABIP) (2022)"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Ruhrlandklinik, West German Lung Center",
        "description": "Fellowship – Interventional Pulmonology"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Rajiv Gandhi Cancer Institute, New Delhi",
        "description": "Fellowship – Interventional Pulmonology & Thoracic Oncology"
      },
      {
        "@type": "EducationalOrganization",
        "name": "St John's National Academy of Health Sciences",
        "description": "DNB (Respiratory Diseases)"
      }
    ],
    "memberOf": [
      "World Association of Bronchology & Interventional Pulmonology (WABIP)",
      "European Association of Bronchology & Interventional Pulmonology (EABIP)",
      "Indian Association of Bronchology (IAB)",
      "European Respiratory Society (ERS)",
      "American College of Chest Physicians (ACCP)",
      "Indian Chest Society (ICS)"
    ],
    "knowsAbout": [
      "Advanced Bronchoscopy",
      "EBUS Procedures",
      "Thoracic Oncology",
      "Airway Interventions",
      "Interstitial Lung Disease",
      "Pulmonary Hypertension",
      "Lung Cancer Diagnosis",
      "Therapeutic Thoracoscopy"
    ],
    "sameAs": [
      "https://www.sparshhospital.com/doctors/dr-kedar-hibare/",
      "https://www.researchgate.net/profile/Kedar-Hibare-2"
      // Add more URLs as they become available:
      // - LinkedIn profile URL
      // - Twitter/X profile URL
      // - Facebook page URL
      // - Instagram profile URL
      // - Other hospital profile pages
      // - Professional association member pages
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

