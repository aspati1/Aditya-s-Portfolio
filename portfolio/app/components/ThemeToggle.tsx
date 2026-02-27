"use client";

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return savedTheme === 'dark' || (!savedTheme && prefersDark);
};

const ThemeToggle = () => {
  const [dark, setDark] = useState<boolean | null>(getInitialTheme);

  useEffect(() => {
    if (dark === null) {
      return;
    }

    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  if (dark === null) {
    return <div className="h-[34px] w-[42px] rounded-md border" aria-hidden="true" />;
  }

  return (
    <button
      onClick={() => setDark(!dark)}
      className="rounded-md border px-2 py-1 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {dark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
};

export default ThemeToggle;
