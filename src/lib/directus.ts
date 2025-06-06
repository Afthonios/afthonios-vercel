// src/lib/directus.ts
import { createDirectus, rest, readSingleton } from '@directus/sdk';

const directus = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

export async function getClassicHeader() {
  try {
    const data = await directus.request(readSingleton('classic_header'));
    return data;
  } catch (error) {
    console.error("Error fetching classic_header:", error);
    return null;
  }
}

export async function getProjectAcademyPage() {
  try {
    const data = await directus.request(readSingleton('projectacademy_page'));
    return data;
  } catch (error) {
    console.error("Error fetching projectacademy_page:", error);
    return null;
  }
}