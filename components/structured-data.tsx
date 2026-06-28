import { faqs } from "@/constants/faq";
import { caseStudies } from "@/constants/case-studies";

const BASE_URL = "https://devindays.com";

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "DevInDays",
    url: BASE_URL,
    email: "contact@devindays.com",
    logo: `${BASE_URL}/logo.png`,
    description:
      "Build your MVP. Build your MVP in 2–3 weeks starting at ₹40,000.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: ["https://wa.me/919315735371"],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#localbusiness`,
    name: "DevInDays",
    url: BASE_URL,
    email: "contact@devindays.com",
    image: `${BASE_URL}/logo.png`,
    description: "Professional mobile app development studio for founders in India.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    priceRange: "₹₹",
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/#professional-service`,
    name: "DevInDays App Development",
    url: BASE_URL,
    provider: {
      "@id": `${BASE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: "Mobile App Development",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "DevInDays",
    url: BASE_URL,
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    inLanguage: "en-IN",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/#service`,
    serviceType: "Mobile App Development",
    provider: {
      "@id": `${BASE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    offers: [
      {
        "@type": "Offer",
        name: "MVP Build",
        price: "80000",
        priceCurrency: "INR",
        description: "Cross-platform mobile app development for MVPs",
      },
      {
        "@type": "Offer",
        name: "Full App Build",
        price: "200000",
        priceCurrency: "INR",
        description: "Complete app development with backend and APIs",
      },
    ],
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${BASE_URL}/#software-application`,
    name: "DevInDays MVP Development",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Android, iOS",
    description:
      "Cross-platform mobile app development service for founders. MVPs delivered in 2–3 weeks with full code ownership.",
    offers: {
      "@type": "Offer",
      price: "80000",
      priceCurrency: "INR",
    },
    provider: {
      "@id": `${BASE_URL}/#organization`,
    },
  };

  const caseStudySchemas = caseStudies.map((caseStudy) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${BASE_URL}/#case-study-${caseStudy.id}`,
    headline: caseStudy.headline,
    name: caseStudy.name,
    description: caseStudy.description,
    articleSection: "Case Study",
    image: `${BASE_URL}${caseStudy.mockup}`,
    author: {
      "@id": `${BASE_URL}/#organization`,
    },
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    about: {
      "@type": "SoftwareApplication",
      name: caseStudy.name,
      applicationCategory: "MobileApplication",
    },
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const schemas = [
    organizationSchema,
    localBusinessSchema,
    professionalServiceSchema,
    websiteSchema,
    breadcrumbSchema,
    serviceSchema,
    softwareApplicationSchema,
    ...caseStudySchemas,
    faqSchema,
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
