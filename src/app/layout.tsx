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
      <body className={`min-h-screen flex flex-col bg-grey-dark text-cream font-Degular`}>
        <Header />
        <main className="md:container w-[100%] px-4 py-8 sm:py-12 mx-auto mt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
