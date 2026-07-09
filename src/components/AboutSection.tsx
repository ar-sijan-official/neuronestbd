import React, { useState } from 'react';
import { Heart, Copy, Check, ExternalLink, Facebook, Linkedin, Mail, Wallet, Gift, Eye, BookOpen, Users, Layers, Globe, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('01553226955');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-16">
      
      {/* Mission & Initiatives Section */}
      <section className="py-16 bg-white/95 border border-brand-green/10 rounded-[2.5rem] sm:rounded-[3.5rem] relative overflow-hidden shadow-xs">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-soft to-[#FAF9F6] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-brand-green font-extrabold text-xs sm:text-sm uppercase tracking-widest block mb-1">
              {TRANSLATIONS.missionSubtitle[language]}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight font-display">
              {TRANSLATIONS.missionTitle[language]}
            </h2>
            <div className="w-16 h-1 bg-brand-yellow rounded-full mx-auto mt-4" />
            <p className="text-brand-dark/75 font-medium text-sm sm:text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              {TRANSLATIONS.missionDesc[language]}
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Eye size={24} />,
                title: TRANSLATIONS.mission1Title[language],
                desc: TRANSLATIONS.mission1Desc[language],
                bgColor: 'bg-indigo-50 border-indigo-100/60 text-indigo-600'
              },
              {
                icon: <BookOpen size={24} />,
                title: TRANSLATIONS.mission2Title[language],
                desc: TRANSLATIONS.mission2Desc[language],
                bgColor: 'bg-emerald-50 border-emerald-100/60 text-emerald-600'
              },
              {
                icon: <Heart size={24} />,
                title: TRANSLATIONS.mission3Title[language],
                desc: TRANSLATIONS.mission3Desc[language],
                bgColor: 'bg-rose-50 border-rose-100/60 text-rose-600'
              },
              {
                icon: <Users size={24} />,
                title: TRANSLATIONS.mission4Title[language],
                desc: TRANSLATIONS.mission4Desc[language],
                bgColor: 'bg-amber-50 border-amber-100/60 text-amber-600'
              },
              {
                icon: <Layers size={24} />,
                title: TRANSLATIONS.mission5Title[language],
                desc: TRANSLATIONS.mission5Desc[language],
                bgColor: 'bg-cyan-50 border-cyan-100/60 text-cyan-600'
              },
              {
                icon: <Globe size={24} />,
                title: TRANSLATIONS.mission6Title[language],
                desc: TRANSLATIONS.mission6Desc[language],
                bgColor: 'bg-purple-50 border-purple-100/60 text-purple-600'
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white hover:bg-brand-soft/20 border border-brand-green/10 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xs flex flex-col gap-4"
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${item.bgColor}`}>
                  {item.icon}
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-extrabold text-base sm:text-lg text-brand-dark">
                    {item.title}
                  </h4>
                  <p className="text-brand-dark/70 text-xs sm:text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      
      {/* Sincere Narrative Section */}
      <section className="py-16 bg-white/95 border border-brand-green/10 rounded-3xl relative overflow-hidden shadow-xs">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-soft to-[#FAF9F6] -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-brand-green font-extrabold text-xs sm:text-sm uppercase tracking-widest block mb-2">
            {TRANSLATIONS.narrativeSub[language]}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight leading-snug font-display">
            {TRANSLATIONS.narrativeTitle[language]}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-green to-brand-yellow rounded-full mx-auto" />
          <p className="text-brand-dark/85 font-medium text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto pt-4">
            {TRANSLATIONS.narrativeDesc[language]}
          </p>
        </div>
      </section>

      {/* Visual Showcase - About the Founders Team */}
      <section className="py-12 bg-white/95 border border-brand-green/10 rounded-[2.5rem] sm:rounded-[3.5rem] relative overflow-hidden shadow-xs">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-soft to-[#FAF9F6] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-brand-green font-extrabold text-xs sm:text-sm uppercase tracking-widest block mb-1">
              {TRANSLATIONS.showcaseSub[language]}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight font-display">
              {TRANSLATIONS.showcaseTitle[language]}
            </h2>
            <div className="w-16 h-1 bg-brand-yellow rounded-full mx-auto mt-4" />
          </div>

          {/* Premium Founders Dynamic Image Showcase layout */}
          <div className="bg-brand-soft border border-brand-green/10 rounded-[2rem] p-6 sm:p-10 shadow-xs overflow-hidden flex flex-col items-center">
            
            <div className="w-full max-w-4xl rounded-2xl overflow-hidden border border-brand-green/15 shadow-xs bg-white p-2 sm:p-4 hover:scale-[1.01] transition-transform duration-300">
              <img
                src="https://raw.githubusercontent.com/ar-sijan-official/neuronest/main/team1.png"
                alt="Neuronest Team Members"
                className="w-full h-auto object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Bottom Team Footer Frame */}
            <div className="w-full text-center border-t border-brand-green/10 pt-8 mt-10">
              <h4 className="text-xl font-extrabold text-brand-dark tracking-tight font-display">
                {TRANSLATIONS.teamSectionTitle[language]}
              </h4>
              <p className="text-brand-dark/70 text-sm font-bold mt-1 flex items-center justify-center gap-1">
                <span>{TRANSLATIONS.teamSectionSub[language]}</span>
                <Heart size={12} className="text-rose-500 fill-rose-500 animate-pulse" />
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Support & Donation, Contacts Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Donation Card */}
        <div className="bg-white/95 border border-brand-green/10 rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xs">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FFFDF9] to-transparent -z-10" />
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500">
                <Gift size={24} className="animate-pulse" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark font-display">
                {TRANSLATIONS.donationTitle[language]}
              </h3>
            </div>
            
            <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed mb-6 font-medium">
              {TRANSLATIONS.donationDesc[language]}
            </p>

            {/* Donation Impact List */}
            <div className="mb-6 space-y-3 bg-rose-50/30 border border-rose-100 p-4 rounded-2xl">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                <Sparkles size={14} className="text-rose-500" />
                <span>{TRANSLATIONS.donationImpactTitle[language]}</span>
              </h4>
              <ul className="space-y-2 list-none">
                {[
                  TRANSLATIONS.donationImpact1[language],
                  TRANSLATIONS.donationImpact2[language],
                  TRANSLATIONS.donationImpact3[language],
                  TRANSLATIONS.donationImpact4[language],
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-bold text-brand-dark/85">
                    <span className="w-5 h-5 rounded-full bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0 text-[10px] font-extrabold">
                      ✓
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-rose-50/50 border border-rose-200/60 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-rose-800">
                {TRANSLATIONS.bkashLabel[language]}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold">
                Personal
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 bg-white border border-rose-200/80 px-4 py-3.5 rounded-xl">
              <div className="flex items-center gap-2">
                <Wallet size={18} className="text-rose-500" />
                <span className="font-mono text-lg sm:text-xl font-extrabold text-brand-dark tracking-wide">
                  01553226955
                </span>
              </div>
              
              <button
                onClick={handleCopy}
                className={`flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-extrabold transition-all duration-300 cursor-pointer ${
                  copied 
                    ? 'bg-emerald-500 text-white shadow-xs' 
                    : 'bg-rose-500 text-white hover:bg-rose-600 shadow-xs hover:scale-105 active:scale-95'
                }`}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? TRANSLATIONS.copiedText[language] : TRANSLATIONS.copyBtn[language]}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contact & Socials Card */}
        <div className="bg-white/95 border border-brand-green/10 rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xs">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F6FCFD] to-transparent -z-10" />

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-green/5 border border-brand-green/10 flex items-center justify-center text-brand-green">
                <Mail size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark font-display">
                {TRANSLATIONS.contactTitle[language]}
              </h3>
            </div>

            <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed mb-6 font-medium">
              {TRANSLATIONS.contactDesc[language]}
            </p>
          </div>

          <div className="space-y-3">
            {/* Facebook Link */}
            <a 
              href="https://www.facebook.com/NeuroNest.BANGLADESH" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-[#1877F2]/5 hover:bg-[#1877F2]/10 border border-[#1877F2]/15 hover:border-[#1877F2]/30 rounded-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shadow-xs">
                  <Facebook size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-brand-dark/60 uppercase tracking-wider leading-none mb-1">
                    {TRANSLATIONS.facebookLabel[language]}
                  </span>
                  <span className="text-sm font-extrabold text-brand-dark group-hover:text-[#1877F2] transition-colors leading-none">
                    NeuroNest BANGLADESH
                  </span>
                </div>
              </div>
              <ExternalLink size={16} className="text-brand-dark/40 group-hover:text-[#1877F2] transition-colors" />
            </a>

            {/* LinkedIn Link */}
            <a 
              href="https://www.linkedin.com/company/neuronest-bd/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-[#0A66C2]/5 hover:bg-[#0A66C2]/10 border border-[#0A66C2]/15 hover:border-[#0A66C2]/30 rounded-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center shadow-xs">
                  <Linkedin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-brand-dark/60 uppercase tracking-wider leading-none mb-1">
                    {TRANSLATIONS.linkedinLabel[language]}
                  </span>
                  <span className="text-sm font-extrabold text-brand-dark group-hover:text-[#0A66C2] transition-colors leading-none">
                    neuronest-bd
                  </span>
                </div>
              </div>
              <ExternalLink size={16} className="text-brand-dark/40 group-hover:text-[#0A66C2] transition-colors" />
            </a>

            {/* Email Link */}
            <a 
              href="mailto:neuronest.bd@gmail.com"
              className="flex items-center justify-between p-4 bg-brand-green/5 hover:bg-brand-green/10 border border-brand-green/10 hover:border-brand-green/20 rounded-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-green text-white flex items-center justify-center shadow-xs">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-brand-dark/60 uppercase tracking-wider leading-none mb-1">
                    {TRANSLATIONS.emailLabel[language]}
                  </span>
                  <span className="text-sm font-extrabold text-brand-dark group-hover:text-brand-green transition-colors leading-none">
                    neuronest.bd@gmail.com
                  </span>
                </div>
              </div>
              <ExternalLink size={16} className="text-brand-dark/40 group-hover:text-brand-green transition-colors" />
            </a>
          </div>

        </div>

      </section>

    </div>
  );
};

