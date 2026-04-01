"use client";

import { useState } from "react";

export default function UploadPage() {
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setMessage("✅ Uploaded successfully");
    } else {
      setMessage("❌ Upload failed");
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Upload to Google Drive</h1>

      <form onSubmit={handleSubmit}>
        <input type="file" name="file" required />
        <button type="submit">Upload</button>
      </form>

      <p>{message}</p>
    </div>
  );
}
