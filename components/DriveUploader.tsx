"use client";

import { useState, useRef, useCallback, useEffect } from 'react';

// Added previewUrl to our interface
interface QueuedFile {
  id: string;
  file: File;
  status: 'pending' | 'uploading' | 'success' | 'error';
  errorMessage?: string;
  previewUrl: string; 
}

export default function DriveUploader() {
  const [files, setFiles] = useState<QueuedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // YOUR GOOGLE SCRIPT WEB APP URL HERE
  const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyBOINKmBAWLjI1K_NtMTz_jS3cevMfwvtO7wHW6vw6kzLTX7WrorSiAl_88RbVIEll1w/exec';
  

  // --- Drag and Drop Handlers ---
  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      // Filter out anything that isn't an image
      const imageFiles = Array.from(e.dataTransfer.files).filter(file => 
        file.type.startsWith('image/')
      );
      
      if (imageFiles.length > 0) {
        addFilesToQueue(imageFiles);
      } else {
        alert("Please drop image files only.");
      }
    }
  }, []);

  // --- File Selection Handlers ---
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // The input accept="image/*" handles most filtering, but we double-check
      const imageFiles = Array.from(e.target.files).filter(file => 
        file.type.startsWith('image/')
      );
      addFilesToQueue(imageFiles);
    }
  };

  const addFilesToQueue = (newFiles: File[]) => {
    const queuedFiles: QueuedFile[] = newFiles.map(file => ({
      id: Math.random().toString(36).substring(7),
      file,
      status: 'pending',
      // Create a temporary URL to show the image preview
      previewUrl: URL.createObjectURL(file) 
    }));
    setFiles(prev => [...prev, ...queuedFiles]);
  };

  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
  };

  // Cleanup object URLs to avoid memory leaks when component unmounts or files change
  useEffect(() => {
    return () => {
      files.forEach(f => URL.revokeObjectURL(f.previewUrl));
    };
  }, [files]);

  // --- Upload Logic ---
  const uploadFiles = async () => {
    const pendingFiles = files.filter(f => f.status === 'pending');
    if (pendingFiles.length === 0) return;

    for (const item of pendingFiles) {
      updateFileStatus(item.id, 'uploading');

      try {
        const base64Data = await readFileAsBase64(item.file);
        
        const formData = new URLSearchParams();
        formData.append('filename', item.file.name);
        formData.append('mimeType', item.file.type);
        formData.append('fileData', base64Data);

        const response = await fetch(WEB_APP_URL, {
          method: 'POST',
          body: formData,
        });

        const result = await response.text();
        
        if (result.includes('Error') || result.includes('failed')) {
           updateFileStatus(item.id, 'error', result);
        } else {
           updateFileStatus(item.id, 'success');
        }

      } catch (error: any) {
        updateFileStatus(item.id, 'error', error.toString());
      }
    }
  };

  const updateFileStatus = (id: string, status: QueuedFile['status'], errorMsg?: string) => {
    setFiles(prev => prev.map(f => 
      f.id === id ? { ...f, status, errorMessage: errorMsg } : f
    ));
  };

  const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve((e.target?.result as string).split(',')[1]);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  // --- Render Helpers ---
  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const isUploading = files.some(f => f.status === 'uploading');
  const hasPending = files.some(f => f.status === 'pending');

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      {/* DRAG AND DROP ZONE */}
      <div 
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        style={{
          border: `2px dashed ${isDragging ? '#1a73e8' : '#ccc'}`,
          backgroundColor: isDragging ? '#f3f8ff' : '#fafafa',
          borderRadius: '12px',
          padding: '40px 20px',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          marginBottom: '20px'
        }}
      >
        <input 
          type="file" 
          multiple 
          accept="image/*" // THIS RESTRICTS THE FILE PICKER TO IMAGES
          ref={fileInputRef} 
          onChange={handleFileSelect} 
          style={{ display: 'none' }} 
        />
        <div style={{ fontSize: '40px', marginBottom: '10px' }}>🖼️</div>
        <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>
          {isDragging ? 'Drop images here!' : 'Drag & drop images here'}
        </h3>
        <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
          or click to browse your computer
        </p>
      </div>

      {/* FILE LIST */}
      {files.length > 0 && (
        <div style={{ backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '8px', padding: '15px' }}>
          <h4 style={{ margin: '0 0 15px 0', color: '#333', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
            Upload Queue ({files.length})
          </h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '350px', overflowY: 'auto' }}>
            {files.map(file => (
              <div key={file.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', overflow: 'hidden' }}>
                  {/* IMAGE THUMBNAIL PREVIEW */}
                  <img 
                    src={file.previewUrl} 
                    alt="preview" 
                    style={{ width: '44px', height: '44px', objectFit: 'cover', borderRadius: '6px', border: '1px solid #ddd' }}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <span style={{ fontSize: '14px', fontWeight: '500', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px' }}>
                      {file.file.name}
                    </span>
                    <span style={{ fontSize: '12px', color: '#888' }}>
                      {formatSize(file.file.size)}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {file.status === 'pending' && <span style={{ color: '#888', fontSize: '12px' }}>Ready</span>}
                  {file.status === 'uploading' && <span style={{ color: '#1a73e8', fontSize: '12px', fontWeight: 'bold' }}>Uploading...</span>}
                  {file.status === 'success' && <span style={{ color: '#0f9d58', fontSize: '12px', fontWeight: 'bold' }}>✓ Done</span>}
                  {file.status === 'error' && <span style={{ color: '#d93025', fontSize: '12px', fontWeight: 'bold' }}>Error</span>}
                  
                  {file.status !== 'uploading' && (
                    <button 
                      onClick={(e) => { e.stopPropagation(); removeFile(file.id); }}
                      style={{ background: 'none', border: 'none', color: '#999', cursor: 'pointer', fontSize: '20px', padding: '4px', lineHeight: '1' }}
                      title="Remove file"
                    >
                      ×
                    </button>
                  )}
                </div>

              </div>
            ))}
          </div>

          {/* ACTION BUTTON */}
          <button 
            onClick={uploadFiles}
            disabled={!hasPending || isUploading}
            style={{
              width: '100%',
              padding: '12px',
              marginTop: '15px',
              backgroundColor: !hasPending || isUploading ? '#ccc' : '#1a73e8',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: !hasPending || isUploading ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s'
            }}
          >
            {isUploading ? 'Uploading to Drive...' : 'Upload All Images'}
          </button>
        </div>
      )}

    </div>
  );
}
