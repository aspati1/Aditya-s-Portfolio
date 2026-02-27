import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Aditya Vairale | Full Stack Developer',
  description:
    'Modern full-stack developer portfolio featuring production-ready React and Node.js projects, experience, and contact details.',
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
