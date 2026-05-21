'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cream text-off-black">
      <h2 className="text-4xl font-serif mb-4">Qualcosa è andato storto!</h2>
      <p className="mb-8">Si è verificato un errore durante il caricamento.</p>
      <button onClick={() => reset()} className="px-6 py-3 bg-off-black text-cream rounded-full text-xs uppercase tracking-widest hover:bg-brown-soft transition-colors">
        Riprova
      </button>
    </div>
  );
}
