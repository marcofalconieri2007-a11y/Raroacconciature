export default function Footer() {
  return (
    <footer id="contatti" className="bg-off-black text-cream pt-20 md:pt-32 pb-10 md:pb-12 relative overflow-hidden">
      {/* Background elegant texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] pointer-events-none" />
      
      <div className="max-w-[90rem] mx-auto px-5 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-12 mb-20 md:mb-24">
          
          {/* Contact */}
          <div className="lg:col-span-3 flex flex-col items-start lg:order-1 order-1">
            <h4 className="text-[9px] md:text-[10px] font-semibold tracking-[0.3em] text-beige mb-6 md:mb-8 uppercase flex items-center gap-3">
              <span className="w-3 md:w-4 h-[1px] bg-taupe"></span>
              Contatti
            </h4>
            <div className="flex flex-col space-y-4 text-[14px] md:text-[15px] font-light text-cream/70">
              <p className="leading-relaxed text-cream/90">
                Via Monte S. Michele 1 <br />
                20833 Giussano (MB)
              </p>
              <div className="h-1 md:h-2"></div>
              <a href="tel:+390362851063" className="hover:text-white text-xl md:text-lg font-serif italic transition-colors">0362 851063</a>
            </div>
          </div>

          {/* Hours */}
          <div className="lg:col-span-3 flex flex-col items-start lg:order-2 order-2">
            <h4 className="text-[9px] md:text-[10px] font-semibold tracking-[0.3em] text-beige mb-6 md:mb-8 uppercase flex items-center gap-3">
              <span className="w-3 md:w-4 h-[1px] bg-taupe"></span>
              Orari
            </h4>
            <div className="text-[13px] font-light text-cream/70 flex flex-col space-y-4 w-full max-w-[280px]">
              <div className="flex justify-between w-full border-b border-white/10 pb-3"><span>Lunedì</span> <span className="text-taupe italic">Chiuso</span></div>
              <div className="flex justify-between w-full border-b border-white/10 pb-3"><span>Mar - Ven</span> <span className="text-cream/90">09:00 - 18:00</span></div>
              <div className="flex justify-between w-full border-b border-white/10 pb-3"><span>Sabato</span> <span className="text-cream/90">08:00 - 18:00</span></div>
              <div className="flex justify-between w-full pb-3"><span>Domenica</span> <span className="text-taupe italic">Chiuso</span></div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1 border-l border-taupe/10 lg:order-3 mx-auto h-full"></div>

          {/* Nav */}
          <div className="lg:col-span-2 flex flex-col items-start lg:order-4 order-3 lg:pl-4">
            <h4 className="text-[9px] md:text-[10px] font-semibold tracking-[0.3em] text-beige mb-6 md:mb-8 uppercase flex items-center gap-3">
              <span className="w-3 md:w-4 h-[1px] bg-taupe"></span>
              Esplora
            </h4>
            <nav className="flex flex-col space-y-4">
              <a href="#chi-siamo" className="text-[14px] md:text-[15px] font-light text-cream/70 hover:text-white transition-all duration-300">Chi Siamo</a>
              <a href="#servizi" className="text-[14px] md:text-[15px] font-light text-cream/70 hover:text-white transition-all duration-300">Gallery</a>
              <a href="#prezzi" className="text-[14px] md:text-[15px] font-light text-cream/70 hover:text-white transition-all duration-300">Prezzi</a>
              <a href="#prodotti" className="text-[14px] md:text-[15px] font-light text-cream/70 hover:text-white transition-all duration-300">Prodotti</a>
              <a href="#recensioni" className="text-[14px] md:text-[15px] font-light text-cream/70 hover:text-white transition-all duration-300">Recensioni</a>
            </nav>
          </div>

          {/* Desc */}
          <div className="lg:col-span-3 flex flex-col items-start pr-0 lg:pr-8 lg:order-5 order-4">
            <h4 className="text-[9px] md:text-[10px] font-semibold tracking-[0.3em] text-beige mb-6 md:mb-8 uppercase flex items-center gap-3">
              <span className="w-3 md:w-4 h-[1px] bg-taupe"></span>
              Filosofia
            </h4>
            <p className="text-cream/70 text-[14px] md:text-[15px] font-light leading-relaxed text-balance">
              Un salone boutique a Giussano dove l&apos;arte dell&apos;hairstyling incontra la cura del benessere. Dedicato a chi cerca la bellezza autentica attraverso percorsi su misura e prodotti di eccellenza.
            </p>
            
            {/* Mobile-only CTA */}
            <a 
              href="tel:+390362851063" 
              className="mt-12 md:hidden w-full text-center py-5 bg-beige text-off-black text-[10px] font-semibold tracking-[0.3em] rounded-full uppercase"
            >
              Prenota ora
            </a>
          </div>

        </div>

        {/* Thick divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-taupe/40 to-transparent mb-12 md:mb-16" />

        {/* Giant Logo Area */}
        <div className="flex flex-col items-center justify-center mb-12 md:mb-16 text-center">
          <a href="#" className="flex flex-col items-center leading-none group text-center">
            <span className="font-serif text-[18vw] sm:text-7xl md:text-8xl lg:text-[10rem] tracking-widest text-[#EAE3DE] group-hover:text-white transition-colors duration-700 select-none font-light">RARO</span>
            <span className="font-sans text-[8px] md:text-xs tracking-[0.4em] md:tracking-[0.8em] text-taupe mt-3 md:mt-4 opacity-80 uppercase select-none">ACCONCIATURE</span>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-taupe/20 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-[10px] tracking-widest text-beige uppercase">
          <p className="opacity-60">© RARO ACCONCIATURE.</p>
          <div className="flex space-x-8 opacity-60">
            <a href="https://www.instagram.com/raroacconciature?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-white transition-opacity">Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=100054619921437&sk=directory_category&locale=it_IT" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-white transition-opacity">Facebook</a>
            <a href="#" className="hover:opacity-100 hover:text-white transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 hover:text-white transition-opacity">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
