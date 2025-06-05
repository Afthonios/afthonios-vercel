import Link from "next/link";

interface HomePageProps {
  params: {
    locale: string;
  };
}

export default function HomePage({ params }: HomePageProps) {
  const { locale } = params;

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-900 text-gray-900 dark:text-white flex flex-col items-center justify-center p-8">
      {locale === 'fr' && (
        <>
          <h1 className="text-4xl font-bold mb-4">Afthonios – Accueil</h1>
          <p className="mb-8 text-center max-w-xl">
            Bienvenue sur la plateforme Afthonios. Choisissez le thème souhaité.
          </p>
          <ul className="space-y-4 text-lg">
            <li>
              <Link href="/fr/nouvelle-offre" className="text-orange-600 hover:underline">
                🇫🇷 Nouvelle Offre
              </Link>
            </li>
            <li>
              <Link href="/fr/project-academy" className="text-orange-600 hover:underline">
                🇫🇷 Project Academy
              </Link>
            </li>
          </ul>
        </>
      )}
      {locale === 'en' && (
        <>
          <h1 className="text-4xl font-bold mb-4">Afthonios – Home</h1>
          <p className="mb-8 text-center max-w-xl">
            Welcome to the Afthonios platform. Choose your topic of interest.
          </p>
          <ul className="space-y-4 text-lg">
            <li>
              <Link href="/en/new-offer" className="text-orange-600 hover:underline">
                🇬🇧 New Offer
              </Link>
            </li>
            <li>
              <Link href="/en/project-academy" className="text-orange-600 hover:underline">
                🇬🇧 Project Academy
              </Link>
            </li>
          </ul>
        </>
      )}
    </main>
  );
}