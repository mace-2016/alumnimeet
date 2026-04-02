"use client";



import { useState } from 'react';



export default function DriveUploader() {

  const [status, setStatus] = useState<string>('');

  const [isUploading, setIsUploading] = useState<boolean>(false);



  // REPLACE WITH YOUR GOOGLE SCRIPT WEB APP URL

  const WEB_APP_URL = 'YOUR_WEB_APP_URL_HERE';



  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {

    const file = event.target.files?.[0];

    if (!file) return;



    setIsUploading(true);

    setStatus('Uploading... please wait.');



    const reader = new FileReader();



    reader.onload = async (e) => {

      const base64Data = (e.target?.result as string).split(',')[1];



      const formData = new URLSearchParams();

      formData.append('filename', file.name);

      formData.append('mimeType', file.type);

      formData.append('fileData', base64Data);



      try {

        const response = await fetch(https://script.google.com/macros/s/AKfycbyBOINKmBAWLjI1K_NtMTz_jS3cevMfwvtO7wHW6vw6kzLTX7WrorSiAl_88RbVIEll1w/exec, {

          method: 'POST',

          body: formData,

        });

        

        const result = await response.text();

        setStatus(result);

      } catch (error) {

        setStatus(`Upload failed: ${error}`);

      } finally {

        setIsUploading(false);

      }

    };



    reader.readAsDataURL(file);

  };



  return (

    <div style={{ maxWidth: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', margin: '0 auto' }}>

      <h3>Upload to Drive</h3>

      <input 

        type="file" 

        onChange={handleUpload} 

        disabled={isUploading}

        style={{ display: 'block', marginBottom: '10px', width: '100%' }}

      />

      {status && (

        <p style={{ color: status.includes('failed') || status.includes('Error') ? 'red' : 'green', fontWeight: 'bold' }}>

          {status}

        </p>

      )}

    </div>

  );

}
