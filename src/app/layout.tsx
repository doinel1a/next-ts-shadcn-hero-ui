import '../styles/globals.css';
import '../styles/globals.scss';

import type { Metadata, Viewport } from 'next';
import type { PropsWithChildren } from 'react';

import config from '_config';
import { Geist, Geist_Mono, Nunito_Sans } from 'next/font/google';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import RootProvider from '@/components/providers/root';

const nunitoSans = Nunito_Sans({ variable: '--font-sans' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: config.metadata.title,
  description: config.metadata.description,
  keywords: config.metadata.keywords,
  icons: '/favicon.svg',
  manifest: '/app.webmanifest'
};

export const viewport: Viewport = {
  themeColor: '#000'
};

type TRootLayout = PropsWithChildren;

export default function RootLayout({ children }: Readonly<TRootLayout>) {
  return (
    <html lang='en' className={nunitoSans.variable} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <RootProvider>
          <div className='grid min-h-dvh grid-rows-[auto_1fr_auto]'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </RootProvider>
      </body>
    </html>
  );
}
