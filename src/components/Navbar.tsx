import React, { useState } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { Page, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  language: Language;
  toggleLanguage: () => void;
  onOpenHotline: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  language,
  toggleLanguage,
  onOpenHotline,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about' as Page, label: TRANSLATIONS.navAbout[language] },
    { id: 'centers' as Page, label: TRANSLATIONS.navCenters[language] },
    { id: 'tools' as Page, label: TRANSLATIONS.navTools[language] },
    { id: 'guide' as Page, label: TRANSLATIONS.navGuide[language] },
  ];

  const handleNavClick = (pageId: Page) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-green/10 shadow-sm shadow-brand-green/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo and Brand */}
          <button
            onClick={() => handleNavClick('about')}
            className="flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-brand-green/30 rounded-lg p-1 transition-transform duration-300 hover:scale-102"
          >
            <div className="w-10 h-10 bg-brand-soft rounded-xl flex items-center justify-center overflow-hidden border border-brand-green/20 p-1.5 shadow-xs">
              <img
                src="https://raw.githubusercontent.com/ar-sijan-official/neuronest/main/logo.png"
                alt="Neuronest Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-display text-2xl font-extrabold text-brand-dark tracking-tight">
              {TRANSLATIONS.brandName[language]}
              <span className="text-brand-green font-bold ml-0.5">{TRANSLATIONS.brandSubName[language]}</span>
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8 list-none">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`relative font-extrabold text-[0.95rem] py-2 transition-all duration-300 focus:outline-none ${
                      currentPage === item.id
                        ? 'text-brand-green'
                        : 'text-brand-dark/80 hover:text-brand-green'
                    }`}
                  >
                    {item.label}
                    {currentPage === item.id && (
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-yellow rounded-full" />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Language Toggle & Emergency CTA */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/5 border border-brand-green/15 rounded-xl text-brand-dark font-bold text-sm hover:bg-brand-green/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xs cursor-pointer"
              >
                <Globe size={16} className="text-brand-green" />
                <span>{language === 'bn' ? 'English' : 'বাংলা'}</span>
              </button>

              <button
                onClick={onOpenHotline}
                className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark px-5 py-2.5 rounded-full text-sm font-extrabold shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 hover:scale-102 transition-all duration-300 cursor-pointer"
              >
                <Phone size={16} className="animate-pulse text-brand-green" />
                <span>{TRANSLATIONS.emergencyBtn[language]}</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-brand-dark/80 hover:bg-brand-green/5 rounded-xl transition-colors duration-200 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Sliding Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-[999] bg-brand-dark/60"
            style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="absolute right-0 top-0 w-[300px] shadow-2xl p-6 flex flex-col gap-6 border-l border-brand-green/10 z-[1000]"
              style={{ 
                height: '100vh',
                backgroundColor: 'rgba(250, 249, 246, 0.96)', 
                backdropFilter: 'blur(24px)', 
                WebkitBackdropFilter: 'blur(24px)' 
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center border-b border-brand-green/10 pb-4">
                <span className="font-extrabold text-xl text-brand-dark font-display">
                  Menu
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 hover:bg-brand-green/5 rounded-lg text-brand-dark/60 cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <ul className="flex flex-col gap-4 list-none">
                {navItems.map((item) => (
                  <li key={item.id} className="w-full">
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left font-extrabold text-lg py-3 border-b border-brand-green/5 transition-colors cursor-pointer ${
                        currentPage === item.id
                          ? 'text-brand-green'
                          : 'text-brand-dark/80 hover:text-brand-green'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-4">
                <button
                  onClick={() => {
                    toggleLanguage();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-brand-green/5 border border-brand-green/15 rounded-2xl text-brand-dark font-extrabold hover:bg-brand-green/10 transition-all duration-300 cursor-pointer"
                >
                  <Globe size={18} className="text-brand-green" />
                  <span>{language === 'bn' ? 'English' : 'বাংলা'}</span>
                </button>

                <button
                  onClick={() => {
                    onOpenHotline();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-yellow text-brand-dark px-5 py-4 rounded-2xl font-extrabold shadow-sm cursor-pointer"
                >
                  <Phone size={18} className="animate-pulse text-brand-green" />
                  <span>{TRANSLATIONS.emergencyBtn[language]}</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
