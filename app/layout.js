import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/components/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'International Berlin Community e.V. | Make Friends & Fight Loneliness in Berlin',
  description: 'Join 10,000+ people from 100+ countries in Berlin. Free community events, hiking, cultural exchange. Combat loneliness, make friends, integrate into Berlin life. Registered non-profit supporting expats, refugees, and locals.',
  keywords: 'Berlin community, make friends Berlin, Berlin expats, loneliness Berlin, Berlin events, integration Berlin, cultural exchange Berlin, Berlin hiking, expat community, refugee support Berlin, international community Berlin, Berlin meetup, new in Berlin, friends in Berlin, Berlin social events',
  authors: [{ name: 'International Berlin Community e.V.' }],
  creator: 'International Berlin Community e.V.',
  publisher: 'International Berlin Community e.V.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'International Berlin Community | Make Friends & Fight Loneliness in Berlin',
    description: 'Join 10,000+ people from 100+ countries. Free events, hiking, cultural exchange. Combat loneliness in Berlin.',
    siteName: 'International Berlin Community',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'International Berlin Community | Make Friends in Berlin',
    description: 'Join 10,000+ people from 100+ countries. Free events, hiking, cultural exchange.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              "name": "International Berlin Community e.V.",
              "alternateName": "IBC",
              "description": "Registered non-profit organization promoting integration and cultural exchange in Berlin through free community events.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Berlin",
                "addressCountry": "DE"
              },
              "email": "ibcmanagement@outlook.com",
              "foundingDate": "2023",
              "areaServed": "Berlin, Germany",
              "sameAs": [
                "https://www.facebook.com/groups/internationalberlinhiking",
                "https://www.instagram.com/ibc.berlin"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}