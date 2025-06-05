"use client";

import Link from "next/link";
import Image from "next/image";
import CreditCardIcon from "@/icons/CreditCardIcon.svg";
import { getClassicHeader } from "@/lib/directus";
import { useRouter } from 'next/navigation';


interface HeaderProps {
  locale: string;
}

export default async function Header({ locale }: HeaderProps) {
  const data = await getClassicHeader();
  const t = (frValue: any, enValue: any) => locale === 'en' ? enValue : frValue;

  if (!t(data.fr_logo_url, data.en_logo_url)) {
    console.error("Missing link_home in header data:", data);
    return null;
  }

  return (
    <header className="py-4 px-6 whitespace-nowrap flex items-center justify-between text-white bg-[#111827] relative z-20">
      <div className="flex items-center gap-4">
        {t(data.fr_logo_url, data.en_logo_url) && (
          <Link href={t(data.fr_logo_url, data.en_logo_url) || "/"}>
            {data.logo_url && (
              <Image
                src={data.logo_url}
                alt={locale === 'en' ? 'Afthonios Logo – Training' : 'Logo Afthonios – Formation'}
                width={140}
                height={40}
                priority
              />
            )}
          </Link>
        )}
      </div>
      <nav className="flex gap-2 text-sm font-medium">
        {t(data.fr_link_formations_url, data.en_link_formations_url) && (
          <Link href={t(data.fr_link_formations_url, data.en_link_formations_url) || "/"} className="h-10 bg-[#600922] hover:bg-[#801030] px-4 rounded flex items-center justify-center gap-2">
            <Image
              src="/icons/formations.svg"
              alt=""
              aria-hidden="true"
              width={24}
              height={24}
              unoptimized
            />
            {t(data.fr_formations_label, data.en_formations_label)}
          </Link>
        )}
        <div className="relative group">
          <div className="h-10 bg-[#600922] hover:bg-[#801030] px-4 rounded flex items-center justify-center gap-2 cursor-pointer">
            <Image src="/icons/entreprise.svg" alt="" aria-hidden="true" width={24} height={24} unoptimized />
            {t(data.fr_offre_entreprise_label, data.en_offre_entreprise_label)} ▼
          </div>
          <div className="absolute hidden group-hover:block bg-[#600922] text-sm mt-1 rounded shadow-md z-50">
            {t(data.fr_link_offre_entreprise_sub1_url, data.en_link_offre_entreprise_sub1_url) && (
              <Link href={t(data.fr_link_offre_entreprise_sub1_url, data.en_link_offre_entreprise_sub1_url) || "/"} className="block px-4 py-2 hover:bg-[#801030]">
                {t(data.fr_offre_entreprise_sub1_label, data.en_offre_entreprise_sub1_label)}
              </Link>
            )}
            {t(data.fr_link_offre_entreprise_sub2_url, data.en_link_offre_entreprise_sub2_url) && (
              <Link href={t(data.fr_link_offre_entreprise_sub2_url, data.en_link_offre_entreprise_sub2_url) || "/"} className="block px-4 py-2 hover:bg-[#801030]">
                {t(data.fr_offre_entreprise_sub2_label, data.en_offre_entreprise_sub2_label)}
              </Link>
            )}
            {t(data.fr_link_offre_entreprise_sub3_url, data.en_link_offre_entreprise_sub3_url) && (
              <Link href={t(data.fr_link_offre_entreprise_sub3_url, data.en_link_offre_entreprise_sub3_url) || "/"} className="block px-4 py-2 hover:bg-[#801030]">
                {t(data.fr_offre_entreprise_sub3_label, data.en_offre_entreprise_sub3_label)}
              </Link>
            )}
          </div>
        </div>
        {t(data.fr_cours_offert_url, data.en_cours_offert_url) && (
          <Link href={t(data.fr_cours_offert_url, data.en_cours_offert_url) || "/"} className="h-10 bg-[#600922] hover:bg-[#801030] px-4 rounded flex items-center justify-center gap-2">
            <Image
              src="/icons/cours-offert.svg"
              alt=""
              aria-hidden="true"
              width={24}
              height={24}
              unoptimized
            />
            {t(data.fr_cours_offert_label, data.en_cours_offert_label)}
          </Link>
        )}
        <div className="relative group">
          <div className="h-10 bg-[#600922] hover:bg-[#801030] px-4 rounded flex items-center justify-center gap-2 cursor-pointer">
            <Image src="/icons/compte.svg" alt="" aria-hidden="true" width={24} height={24} unoptimized />
            {t(data.fr_mon_compte_label, data.en_mon_compte_label)} ▼
          </div>
          <div className="absolute hidden group-hover:block bg-[#600922] text-sm mt-1 rounded shadow-md z-50 top-full min-w-max">
            <Link href={t(data.fr_mon_compte_sub2_url, data.en_mon_compte_sub2_url) || "/"} className="text-white flex items-center gap-2 px-4 py-2 hover:bg-[#801030]">
              <Image src="/icons/certificate.svg" alt="" aria-hidden="true" width={24} height={24} unoptimized />
              {t(data.fr_mon_compte_sub2_label, data.en_mon_compte_sub2_label)}
            </Link>
            <Link href={t(data.fr_mon_compte_sub3_url, data.en_mon_compte_sub3_url) || "/"} className="text-white flex items-center gap-2 px-4 py-2 hover:bg-[#801030]">
              <Image src="/icons/abonnement.svg" alt="" aria-hidden="true" width={24} height={24} unoptimized />
              {t(data.fr_mon_compte_sub3_label, data.en_mon_compte_sub3_label)}
            </Link>
            <Link href={t(data.fr_mon_compte_sub4_url, data.en_mon_compte_sub4_url) || "/"} className="text-white flex items-center gap-2 px-4 py-2 hover:bg-[#801030]">
              <Image src="/icons/invoice.svg" alt="" aria-hidden="true" width={24} height={24} unoptimized />
              {t(data.fr_mon_compte_sub4_label, data.en_mon_compte_sub4_label)}
            </Link>
            <Link href={t(data.fr_mon_compte_sub5_url, data.en_mon_compte_sub5_url) || "/"} className="text-white flex items-center gap-2 px-4 py-2 hover:bg-[#801030]">
              <Image src="/icons/paiement.svg" alt="" aria-hidden="true" width={24} height={24} unoptimized />
              {t(data.fr_mon_compte_sub5_label, data.en_mon_compte_sub5_label)}
            </Link>
            <Link href={t(data.fr_mon_compte_sub6_url, data.en_mon_compte_sub6_url) || "/"} className="text-white flex items-center gap-2 px-4 py-2 hover:bg-[#801030]">
              <Image src="/icons/password.svg" alt="" aria-hidden="true" width={24} height={24} unoptimized />
              {t(data.fr_mon_compte_sub6_label, data.en_mon_compte_sub6_label)}
            </Link>
            <Link href={t(data.fr_mon_compte_sub1_url, data.en_mon_compte_sub1_url) || "/"} className="text-white flex items-center gap-2 px-4 py-2 hover:bg-[#801030]">
              <Image src="/icons/logout.svg" alt="" aria-hidden="true" width={24} height={24} unoptimized />
              {t(data.fr_mon_compte_sub1_label, data.en_mon_compte_sub1_label)}
            </Link>
          </div>
        </div>
        {t(data.fr_contact_url, data.en_contact_url) && (
          <Link
            href={t(data.fr_contact_url, data.en_contact_url) || "/"}
            className="h-10 bg-[#600922] hover:bg-[#801030] px-4 rounded flex items-center justify-center gap-2"
          >
            <Image
              src="/icons/contact.svg"
              alt=""
              aria-hidden="true"
              width={24}
              height={24}
              unoptimized
            />
            {t(data.fr_contact_label, data.en_contact_label)}
          </Link>
        )}
        {locale && (
          <Link
            href={locale === 'en' ? '/fr' : '/en'}
            className="h-10 bg-[#600922] hover:bg-[#801030] px-4 rounded flex items-center justify-center gap-2"
          >
            <Image
              src={locale === 'en'
                ? "/icons/france-flag.svg"
                : "/icons/uk-flag.svg"}
              alt=""
              aria-hidden="true"
              width={24}
              height={24}
              unoptimized
            />
            {locale === 'en' ? 'Français' : 'English'}
          </Link>
        )}
      </nav>
    </header>
  );
}