import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Global Estates Japan - Premium Japanese Real Estate',
  description: 'Discover exclusive Japanese properties for international buyers. From modern Tokyo apartments to traditional Kyoto homes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}