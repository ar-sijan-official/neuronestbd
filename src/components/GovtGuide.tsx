import React from 'react';
import { Calendar, FileText, Globe, Heart, DollarSign, ShieldAlert } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface GovtGuideProps {
  language: Language;
}

export const GovtGuide: React.FC<GovtGuideProps> = ({ language }) => {
  return (
    <section className="py-6 space-y-12 sm:space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Step Header Title */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-dark border-l-4 border-brand-green pl-4 py-1 leading-tight font-display">
            {TRANSLATIONS.guideStep1Title[language]}
          </h2>
        </div>

        {/* Step Guide Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          
          {/* Card 1 */}
          <div className="relative overflow-hidden bg-white/95 border border-brand-green/10 hover:border-brand-green/30 rounded-[2rem] p-8 shadow-xs hover:shadow-md hover:-translate-y-1.5 transition-all duration-300">
            <span className="text-[5.5rem] font-black text-brand-green/5 select-none leading-none absolute top-4 right-4 z-0 font-display">
              01
            </span>
            <div className="relative z-10 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-green/5 border border-brand-green/10 flex items-center justify-center text-brand-green shadow-xs">
                <Heart size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-brand-dark font-display">
                {TRANSLATIONS.guideStep1Q[language]}
              </h3>
              <p className="text-brand-dark/80 font-medium text-sm sm:text-base leading-relaxed">
                {TRANSLATIONS.guideStep1A[language]}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden bg-white/95 border border-brand-green/10 hover:border-brand-green/30 rounded-[2rem] p-8 shadow-xs hover:shadow-md hover:-translate-y-1.5 transition-all duration-300">
            <span className="text-[5.5rem] font-black text-brand-green/5 select-none leading-none absolute top-4 right-4 z-0 font-display">
              02
            </span>
            <div className="relative z-10 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-green/5 border border-brand-green/10 flex items-center justify-center text-brand-green shadow-xs">
                <FileText size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-brand-dark font-display">
                {TRANSLATIONS.guideStep2Q[language]}
              </h3>
              <p className="text-brand-dark/80 font-medium text-sm sm:text-base leading-relaxed">
                {TRANSLATIONS.guideStep2A[language]}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden bg-white/95 border border-brand-green/10 hover:border-brand-green/30 rounded-[2rem] p-8 shadow-xs hover:shadow-md hover:-translate-y-1.5 transition-all duration-300">
            <span className="text-[5.5rem] font-black text-brand-green/5 select-none leading-none absolute top-4 right-4 z-0 font-display">
              03
            </span>
            <div className="relative z-10 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-green/5 border border-brand-green/10 flex items-center justify-center text-brand-green shadow-xs">
                <Globe size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-brand-dark font-display">
                {TRANSLATIONS.guideStep3Q[language]}
              </h3>
              <p className="text-brand-dark/80 font-medium text-sm sm:text-base leading-relaxed">
                {TRANSLATIONS.guideStep3A[language]}
              </p>
              <div className="pt-2">
                <a
                  href="https://dis.gov.bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-extrabold text-brand-green hover:text-brand-green/90 underline"
                >
                  portal: dis.gov.bd
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Info Box Split Layout */}
        <div className="bg-white/95 border border-brand-green/10 rounded-[2rem] p-8 sm:p-10 md:p-12 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-12 sm:mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-soft to-[#FAF9F6] -z-10" />
          
          {/* Column 1 - Allowance */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-green/5 border border-brand-green/10 flex items-center justify-center text-brand-green shadow-xs">
              <DollarSign size={24} />
            </div>
            <h4 className="text-lg sm:text-xl font-extrabold text-brand-green font-display">
              {TRANSLATIONS.guideInfo1Title[language]}
            </h4>
            <p className="text-brand-dark/80 font-medium text-sm sm:text-base leading-relaxed">
              {TRANSLATIONS.guideInfo1Desc[language]}
            </p>
          </div>

          {/* Column 2 - Therapy */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-green/5 border border-brand-green/10 flex items-center justify-center text-brand-green shadow-xs">
              <Calendar size={24} />
            </div>
            <h4 className="text-lg sm:text-xl font-extrabold text-brand-green font-display">
              {TRANSLATIONS.guideInfo2Title[language]}
            </h4>
            <p className="text-brand-dark/80 font-medium text-sm sm:text-base leading-relaxed">
              {TRANSLATIONS.guideInfo2Desc[language]}
            </p>
          </div>

        </div>

        {/* Sincere Warning/Encouragement Box for Parents */}
        <div className="bg-rose-50/70 border border-dashed border-rose-300 p-8 sm:p-10 rounded-[2rem] text-center shadow-xs relative overflow-hidden group backdrop-blur-md">
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-xs mx-auto">
              <ShieldAlert size={24} />
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-rose-800 font-display">
              {TRANSLATIONS.guideAlertTitle[language]}
            </h3>
            <p className="text-rose-700 text-base sm:text-lg md:text-xl font-semibold italic leading-relaxed max-w-3xl mx-auto">
              {TRANSLATIONS.guideAlertDesc[language]}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
