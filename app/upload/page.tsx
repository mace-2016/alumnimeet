import DriveUploader from '@/components/DriveUploader';

export default function UploadPage() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '20px' 
    }}>
      <h1 style={{ marginBottom: '20px' }}>Secure File Portal</h1>
      
      {/* This is the client component we created. 
        It handles all the interactivity and state.
      */}
      <DriveUploader />
      
    </main>
  );
}
