import React from 'react';
import { Heart, ShieldCheck, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="relative bg-white/95 text-brand-dark/70 py-12 text-center border-t border-brand-green/10 overflow-hidden">
      {/* Absolute top decoration */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-brand-yellow" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
        
        {/* Core Copyright */}
        <p className="text-brand-dark text-sm sm:text-base font-extrabold leading-relaxed max-w-2xl mx-auto flex items-center justify-center gap-1.5 flex-wrap font-display">
          <span>{TRANSLATIONS.footerText1[language]}</span>
          <Heart size={14} className="text-rose-500 fill-rose-500 animate-pulse" />
        </p>

        {/* Quality Credits */}
        <p className="text-brand-dark/60 text-xs sm:text-sm font-semibold leading-relaxed max-w-xl mx-auto">
          {TRANSLATIONS.footerText2[language]}
        </p>

        {/* Developer & Security Credit */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-brand-dark/50">
          <span className="flex items-center justify-center gap-1.5">
            <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
            <span>{TRANSLATIONS.developerCredit[language]}</span>
          </span>
          <a
            href="https://www.linkedin.com/in/arafat-rahman-sijan/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 px-2.5 py-1 rounded-full font-bold transition-all duration-300 border border-emerald-100 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>{TRANSLATIONS.developerName[language]}</span>
            <ExternalLink size={12} />
          </a>
        </div>

      </div>
    </footer>
  );
};
