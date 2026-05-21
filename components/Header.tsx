'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'CHI SIAMO', href: '#chi-siamo' },
    { label: 'GALLERY', href: '#servizi' },
    { label: 'PREZZI', href: '#prezzi' },
    { label: 'PRODOTTI', href: '#prodotti' },
    { label: 'RECENSIONI', href: '#recensioni' },
    { label: 'CONTATTI', href: '#contatti' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'bg-cream/95 backdrop-blur-xl py-4 border-b border-terracotta/10 shadow-[0_10px_40px_-20px_rgba(180,127,106,0.12)]' : 'bg-transparent py-8'
      }`}
    >
      {/* Decorative top color line on scroll */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-terracotta transition-transform duration-700 origin-left ${isScrolled ? 'scale-x-100' : 'scale-x-0'}`} />
      
      <div className="max-w-[90rem] mx-auto px-5 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col items-start leading-none z-50 group">
          <span className="font-serif text-[26px] md:text-3xl tracking-widest text-off-black group-hover:text-terracotta transition-colors duration-500 font-light">RARO</span>
          <span className="font-sans text-[7px] md:text-[9px] tracking-[0.4em] text-terracotta/80 mt-1.5 group-hover:opacity-100 transition-opacity">ACCONCIATURE</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[10px] font-semibold tracking-[0.25em] text-off-black/90 hover:text-terracotta transition-colors duration-300 relative after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-terracotta/50 hover:after:w-full after:transition-all after:duration-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center space-x-4 md:space-x-6 z-50">
          <a
            href="tel:+390362851063"
            className="hidden lg:inline-block border border-off-black/10 bg-white/50 backdrop-blur-sm px-8 py-3.5 rounded-full text-[10px] font-semibold tracking-[0.2em] text-off-black hover:bg-off-black hover:text-cream hover:border-off-black hover:shadow-lg transition-all duration-500"
          >
            PRENOTA
          </a>
          <button
            className="lg:hidden text-off-black p-3 -mr-2 hover:bg-off-black/5 rounded-full transition-all duration-300 active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1.2} /> : <Menu size={24} strokeWidth={1.2} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-cream z-40 transition-all duration-700 ease-in-out lg:hidden pt-32 px-10 flex flex-col items-start ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-[100%]'
        }`}
      >
        {/* Background texture for menu */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] pointer-events-none" />
        
        <div className="w-full h-[1px] bg-taupe/10 mb-12" />
        
        <div className="flex flex-col space-y-8 w-full">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-4xl font-serif tracking-tight text-off-black hover:text-terracotta transition-all duration-700 ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
              style={{ transitionDelay: `${idx * 100 + 300}ms` }}
            >
              <span className="italic block mb-[-0.2em] opacity-20 text-xs font-sans tracking-[0.3em] font-medium uppercase mb-2">0{idx + 1}</span>
              {link.label.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())}
            </a>
          ))}
        </div>

        <div className="mt-auto mb-16 w-full flex flex-col space-y-8">
          <div className="h-[1px] bg-taupe/10 w-full" />
          <a
            href="tel:+390362851063"
            onClick={() => setMobileMenuOpen(false)}
            className={`w-full text-center py-5 rounded-full text-[10px] font-semibold tracking-[0.3em] text-cream bg-off-black hover:bg-terracotta transition-all duration-700 shadow-xl shadow-off-black/10 uppercase ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: `${navLinks.length * 100 + 400}ms` }}
          >
            Prenota un appuntamento
          </a>
          <p className={`text-[10px] tracking-[0.2em] text-off-black/70 text-center uppercase ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '900ms' }}>
            Via Monte S. Michele 1, Giussano
          </p>
        </div>
      </div>
    </header>
  );
}
