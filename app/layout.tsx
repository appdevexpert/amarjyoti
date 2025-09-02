import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shri Om Plywood Pvt. Ltd. - Premium Plywood Manufacturer',
  description: 'Leading plywood manufacturer since 1990s. Amarjyoti Ply brand offering premium quality plywood, block boards, and flush doors. ISI approved, sustainable manufacturing.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
