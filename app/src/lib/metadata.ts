import type { Metadata } from 'next';

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
}

export function generatePageMetadata({
  title,
  description,
  path = '',
  image = '/og-image.png',
  imageAlt,
}: PageMetadataOptions): Metadata {
  const baseUrl = 'https://kargo.dscvit.com';
  const url = `${baseUrl}${path}`;
  const fullTitle = path === '' ? title : `${title} - Kargo`;
  const altText = imageAlt || `${title} - Kargo`;
  const absoluteImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'Kargo',
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: altText,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [absoluteImageUrl],
    },
  };
}
