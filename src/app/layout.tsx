import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';

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
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="mx-auto mt-6 md:p-8 p-4">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
