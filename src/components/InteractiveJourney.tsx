import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface InteractiveJourneyProps {
  language: Language;
  setCurrentPage: (page: Page) => void;
}

type TabType = 'diagnostics' | 'school' | 'govt';

export const InteractiveJourney: React.FC<InteractiveJourneyProps> = ({
  language,
  setCurrentPage,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('diagnostics');

  const tabs = [
    { id: 'diagnostics' as TabType, icon: '💝', title: TRANSLATIONS.tab1Title[language] },
    { id: 'school' as TabType, icon: '🏫', title: TRANSLATIONS.tab2Title[language] },
    { id: 'govt' as TabType, icon: '📜', title: TRANSLATIONS.tab3Title[language] },
  ];

  return (
    <section id="interactiveGuide" className="py-16 relative z-10 -mt-16 sm:-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Journey Header */}
        <div className="bg-white/95 rounded-3xl p-8 sm:p-10 border border-brand-green/10 shadow-xs max-w-3xl mx-auto text-center mb-12">
          <span className="text-brand-green font-extrabold text-xs sm:text-sm uppercase tracking-widest block mb-2">
            {TRANSLATIONS.journeySub[language]}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight mb-4 font-display">
            {TRANSLATIONS.journeyTitle[language]}
          </h2>
          <p className="text-brand-dark/85 text-sm sm:text-base leading-relaxed">
            {TRANSLATIONS.journeyDesc[language]}
          </p>
        </div>

        {/* Tab Controls and Panels Container */}
        <div className="max-w-4xl mx-auto">
          
          {/* Tabs Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-4 p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 focus:outline-none ${
                  activeTab === tab.id
                    ? 'border-brand-green/30 bg-brand-green/5 shadow-xs -translate-y-1'
                    : 'border-brand-green/10 bg-white/95 hover:border-brand-green/20 hover:-translate-y-0.5 shadow-xs'
                }`}
              >
                <span className="text-3xl filter drop-shadow-sm">{tab.icon}</span>
                <span className={`font-extrabold text-sm sm:text-base leading-snug transition-colors ${
                  activeTab === tab.id ? 'text-brand-green' : 'text-brand-dark/70'
                }`}>
                  {tab.title}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content Panel */}
          <div className="bg-white/95 border border-brand-green/10 rounded-[2rem] p-6 sm:p-10 shadow-xs relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-soft to-white -z-10" />
            <AnimatePresence mode="wait">
              {activeTab === 'diagnostics' && (
                <motion.div
                   key="diagnostics"
                   initial={{ opacity: 0, y: 15 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -15 }}
                   transition={{ duration: 0.3 }}
                   className="space-y-6"
                >
                  <h3 className="text-xl sm:text-2xl font-extrabold text-brand-green border-b border-dashed border-brand-green/10 pb-4 font-display">
                    {TRANSLATIONS.tab1H[language]}
                  </h3>
                  
                  <div className="grid gap-4 sm:gap-6">
                    
                    <div className="flex items-start gap-4 sm:gap-5 bg-brand-green/5 p-5 sm:p-6 rounded-2xl border border-brand-green/10 shadow-xs hover:translate-x-2 transition-transform duration-300">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center font-extrabold text-xl shadow-xs">
                        ১
                      </div>
                      <div className="space-y-1">
                        <strong className="block text-base sm:text-lg text-brand-dark font-display">
                          {TRANSLATIONS.tab1Step1Title[language]}
                        </strong>
                        <p className="text-brand-dark/70 text-sm sm:text-base leading-relaxed">
                          {TRANSLATIONS.tab1Step1Desc[language]}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 sm:gap-5 bg-brand-green/5 p-5 sm:p-6 rounded-2xl border border-brand-green/10 shadow-xs hover:translate-x-2 transition-transform duration-300">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center font-extrabold text-xl shadow-xs">
                        ২
                      </div>
                      <div className="space-y-1">
                        <strong className="block text-base sm:text-lg text-brand-dark font-display">
                          {TRANSLATIONS.tab1Step2Title[language]}
                        </strong>
                        <p className="text-brand-dark/70 text-sm sm:text-base leading-relaxed">
                          {TRANSLATIONS.tab1Step2Desc[language]}
                        </p>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}

              {activeTab === 'school' && (
                <motion.div
                  key="school"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl sm:text-2xl font-extrabold text-brand-green border-b border-dashed border-brand-green/10 pb-4 font-display">
                    {TRANSLATIONS.tab2H[language]}
                  </h3>
                  
                  <div className="grid gap-4 sm:gap-6">
                    
                    <div className="flex items-start gap-4 sm:gap-5 bg-brand-green/5 p-5 sm:p-6 rounded-2xl border border-brand-green/10 shadow-xs hover:translate-x-2 transition-transform duration-300">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center font-extrabold text-xl shadow-xs">
                        ১
                      </div>
                      <div className="space-y-1">
                        <strong className="block text-base sm:text-lg text-brand-dark font-display">
                          {TRANSLATIONS.tab2Step1Title[language]}
                        </strong>
                        <p className="text-brand-dark/70 text-sm sm:text-base leading-relaxed">
                          {TRANSLATIONS.tab2Step1Desc[language]}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 sm:gap-5 bg-brand-green/5 p-5 sm:p-6 rounded-2xl border border-brand-green/10 shadow-xs hover:translate-x-2 transition-transform duration-300">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center font-extrabold text-xl shadow-xs">
                        ২
                      </div>
                      <div className="space-y-1">
                        <strong className="block text-base sm:text-lg text-brand-dark font-display">
                          {TRANSLATIONS.tab2Step2Title[language]}
                        </strong>
                        <p className="text-brand-dark/70 text-sm sm:text-base leading-relaxed">
                          {TRANSLATIONS.tab2Step2Desc[language]}
                        </p>
                      </div>
                    </div>

                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setCurrentPage('centers')}
                      className="btn-action w-full sm:w-auto inline-flex justify-center items-center px-6 py-3.5 bg-brand-yellow text-brand-dark font-extrabold text-base rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer border-0"
                    >
                      {TRANSLATIONS.tab2Cta[language]}
                    </button>
                  </div>
                </motion.div>
              )}

              {activeTab === 'govt' && (
                <motion.div
                  key="govt"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl sm:text-2xl font-extrabold text-brand-green border-b border-dashed border-brand-green/10 pb-4 font-display">
                    {TRANSLATIONS.tab3H[language]}
                  </h3>
                  
                  <div className="grid gap-4 sm:gap-6">
                    
                    <div className="flex items-start gap-4 sm:gap-5 bg-brand-green/5 p-5 sm:p-6 rounded-2xl border border-brand-green/10 shadow-xs hover:translate-x-2 transition-transform duration-300">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center font-extrabold text-xl shadow-xs">
                        ১
                      </div>
                      <div className="space-y-1">
                        <strong className="block text-base sm:text-lg text-brand-dark font-display">
                          {TRANSLATIONS.tab3Step1Title[language]}
                        </strong>
                        <p className="text-brand-dark/70 text-sm sm:text-base leading-relaxed">
                          {TRANSLATIONS.tab3Step1Desc[language]}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 sm:gap-5 bg-brand-green/5 p-5 sm:p-6 rounded-2xl border border-brand-green/10 shadow-xs hover:translate-x-2 transition-transform duration-300">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center font-extrabold text-xl shadow-xs">
                        ২
                      </div>
                      <div className="space-y-1">
                        <strong className="block text-base sm:text-lg text-brand-dark font-display">
                          {TRANSLATIONS.tab3Step2Title[language]}
                        </strong>
                        <p className="text-brand-dark/70 text-sm sm:text-base leading-relaxed">
                          {TRANSLATIONS.tab3Step2Desc[language]}
                        </p>
                      </div>
                    </div>

                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setCurrentPage('guide')}
                      className="btn-action w-full sm:w-auto inline-flex justify-center items-center px-6 py-3.5 bg-brand-yellow text-brand-dark font-extrabold text-base rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer border-0"
                    >
                      {TRANSLATIONS.tab3Cta[language]}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
