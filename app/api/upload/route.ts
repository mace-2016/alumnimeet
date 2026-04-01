export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { Readable } from "stream";

export async function POST(req: NextRequest) {
  try {
    const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

    if (!email) {
      return NextResponse.json({ error: "Missing GOOGLE_SERVICE_ACCOUNT_EMAIL" }, { status: 500 });
    }

    if (!privateKey) {
      return NextResponse.json({ error: "Missing GOOGLE_PRIVATE_KEY" }, { status: 500 });
    }

    if (!folderId) {
      return NextResponse.json({ error: "Missing GOOGLE_DRIVE_FOLDER_ID" }, { status: 500 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const auth = new google.auth.JWT({
      email,
      key: privateKey.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/drive"],
    });

    const drive = google.drive({ version: "v3", auth });

    const stream = new Readable();
    stream.push(buffer);
    stream.push(null);

    const response = await drive.files.create({
      requestBody: {
        name: file.name,
        parents: [folderId],
      },
      media: {
        mimeType: file.type || "application/octet-stream",
        body: stream,
      },
      fields: "id,name,webViewLink",
    });

    return NextResponse.json({
      success: true,
      file: response.data,
    });
  } catch (error: any) {
    console.error("UPLOAD ERROR:", error);
    return NextResponse.json(
      {
        error: error?.message || "Upload failed",
        details: String(error),
      },
      { status: 500 }
    );
  }
}
