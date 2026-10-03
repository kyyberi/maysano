import { questions } from './FAQ'
import { siteConfig } from '../config/site'

const organizationId = `${siteConfig.siteUrl}#organization`
const productId = `${siteConfig.siteUrl}#product`
const websiteId = `${siteConfig.siteUrl}#website`
const creatorId = `${siteConfig.siteUrl}#creator`

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: 'Data Maestro Academy FZE LLC',
      url: siteConfig.siteUrl,
      logo: `${siteConfig.siteUrl}logo.webp`,
      identifier: '262443655888',
      brand: {
        '@type': 'Brand',
        name: 'Maysano',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Amber Gem Tower, 26th Floor',
        addressLocality: 'Ajman',
        addressCountry: 'AE',
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': productId,
      name: 'Maysano',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: siteConfig.siteUrl,
      description: 'Maysano connects business objectives, use cases and data products in one governed operating model.',
      creator: { '@id': creatorId },
      publisher: { '@id': organizationId },
    },
    {
      '@type': 'Person',
      '@id': creatorId,
      name: 'Jarkko Moilanen',
      honorificSuffix: 'PhD',
      url: siteConfig.creatorUrl,
      jobTitle: 'Senior AI and Data Product Leader',
      worksFor: { '@id': organizationId },
      sameAs: ['https://www.linkedin.com/in/jarkkomoilanen/'],
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: siteConfig.siteUrl,
      name: 'Maysano',
      description: 'Maysano connects business objectives, use cases and data products in one governed operating model.',
      publisher: { '@id': organizationId },
      inLanguage: 'en',
    },
    {
      '@type': 'WebPage',
      '@id': `${siteConfig.siteUrl}#webpage`,
      url: siteConfig.siteUrl,
      name: 'Maysano | Connect Data Products to Business Strategy',
      isPartOf: { '@id': websiteId },
      about: { '@id': productId },
      author: { '@id': creatorId },
      inLanguage: 'en',
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteConfig.siteUrl}#faq`,
      mainEntity: questions.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answer,
        },
      })),
    },
  ],
}

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
