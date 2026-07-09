import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, ShieldAlert, Award, Star } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HotlineDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const HotlineDrawer: React.FC<HotlineDrawerProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  // Capture ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-md cursor-pointer"
          />

          {/* Sliding Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="fixed top-0 right-0 z-50 w-full max-w-[460px] h-full bg-[#FAF9F6] border-l border-brand-green/15 shadow-2xl flex flex-col p-6 sm:p-8 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex justify-between items-center pb-5 border-b border-brand-green/10 mb-8">
              <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark tracking-tight flex items-center gap-2 font-display">
                <ShieldAlert className="text-rose-600" size={24} />
                <span>{TRANSLATIONS.drawerTitle[language]}</span>
              </h3>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-brand-green/5 border border-brand-green/10 text-brand-dark flex items-center justify-center font-extrabold text-lg hover:bg-rose-600 hover:text-white hover:rotate-90 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none"
              >
                <X size={18} />
              </button>
            </div>

            {/* List of Emergency Cards */}
            <div className="space-y-6 flex-grow">
              
              {/* Card 1 - National Emergency Hotline */}
              <div className="bg-rose-50 border border-rose-200 border-l-[6px] border-l-rose-500 rounded-2xl p-6 shadow-xs hover:shadow-sm transition-all">
                <div className="flex items-center gap-2 text-rose-800 font-extrabold text-sm sm:text-base uppercase tracking-wider mb-2">
                  <Star size={16} className="text-rose-600 animate-pulse" />
                  <span>{TRANSLATIONS.drawer1Title[language]}</span>
                </div>
                <div className="font-sans text-4xl font-extrabold text-rose-700 mb-3 tracking-tight filter drop-shadow-sm flex items-center gap-2">
                  <Phone size={30} className="animate-bounce" style={{ animationDuration: '4s' }} />
                  <span>103</span>
                </div>
                <p className="text-rose-700 text-sm sm:text-base leading-relaxed font-semibold">
                  {TRANSLATIONS.drawer1Desc[language]}
                </p>
              </div>

              {/* Card 2 - Barisal DSS Complex */}
              <div className="bg-white border border-brand-green/10 border-l-[6px] border-l-brand-green rounded-2xl p-6 shadow-xs hover:shadow-sm transition-all">
                <div className="flex items-center gap-2 text-brand-green font-extrabold text-sm sm:text-base uppercase tracking-wider mb-2">
                  <Award size={16} className="text-brand-green" />
                  <span>{TRANSLATIONS.drawer2Title[language]}</span>
                </div>
                <div className="font-sans text-3xl font-extrabold text-brand-green mb-3 tracking-tight flex items-center gap-2">
                  <Phone size={24} />
                  <span>01708414230</span>
                </div>
                <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed font-semibold">
                  {TRANSLATIONS.drawer2Desc[language]}
                </p>
              </div>

              {/* Card 3 - CRP Barisal Center */}
              <div className="bg-white border border-brand-green/10 border-l-[6px] border-l-brand-green rounded-2xl p-6 shadow-xs hover:shadow-sm transition-all">
                <div className="flex items-center gap-2 text-brand-green font-extrabold text-sm sm:text-base uppercase tracking-wider mb-2">
                  <Award size={16} className="text-brand-green" />
                  <span>{TRANSLATIONS.drawer3Title[language]}</span>
                </div>
                <div className="font-sans text-3xl font-extrabold text-brand-green mb-3 tracking-tight flex items-center gap-2">
                  <Phone size={24} />
                  <span>01730059643</span>
                </div>
                <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed font-semibold">
                  {TRANSLATIONS.drawer3Desc[language]}
                </p>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
