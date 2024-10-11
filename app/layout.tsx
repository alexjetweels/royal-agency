import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const font = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Royal Agency - Facebook Ad Account for Rent',
  description:
    'Royal Agency — LOW PRICE BUT ROYAL QUALITY. We provide all types of Facebook ad accounts available on the market, offering cheap fees, a 7-day free trial, and 24/7 customer support. Experience exceptional service for your advertising needs.',
  keywords:
    'Facebook Ad Account, Ad Account for Rent, Royal Quality, Affordable Advertising, 7 Days Free Trial, 24/7 Support, Social Media Advertising, Facebook Ads',
  authors: [
    {
      name: 'Royal Agency',
      url: 'https://royal-agency.net',
    },
  ],
  openGraph: {
    title: 'Royal Agency - Facebook Ad Account for Rent',
    description:
      'Explore our affordable Facebook ad account rental services with Royal quality. Rent various ad account types with cheap fees, enjoy a 7-day free trial, and get 24/7 support.',
    url: 'https://royal-agency.net',
    type: 'website',
    images: [
      {
        url: '/images/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Royal Agency Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@RoyalAgency',
    title: 'Royal Agency - Facebook Ad Account Rental',
    description:
      'Get the best deals on Facebook ad accounts at Royal Agency. Low fees, high quality, 7 days free trial, and 24/7 support.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true} className={font.className}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
