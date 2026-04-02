import DriveUploader from '@/components/DriveUploader';

export default function UploadPage() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f8f9fa', // Soft off-white background to make the white bento blocks pop
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      padding: '60px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      
      <div style={{ maxWidth: '800px', width: '100%', marginBottom: '40px' }}>
        <h1 style={{ 
          fontSize: '36px', 
          fontWeight: '800', 
          color: '#111', 
          margin: '0 0 10px 0',
          letterSpacing: '-0.03em'
        }}>
          Secure Upload
        </h1>
        <p style={{ color: '#666', fontSize: '18px', margin: 0 }}>
          Share your memories to gallery.
        </p>
      </div>

      <DriveUploader />
      
    </main>
  );
}
