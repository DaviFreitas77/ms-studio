export function JsonLdOrganization() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MS Studio",
    description: "Manicure e pedicure domiciliar — atendimento na casa da cliente",
    url: "https://studio-by-ms.com",
    logo: "https://studio-by-ms.com/images/me.png",
    areaServed: "São Paulo, SP",
    serviceType: ["Manicure", "Pedicure", "Nail Art"],
    sameAs: [
      "https://instagram.com/studio.by.ms",
      "https://wa.me/11988729935",
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
