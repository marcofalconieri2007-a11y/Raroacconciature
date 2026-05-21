export default function Cta() {
  const benefits = [
    "PRENOTAZIONE SEMPLICE",
    "CONSULENZA PERSONALIZZATA",
    "PRODOTTI DI QUALITÀ"
  ];

  return (
    <section id="prenota" className="py-20 md:py-48 bg-terracotta/5 relative overflow-hidden">
      {/* Abstract light rays and color blooms */}
      <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_top_right,_var(--color-terracotta-soft)_0%,_transparent_70%)] opacity-30 pointer-events-none" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] bg-sage/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[90rem] mx-auto px-5 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 lg:gap-32 items-center relative z-10">
        
        {/* Content */}
        <div className="flex flex-col items-start order-2 lg:order-1 lg:pr-12">
          <span className="text-[10px] font-bold tracking-[0.3em] text-brown-soft mb-8 px-4 py-2 border border-taupe/20 rounded-full bg-white/50 backdrop-blur-sm uppercase">
            Prenota il tuo appuntamento
          </span>
          <h2 className="font-serif text-[36px] sm:text-5xl md:text-6xl lg:text-[5rem] text-off-black leading-[1.1] md:leading-[1.1] mb-8 md:mb-10 tracking-tight font-normal max-w-[20ch]">
            Prenditi cura <br />
            della tua bellezza, <br />
            <em className="italic text-brown-soft pr-2 font-normal text-nowrap">ogni giorno.</em>
          </h2>
          <p className="text-off-black/90 text-[16px] md:text-xl font-normal leading-relaxed max-w-md text-balance mb-10 md:mb-12">
            Affidati alla nostra esperienza per esaltare la tua bellezza autentica con trattamenti su misura. Ti aspettiamo nel nostro salone.
          </p>
          
          <a href="tel:+390362851063" className="w-full sm:w-auto inline-flex items-center justify-center text-center bg-off-black text-cream px-10 py-5 text-[11px] font-medium tracking-[0.25em] hover:bg-brown-soft hover:text-white border border-transparent transition-all duration-500 min-w-[200px] mb-12 md:mb-16 shadow-[0_10px_30px_-10px_rgba(44,40,37,0.3)] hover:shadow-[0_15px_40px_-5px_rgba(44,40,37,0.4)] hover:-translate-y-1 rounded-full uppercase">
            PRENOTA ORA
          </a>

          <div className="flex flex-col space-y-6 w-full pt-10 border-t border-taupe/20">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center space-x-4 text-[10px] md:text-[11px] tracking-[0.3em] font-normal text-off-black/90 uppercase">
                <span className="w-5 md:w-6 h-[1px] bg-brown-soft/40" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map & Quote Container */}
        <div className="order-1 lg:order-2 flex flex-col items-center relative w-full">
           {/* Abstract lifestyle background shape */}
           <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(ellipse_at_center,_var(--color-terracotta-soft)_0%,_transparent_70%)] rounded-[100%] blur-[100px] -z-10 mix-blend-multiply opacity-40" />
           
           <div className="w-full aspect-[4/5] md:aspect-[3/4] bg-white/40 backdrop-blur-md shadow-[0_20px_60px_-15px_rgba(180,127,106,0.15)] border border-white/60 rounded-[32px] md:rounded-[80px] relative overflow-hidden mb-12 md:mb-16 group p-2 md:p-3">
             <div className="w-full h-full relative overflow-hidden rounded-[26px] md:rounded-[68px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.041992410831!2d9.217510184608502!3d45.6962393299969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786a324f374a1cf%3A0x305d9f5398625ed5!2sRaro%20Acconciature!5e0!3m2!1sit!2sit!4v1777986918454!5m2!1sit!2sit" 
                  className="absolute inset-0 w-full h-full border-0 transition-opacity duration-1000 opacity-90 hover:opacity-100 pointer-events-auto"
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
             </div>
           </div>
           
           <div className="w-full max-w-sm md:max-w-md relative flex flex-col items-center bg-white/40 backdrop-blur-md rounded-[24px] md:rounded-[32px] p-8 md:p-10 border border-white/60 shadow-[0_20px_60px_-15px_rgba(180,127,106,0.15)] mt-12 sm:mt-0">
             <h3 className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] text-brown-soft uppercase mb-6 flex items-center gap-4">
               <span className="w-6 md:w-8 h-[1px] bg-terracotta/40" />
               Orari Salone
               <span className="w-6 md:w-8 h-[1px] bg-terracotta/40" />
             </h3>
             <ul className="w-full space-y-3">
               <li className="flex justify-between items-center text-[14px] md:text-[15px] pb-3 border-b border-taupe/20">
                 <span className="font-normal text-off-black/80">Lunedì</span>
                 <span className="font-serif italic text-terracotta">Chiuso</span>
               </li>
               <li className="flex justify-between items-center text-[14px] md:text-[15px] pb-3 border-b border-taupe/20">
                 <span className="font-normal text-off-black/80">Da Martedì a Venerdì</span>
                 <span className="font-serif text-off-black/90 tracking-wide">09:00 - 18:00</span>
               </li>
               <li className="flex justify-between items-center text-[14px] md:text-[15px] pb-3 border-b border-taupe/20">
                 <span className="font-normal text-off-black/80">Sabato</span>
                 <span className="font-serif text-off-black/90 tracking-wide">08:00 - 18:00</span>
               </li>
               <li className="flex justify-between items-center text-[14px] md:text-[15px]">
                 <span className="font-normal text-off-black/80">Domenica</span>
                 <span className="font-serif italic text-terracotta">Chiuso</span>
               </li>
             </ul>
           </div>
        </div>
      </div>
    </section>
  );
}
