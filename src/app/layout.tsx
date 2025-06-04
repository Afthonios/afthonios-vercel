'use client';

import { useState, useEffect } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import { Moon, Sun } from "lucide-react";
import "./globals.css";
import Header from "@/components/ui/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = document.documentElement;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');

    // Helper to apply the theme
    const applyTheme = (isDark: boolean) => {
      if (isDark) {
        root.classList.add('dark');
        setTheme('dark');
      } else {
        root.classList.remove('dark');
        setTheme('light');
      }
    };

    // Use saved preference if available
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      applyTheme(true);
    } else if (savedTheme === 'light') {
      applyTheme(false);
    } else {
      // No saved preference — follow system
      applyTheme(mq.matches);
    }

    // Listen to system changes only if no saved preference
    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches);
      }
    };
    mq.addEventListener('change', handleSystemChange);

    setMounted(true);

    return () => {
      mq.removeEventListener('change', handleSystemChange);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;

    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  return (
    <html lang={typeof navigator !== 'undefined' && navigator.language.startsWith('en') ? 'en' : 'fr'} className={theme === 'dark' ? 'dark' : ''}>
      <head>
        <meta name="color-scheme" content="light dark" />
        <title>Afthonios – Formations haut de gamme – Management et Soft Skills</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-gray-900 dark:text-white`}>
        <Header />
        {mounted && (
          <button
            onClick={toggleTheme}
            className="fixed top-20 right-4 z-50 p-2 rounded bg-gray-100 dark:bg-gray-800 shadow"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}
        {children}
      </body>
    </html>
  );
}
