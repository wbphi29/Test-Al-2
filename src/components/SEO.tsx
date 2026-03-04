import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical, type = 'website' }) => {
  const siteTitle = `${title} | ${COMPANY_INFO.name}`;
  const url = canonical || window.location.href;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": COMPANY_INFO.name,
    "description": description,
    "url": url,
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "vatID": COMPANY_INFO.tva,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bruxelles",
      "addressCountry": "BE"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bruxelles"
    },
    "image": "/images/depannage-electrique-urgent.png",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};
