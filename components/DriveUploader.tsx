"use client";

import { useState, useRef, useCallback, useEffect } from 'react';
// NEW IMPORTS FOR PHONE LIBRARY
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

interface QueuedFile {
  id: string;
  file: File;
  status: 'pending' | 'uploading' | 'success' | 'error';
  errorMessage?: string;
  previewUrl: string; 
}

const bentoBlockStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '24px',
  padding: '30px',
  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
  border: '1px solid #f1f1f1',
  display: 'flex',
  flexDirection: 'column' as const,
};

export default function DriveUploader() {
  const [files, setFiles] = useState<QueuedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [name, setName] = useState('');
  
  // Contact state now powers the PhoneInput
  const [contact, setContact] = useState('');
  
  const [showOverlay, setShowOverlay] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ⚠️ REPLACE WITH YOUR GOOGLE SCRIPT WEB APP URL
  const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyBOINKmBAWLjI1K_NtMTz_jS3cevMfwvtO7wHW6vw6kzLTX7WrorSiAl_88RbVIEll1w/exec';

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); e.stopPropagation(); setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); e.stopPropagation(); setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); e.stopPropagation(); setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const imageFiles = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'));
      if (imageFiles.length > 0) addFilesToQueue(imageFiles);
      else alert("Please drop image files only.");
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const imageFiles = Array.from(e.target.files).filter(file => file.type.startsWith('image/'));
      addFilesToQueue(imageFiles);
    }
  };

  const addFilesToQueue = (newFiles: File[]) => {
    const queuedFiles: QueuedFile[] = newFiles.map(file => ({
      id: Math.random().toString(36).substring(7),
      file,
      status: 'pending',
      previewUrl: URL.createObjectURL(file) 
    }));
    setFiles(prev => [...prev, ...queuedFiles]);
  };

  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
  };

  useEffect(() => {
    return () => files.forEach(f => URL.revokeObjectURL(f.previewUrl));
  }, [files]);

  const handlePrimaryAction = () => {
    // Phone length check: ensure it's longer than just the country code
    const isFormComplete = name.trim().length > 0 && contact.length > 6;
    if (isFormComplete) {
      uploadFiles();
    } else {
      setShowOverlay(true);
    }
  };

  const executeUploadFromOverlay = () => {
    setShowOverlay(false);
    uploadFiles();
  };

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
        formData.append('uploaderName', name);
        formData.append('uploaderContact', contact);

        const response = await fetch(WEB_APP_URL, { method: 'POST', body: formData });
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
    setFiles(prev => prev.map(f => f.id === id ? { ...f, status, errorMessage: errorMsg } : f));
  };

  const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve((e.target?.result as string).split(',')[1]);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const isUploading = files.some(f => f.status === 'uploading');
  const hasPending = files.some(f => f.status === 'pending');
  // Form complete logic updated for phone length
  const isFormComplete = name.trim().length > 0 && contact.length > 6;

  return (
    <>
      {showOverlay && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(6px)', 
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          zIndex: 1000, padding: '20px'
        }}>
          <div style={{ ...bentoBlockStyle, width: '100%', maxWidth: '400px', position: 'relative' }}>
            <button 
              onClick={() => setShowOverlay(false)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#888' }}
            >
              ×
            </button>
            
            <div style={{ marginBottom: '24px', marginTop: '10px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '700', margin: '0 0 8px 0', color: '#111' }}>Almost ready!</h2>
              <p style={{ margin: 0, fontSize: '15px', color: '#666' }}>Please provide your details so we know who sent these files.</p>
            </div>
            
            <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
              <input 
                type="text" 
                placeholder="Full Name *" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ padding: '16px', borderRadius: '12px', border: '1px solid #e1e1e1', fontSize: '15px', backgroundColor: '#fafafa', outline: 'none' }}
              />
              
              {/* NEW: International Phone Input replacing standard input */}
              <div style={{
                display: 'flex',
                borderRadius: '12px',
                border: '1px solid #e1e1e1',
                backgroundColor: '#fafafa',
                overflow: 'hidden',
                padding: '2px' // Creates space around the inner input to match the name field
              }}>
                <PhoneInput
                  defaultCountry="in"
                  value={contact}
                  onChange={(phone) => setContact(phone)}
                  style={{ width: '100%' }}
                  inputStyle={{
                    width: '100%',
                    border: 'none',
                    backgroundColor: 'transparent',
                    fontSize: '15px',
                    outline: 'none',
                    padding: '14px 10px',
                    color: '#111'
                  }}
                  countrySelectorStyleProps={{
                    buttonStyle: {
                      border: 'none',
                      backgroundColor: 'transparent',
                      padding: '0 12px'
                    }
                  }}
                />
              </div>
              
              <button 
                onClick={executeUploadFromOverlay}
                disabled={!isFormComplete}
                style={{
                  width: '100%', padding: '16px', marginTop: '10px',
                  backgroundColor: isFormComplete ? '#000000' : '#f1f1f1',
                  color: isFormComplete ? '#ffffff' : '#a1a1a1',
                  border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: '700',
                  cursor: isFormComplete ? 'pointer' : 'not-allowed', transition: 'all 0.2s',
                }}
              >
                Confirm & Upload
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MAIN UI BELOW (Unchanged) --- */}
      <div style={{ width: '100%', maxWidth: '800px', display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        
        <div 
          onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} onClick={() => fileInputRef.current?.click()}
          style={{ 
            ...bentoBlockStyle, flex: '1 1 100%',
            border: isDragging ? '2px dashed #000' : '2px dashed #e1e1e1',
            backgroundColor: isDragging ? '#f8f9fa' : '#ffffff',
            cursor: 'pointer', alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', minHeight: files.length > 0 ? '200px' : '300px',
            transition: 'all 0.2s ease'
          }}
        >
          <input type="file" multiple accept="image/*" ref={fileInputRef} onChange={handleFileSelect} style={{ display: 'none' }} />
          <div style={{ fontSize: '48px', marginBottom: '16px', filter: isDragging ? 'grayscale(0%)' : 'grayscale(100%)', opacity: isDragging ? 1 : 0.6, transition: 'all 0.2s' }}>🖼️</div>
          <h3 style={{ margin: '0 0 8px 0', color: '#111', fontSize: '18px', fontWeight: '700' }}>{isDragging ? 'Drop images here' : 'Select or drop images'}</h3>
          <p style={{ margin: 0, color: '#888', fontSize: '14px' }}>Supports JPG, PNG, WEBP</p>
        </div>

        {files.length > 0 && (
          <div style={{ ...bentoBlockStyle, flex: '1 1 100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
               <h2 style={{ fontSize: '20px', fontWeight: '700', margin: 0, color: '#111' }}>Queue ({files.length})</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px', maxHeight: '300px', overflowY: 'auto', paddingBottom: '10px' }}>
              {files.map(file => (
                <div key={file.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', backgroundColor: '#fafafa', borderRadius: '16px', border: '1px solid #f1f1f1' }}>
                  <img src={file.previewUrl} alt="preview" style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '10px' }} />
                  
                  <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflow: 'hidden' }}>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: '#111', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{file.file.name}</span>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                       <span style={{ fontSize: '12px', color: '#888' }}>{formatSize(file.file.size)}</span>
                       {file.status === 'pending' && <span style={{ color: '#888', fontSize: '11px', fontWeight: '600', padding: '2px 6px', backgroundColor: '#eee', borderRadius: '10px' }}>Ready</span>}
                       {file.status === 'uploading' && <span style={{ color: '#000', fontSize: '11px', fontWeight: '600', padding: '2px 6px', backgroundColor: '#e2e8f0', borderRadius: '10px' }}>Uploading</span>}
                       {file.status === 'success' && <span style={{ color: '#fff', fontSize: '11px', fontWeight: '600', padding: '2px 6px', backgroundColor: '#10b981', borderRadius: '10px' }}>Done</span>}
                       {file.status === 'error' && <span style={{ color: '#fff', fontSize: '11px', fontWeight: '600', padding: '2px 6px', backgroundColor: '#ef4444', borderRadius: '10px' }}>Error</span>}
                    </div>
                  </div>

                  {file.status !== 'uploading' && (
                    <button onClick={(e) => { e.stopPropagation(); removeFile(file.id); }} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '18px', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>

            <button 
              onClick={handlePrimaryAction}
              disabled={!hasPending || isUploading}
              style={{
                width: '100%', padding: '18px', marginTop: '24px',
                backgroundColor: !hasPending || isUploading ? '#f1f1f1' : '#000000',
                color: !hasPending || isUploading ? '#a1a1a1' : '#ffffff',
                border: 'none', borderRadius: '16px', fontSize: '16px', fontWeight: '700',
                cursor: !hasPending || isUploading ? 'not-allowed' : 'pointer', transition: 'all 0.2s',
                boxShadow: !hasPending || isUploading ? 'none' : '0 8px 20px rgba(0,0,0,0.15)'
              }}
            >
              {isUploading ? 'Uploading to Drive...' : 'Upload All Images'}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
