export function JsonLdOrganization() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    name: "MS Studio",
    description: "Manicure e pedicure domiciliar — atendimento na casa da cliente",
    url: "https://studiobyms.com.br",
    logo: "https://studiobyms.com.br/images/me.png",
    areaServed: "São Paulo, SP",
    serviceType: ["Manicure", "Pedicure", "Nail Art"],
    sameAs: [
      "https://instagram.com/studio.by.ms",
      
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+55 11 98872-9935",
        contactType: "customer service",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
