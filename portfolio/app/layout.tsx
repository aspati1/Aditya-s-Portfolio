import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Aditya Vairale | Product, Analytics & Tech Portfolio',
  description:
    'Portfolio of Aditya Vairale highlighting AI-assisted product development, business analysis, finance analytics, and web technology projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
