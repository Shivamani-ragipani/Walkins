// app/layout.js
import './globals.css';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';

export const metadata = {
  title: 'Walk-in Jobs Hyderabad | Daily Job Updates',
  description: 'Find latest walk-in job opportunities in Hyderabad. Updated daily with fresh openings from top companies.',
  keywords: 'walk-in jobs, hyderabad jobs, daily jobs, fresher jobs, IT jobs hyderabad',
  openGraph: {
    title: 'Walk-in Jobs Hyderabad | Daily Updates',
    description: 'Latest walk-in job opportunities in Hyderabad',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: 'Walk-in Jobs Hyderabad',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Walk-in Jobs Hyderabad',
    description: 'Find latest walk-in jobs in Hyderabad',
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}