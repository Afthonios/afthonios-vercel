

"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {

  return (
    <header className="w-full px-6 py-4 bg-white dark:bg-zinc-900 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-modern-light.svg"
            alt="Afthonios Logo"
            width={150}
            height={40}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-200">
          <Link href="/fr/nouvelle-offre">Accueil</Link>
          <Link href="/fr/formations">Formations</Link>
          <Link href="/fr/contact">Contact</Link>
        </nav>

        {/* Call to Action */}
        <div className="hidden md:block">
          <Link
            href="/fr/contact"
            className="inline-block px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
          >
            Nous écrire
          </Link>
        </div>
      </div>
    </header>
  );
}