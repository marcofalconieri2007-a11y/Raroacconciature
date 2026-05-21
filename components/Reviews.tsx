import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      text: "Luogo molto accogliente, personale simpatico e davvero professionale. Taglio perfetto, mi ha letto nel pensiero! Consigliatissimo!",
    },
    {
      text: "Professionali, esperte e sempre aggiornate... vado da anni e faccio tanti chilometri per arrivarci... ma ne vale la pena!",
    },
    {
      text: "Ottimo negozio, pulito, curato, personale gentile e disponibile... sono molto felice per il risultato!",
    },
    {
      text: "Divine! Tutto lo staff, gentili e attente ad ogni capello. Un negozio semplice che ti fa sentire a casa...",
    }
  ];

  return (
    <section id="recensioni" className="py-20 md:py-40 bg-transparent relative">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-5 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">
        
        {/* Intro */}
        <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-40 self-start">
          <span className="text-[10px] font-bold tracking-[0.3em] text-brown-soft mb-6 md:mb-8 px-4 py-2 border border-taupe/40 rounded-full uppercase bg-white/40 backdrop-blur-sm">
            Cosa dicono di noi
          </span>
          <h2 className="font-serif text-[40px] sm:text-6xl md:text-[4rem] lg:text-7xl text-off-black leading-[1.1] md:leading-[1.1] mb-8 md:mb-10 font-normal tracking-tight text-balance">
            La vostra soddisfazione, la nostra migliore <em className="italic text-brown-soft pr-2 font-normal text-nowrap">ricompensa.</em>
          </h2>

          <div className="flex flex-col items-start border-l border-brown-soft/20 pl-6 pt-2 mb-12 lg:mb-0">
            <div className="flex items-center space-x-4 mb-2">
              <span className="text-4xl md:text-5xl font-serif text-off-black font-light">4,6</span>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-[0.2em] text-off-black uppercase">Su 5</span>
                <span className="text-[#D4AF37] tracking-[0.1em] text-sm md:text-base">★★★★★</span>
              </div>
            </div>
            <p className="text-[13px] text-off-black/80 font-normal">
              Sulla base di 120+ recensioni reali
            </p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
          <div className="flex flex-col gap-6 md:gap-10">
            {reviews.filter((_, i) => i % 2 === 0).map((review, idx) => (
              <div key={`col1-${idx}`} className="bg-cream/40 backdrop-blur-xl border border-white/50 p-8 sm:p-10 lg:p-12 flex flex-col items-start shadow-[0_10px_40px_-20px_rgba(133,110,94,0.15)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_-20px_rgba(133,110,94,0.25)] rounded-[32px] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] text-brown-soft transition-opacity duration-700 group-hover:opacity-10">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L16.411 14.181C14.734 14.181 13.411 12.859 13.411 11.181C13.411 9.504 14.734 8.181 16.411 8.181C18.089 8.181 19.411 9.504 19.411 11.181C19.411 13.684 17.584 19.167 14.814 21H14.017ZM5.01701 21L7.41101 14.181C5.73401 14.181 4.41101 12.859 4.41101 11.181C4.41101 9.504 5.73401 8.181 7.41101 8.181C9.08901 8.181 10.411 9.504 10.411 11.181C10.411 13.684 8.58401 19.167 5.81401 21H5.01701Z" /></svg>
                </div>
                <div className="flex items-center space-x-1 mb-6 md:mb-8 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 md:w-5 h-4 md:h-5 fill-[#D4AF37] text-[#D4AF37]" strokeWidth={1} />
                  ))}
                </div>
                <p className="text-off-black/90 font-serif text-[17px] md:text-[19px] leading-relaxed relative z-10 text-pretty font-normal italic">
                  &quot;{review.text}&quot;
                </p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col gap-6 md:gap-10 sm:mt-16">
            {reviews.filter((_, i) => i % 2 !== 0).map((review, idx) => (
               <div key={`col2-${idx}`} className="bg-cream/40 backdrop-blur-xl border border-white/50 p-8 sm:p-10 lg:p-12 flex flex-col items-start shadow-[0_10px_40px_-20px_rgba(133,110,94,0.15)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_-20px_rgba(133,110,94,0.25)] rounded-[32px] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] text-brown-soft transition-opacity duration-700 group-hover:opacity-10">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L16.411 14.181C14.734 14.181 13.411 12.859 13.411 11.181C13.411 9.504 14.734 8.181 16.411 8.181C18.089 8.181 19.411 9.504 19.411 11.181C19.411 13.684 17.584 19.167 14.814 21H14.017ZM5.01701 21L7.41101 14.181C5.73401 14.181 4.41101 12.859 4.41101 11.181C4.41101 9.504 5.73401 8.181 7.41101 8.181C9.08901 8.181 10.411 9.504 10.411 11.181C10.411 13.684 8.58401 19.167 5.81401 21H5.01701Z" /></svg>
                </div>
                <div className="flex items-center space-x-1 mb-6 md:mb-8 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 md:w-5 h-4 md:h-5 fill-[#D4AF37] text-[#D4AF37]" strokeWidth={1} />
                  ))}
                </div>
                <p className="text-off-black/90 font-serif text-[17px] md:text-[19px] leading-relaxed relative z-10 text-pretty font-normal italic">
                  &quot;{review.text}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
