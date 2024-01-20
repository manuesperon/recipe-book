import type { Metadata } from 'next';
import './globals.css';

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
        <main className="mx-auto mt-6 md:p-8 p-4">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
