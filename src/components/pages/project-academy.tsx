interface ProjectAcademyPageProps {
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
    <main className="px-6 py-10 space-y-8">
      <h1 className="text-4xl font-bold">{title}</h1>
      <h2 className="text-xl text-gray-600">{subtitle}</h2>
      {heroImg && (
        <img src={heroImg} alt={title} className="w-full object-cover rounded-lg" />
      )}
      <div
        className="prose max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: introHtml || '' }}
      />

      <h3 className="text-2xl font-semibold mt-8">{section1Title}</h3>
      <div
        className="prose max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: section1Html || '' }}
      />

      {section1Html2 && (
        <div
          className="prose max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: section1Html2 || '' }}
        />
      )}

      {section2Title && (
        <>
          <h3 className="text-2xl font-semibold mt-8">{section2Title}</h3>
          <div
            className="prose max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: section2Html || '' }}
          />
        </>
      )}

      {section3Title && (
        <>
          <h3 className="text-2xl font-semibold mt-8">{section3Title}</h3>
          <div
            className="prose max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: section3Html || '' }}
          />
        </>
      )}

      {section4Title && (
        <>
          <h3 className="text-2xl font-semibold mt-8">{section4Title}</h3>
          <div
            className="prose max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: section4Html || '' }}
          />
        </>
      )}

      {contactLabel && (
        <button className="btn btn-primary mt-8">{contactLabel}</button>
      )}
      {contactBlocks.length > 0 && (
        <div className="prose max-w-none dark:prose-invert">
          {contactBlocks.map((block: { id: string; data: { text: string } }) => (
            <p key={block.id}>{block.data.text}</p>
          ))}
        </div>
      )}
    </main>
  );
}