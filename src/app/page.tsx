import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-900 text-gray-900 dark:text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Afthonios – Accueil / Home</h1>
      <p className="mb-8 text-center max-w-xl">
        Bienvenue sur la plateforme Afthonios. Choisissez votre langue et le thème souhaité.
      </p>

      <ul className="space-y-4 text-lg">
        <li>
          <Link href="/fr/nouvelle-offre" className="text-orange-600 hover:underline">
            🇫🇷 Nouvelle Offre (FR)
          </Link>
        </li>
        <li>
          <Link href="/en/new-offer" className="text-orange-600 hover:underline">
            🇬🇧 New Offer (EN)
          </Link>
        </li>
        <li>
          <Link href="/fr/project-academy" className="text-orange-600 hover:underline">
            🇫🇷 Project Academy (FR)
          </Link>
        </li>
        <li>
          <Link href="/en/project-academy" className="text-orange-600 hover:underline">
            🇬🇧 Project Academy (EN)
          </Link>
        </li>
      </ul>
    </main>
  );
}