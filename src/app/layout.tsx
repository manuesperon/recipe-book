import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'Recipe book',
  description: 'Store and organize your recipes',
};

const ibmPlex = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400'] });

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col bg-grey-dark text-cream ${ibmPlex.className}`}>
        <Header />
        <main className="p-4 md:py-12 md:px-8 mx-auto mt-16 ">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
