import React from 'react';

// Reusable Components
const PriceRow = ({ name, price }: { name: string; price: string }) => (
  <div className="flex items-baseline justify-between group pt-4 pb-2 md:pt-5 md:pb-3 border-b border-taupe/20">
    <span className="text-[14px] md:text-[15px] font-normal text-off-black/90 tracking-wide pr-4 group-hover:text-off-black transition-colors duration-300">
      {name}
    </span>
    <div className="flex-1 border-b border-dotted border-taupe/30 mx-4 relative top-[-6px] hidden sm:block opacity-0 lg:opacity-100 mix-blend-multiply" />
    <span className="text-[15px] md:text-[16px] font-serif italic text-off-black/90 group-hover:text-terracotta transition-colors duration-300 min-w-max">
      {price}
    </span>
  </div>
);

const PriceCategory = ({ title, items }: { title: string; items: { name: string; price: string }[] }) => (
  <div className="mb-12 md:mb-16 last:mb-0">
    <h3 className="text-[12px] md:text-[13px] font-bold tracking-[0.25em] text-off-black uppercase mb-6 md:mb-8 flex items-center gap-4">
      <span className="w-5 md:w-8 h-[1px] bg-terracotta/40" />
      {title}
    </h3>
    <div className="flex flex-col">
      {items.map((item, index) => (
        <PriceRow key={index} name={item.name} price={item.price} />
      ))}
    </div>
  </div>
);

export default function Pricing() {
  const categories = [
    {
      title: "Piega e Taglio",
      items: [
        { name: "Piega", price: "da 14,00 €" },
        { name: "Piega media", price: "da 16,00 €" },
        { name: "Piega lunga", price: "da 20,00 €" },
        { name: "Taglio donna", price: "18,00 €" },
        { name: "Taglio uomo / ragazzo", price: "18,00 €" },
        { name: "Taglio bambino", price: "15,00 €" },
      ]
    },
    {
      title: "Colore e Tecniche",
      items: [
        { name: "Colore", price: "da 27,00 €" },
        { name: "Colore senza ammoniaca", price: "da 30,00 €" },
        { name: "Colore parziale", price: "da 15,00 €" },
        { name: "Trattamento anti staminico", price: "4,00 €" },
        { name: "Schiariture moda", price: "da 40,00 €" },
        { name: "Tonalizzante", price: "da 15,00 €" },
        { name: "Permanente", price: "da 35,00 €" },
      ]
    },
    {
      title: "Trattamenti",
      items: [
        { name: "Talasso therapy + piega", price: "da 37,00 €" },
        { name: "Detox cute anti age", price: "15,00 €" },
        { name: "Trattamento ristrutturante", price: "15,00 €" },
        { name: "Crema", price: "2,00 €" },
        { name: "Fissativo / Schiuma", price: "1,00 €" },
        { name: "Lozione anti caduta", price: "5,00 €" },
      ]
    }
  ];

  return (
    <section id="prezzi" className="py-20 md:py-32 bg-cream relative overflow-hidden">
      {/* Texture sottile / decorazione bg */}
      <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-[60vw] h-[60vw] bg-terracotta/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-[70rem] mx-auto px-5 md:px-12 flex flex-col gap-12 lg:gap-20 relative z-10">
        
        {/* Contest e CTA (Top) */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[10px] font-bold tracking-[0.3em] text-brown-soft mb-6 md:mb-8 px-4 py-2 border border-taupe/40 rounded-full uppercase bg-white/40 backdrop-blur-sm shadow-sm">
            Prezzi
          </span>
          <h2 className="font-serif text-[40px] sm:text-6xl md:text-7xl text-off-black leading-[1.1] md:leading-[1.0] mb-6 md:mb-8 break-words hyphens-auto font-normal tracking-tight">
            Prezzi chiari, <br className="sm:hidden" />
            cura <em className="italic text-terracotta pr-2 font-normal">su misura.</em>
          </h2>
          <p className="text-off-black/90 text-[16px] md:text-lg font-normal leading-relaxed mb-8 md:mb-10 max-w-xl text-balance">
            Ogni servizio è pensato per valorizzare i tuoi capelli con attenzione, prodotti professionali e consulenza personalizzata.
          </p>

          <div className="mb-10 md:mb-12 bg-sage-muted/10 border border-sage/20 p-5 md:p-6 rounded-2xl md:rounded-3xl max-w-md w-full shadow-[0_10px_30px_-15px_rgba(40,45,30,0.05)] mx-auto text-left">
             <p className="text-[15px] text-off-black/90 font-medium flex items-start gap-4">
               <span className="text-terracotta font-serif text-xl leading-none mt-[-2px] opacity-70">✧</span>
               La piega comprende shampoo specifico professionale.
             </p>
          </div>

          {/* CTA Desktop & Mobile via Tailwind */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-6 sm:gap-8 w-full sm:w-auto">
            <a
              href="tel:+390362851063"
              className="w-full sm:w-auto inline-flex items-center justify-center text-center bg-off-black text-cream px-8 py-5 md:px-10 md:py-5 text-[10px] md:text-[11px] font-semibold tracking-[0.25em] hover:bg-terracotta hover:text-white border border-transparent transition-all duration-500 shadow-[0_10px_30px_-10px_rgba(44,40,37,0.3)] hover:shadow-[0_15px_40px_-5px_rgba(44,40,37,0.4)] hover:-translate-y-1 rounded-full uppercase"
            >
              Prenota una consulenza
            </a>
            <a 
               href="tel:+390362851063" 
               className="text-[11px] md:text-[12px] font-semibold tracking-[0.15em] text-brown-soft hover:text-off-black border-b border-brown-soft/30 hover:border-off-black pb-1 transition-all duration-300 uppercase"
            >
              Chiama 0362 851063
            </a>
          </div>

          <p className="mt-8 text-off-black/70 text-[14px] md:text-[15px] font-medium max-w-lg text-balance opacity-90">
            In caso non dovessimo rispondere al telefono, mandaci un messaggio WhatsApp a questo numero:{' '}
            <a href="https://wa.me/393312771631" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:text-brown-soft hover:underline font-semibold transition-colors duration-300">
              331 277 1631
            </a>
          </p>
        </div>

        {/* Listino Prezzi (Bottom) */}
        <div className="w-full bg-white/40 backdrop-blur-xl border border-white/60 p-8 sm:p-12 md:p-16 rounded-[32px] md:rounded-[48px] shadow-[0_20px_60px_-20px_rgba(133,110,94,0.1)]">
          {categories.map((category, index) => (
            <PriceCategory key={index} title={category.title} items={category.items} />
          ))}


        </div>
      </div>
    </section>
  );
}
