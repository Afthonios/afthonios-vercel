"use client";

import Link from "next/link";
import Image from "next/image";
import CreditCardIcon from "@/icons/CreditCardIcon.svg";

export default function Header() {
  return (
    <header className="py-4 px-6 whitespace-nowrap flex items-center justify-between text-white bg-[#111827] relative z-20">
      <div className="flex items-center gap-4">
        <Link href="https://afthonios.com/">
          <Image
            src="/assets/logo_afthonios.webp"
            alt="Afthonios Logo"
            width={140}
            height={40}
            priority
          />
        </Link>
      </div>
      <nav className="flex gap-2 text-sm font-medium">
        <Link href="https://afthonios.com/catalogue-formations-elearning/" className="bg-[#600922] hover:bg-[#801030] px-4 py-2 rounded flex items-center gap-2">
          <Image src="/assets/icons/mon-compte.svg" alt="Toutes les formations" width={24} height={24} className="invert" />
          Toutes les formations
        </Link>
        <div className="relative group">
          <div className="bg-[#600922] hover:bg-[#801030] px-4 py-2 rounded flex items-center gap-2 cursor-pointer">
            <Image src="https://afthonios.com/wp-content/uploads/2023/12/abonnement.png" alt="Offre entreprise" width={24} height={24} className="invert" />
            Offre entreprise ▼
          </div>
          <div className="absolute hidden group-hover:block bg-[#600922] text-sm mt-1 rounded shadow-md z-50">
            <Link href="https://afthonios.com/offre-entreprise/#pme" className="block px-4 py-2 hover:bg-[#801030]">Offre PME</Link>
            <Link href="https://afthonios.com/offre-entreprise/#grande-entreprise" className="block px-4 py-2 hover:bg-[#801030]">Offre Grande entreprise</Link>
            <Link href="https://afthonios.com/offre-entreprise/#sur-mesure" className="block px-4 py-2 hover:bg-[#801030]">Offre sur-mesure</Link>
          </div>
        </div>
        <Link href="https://afthonios.com/cours-management-gratuit/" className="bg-[#600922] hover:bg-[#801030] px-4 py-2 rounded flex items-center gap-2">
          <Image src="https://afthonios.com/wp-content/uploads/2023/12/check.svg" alt="Cours offert" width={24} height={24} className="invert" />
          Cours offert
        </Link>
        <div className="relative group">
          <div className="bg-[#600922] hover:bg-[#801030] px-4 py-2 rounded flex items-center gap-2 cursor-pointer">
            <Image src="/assets/icons/payment.svg" alt="Mon compte" width={24} height={24} className="invert" />
            Mon compte ▼
          </div>
          <div className="absolute hidden group-hover:block bg-white text-sm mt-1 rounded shadow-md z-50 top-full min-w-max">
            <Link href="https://afthonios.com/mon-compte/" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-black">
              <Image src="/assets/icons/deconnexion.svg" alt="Déconnexion" width={24} height={24} />
              Se déconnecter
            </Link>
            <Link href="https://afthonios.com/mon-compte/#certificats" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-black">
              <Image src="/assets/icons/certificats.svg" alt="Certificats" width={24} height={24} />
              Certificats
            </Link>
            <Link href="https://afthonios.com/mon-compte/#abonnement" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-black">
              <Image
                src="https://afthonios.com/wp-content/uploads/2023/12/abonnement.png"
                alt="Abonnement"
                width={24}
                height={24}
              />
              Abonnement
            </Link>
            <Link href="https://afthonios.com/mon-compte/#factures" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-black">
              <Image
                src="https://afthonios.com/wp-content/uploads/2023/12/FACTURE.png"
                alt="Factures"
                width={24}
                height={24}
              />
              Factures
            </Link>
            <Link href="https://afthonios.com/mon-compte/#moyens-de-paiement" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-black">
              <CreditCardIcon className="w-10 h-auto" />
              Moyens de paiement
            </Link>
            <Link href="https://afthonios.com/mon-compte/#mot-de-passe" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-black">
              <Image src="/assets/icons/mot-de-passe-perdu.svg" alt="Mot de passe perdu" width={24} height={24} />
              Mot de passe perdu
            </Link>
          </div>
        </div>
        <Link href="https://afthonios.com/contact/" className="bg-[#600922] hover:bg-[#801030] px-4 py-2 rounded flex items-center gap-2">
          <Image
            src="https://afthonios.com/wp-content/uploads/2023/12/support.svg"
            alt="Contact"
            width={24}
            height={24}
            className="invert"
          />
          Contact
        </Link>
        <Link href="https://afthonios.com/en/" className="bg-[#600922] hover:bg-[#801030] px-4 py-2 rounded flex items-center gap-2">
          🇬🇧 English
        </Link>
      </nav>
    </header>
  );
}