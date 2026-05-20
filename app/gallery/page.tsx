import GalleryClient from "./GalleryClient";
import { getImagesFromFolder } from "@/lib/googleDrive";

export const revalidate = 60; // Revalidate the cache every 60 seconds

// Your category structure, now acting as the data mapping source
const DRIVE_FOLDERS = [
  {
    id: "the-hostels",
    driveFolderId: "1uclaab47vdYL1pRIu7Fotk-N_slxkO5U", 
    title: "Oh! Those years!",
    year: "2016",
    description: "Because some days are too good to leave behind.",
    locked: false,
  },
  {
    id: "where-are-we",
    driveFolderId: "1gaQ2r4PE_DJoHBUv1xyxlwrZv4oUNsTo",
    title: "Just like that, we all grew up!",
    year: "2026",
    description: "Some chased dreams, some moved cities, some built careers, and many began new chapters.",
    locked: false,
  },
  {
    id: "decennial-live",
    driveFolderId: "1TOu3yIyLbOf0IJ30SXhI0KSzsfaoY9QL", 
    title: "And here we are!",
    year: "2026",
    locked: true,
    description: "A Gallery to Hold on | Dec 19, '26",
  },
];

export default async function GalleryPage() {
  // Fetch all unlocked folders in parallel on the server
  const categoriesWithImages = await Promise.all(
    DRIVE_FOLDERS.map(async (category) => {
      let images: any[] = [];
      
      if (!category.locked && category.driveFolderId) {
        images = await getImagesFromFolder(category.driveFolderId);
      }

      return {
        ...category,
        count: images.length,
        images: images,
      };
    })
  );

  return <GalleryClient categories={categoriesWithImages} />;
}
