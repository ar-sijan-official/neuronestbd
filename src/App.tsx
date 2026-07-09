import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page, Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveJourney } from './components/InteractiveJourney';
import { AboutSection } from './components/AboutSection';
import { SupportCenters } from './components/SupportCenters';
import { TherapyTools } from './components/TherapyTools';
import { GovtGuide } from './components/GovtGuide';
import { HotlineDrawer } from './components/HotlineDrawer';
import { Footer } from './components/Footer';
import { TRANSLATIONS } from './data/translations';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('about');
  const [language, setLanguage] = useState<Language>('bn');
  const [isHotlineOpen, setIsHotlineOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'bn' ? 'en' : 'bn'));
  };

  return (
    <div className="min-h-screen bg-brand-soft text-brand-dark font-sans antialiased selection:bg-brand-green/20 selection:text-brand-green relative overflow-x-hidden">
      {/* Soft Friendly Cloud/Mesh Background Decoration representing warmth, nature, and growth */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[50%] bg-brand-yellow/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[40%] bg-brand-green/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[35%] right-[5%] w-[45%] h-[35%] bg-brand-green/5 blur-[100px] rounded-full pointer-events-none" />

      {/* 1. Header & Navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        language={language}
        toggleLanguage={toggleLanguage}
        onOpenHotline={() => setIsHotlineOpen(true)}
      />

      {/* 2. Hero banner (Only shown on About/Home page) */}
      <AnimatePresence mode="wait">
        {currentPage === 'about' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Hero language={language} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Page Title Header (For secondary directories) */}
      <AnimatePresence mode="wait">
        {currentPage !== 'about' && (
          <motion.section
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="bg-white/95 border-b border-brand-green/10 rounded-b-[2.5rem] sm:rounded-b-[3.5rem] py-12 text-center shadow-xs relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-yellow/5 to-brand-green/10 -z-10" />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 relative z-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-brand-dark font-display">
                {currentPage === 'centers' && TRANSLATIONS.centersPageTitle[language]}
                {currentPage === 'tools' && TRANSLATIONS.toolsPageTitle[language]}
                {currentPage === 'guide' && TRANSLATIONS.guidePageTitle[language]}
              </h1>
              <p className="text-brand-dark/80 font-medium text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                {currentPage === 'centers' && TRANSLATIONS.centersPageDesc[language]}
                {currentPage === 'tools' && TRANSLATIONS.toolsPageDesc[language]}
                {currentPage === 'guide' && TRANSLATIONS.guidePageDesc[language]}
              </p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* 4. Active Page Main Component wrapper */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, cubicBezier: [0.16, 1, 0.3, 1] }}
          >
            {currentPage === 'about' && (
              <div className="space-y-8">
                {/* Scroll Anchor Target Wizard */}
                <InteractiveJourney language={language} setCurrentPage={setCurrentPage} />
                <AboutSection language={language} />
              </div>
            )}
            {currentPage === 'centers' && <SupportCenters language={language} />}
            {currentPage === 'tools' && <TherapyTools language={language} />}
            {currentPage === 'guide' && <GovtGuide language={language} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 5. Unified Footer */}
      <Footer language={language} />

      {/* 6. Sliding Emergency Hotline Drawer */}
      <HotlineDrawer
        isOpen={isHotlineOpen}
        onClose={() => setIsHotlineOpen(false)}
        language={language}
      />

    </div>
  );
}
