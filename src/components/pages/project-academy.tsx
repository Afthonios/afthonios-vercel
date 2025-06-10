import Image from 'next/image';

export interface ProjectAcademyPageProps {
  locale: string;
  data: {
    title_fr: string;
    title_en: string;
    subtitle_fr: string;
    subtitle_en: string;
    intro_text_fr: string;
    intro_text_en: string;
    hero_image_url?: string;
    section_1_title_fr: string;
    section_1_title_en: string;
    section_1_text_fr: string;
    section_1_text_en: string;
    section_1_text2_fr?: string;
    section_1_text2_en?: string;
    section_2_title_fr?: string;
    section_2_title_en?: string;
    section_2_text_fr?: string;
    section_2_text_en?: string;
    section_3_title_fr?: string;
    section_3_title_en?: string;
    section_3_text_fr?: string;
    section_3_text_en?: string;
    section_4_title_fr?: string;
    section_4_title_en?: string;
    section_4_text_fr?: string;
    section_4_text_en?: string;
    contact_button_fr?: string;
    contact_button_en?: string;
    contact_text_fr?: { blocks: { id: string; data: { text: string } }[] };
    contact_text_en?: { blocks: { id: string; data: { text: string } }[] };
  };
}

export default function ProjectAcademyPage({ locale, data }: ProjectAcademyPageProps) {
  const title = locale === 'fr' ? data.title_fr : data.title_en;
  const subtitle = locale === 'fr' ? data.subtitle_fr : data.subtitle_en;
  const introHtml = locale === 'fr' ? data.intro_text_fr : data.intro_text_en;
  const heroImg = data.hero_image_url;
  const section1Title = locale === 'fr' ? data.section_1_title_fr : data.section_1_title_en;
  const section1Html = locale === 'fr' ? data.section_1_text_fr : data.section_1_text_en;
  const section1Html2 = locale === 'fr' ? data.section_1_text2_fr : data.section_1_text2_en;
  const section2Title = locale === 'fr' ? data.section_2_title_fr : data.section_2_title_en;
  const section2Html = locale === 'fr' ? data.section_2_text_fr : data.section_2_text_en;
  const section3Title = locale === 'fr' ? data.section_3_title_fr : data.section_3_title_en;
  const section3Html = locale === 'fr' ? data.section_3_text_fr : data.section_3_text_en;
  const section4Title = locale === 'fr' ? data.section_4_title_fr : data.section_4_title_en;
  const section4Html = locale === 'fr' ? data.section_4_text_fr : data.section_4_text_en;
  const contactLabel = locale === 'fr' ? data.contact_button_fr : data.contact_button_en;
  const contactBlocks =
    (locale === 'fr'
      ? data.contact_text_fr && data.contact_text_fr.blocks
      : data.contact_text_en && data.contact_text_en.blocks) || [];

  return (
    <div className="px-40 py-10 space-y-8">
      <h1 className="mt-20 text-4xl font-serif font-bold">{title}</h1>
      <div className="flex flex-col lg:flex-row gap-8 items-start max-w-6xl mx-auto">
        <div className="flex items-start gap-4 flex-1">
          <h3 className="text-xl font-medium text-gray-700 dark:text-white text-center w-full">{subtitle}</h3>
        </div>
      </div>
      {/* <h3 className="text-xl font-medium text-gray-700">{subtitle}</h3> */}
      {heroImg && (
        <Image
          src={heroImg}
          alt={title}
          width={1200}
          height={600}
          className="w-full object-cover rounded-lg"
        />
      )}
      <div
        className="richtext-block"
        dangerouslySetInnerHTML={{ __html: introHtml || '' }}
      />

      <h2 className="text-2xl font-sans font-bold mt-20">{section1Title}</h2>
      <div className="grid lg:grid-cols-4 gap-6 items-center justify-center">
        <Image
          src="https://afthonios.com/wp-content/uploads/2025/04/ProductBox-Complete-set-1536x1024.png"
          alt="Product Box"
          width={700}
          height={700}
          className="rounded-md object-cover mx-auto lg:justify-self-end lg:w-[700px] lg:h-[700px] w-full max-w-full h-auto"
        />
        <div
          className="richtext-block lg:col-span-3 text-left space-y-4 text-lg"
          dangerouslySetInnerHTML={{ __html: section1Html || '' }}
        />
      </div>

      {section1Html2 && (
        <div
          className="richtext-block"
          dangerouslySetInnerHTML={{ __html: section1Html2 || '' }}
        />
      )}

      {section2Title && (
        <>
          <h2 className="text-2xl font-sans font-bold mt-20">{section2Title}</h2>
          <div
            className="richtext-block"
            dangerouslySetInnerHTML={{ __html: section2Html || '' }}
          />
        </>
      )}

      {section3Title && (
        <>
          <h2 className="text-2xl font-sans font-bold mt-20">{section3Title}</h2>
          <div
            className="richtext-block"
            dangerouslySetInnerHTML={{ __html: section3Html || '' }}
          />
        </>
      )}

      {section4Title && (
        <>
          <h2 className="text-2xl font-sans font-bold mt-20">{section4Title}</h2>
          <div
            className="richtext-block"
            dangerouslySetInnerHTML={{ __html: section4Html || '' }}
          />
        </>
      )}

      {contactLabel && (
        <button className="btn btn-primary mt-8">{contactLabel}</button>
      )}
      {contactBlocks.length > 0 && (
        <div className="richtext-block">
          {contactBlocks.map((block: { id: string; data: { text: string } }) => (
            <p key={block.id}>{block.data.text}</p>
          ))}
        </div>
      )}
    </div>
  );
}