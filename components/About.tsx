import Image from 'next/image';
import aboutImg from '@/src/assets/images/regenerated_image_1778245083207.png';

export default function About() {
  const values = [
    {
      title: "PASSIONE",
      description: "Amiamo il nostro lavoro e lo facciamo con dedizione ogni giorno.",
    },
    {
      title: "NATURALITÀ",
      description: "Valorizziamo la bellezza naturale dei tuoi capelli con trattamenti di qualità.",
    },
    {
      title: "ASCOLTO",
      description: "Ti ascoltiamo per capire i tuoi desideri e consigliarti la soluzione migliore.",
    },
    {
      title: "QUALITÀ",
      description: "Utilizziamo prodotti selezionati e tecniche aggiornate per risultati eccellenti.",
    },
  ];

  return (
    <section id="chi-siamo" className="py-20 md:py-32 bg-sage-muted/15 relative overflow-hidden">
      {/* Decorative organic color blob */}
      <div className="absolute -top-[10%] -right-[15%] w-[60vw] h-[60vw] bg-terracotta/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-[90rem] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center mb-24 md:mb-32">
          
          <div className="order-2 lg:order-1 relative w-full aspect-[4/5] md:aspect-[3/4] max-w-lg mx-auto lg:mx-0">
             {/* Abstract organic shape behind image */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(ellipse_at_center,_var(--color-sage)_0%,_transparent_70%)] rounded-[100%] blur-[80px] -z-10 mix-blend-multiply opacity-50" />
			 
             {/* Accent colored line */}
             <div className="absolute -top-12 -left-12 w-24 h-24 border-t-2 border-l-2 border-terracotta opacity-20 hidden md:block" />
              <div className="absolute inset-0 bg-white/40 shadow-[0_20px_50px_-20px_rgba(62,74,53,0.15)] rounded-[32px] md:rounded-[80px] overflow-hidden isolate border border-white/60">
                <Image
                  src={aboutImg}
                  alt="Raro Acconciature Salone"
                  fill
                  className="object-cover mix-blend-multiply opacity-[0.9] transition-transform duration-[1.5s] hover:scale-[1.03]"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                  }}
                  referrerPolicy="no-referrer"
                />
             </div>
             {/* Textural overlay for the image container */}
             <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] pointer-events-none rounded-[32px] md:rounded-[80px]" />
             
             {/* Delicate inner border */}
             <div className="absolute inset-2 md:inset-3 border border-white/50 rounded-[24px] md:rounded-[68px] pointer-events-none" />
             <div className="absolute inset-3 md:inset-4 border border-off-black/[0.03] rounded-[22px] md:rounded-[64px] pointer-events-none" />
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-start text-left lg:pl-16">
            <span className="text-[10px] font-bold tracking-[0.3em] text-sage-dark mb-6 px-4 py-2 border border-sage/30 rounded-full uppercase bg-sage-muted/10 backdrop-blur-sm shadow-sm">
              Chi Siamo
            </span>
            <h2 className="font-serif text-[32px] sm:text-5xl md:text-6xl lg:text-7xl text-off-black leading-[1.1] md:leading-[1.1] mb-8 md:mb-10 font-normal tracking-tight text-balance">
              La nostra <em className="italic text-sage pr-2 font-normal text-nowrap">storia,</em> <br className="block sm:hidden" />la tua bellezza.
            </h2>
            <div className="text-off-black/90 text-[16px] md:text-lg font-normal leading-relaxed max-w-xl text-balance mb-12 space-y-5">
              <p>
                Raro Acconciature nasce nel settembre 2011 dal sogno e dall’esperienza di Raffaella e Roberta, che dopo diversi anni di lavoro fianco a fianco come colleghe hanno deciso di dare vita alla propria attività.
              </p>
              <p>
                Insieme allo staff lavorano ogni giorno con passione, entusiasmo e professionalità per offrire servizi sempre aggiornati, valorizzare la bellezza di ogni cliente con uno stile personalizzato e curato nei dettagli.
              </p>
            </div>
            {/* Signature or subtle divider */}
            <div className="w-12 h-[1px] bg-taupe/40 mb-4" />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 pt-16 md:pt-24 border-t border-taupe/20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 md:h-24 -translate-y-full bg-taupe/20" />
          {values.map((value, idx) => (
            <div key={idx} className="flex flex-col items-start group">
              <span className="text-[12px] font-bold tracking-[0.2em] text-off-black mb-4 group-hover:text-brown-soft transition-colors duration-500 uppercase flex items-center gap-4">
                <span className="w-4 h-[1px] bg-brown-soft/40 group-hover:w-8 transition-all duration-500"></span>
                {value.title}
              </span>
              <p className="text-[14px] md:text-[15px] font-normal text-off-black/80 leading-relaxed pr-0 md:pr-6 text-pretty">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
