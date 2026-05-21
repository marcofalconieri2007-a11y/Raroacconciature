import Image from 'next/image';
import { Instagram, Facebook } from 'lucide-react';
import img1 from '@/src/assets/images/regenerated_image_1778597680974.png';
import img2 from '@/src/assets/images/regenerated_image_1778597690924.png';
import img3 from '@/src/assets/images/regenerated_image_1778597703465.png';
import img4 from '@/src/assets/images/regenerated_image_1778597685857.png';
import img5 from '@/src/assets/images/regenerated_image_1778597696601.png';
import img6 from '@/src/assets/images/regenerated_image_1778597710828.png';

export default function Services() {
  const galleryImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
  ];

  return (
    <section id="servizi" className="py-20 md:py-48 bg-sage-muted/20 border-y border-taupe/10 relative overflow-hidden">
      {/* Abstract color blobs for depth */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-sage/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[50vw] h-[50vw] bg-terracotta/5 blur-[100px] rounded-full pointer-events-none -z-10" />
      
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-5 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
        
        {/* Intro */}
        <div className="lg:col-span-4 flex flex-col items-start lg:sticky lg:top-40 self-start">
           <span className="text-[10px] font-bold tracking-[0.3em] text-brown-soft mb-6 md:mb-8 px-4 py-2 border border-taupe/40 rounded-full bg-cream/40 uppercase backdrop-blur-md shadow-sm">
            Gallery
          </span>
          <h2 className="font-serif text-[40px] sm:text-6xl md:text-7xl lg:text-[5rem] text-off-black leading-[1.1] md:leading-[0.95] mb-8 md:mb-10 break-words hyphens-auto font-normal tracking-tight">
            Ispirazioni <br />
            e <em className="italic text-brown-soft pr-2 font-normal">dettagli</em> <br />
            di stile.
          </h2>
          <p className="text-off-black/90 text-[16px] sm:text-lg font-normal leading-relaxed mb-10 max-w-sm text-balance">
            Sfoglia la nostra galleria per scoprire i lavori realizzati nel nostro salone. Un viaggio tra colori vibranti, tagli sartoriali e acconciature d&apos;eccezione.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <a
              href="https://www.instagram.com/raroacconciature?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-4 border-b border-off-black/20 pb-4 text-[10px] font-semibold tracking-[0.25em] text-off-black hover:text-brown-soft hover:border-brown-soft transition-all duration-500 uppercase w-fit"
            >
              <Instagram className="w-4 h-4" />
              <span>Seguici su Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100054619921437&locale=it_IT"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-4 border-b border-off-black/20 pb-4 text-[10px] font-semibold tracking-[0.25em] text-off-black hover:text-brown-soft hover:border-brown-soft transition-all duration-500 uppercase w-fit"
            >
              <Facebook className="w-4 h-4" />
              <span>Seguici su Facebook</span>
            </a>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="lg:col-span-8 columns-2 gap-4 md:gap-6 mt-12 lg:mt-0 space-y-4 md:space-y-6">
          {galleryImages.map((src, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] break-inside-avoid shadow-[0_10px_30px_-15px_rgba(40,45,30,0.1)] group">
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                width={800}
                height={idx % 2 === 0 ? 1000 : 800}
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
              {/* Thin inner border */}
              <div className="absolute inset-2 sm:inset-3 border border-sage/10 pointer-events-none rounded-[16px] sm:rounded-[24px] z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
