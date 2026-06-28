import { faqs } from "@/constants/faq";

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://devindays.com/#organization",
    name: "DevInDays",
    url: "https://devindays.com",
    email: "contact@devindays.com",
    logo: "https://devindays.com/logo.png",
    description:
      "Fast app development for founders. Build your MVP in 2–3 weeks starting at ₹40,000.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: ["https://wa.me/919315735371"],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://devindays.com/#localbusiness",
    name: "DevInDays",
    url: "https://devindays.com",
    email: "contact@devindays.com",
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
    "@id": "https://devindays.com/#service",
    name: "DevInDays App Development",
    url: "https://devindays.com",
    provider: {
      "@id": "https://devindays.com/#organization",
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
    "@id": "https://devindays.com/#website",
    name: "DevInDays",
    url: "https://devindays.com",
    publisher: {
      "@id": "https://devindays.com/#organization",
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
        item: "https://devindays.com",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Mobile App Development",
    provider: {
      "@id": "https://devindays.com/#organization",
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
