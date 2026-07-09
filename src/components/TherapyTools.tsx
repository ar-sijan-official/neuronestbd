import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Language } from '../types';
import { PRODUCTS } from '../data/database';
import { TRANSLATIONS } from '../data/translations';

interface TherapyToolsProps {
  language: Language;
}

export const TherapyTools: React.FC<TherapyToolsProps> = ({ language }) => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-white/95 border border-brand-green/10 hover:border-brand-green/30 rounded-[2rem] p-8 shadow-xs hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-center"
            >
              <div>
                {/* Product Type Tag */}
                <span className="text-xs sm:text-sm font-extrabold text-brand-green uppercase tracking-widest block mb-2">
                  {language === 'bn' ? prod.typeBn : prod.typeEn}
                </span>

                {/* Product Name */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark mb-3 leading-snug font-display">
                  {language === 'bn' ? prod.nameBn : prod.nameEn}
                </h3>

                {/* Product Description */}
                <p className="text-brand-dark/80 font-medium text-sm sm:text-base leading-relaxed mb-6">
                  {language === 'bn' ? prod.descBn : prod.descEn}
                </p>
              </div>

              {/* Purchase Action Button */}
              <div>
                <a
                  href={prod.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-base transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-xs cursor-pointer ${
                    prod.colorTheme === 'teal'
                      ? 'bg-brand-green text-white hover:bg-brand-green/90'
                      : 'bg-brand-yellow text-brand-dark hover:bg-brand-yellow/90'
                  }`}
                >
                  <ShoppingBag size={18} />
                  <span>{TRANSLATIONS.buyBtn[language]}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
