import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mountain Peak Hauling & Junk Removal | Signal Mountain, TN',
  description: 'Professional hauling and junk removal services in Signal Mountain, TN. Dump trailer rental, home cleanouts, trash removal, scrap metal pickup, and camper relocation. Call (706) 671-3258 for a free quote.',
  keywords: [
    'hauling service',
    'junk removal',
    'Signal Mountain TN',
    'dump trailer rental',
    'home cleanout',
    'trash removal',
    'scrap metal pickup',
    'camper relocation',
  ],
  authors: [{ name: 'Mountain Peak Hauling & Junk Removal LLC' }],
  openGraph: {
    title: 'Mountain Peak Hauling & Junk Removal',
    description: 'Professional hauling and junk removal services in Signal Mountain, TN',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
