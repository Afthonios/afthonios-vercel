'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Footer() {
  const { locale } = useParams() as { locale: string };
  const year = new Date().getFullYear();

  const links =
    locale === 'en'
      ? [
          { href: 'https://afthonios.com/en/legal-information/', label: 'Legal information' },
          { href: 'https://afthonios.com/en/terms-and-conditions-of-sale/', label: 'Terms and conditions of sale' },
          { href: 'https://afthonios.com/en/cookie-policy-eu/', label: 'Cookie policy (EU)' },
          { href: 'https://afthonios.com/en/verify-a-certificate/', label: 'Verify a certificate' },
          { href: 'https://afthonios.com/en/about-us/', label: 'About us' },
        ]
      : [
          { href: 'https://afthonios.com/mentions-legales/', label: 'Mentions légales' },
          { href: 'https://afthonios.com/cgv/', label: 'Conditions générales de vente' },
          { href: 'https://afthonios.com/politique-de-cookies-ue/', label: 'Politique de cookies (UE)' },
          { href: 'https://afthonios.com/verifier-un-certificat/', label: 'Vérifier un certificat' },
          { href: 'https://afthonios.com/qui-sommes-nous/', label: 'Qui sommes nous ?' },
        ];

  return (
    <footer className="bg-[#0E323A] text-white py-10 text-lg">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center text-center space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
          {links.map((link, idx) => (
            <span key={link.href} className="inline-flex items-center">
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
              {idx < links.length - 1 && (
                <span className="mx-3 hidden sm:inline">|</span>
              )}
            </span>
          ))}
        </div>
        <hr className="border-t border-gray-600 w-full max-w-screen-md mt-2 mb-4" />
        <div className="text-lg text-gray-100 font-medium">&copy; {year} Afthonios</div>
      </div>
    </footer>
  );
}