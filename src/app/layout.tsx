import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Recipe book',
  description: 'Store and organize your recipes',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`flex min-h-screen flex-col bg-grey-dark font-Degular text-cream`}>
        <Header />
        <main className="mx-auto mt-16 w-[100%] px-4 py-8 md:container sm:py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
