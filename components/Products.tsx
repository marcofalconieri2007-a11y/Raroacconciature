import Image from 'next/image';
import productImage from '../src/assets/images/regenerated_image_1777995954160.png';

export default function Products() {
  const products = [
    {
      title: "CURA",
      description: "Detersione e trattamenti specifici per la salute dei tuoi capelli.",
    },
    {
      title: "NUTRIZIONE",
      description: "Maschere e trattamenti nutrienti per capelli sani, morbidi e luminosi.",
    },
    {
      title: "STYLING",
      description: "Prodotti professionali per creare, definire e valorizzare il tuo stile.",
    },
    {
      title: "FINISH",
      description: "Soluzioni per proteggere, illuminare e mantenere il tuo look perfetto.",
    },
  ];

  return (
    <section id="prodotti" className="py-24 md:py-56 bg-cream/50 relative overflow-hidden">
      {/* Decorative center orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-sage/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-[90rem] mx-auto px-5 md:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-start lg:items-end mb-16 md:mb-24">
          <div className="flex-1">
            <span className="text-[10px] font-bold tracking-[0.3em] text-brown-soft mb-6 md:mb-8 px-4 py-2 border border-taupe/40 rounded-full inline-block uppercase bg-white/40 backdrop-blur-sm">
              Prodotti Selezionati
            </span>
            <h2 className="font-serif text-[40px] sm:text-6xl md:text-7xl text-off-black leading-[1.1] md:leading-[1.0] mb-6 break-words hyphens-auto font-normal tracking-tight">
              Solo il <em className="italic text-brown-soft pr-2 font-normal">meglio</em>, <br />
              per la tua <br />
              acconciatura.
            </h2>
          </div>
          <div className="flex-1 lg:pb-4">
            <p className="text-off-black/90 text-[16px] md:text-xl font-normal leading-relaxed max-w-lg text-balance">
              Selezioniamo prodotti professionali di alta qualità, formulati con ingredienti ricercati per rispettare e sublimare la bellezza naturale della tua acconciatura ogni giorno.
            </p>
          </div>
        </div>

        {/* Premium Product Visual */}
        <div className="w-full relative mb-16 md:mb-24 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl group border border-black/5 flex items-center justify-center bg-white">
           <Image
             src={productImage}
             alt="Prodotti Raro Acconciature"
             className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-[1.03]"
             referrerPolicy="no-referrer"
           />
        </div>

        {/* Product categories/cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map((item, idx) => (
            <div key={idx} className="bg-white/40 backdrop-blur-md border border-white/60 p-8 md:p-10 hover:bg-white hover:border-taupe/30 hover:-translate-y-1 transition-all duration-500 shadow-[0_4px_20px_-10px_rgba(133,110,94,0.1)] rounded-2xl md:rounded-3xl group">
              <span className="block text-[11px] md:text-[12px] font-bold tracking-[0.25em] text-off-black mb-4 md:mb-6 uppercase">
                {item.title}
              </span>
              <p className="text-[14px] md:text-[15px] font-normal text-off-black/80 leading-relaxed text-balance">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
