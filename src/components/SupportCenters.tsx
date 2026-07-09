import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Phone, CheckCircle, Clock } from 'lucide-react';
import { Language, Center } from '../types';
import { SUPPORT_CENTERS } from '../data/database';
import { TRANSLATIONS } from '../data/translations';

interface SupportCentersProps {
  language: Language;
}

type DistrictFilter = 'all' | 'barisal' | 'patuakhali' | 'bhola' | 'pirojpur' | 'jhalokathi' | 'barguna';

export const SupportCenters: React.FC<SupportCentersProps> = ({ language }) => {
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterButtons = [
    { filter: 'all' as DistrictFilter, label: TRANSLATIONS.filterAll[language] },
    { filter: 'barisal' as DistrictFilter, label: TRANSLATIONS.filterBarisal[language] },
    { filter: 'patuakhali' as DistrictFilter, label: TRANSLATIONS.filterPatuakhali[language] },
    { filter: 'bhola' as DistrictFilter, label: TRANSLATIONS.filterBhola[language] },
    { filter: 'pirojpur' as DistrictFilter, label: TRANSLATIONS.filterPirojpur[language] },
    { filter: 'jhalokathi' as DistrictFilter, label: TRANSLATIONS.filterJhalokathi[language] },
    { filter: 'barguna' as DistrictFilter, label: TRANSLATIONS.filterBarguna[language] },
  ];

  // Filtering + search logic
  const filteredCenters = useMemo(() => {
    return SUPPORT_CENTERS.filter((center) => {
      const matchesDistrict = selectedDistrict === 'all' || center.district === selectedDistrict;
      
      const textToSearch = `${center.nameBn} ${center.nameEn} ${center.addressBn} ${center.addressEn} ${center.servicesBn.join(' ')} ${center.servicesEn.join(' ')}`.toLowerCase();
      const matchesSearch = textToSearch.includes(searchQuery.toLowerCase());

      return matchesDistrict && matchesSearch;
    });
  }, [selectedDistrict, searchQuery]);

  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Data Legend */}
        <div className="bg-white/95 border border-brand-green/10 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 text-brand-dark mb-8 max-w-4xl">
          <span className="font-extrabold text-sm sm:text-base text-brand-dark font-display">
            {TRANSLATIONS.legendTitle[language]}
          </span>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="w-4.5 h-4.5 rounded-full bg-brand-green shadow-xs" />
              <span className="text-xs sm:text-sm font-extrabold text-brand-dark/70">
                {TRANSLATIONS.legendVerified[language]}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4.5 h-4.5 rounded-full bg-brand-yellow shadow-xs" />
              <span className="text-xs sm:text-sm font-extrabold text-brand-dark/70">
                {TRANSLATIONS.legendPartial[language]}
              </span>
            </div>
          </div>
        </div>

        {/* Live Search and District Filters bar */}
        <div className="flex flex-col gap-6 mb-10">
          
          {/* Dynamic Live Search Bar */}
          <div className="relative w-full max-w-2xl bg-white shadow-xs rounded-2xl border border-brand-green/10 overflow-hidden focus-within:ring-2 focus-within:ring-brand-green/20 transition-all">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search size={20} className="text-brand-green" />
            </div>
            <input
              type="text"
              placeholder={TRANSLATIONS.searchPlaceholder[language]}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-transparent text-brand-dark text-sm sm:text-base placeholder-slate-400 border-none outline-none focus:ring-0"
            />
          </div>

          {/* District Filters Grid */}
          <div className="flex flex-wrap gap-2.5">
            {filterButtons.map((btn) => (
              <button
                key={btn.filter}
                onClick={() => setSelectedDistrict(btn.filter)}
                className={`px-5 py-2.5 rounded-full font-extrabold text-sm sm:text-base cursor-pointer transition-all duration-300 shadow-xs focus:outline-none ${
                  selectedDistrict === btn.filter
                    ? 'bg-brand-yellow text-brand-dark border-brand-yellow shadow-xs -translate-y-0.5'
                    : 'bg-white text-brand-dark/70 border border-brand-green/10 hover:border-brand-green/30 hover:text-brand-green hover:-translate-y-0.5'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

        </div>

        {/* Directory Grid with Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCenters.map((center) => (
              <motion.div
                key={center.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, cubicBezier: [0.16, 1, 0.3, 1] }}
                className="bg-white/95 border border-brand-green/10 hover:border-brand-green/30 rounded-[2rem] p-6 sm:p-8 shadow-xs hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Header of center card */}
                <div className="flex justify-between items-start gap-4 pb-6">
                  <div>
                    <span className="text-xs sm:text-sm font-extrabold text-brand-green uppercase tracking-wider block mb-1">
                      {language === 'bn' ? center.typeBn : center.typeEn}
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-brand-dark leading-snug font-display">
                      {language === 'bn' ? center.nameBn : center.nameEn}
                    </h2>
                  </div>

                  {/* Verification Status tag */}
                  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold flex-shrink-0 ${
                    center.verified === 'verified'
                      ? 'bg-brand-green/8 text-brand-green border border-brand-green/15'
                      : 'bg-brand-yellow/15 text-brand-dark border border-brand-yellow/20'
                  }`}>
                    <CheckCircle size={12} className={center.verified === 'verified' ? 'text-brand-green' : 'text-brand-yellow'} />
                    <span>{TRANSLATIONS.verifiedLabel[language]}</span>
                  </div>
                </div>

                {/* Info rows of center card */}
                <div className="space-y-4 pb-6 flex-grow">
                  
                  {/* Address */}
                  <div className="flex items-start gap-3 text-brand-dark/80 text-sm sm:text-base font-semibold">
                    <MapPin size={18} className="text-brand-green/70 flex-shrink-0 mt-0.5" />
                    <span>{language === 'bn' ? center.addressBn : center.addressEn}</span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3 text-brand-dark/80 text-sm sm:text-base font-semibold">
                    <Phone size={18} className="text-brand-green/70 flex-shrink-0" />
                    <span className="font-sans">{center.phone}</span>
                  </div>

                  {/* Services tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {(language === 'bn' ? center.servicesBn : center.servicesEn).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-brand-green/5 border border-brand-green/10 rounded-full text-xs font-extrabold text-brand-dark/70 shadow-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Footer and CTA button */}
                <div className="border-t border-brand-green/10 pt-5 flex items-center justify-between gap-4">
                  
                  <div className="flex items-center gap-1.5 text-brand-dark/60 text-xs sm:text-sm font-semibold">
                    <Clock size={14} className="text-brand-green/70" />
                    <span>{language === 'bn' ? center.openTimeBn : center.openTimeEn}</span>
                  </div>

                  <a
                    href={`tel:${center.phone}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-extrabold text-sm sm:text-base bg-brand-green/5 border border-brand-green/15 text-brand-green hover:bg-brand-green/10 hover:scale-105 transition-all duration-300"
                  >
                    <Phone size={14} />
                    <span>{TRANSLATIONS.callNowBtn[language]}</span>
                  </a>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredCenters.length === 0 && (
            <div className="col-span-full py-16 text-center text-brand-dark/70 bg-white/95 border border-dashed border-brand-green/20 rounded-3xl">
              <p className="text-lg font-bold">No centers matched your criteria.</p>
              <button
                onClick={() => {
                  setSelectedDistrict('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-5 py-2.5 bg-brand-yellow text-brand-dark rounded-xl text-sm font-bold shadow-xs"
              >
                Clear Filters
              </button>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
};
