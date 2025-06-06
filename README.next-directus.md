# 🧭 Next Directus – Project Overview

## 🎯 Project Goal

Migration of the current Afthonios WordPress-based site into a modern, maintainable and scalable **headless setup** using **Next.js** as frontend and **Directus** as backend. The new structure allows multilingual content, component-based design, responsive layout, and integration with existing LearnDash infrastructure during the transition.

---

## 🧱 Tech Stack

| Layer       | Technology             | Notes |
|-------------|------------------------|-------|
| Frontend    | **Next.js 15**         | App Router structure, Tailwind CSS, Dark/Light Mode |
| Backend     | **Directus (REST SDK)**| Dockerized on Hetzner |
| Deployment  | Vercel (frontend)      | Hetzner (backend), Vercel might be replaced later |
| Styling     | Tailwind CSS           | Responsive layout, theming planned (dark/light), H1–H3 system to be standardized |
| Icons       | Lucide                 | Icon set |
| Animations  | AOS (optional)         | Animate on Scroll – for reveal effects during scroll |
| Translations| `next-intl`            | To be replaced: all texts (fr/en) fetched from Directus |
| Assets      | Cloudinary (images), Vimeo (videos) | Media hosting |
| Authentication | WordPress-based     | Sync with Next frontend planned |

---

## 🌍 Internationalization

- Primary language: **French**
- Secondary: **English**
- Routes follow `/fr`, `/en` structure
- Language switch via header button (Directus-configured)
- JSON-based message structure will be deprecated

---

## 🧩 Pages & Structure

| Route                 | Description                                  |
|-----------------------|----------------------------------------------|
| `/fr/nouvelle-offre`  | Sales landing page for the French market     |
| `/en/new-offer`       | English equivalent                           |
| `/fr/projectacademy`  | Sales landing page for Project Academy offer |
| `/entreprise`         | Still hosted via WordPress for now           |
| `/mon-compte`         | Also remains on WordPress temporarily        |
| Main Landing Page     | Still hosted on WordPress                    |

---

## 🗃️ Directus Collections

### Singletons
- `classic_header`
- `projectacademy_page`
- planned: `footer`

### Collections
- `micro_courses` → individual formations (SCORM)
- `competences` → related skill tags
- `micro_courses_competences` → join table (M2M)
- `parcours` → grouped microcourses (bundles, CSV import planned)
- `catalogue` → future public view of full offer
- `testimonials` → currently part of `nouvelle-offre` page

> All collections are bilingual and should be filterable by language.  
> Initial data resides in Excel files and is migrated via CSV imports.  
> Singleton types cannot be exported/imported via CSV.

---

## 🔐 Authentication & Access

- WordPress handles login (currently hosted on Kinsta)
- Sync planned: if logged in to WordPress, user is considered logged in to Next.js
- LearnDash (WordPress) remains active for course access during transition
- SCORM: All courses are available in SCORM format, player integration will be evaluated

---

## 🔍 Search

- **MeiliSearch** will be installed on Hetzner
- Indexing: `micro_courses`, `parcours`, `competences`, metadata
- Filters: Theme, level, duration, language

---

## 📦 Hosting Setup

| Part              | Host     | Notes                             |
|-------------------|----------|-----------------------------------|
| Frontend          | Vercel   | Might migrate to Hetzner          |
| Backend (CMS)     | Hetzner  | Docker-based setup                |
| WordPress / LMS   | Kinsta   | May move to Hetzner later         |
| Assets            | Vimeo / Cloudinary | Media hosted externally |

---

## 🛠 Development Notes

- `.env.example` to be documented
- Local dev: `pnpm dev`
- Add ESLint, Prettier configuration
- Normalize `h1–h3` across all layouts
- Establish consistent color scheme (light/dark mode backgrounds, typography system)
- Localized routes follow `[locale]/(site)/[slug]` pattern using Next.js App Router conventions. The `(site)` folder is used for grouping but not reflected in the URL.
- Language-specific routes (e.g. `/fr/gestion-de-projet` and `/en/project-academy`) map to shared components in `components/pages` to avoid layout duplication.

---


## 🧪 Experimental / To-Do

- Replace static message-based translations with Directus-based content
- Build exportable PDF catalogue from micro_courses
- Develop full search and filtering UI for course discovery
- Sync WordPress + Next.js login sessions
- Migrate `/entreprise`, `/mon-compte`, and the main landing page from WordPress
- Integrate SCORM player for standalone delivery

---

## 🗂️ Immediate Next Steps

- ✅ **Cloudinary Import Script**  
  A working script was created to:
  - Read image assets from structured Cloudinary folders
  - Extract public URLs and metadata
  - Prepare data for import into Directus assets or related collections  
  ➕ Completed: Cloudinary re-upload finalized, and export CSV from Directus is ready to be matched and updated by Aysseline. Final update of Directus entries will follow.

- ✅ **Update Micro Courses in Directus with Cloudinary URLs**  
  Cloudinary titles were standardized via re-upload, and Aysseline will now align metadata with the Directus export. Once matched, Directus can be updated using the final CSV.

- 🚧 **Build Project Academy Page**  
  Focus now shifts to implementing the bilingual landing page for the Project Academy offer:
  - Use existing WordPress content as reference
  - Populate fields from the `projectacademy_page` singleton in Directus
  - Structure layout using Tailwind and component-based Next.js approach
  - Ensure `/fr/projectacademy` and `/en/projectacademy` routes are supported with language toggle

- 🖨️ **Create Exportable Catalogue**  
  Build a course catalogue that:
  - Can be browsed via a dedicated webpage
  - Can be exported as a lightweight, printable PDF  
  To avoid heavy file sizes due to images, a PDF optimizer may be used.  
  > Alternative: reuse existing standalone GitHub project dedicated to generating the catalogue from CSV or API data.

- 🧩 **Merge CSV Files: Directus Export + Cloudinary Metadata**  
  Combine the two available datasets:
  - Directus export of `micro_courses` in CSV format
  - Cloudinary image metadata (e.g. URLs, folder names, public IDs)
  
  Goal: enrich the Directus export with Cloudinary URLs (e.g. thumbnail image) based on a shared key (e.g. `slug` or `course_id`) to enable reimport or feed further tools such as the PDF catalogue.