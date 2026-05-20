import { google } from 'googleapis';

export async function getImagesFromFolder(folderId: string) {
  try {
    const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;

    if (!email || !privateKey) {
      console.error("Missing Google credentials in environment variables");
      return [];
    }

    const auth = new google.auth.JWT({
      email,
      key: privateKey.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    });

    const drive = google.drive({ version: "v3", auth });

    const response = await drive.files.list({
      q: `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`,
      fields: 'files(id, name, thumbnailLink)',
      orderBy: 'createdTime desc',
    });

    return response.data.files || [];
  } catch (error) {
    console.error(`Error fetching from Drive folder ${folderId}:`, error);
    return [];
  }
}
