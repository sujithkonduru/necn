import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins, Outfit } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: [
    '300',
    '400',
    '500',
    '600',
    '700',
    '800'
  ],
  variable: '--font-poppins',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: [
    '300',
    '400',
    '500',
    '600',
    '700'
  ],
  variable: '--font-outfit',
});


export const metadata: Metadata = {
  metadataBase: new URL('https://necnellore.ac.in'),

  title: {
    default: 'Narayana Engineering College Nellore | NECN',
    template: '%s | NECN'
  },

  description:
    'Narayana Engineering College Nellore - Excellence in engineering education, innovation, research, admissions and placements.',

  keywords: [
    'NECN',
    'Narayana Engineering College Nellore',
    'Engineering College Andhra Pradesh',
    'BTech Admissions',
    'MTech',
    'Placements',
    'Campus Life'
  ],

  authors: [
    {
      name: 'Narayana Engineering College Nellore'
    }
  ],

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  },

  openGraph: {
    title:
      'Narayana Engineering College Nellore',

    description:
      'Premier engineering institution in Andhra Pradesh with excellent academics and placements.',

    url:
      'https://necnellore.ac.in',

    siteName:
      'NECN',

    type:
      'website',

    locale:
      'en_IN',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Narayana Engineering College Nellore'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Narayana Engineering College Nellore',
    description:
      'Engineering education, innovation and placements at NECN.',
    images: ['/og-image.png']
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html
      lang="en"
      suppressHydrationWarning
    >

      <body
        className={`
          ${inter.variable}
          ${poppins.variable}
          ${outfit.variable}
          font-inter
        `}
      >

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >

          <Navbar />

          <main>
            {children}
          </main>

          <Footer />

        </ThemeProvider>

      </body>

    </html>
  );
}