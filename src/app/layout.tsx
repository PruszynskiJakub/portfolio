import { Analytics } from '@vercel/analytics/next';
import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import { siteConfig } from '@/constant/config';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: [
    'Jakub Pruszyński',
    'Mobile Engineer',
    'Kotlin Multiplatform',
    'KMP Developer',
    'AI Integration',
    'Machine Learning',
    'iOS Developer',
    'Android Developer',
    'Product Engineer',
    'Technical Architecture',
    'AI Product Builder',
    'Warsaw Poland',
    'Mobile App Development',
    'Cross-platform Development',
    'AI Automation',
    'Product Discovery',
    'Technical Strategy',
    'Freelance Mobile Developer',
    'Enterprise Mobile Apps',
    'Startup Mobile Development',
  ],
  authors: [
    {
      name: 'Jakub Pruszyński',
      url: 'https://www.linkedin.com/in/jpruszynski',
    },
  ],
  creator: 'Jakub Pruszyński',
  publisher: 'Jakub Pruszyński',
  robots: { index: true, follow: true },
  // Brain icon favicon
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico' },
    ],
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'Jakub Pruszyński Portfolio',
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    creator: '@jpruszynski',
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'en-US': siteConfig.url,
      'pl-PL': siteConfig.url,
    },
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='alternate icon' href='/favicon/favicon.ico' />
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
