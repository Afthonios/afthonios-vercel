'use client';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useEffect, useRef, useState } from 'react';

function Carousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1 },
      created: (slider) => {
        setInterval(() => {
          slider.next();
        }, 3500);
      },
    },
    []
  );

  return (
    <div ref={sliderRef} className="keen-slider w-full max-w-3xl mx-auto h-[500px]">
      {[
        {
          src: "https://afthonios.com/wp-content/uploads/2023/12/slider-1.jpg",
          alt: "Cultiver des états émotionnels positifs",
          text: "Cultiver des états émotionnels positifs",
        },
        {
          src: "https://afthonios.com/wp-content/uploads/2023/12/slider-2.jpg",
          alt: "Définir des objectifs SMART & suivre les KPI",
          text: "Définir des objectifs SMART & suivre les KPI",
        },
        {
          src: "https://afthonios.com/wp-content/uploads/2023/12/slider-3.jpg",
          alt: "Dépasser doutes & conflits internes",
          text: "Dépasser doutes & conflits internes",
        },
      ].map((item, idx) => (
        <div key={idx} className="keen-slider__slide flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-[300px] object-cover"
          />
          <p className="text-gray-800 font-semibold p-4">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
          {/* Left: Hero Image */}
          <div className="relative w-full h-[50vh] md:h-auto">
            <img
              src="https://res.cloudinary.com/djiqjc1ui/image/upload/f_auto,q_auto,w_1600/v1748513079/Hero_Nouvelle_Offre_mnauqa.png"
              alt="Femme souriante"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>

          {/* Right: Text */}
          <div className="flex flex-col justify-center items-center text-center md:text-left px-6 py-12 md:px-12">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
              Boostez vos équipes avec des modules Soft&nbsp;Skills prêts à l’emploi
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Offrez à vos équipes des ressources Soft Skills prêtes à l’emploi — plus humaines, plus vivantes, plus impactantes.<br />
              250&nbsp;modules SCORM & 350&nbsp;vidéos en cession définitive.<br />
              Aucun abonnement. Zéro contrainte.
            </p>
            <a
              href="#contact"
              className="mt-4 bg-[#C2410C] hover:bg-[#a63109] text-white font-semibold py-3 px-6 rounded shadow transition"
            >
              Demandez une démo
            </a>
          </div>
        </div>
      </section>

{/* Notre nouvelle offre Afthonios Section */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-screen-xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Notre nouvelle offre Afthonios</h2>
    <h3 className="text-lg font-semibold text-center text-gray-700 mb-2">
      Offre à vos équipes de ressources
    </h3>
    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
      Afthonios vous propose une solution complète, concrète et flexible pour développer efficacement les compétences de vos équipes.
    </p>
    <div className="mx-6 md:mx-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div className="bg-gray-100 px-6 py-8 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="text-4xl mb-4">📦</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Offre clé-en-main</h3>
          <p className="text-gray-700">Modules SCORM & vidéos intégrables directement sur votre plateforme.</p>
        </div>
        <div className="bg-gray-100 px-6 py-8 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Licence définitive</h3>
          <p className="text-gray-700">Payez une seule fois. Aucun abonnement, aucun frais caché.</p>
        </div>
        <div className="bg-gray-100 px-6 py-8 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Déploiement rapide</h3>
          <p className="text-gray-700">Intégration en moins d’une semaine dans votre écosystème de formation.</p>
        </div>
        <div className="bg-gray-100 px-6 py-8 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Pour tous les profils</h3>
          <p className="text-gray-700">Entreprise, école, collectivité, organisme de formation : notre solution s’adapte à vous.</p>
        </div>
      </div>
    </div>

      {/* Pourquoi choisir Afthonios Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left items-center md:items-start">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pourquoi choisir Afthonios&nbsp;?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Nos formations Soft Skills ont été conçues pour transformer les pratiques managériales avec plus
              d’humanité, d’efficacité et d’intelligence relationnelle.
            </p>
            <p className="text-lg text-gray-700">
              Nous proposons un catalogue riche de 250 modules SCORM, 350 vidéos, et des contenus prêts à l'emploi
              que vos équipes peuvent intégrer immédiatement dans leur quotidien professionnel.
            </p>
          </div>
          <PourquoiCarouselA />
        </div>
      </section>
  </div>
</section>

      {/* 8 Thématiques Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">8 thématiques clés</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Assertivité et Courage",
              "Efficacité Personnelle et Professionnelle",
              "Collaboration et Travail en Équipe",
              "Agilité et Changement",
              "Communication et Relations",
              "Management et Leadership",
              "Énergie Positive et Bien-être",
              "Diversité et Inclusion",
            ].map((theme) => (
              <div
                key={theme}
                className="bg-white p-6 h-28 shadow rounded flex items-center justify-center text-center font-semibold text-gray-700"
              >
                {theme}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue Slider Section */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-screen-xl mx-auto text-center">
          <a
            href="#catalogue"
            className="inline-block mb-10 bg-[#C2410C] hover:bg-[#a63109] text-white font-semibold py-3 px-8 rounded shadow transition"
          >
            Voir le catalogue
          </a>

          <Carousel />
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Ils nous font confiance</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src="/logos/logo1.png" alt="Logo 1" className="h-12" />
            <img src="/logos/logo2.png" alt="Logo 2" className="h-12" />
            <img src="/logos/logo3.png" alt="Logo 3" className="h-12" />
            <img src="/logos/logo4.png" alt="Logo 4" className="h-12" />
            <img src="/logos/logo5.png" alt="Logo 5" className="h-12" />
          </div>
        </div>
      </section>
    </main>
  );
}
// Carousel for "Pourquoi choisir Afthonios"
function PourquoiCarouselA() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1 },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created: (slider) => {
        setInterval(() => {
          slider.next();
        }, 4000);
      },
    },
    []
  );

  const slides = [
    {
      title: "Des contenus conçus par des coaches de terrain",
      desc: "concrets, vivants, proches du réel.",
    },
    {
      title: "Une approche transformative",
      desc: "pensée pour activer des prises de conscience durables.",
    },
    {
      title: "Un ton incarné, humain",
      desc: "loin des avatars, des discours formatés ou impersonnels.",
    },
    {
      title: "Des vidéos courtes, inspirantes et multiformats",
      desc: "parfaites pour les parcours LMS, les séminaires ou l’auto-apprentissage.",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-lg">
        <div ref={sliderRef} className="keen-slider h-[220px]">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="keen-slider__slide bg-white border-l-4 border-[#C2410C] text-gray-900 p-6 rounded flex flex-col justify-center items-start text-left h-full"
            >
              <h3 className="text-xl font-semibold mb-2">{slide.title}</h3>
              <p className="italic">{slide.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? 'bg-[#C2410C]' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

function PourquoiCarouselB() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1 },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created: (slider) => {
        setInterval(() => {
          slider.next();
        }, 4000);
      },
    },
    []
  );

  const slides = [
    {
      title: "Des contenus conçus par des coaches de terrain",
      desc: "concrets, vivants, proches du réel.",
    },
    {
      title: "Une approche transformative",
      desc: "pensée pour activer des prises de conscience durables.",
    },
    {
      title: "Un ton incarné, humain",
      desc: "loin des avatars, des discours formatés ou impersonnels.",
    },
    {
      title: "Des vidéos courtes, inspirantes et multiformats",
      desc: "parfaites pour les parcours LMS, les séminaires ou l’auto-apprentissage.",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-lg">
        <div ref={sliderRef} className="keen-slider h-[220px]">
          <div className="keen-slider__slide border-l-4 border-gray-400 bg-white text-gray-800 p-8 rounded-xl flex flex-col justify-center items-start text-left h-full">
            {slides.map((slide, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                <p className="text-base">{slide.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? 'bg-[#C2410C]' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}