import DriveUploader from '@/components/DriveUploader';

export default function UploadPage() {
  return (
    <div className="relative min-h-[calc(100vh-100px)] w-full flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden bg-[var(--background)]">
      
      {/* Immersive Heritage Background (Matching your Contest Page) */}
      <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-[0.03] grayscale pointer-events-none" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--color-mace-gold),transparent_70%)] opacity-[0.08] blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <main className="relative z-10 w-full max-w-4xl flex flex-col items-center">
        
        {/* Premium Header */}
        <div className="text-center mb-10 w-full max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 tracking-tight">
            <span className="text-[var(--color-mace-crimson)] italic font-light pr-3">Secure</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-mace-rust)] to-[var(--color-mace-gold)]">Portal</span>
          </h1>
          <p className="text-[var(--text-muted)] text-xs uppercase tracking-[0.25em] font-bold">
            Share to gallery
          </p>
        </div>

        {/* The Uploader Component */}
        <div className="w-full relative">
          <DriveUploader />
        </div>
        
      </main>
    </div>
  );
}
