export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DevInDays",
    url: "https://devindays.com",
    email: "raghav@vaydenfoundry.com",
    description: "Fast app development for founders. Build your MVP in 2–3 weeks starting at ₹40,000.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Mobile App Development",
    provider: {
      "@type": "Organization",
      name: "DevInDays",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    offers: [
      {
        "@type": "Offer",
        name: "MVP Build",
        price: "40000",
        priceCurrency: "INR",
        description: "Cross-platform mobile app development for MVPs",
      },
      {
        "@type": "Offer",
        name: "Full App Build",
        price: "80000",
        priceCurrency: "INR",
        description: "Complete app development with backend and APIs",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}

