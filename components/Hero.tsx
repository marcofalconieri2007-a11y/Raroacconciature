import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-60 md:pb-40 overflow-hidden bg-sage-muted/10">
      {/* Decorative color orb */}
      <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-terracotta/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-[90rem] mx-auto px-5 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-start z-10 w-full animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="text-[10px] font-bold tracking-[0.4em] text-terracotta mb-10 border-b border-terracotta/20 pb-2 uppercase">
            RARO ACCONCIATURE – GIUSSANO
          </span>
          <h1 className="font-serif text-[42px] sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[1.0] md:leading-[0.9] text-off-black mb-10 md:mb-16 tracking-tighter break-words hyphens-auto font-normal">
            Bellezza <br />
            <em className="italic text-terracotta pr-4 font-normal">sincera.</em>
          </h1>
          <p className="text-off-black/90 max-w-lg text-[18px] sm:text-[22px] font-normal leading-relaxed mb-12 md:mb-24 text-balance">
            Un luogo dove sentirti accolta, ascoltata e valorizzata in modo naturale.
          </p>
          <a
            href="tel:+390362851063"
            className="group flex items-center space-x-6 md:space-x-8 border-b border-off-black/20 pb-5 md:pb-6 text-[10px] md:text-[11px] font-semibold tracking-[0.3em] text-off-black hover:text-brown-soft hover:border-brown-soft transition-all duration-700 uppercase"
          >
            <span>PRENOTA LA TUA ESPERIENZA</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-40 group-hover:translate-x-2 transition-transform duration-500"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>

        {/* Image Visual Hero */}
        <div className="relative w-full aspect-[4/5] lg:aspect-[3.5/4.5] animate-in fade-in slide-in-from-right-12 duration-[1.5s] delay-300 lg:scale-[1.05] origin-right mt-8 lg:mt-0">
           <div className="absolute inset-0 leaf-shape-1 shadow-[0_40px_100px_-30px_rgba(133,110,94,0.2)] overflow-hidden group isolate">
             <Image 
               src="/hero-image.jpg.png" 
               alt="Raro Acconciature" 
               fill 
               className="object-cover mix-blend-multiply opacity-[0.9] transition-transform duration-[2.5s] group-hover:scale-[1.04]"
               style={{
                 maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                 WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
               }}
               priority
             />
             {/* Subtle vignette/texture inside image */}
             <div className="absolute inset-0 bg-gradient-to-tr from-off-black/10 via-transparent to-white/5 mix-blend-soft-light" />
           </div>
           
           {/* Decorative floating element */}
           <div className="absolute -top-12 -right-12 w-48 h-48 border border-taupe/20 rounded-full -z-10 animate-pulse duration-[10s]" />
           <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-brown-soft/5 blur-[80px] -z-10 rounded-full" />
        </div>
      </div>
    </section>
  );
}
