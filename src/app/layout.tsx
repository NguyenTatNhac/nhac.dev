import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import Header from '@/components/Header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'nhac.dev',
  description: 'Nhac&apos;s online home',
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
