import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://nhac.dev'),
  title: {
    default: 'Nhac Nguyen',
    template: '%s | Nhac Nguyen',
  },
  description: 'Nhac&apos;s online home',
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      className={cn('dark', 'min-w-80', GeistSans.variable, GeistMono.variable)}
    >
      <body className="antialiased">
        <Header />
        <main className="max-w-2xl mx-4 md:mx-auto py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
