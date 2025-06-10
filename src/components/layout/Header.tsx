// src/components/layout/Header.tsx
// src/components/layout/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { slugMap } from "@/lib/locale-slug-map";
import { usePathname } from "next/navigation";
interface HeaderProps {
  locale: string;
  data: {
    fr_logo_url?: string;
    en_logo_url?: string;
    logo_url?: string;
    [key: string]: string | undefined;
  };
}

export default function Header({ locale, data }: HeaderProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const pathname = usePathname();
  const parts = pathname.split("/");
  const currentSlug = parts[2];
  const otherLocale = locale === "en" ? "fr" : "en";
  const mappedSlug = currentSlug && slugMap?.[currentSlug as keyof typeof slugMap];
  const switchLocaleUrl = `/${otherLocale}/${mappedSlug || ""}`;
  const frUrl = locale === "fr" ? pathname : switchLocaleUrl;
  const enUrl = locale === "en" ? pathname : switchLocaleUrl;
  if (process.env.NODE_ENV === "development") {
    console.log("Header Debug:", {
      locale,
      pathname,
      currentSlug,
      otherLocale,
      mappedSlug,
      switchLocaleUrl,
      frUrl,
      enUrl,
    });
  }

  // On mount, read the saved theme or system preference
  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const useDark =
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(useDark);
    document.documentElement.classList.toggle("dark", useDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  };

  const t = (frValue?: string, enValue?: string): string | null => {
    const value = locale === 'en' ? enValue : frValue;
    return value && value.trim().length > 0 ? value : null;
  };

  const homeLink = t(data.fr_logo_url, data.en_logo_url) || "/";
  const logoUrl = data.logo_url && data.logo_url.trim().length > 0
    ? data.logo_url
    : t(data.fr_logo_url, data.en_logo_url);

  const formationsUrl = t(data.fr_link_formations_url, data.en_link_formations_url);
  const formationsLabel = t(data.fr_formations_label, data.en_formations_label);

  const offreEntrepriseLabel = t(data.fr_offre_entreprise_label, data.en_offre_entreprise_label);
  const offreEntrepriseSub1Url = t(data.fr_link_offre_entreprise_sub1_url, data.en_link_offre_entreprise_sub1_url);
  const offreEntrepriseSub1Label = t(data.fr_offre_entreprise_sub1_label, data.en_offre_entreprise_sub1_label);
  const offreEntrepriseSub2Url = t(data.fr_link_offre_entreprise_sub2_url, data.en_link_offre_entreprise_sub2_url);
  const offreEntrepriseSub2Label = t(data.fr_offre_entreprise_sub2_label, data.en_offre_entreprise_sub2_label);
  const offreEntrepriseSub3Url = t(data.fr_link_offre_entreprise_sub3_url, data.en_link_offre_entreprise_sub3_url);
  const offreEntrepriseSub3Label = t(data.fr_offre_entreprise_sub3_label, data.en_offre_entreprise_sub3_label);

  const coursOffertUrl = t(data.fr_cours_offert_url, data.en_cours_offert_url);
  const coursOffertLabel = t(data.fr_cours_offert_label, data.en_cours_offert_label);

  const monCompteLabel = t(data.fr_mon_compte_label, data.en_mon_compte_label);
  const monCompteSub1Url = t(data.fr_mon_compte_sub1_url, data.en_mon_compte_sub1_url);
  const monCompteSub1Label = t(data.fr_mon_compte_sub1_label, data.en_mon_compte_sub1_label);
  const monCompteSub2Url = t(data.fr_mon_compte_sub2_url, data.en_mon_compte_sub2_url);
  const monCompteSub2Label = t(data.fr_mon_compte_sub2_label, data.en_mon_compte_sub2_label);
  const monCompteSub3Url = t(data.fr_mon_compte_sub3_url, data.en_mon_compte_sub3_url);
  const monCompteSub3Label = t(data.fr_mon_compte_sub3_label, data.en_mon_compte_sub3_label);
  const monCompteSub4Url = t(data.fr_mon_compte_sub4_url, data.en_mon_compte_sub4_url);
  const monCompteSub4Label = t(data.fr_mon_compte_sub4_label, data.en_mon_compte_sub4_label);
  const monCompteSub5Url = t(data.fr_mon_compte_sub5_url, data.en_mon_compte_sub5_url);
  const monCompteSub5Label = t(data.fr_mon_compte_sub5_label, data.en_mon_compte_sub5_label);
  const monCompteSub6Url = t(data.fr_mon_compte_sub6_url, data.en_mon_compte_sub6_url);
  const monCompteSub6Label = t(data.fr_mon_compte_sub6_label, data.en_mon_compte_sub6_label);

  const contactUrl = t(data.fr_contact_url, data.en_contact_url);
  const contactLabel = t(data.fr_contact_label, data.en_contact_label);

  // const switchLocaleUrl = slugMap?.[locale === "en" ? "fr" : "en"]?.path || "/";
  const switchLocaleLabel = locale === 'en' ? 'Français' : 'English';
  const switchLocaleIcon = locale === 'en' ? "/icons/france-flag.svg" : "/icons/uk-flag.svg";

  return (
    <header className="py-3 px-6 whitespace-nowrap flex items-center justify-between text-white bg-[#0E323A] relative z-20 shadow-md">
      <div className="flex items-center gap-4 flex-shrink-0">
        {homeLink && logoUrl && (
          <Link href={homeLink}>
            <div className="flex-shrink-0">
              <Image
                src={logoUrl}
                alt={locale === 'en' ? 'Afthonios Logo – Training' : 'Logo Afthonios – Formation'}
                width={180}
                height={60}
                priority
                style={{ height: "auto", width: "auto" }}
              />
            </div>
          </Link>
        )}
      </div>
      <button
        className="lg:hidden flex items-center justify-center p-2"
        onClick={() => setIsMobileOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {/* Simple hamburger icon: three bars */}
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </button>
      <div className="flex items-center gap-1 ml-auto">
        <nav className="hidden lg:flex gap-2 text-base font-medium">
        {formationsUrl && formationsLabel && (
          <Link
            href={formationsUrl}
            className="h-10 bg-[#770E31] hover:bg-[#5a0f27] px-4 rounded flex items-center justify-center gap-2"
          >
            <Image
              src="/icons/formations.svg"
              alt=""
              aria-hidden="true"
              width={24}
              height={24}
              unoptimized
            />
            {formationsLabel}
          </Link>
        )}

        {/* ─── Angebotsmenü (Offre entreprise) ─────────────────────────────────────────── */}
        {offreEntrepriseLabel && (
          <div className="relative group">
            {/** Button, das selbst Teil der “group” ist */}
            <div className="h-10 bg-[#770E31] hover:bg-[#5a0f27] px-4 rounded flex items-center justify-center gap-2 cursor-pointer">
              <Image
                src="/icons/entreprise.svg"
                alt=""
                aria-hidden="true"
                width={24}
                height={24}
                unoptimized
              />
              {offreEntrepriseLabel} ▼
            </div>
            {/** Submenu, das nur im Hover-Fall sichtbar wird */}
            <div
              className="
                absolute
                top-full left-0
                hidden group-hover:block
                bg-[#770E31] text-base mt-0.5
                rounded shadow-md z-50
                min-w-max
              "
            >
              {offreEntrepriseSub1Url && offreEntrepriseSub1Label && (
                <Link
                  href={offreEntrepriseSub1Url}
                  className="block px-4 py-2 hover:bg-[#5a0f27] whitespace-nowrap"
                >
                  {offreEntrepriseSub1Label}
                </Link>
              )}
              {offreEntrepriseSub2Url && offreEntrepriseSub2Label && (
                <Link
                  href={offreEntrepriseSub2Url}
                  className="block px-4 py-2 hover:bg-[#5a0f27] whitespace-nowrap"
                >
                  {offreEntrepriseSub2Label}
                </Link>
              )}
              {offreEntrepriseSub3Url && offreEntrepriseSub3Label && (
                <Link
                  href={offreEntrepriseSub3Url}
                  className="block px-4 py-2 hover:bg-[#5a0f27] whitespace-nowrap"
                >
                  {offreEntrepriseSub3Label}
                </Link>
              )}
            </div>
          </div>
        )}

        {coursOffertUrl && coursOffertLabel && (
          <Link
            href={coursOffertUrl}
            className="h-10 bg-[#770E31] hover:bg-[#5a0f27] px-4 rounded flex items-center justify-center gap-2"
          >
            <Image
              src="/icons/cours-offert.svg"
              alt=""
              aria-hidden="true"
              width={24}
              height={24}
              unoptimized
            />
            {coursOffertLabel}
          </Link>
        )}

        {/* ─── “Mon compte” Dropdown ─────────────────────────────────────────────────────── */}
        {monCompteLabel && (
          <div className="relative group">
            {/* Haupt-Link für “Mon compte” / “My Account” */}
            <Link
              href={
                locale === 'en'
                  ? 'https://afthonios.com/en/my-account/abonnement/'
                  : 'https://afthonios.com/mon-compte/abonnement/'
              }
            >
              <div className="h-10 bg-[#770E31] hover:bg-[#5a0f27] px-4 rounded flex items-center justify-center gap-2 cursor-pointer">
                <Image
                  src="/icons/compte.svg"
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                  unoptimized
                />
                {monCompteLabel} ▼
              </div>
            </Link>
            {/* Untermenü bleibt unverändert */}
            <div
              className="
                absolute
                top-full left-0
                hidden group-hover:block
                bg-[#770E31] text-base mt-0.5
                rounded shadow-md z-50
                min-w-max
              "
            >
              {monCompteSub2Url && monCompteSub2Label && (
                <Link
                  href={monCompteSub2Url}
                  className="text-white flex items-center gap-2 px-4 py-2 hover:bg-[#5a0f27]"
                >
                  <Image
                    src="/icons/certificate.svg"
                    alt=""
                    aria-hidden="true"
                    width={24}
                    height={24}
                    unoptimized
                  />
                  {monCompteSub2Label}
                </Link>
              )}
              {monCompteSub3Url && monCompteSub3Label && (
                <Link
                  href={monCompteSub3Url}
                  className="text-white flex items-center gap-2 px-4 py-2 hover:bg-[#5a0f27]"
                >
                  <Image
                    src="/icons/abonnement.svg"
                    alt=""
                    aria-hidden="true"
                    width={24}
                    height={24}
                    unoptimized
                  />
                  {monCompteSub3Label}
                </Link>
              )}
              {monCompteSub4Url && monCompteSub4Label && (
                <Link
                  href={monCompteSub4Url}
                  className="text-white flex items-center gap-2 px-4 py-2 hover:bg-[#5a0f27]"
                >
                  <Image
                    src="/icons/invoice.svg"
                    alt=""
                    aria-hidden="true"
                    width={24}
                    height={24}
                    unoptimized
                  />
                  {monCompteSub4Label}
                </Link>
              )}
              {monCompteSub5Url && monCompteSub5Label && (
                <Link
                  href={monCompteSub5Url}
                  className="text-white flex items-center gap-2 px-4 py-2 hover:bg-[#5a0f27]"
                >
                  <Image
                    src="/icons/paiement.svg"
                    alt=""
                    aria-hidden="true"
                    width={24}
                    height={24}
                    unoptimized
                  />
                  {monCompteSub5Label}
                </Link>
              )}
              {monCompteSub6Url && monCompteSub6Label && (
                <Link
                  href={monCompteSub6Url}
                  className="text-white flex items-center gap-2 px-4 py-2 hover:bg-[#5a0f27]"
                >
                  <Image
                    src="/icons/password.svg"
                    alt=""
                    aria-hidden="true"
                    width={24}
                    height={24}
                    unoptimized
                  />
                  {monCompteSub6Label}
                </Link>
              )}
              {monCompteSub1Url && monCompteSub1Label && (
                <Link
                  href={monCompteSub1Url}
                  className="text-white flex items-center gap-2 px-4 py-2 hover:bg-[#5a0f27]"
                >
                  <Image
                    src="/icons/logout.svg"
                    alt=""
                    aria-hidden="true"
                    width={24}
                    height={24}
                    unoptimized
                  />
                  {monCompteSub1Label}
                </Link>
              )}
            </div>
          </div>
        )}

        {contactUrl && contactLabel && (
          <Link
            href={contactUrl}
            className="h-10 bg-[#770E31] hover:bg-[#5a0f27] px-4 rounded flex items-center justify-center gap-2"
          >
            <Image
              src="/icons/contact.svg"
              alt=""
              aria-hidden="true"
              width={24}
              height={24}
              unoptimized
            />
            {contactLabel}
          </Link>
        )}

        </nav>
        {/* Language switcher */}
        <div className="hidden lg:flex items-center rounded-full p-1">
          <Link
            href={frUrl}
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-base font-medium ${
              locale === 'fr'
                ? 'bg-white text-gray-900'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Version française"
          >
            <Image
              src="/icons/france-flag.svg"
              alt=""
              aria-hidden="true"
              width={18}
              height={18}
              unoptimized
            />
            FR
          </Link>
          <Link
            href={enUrl}
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-base font-medium ${
              locale === 'en'
                ? 'bg-white text-gray-900'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="English version"
          >
            <Image
              src="/icons/uk-flag.svg"
              alt=""
              aria-hidden="true"
              width={18}
              height={18}
              unoptimized
            />
            EN
          </Link>
        </div>
        {/* Theme toggle (moved to the right) */}
        <button
          aria-label="Toggle theme"
          onClick={toggleTheme}
          className="p-2 rounded hover:bg-white/10 ml-0"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {isMobileOpen && (
        <div className="absolute top-full left-0 w-full bg-primary-950 z-20 md:hidden">
          <nav className="flex flex-col space-y-1 p-4">
            {formationsUrl && formationsLabel && (
              <Link href={formationsUrl} className="py-2 px-3 text-white hover:bg-[#5a0f27] flex items-center gap-2 text-base">
                <Image src="/icons/formations.svg" alt="" width={20} height={20} unoptimized />
                {formationsLabel}
              </Link>
            )}
            {offreEntrepriseLabel && (
              <>
                <div className="py-2 px-3 text-white font-semibold flex items-center gap-2 text-base">
                  <Image src="/icons/entreprise.svg" alt="" width={20} height={20} unoptimized />
                  {offreEntrepriseLabel}
                </div>
                {offreEntrepriseSub1Url && offreEntrepriseSub1Label && (
                  <Link href={offreEntrepriseSub1Url} className="py-2 pl-8 pr-3 text-white hover:bg-[#5a0f27] text-base">
                    {offreEntrepriseSub1Label}
                  </Link>
                )}
                {offreEntrepriseSub2Url && offreEntrepriseSub2Label && (
                  <Link href={offreEntrepriseSub2Url} className="py-2 pl-8 pr-3 text-white hover:bg-[#5a0f27] text-base">
                    {offreEntrepriseSub2Label}
                  </Link>
                )}
                {offreEntrepriseSub3Url && offreEntrepriseSub3Label && (
                  <Link href={offreEntrepriseSub3Url} className="py-2 pl-8 pr-3 text-white hover:bg-[#5a0f27] text-base">
                    {offreEntrepriseSub3Label}
                  </Link>
                )}
              </>
            )}
            {coursOffertUrl && coursOffertLabel && (
              <Link href={coursOffertUrl} className="py-2 px-3 text-white hover:bg-[#5a0f27] flex items-center gap-2 text-base">
                <Image src="/icons/cours-offert.svg" alt="" width={20} height={20} unoptimized />
                {coursOffertLabel}
              </Link>
            )}
            {monCompteLabel && (
              <>
                <Link
                  href={locale === 'en'
                    ? 'https://afthonios.com/en/my-account/abonnement/'
                    : 'https://afthonios.com/mon-compte/abonnement/'}
                  className="py-2 px-3 text-white hover:bg-[#5a0f27] flex items-center gap-2 font-semibold text-base"
                >
                  <Image src="/icons/compte.svg" alt="" width={20} height={20} unoptimized />
                  {monCompteLabel}
                </Link>
                {monCompteSub2Url && monCompteSub2Label && (
                  <Link href={monCompteSub2Url} className="py-2 pl-8 pr-3 text-white hover:bg-[#5a0f27] flex items-center gap-2 text-base">
                    <Image src="/icons/certificate.svg" alt="" width={20} height={20} unoptimized />
                    {monCompteSub2Label}
                  </Link>
                )}
                {monCompteSub3Url && monCompteSub3Label && (
                  <Link href={monCompteSub3Url} className="py-2 pl-8 pr-3 text-white hover:bg-[#5a0f27] flex items-center gap-2 text-base">
                    <Image src="/icons/abonnement.svg" alt="" width={20} height={20} unoptimized />
                    {monCompteSub3Label}
                  </Link>
                )}
                {monCompteSub4Url && monCompteSub4Label && (
                  <Link href={monCompteSub4Url} className="py-2 pl-8 pr-3 text-white hover:bg-[#5a0f27] flex items-center gap-2 text-base">
                    <Image src="/icons/invoice.svg" alt="" width={20} height={20} unoptimized />
                    {monCompteSub4Label}
                  </Link>
                )}
                {monCompteSub5Url && monCompteSub5Label && (
                  <Link href={monCompteSub5Url} className="py-2 pl-8 pr-3 text-white hover:bg-[#5a0f27] flex items-center gap-2 text-base">
                    <Image src="/icons/paiement.svg" alt="" width={20} height={20} unoptimized />
                    {monCompteSub5Label}
                  </Link>
                )}
                {monCompteSub6Url && monCompteSub6Label && (
                  <Link href={monCompteSub6Url} className="py-2 pl-8 pr-3 text-white hover:bg-[#5a0f27] flex items-center gap-2 text-base">
                    <Image src="/icons/password.svg" alt="" width={20} height={20} unoptimized />
                    {monCompteSub6Label}
                  </Link>
                )}
                {monCompteSub1Url && monCompteSub1Label && (
                  <Link href={monCompteSub1Url} className="py-2 pl-8 pr-3 text-white hover:bg-[#5a0f27] flex items-center gap-2 text-base">
                    <Image src="/icons/logout.svg" alt="" width={20} height={20} unoptimized />
                    {monCompteSub1Label}
                  </Link>
                )}
              </>
            )}
            {contactUrl && contactLabel && (
              <Link href={contactUrl} className="py-2 px-3 text-white hover:bg-[#5a0f27] flex items-center gap-2 text-base">
                <Image src="/icons/contact.svg" alt="" width={20} height={20} unoptimized />
                {contactLabel}
              </Link>
            )}
            {locale && (
              <Link href={switchLocaleUrl} className="py-2 px-3 text-white hover:bg-[#5a0f27] flex items-center gap-2 text-base">
                <Image src={switchLocaleIcon} alt="" width={20} height={20} unoptimized />
                {switchLocaleLabel}
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}