import type {Metadata} from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css'; // Global styles

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'], 
  style: ['normal', 'italic'],
  variable: '--font-serif' 
});

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans' 
});

export const metadata: Metadata = {
  title: 'RARO Acconciature | Salone a Giussano',
  description: 'Raro Acconciature è il salone dedicato alla bellezza autentica dei capelli a Giussano.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="it" className={`${cormorant.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="bg-transparent text-off-black font-sans antialiased selection:bg-taupe/30" suppressHydrationWarning>
        {/* Sfondo Botanico CSS Raffinato (Plaster + Olive Leaf Shadows) */}
        <div className="fixed inset-0 pointer-events-none z-[-10] overflow-hidden bg-cream transform-gpu">
          
          {/* Texture Intonaco (Paper/Plaster Grain) */}
          <div className="absolute inset-0 opacity-[0.25] mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />

          {/* Sfumatura intonaco (irregolarità parete per un effetto naturale) */}
          <div className="absolute inset-0 opacity-[0.4] bg-[radial-gradient(ellipse_at_top_left,_var(--color-beige)_0%,_transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.2] bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-taupe)_0%,_transparent_70%)]" />
          
          {/* Subtle color depth (Sage and Terracotta blooms) */}
          <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vh] rounded-full bg-sage/5 blur-[120px] mix-blend-multiply" />
          <div className="absolute bottom-[10%] left-[10%] w-[40vw] h-[40vh] rounded-full bg-terracotta/5 blur-[100px] mix-blend-multiply" />

          {/* Luce solare morbida dall'alto a sinistra */}
          <div className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vh] rounded-[100%] bg-white/60 blur-[140px] mix-blend-overlay" />
          <div className="absolute top-[5%] left-[5%] w-[30vw] h-[40vh] rounded-[100%] bg-[#FFF9E6]/30 blur-[100px] mix-blend-overlay" />
          
          {/* Ombre sfocate di foglie d'ulivo (botanical shadows) */}
          <div className="absolute top-0 left-0 w-full h-full opacity-40 mix-blend-multiply blur-[24px]">
            {/* Gruppo principale da sinistra (sunlight direction) */}
            <div className="absolute top-[-10%] left-[2%] w-[90vw] h-full rotate-[12deg]">
                {/* Simulated Olive Leaves */}
                <div className="absolute top-[12%] left-[8%] w-[130px] h-[320px] bg-[var(--color-leaf-shadow)] leaf-shape-1 -rotate-[15deg] opacity-80" />
                <div className="absolute top-[20%] left-[22%] w-[110px] h-[260px] bg-[var(--color-leaf-shadow)] leaf-shape-2 rotate-[8deg] opacity-70" />
                <div className="absolute top-[5%] left-[42%] w-[160px] h-[380px] bg-[var(--color-leaf-shadow)] leaf-shape-1 rotate-[22deg] opacity-90" />
                <div className="absolute top-[38%] left-[12%] w-[120px] h-[280px] bg-[var(--color-leaf-shadow)] leaf-shape-2 -rotate-[18deg] opacity-60" />
                <div className="absolute top-[32%] left-[35%] w-[90px] h-[230px] bg-[var(--color-leaf-shadow)] leaf-shape-1 rotate-[10deg] opacity-75" />
                <div className="absolute top-[48%] left-[48%] w-[180px] h-[420px] bg-[var(--color-leaf-shadow)] leaf-shape-2 rotate-[32deg] opacity-85" />
                
                {/* Secondary group for depth */}
                <div className="absolute top-[18%] left-[60%] w-[140px] h-[340px] bg-[var(--color-leaf-shadow)] leaf-shape-1 rotate-[45deg] opacity-50 blur-[32px]" />
                <div className="absolute top-[55%] left-[25%] w-[100px] h-[240px] bg-[var(--color-leaf-shadow)] leaf-shape-2 -rotate-[10deg] opacity-40 blur-[40px]" />
                
                {/* Thin branches */}
                <div className="absolute top-[10%] left-[18%] w-[8px] h-[600px] bg-[var(--color-leaf-shadow)] rounded-full rotate-[12deg] opacity-60" />
                <div className="absolute top-[5%] left-[38%] w-[6px] h-[700px] bg-[var(--color-leaf-shadow)] rounded-full rotate-[18deg] opacity-50" />
                <div className="absolute top-[25%] left-[5%] w-[4px] h-[800px] bg-[var(--color-leaf-shadow)] rounded-full -rotate-[5deg] opacity-40" />
            </div>
          </div>

          {/* Grain Overlay Final */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" />
        </div>

        {children}
      </body>
    </html>
  );
}
