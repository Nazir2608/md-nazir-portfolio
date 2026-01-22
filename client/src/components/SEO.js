import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, url, image }) => {
  const defaultTitle = "Md Nazir - Senior Java Backend Developer";
  const defaultDescription = "Senior Java Developer specializing in Spring Boot, Microservices, and Cloud Architecture. Scalable backend systems and distributed computing enthusiast.";
  const defaultKeywords = "Java, Spring Boot, Backend Engineer, Microservices, AWS, System Design, REST API, Docker, Kubernetes";
  const defaultUrl = "https://nazir2608.github.io/md-nazir-portfolio";
  const defaultImage = "https://nazir2608.github.io/md-nazir-portfolio/og-image.png"; // Placeholder

  const metaTitle = title ? `${title} | Md Nazir` : defaultTitle;
  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || defaultKeywords;
  const metaUrl = url || defaultUrl;
  const metaImage = image || defaultImage;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metaUrl} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />
      
      {/* Robots */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Language */}
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
