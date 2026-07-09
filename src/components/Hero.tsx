import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const handleScrollToWizard = () => {
    const wizardSection = document.getElementById('interactiveGuide');
    if (wizardSection) {
      wizardSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white/95 border-x border-b border-brand-green/10 rounded-b-[2.5rem] sm:rounded-b-[4.5rem] shadow-sm py-12 sm:py-20 lg:py-24">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-soft to-[#FAFAFA] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">
            
            {/* Hero Tag */}
            <span
              className="inline-block px-5 py-2.5 bg-brand-green/8 border border-brand-green/20 rounded-full font-extrabold text-sm sm:text-base text-brand-green shadow-xs animate-pulse"
              data-bn="ভয় পাবেন না, আমরা আপনার সন্তানের হাত ধরে আছি"
              data-en="Do not be afraid, we are holding your child's hand"
            >
              {TRANSLATIONS.heroTag[language]}
            </span>

            {/* Hero Title */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-tight text-brand-dark font-display"
              data-bn="অটিজম কোনো রোগ নয়, শুধু দুনিয়াকে দেখার এক ভিন্ন উপায়"
              data-en="Autism is not a disease, just a different way of seeing the world"
            >
              {TRANSLATIONS.heroTitle[language]}
            </h1>

            {/* Hero Description */}
            <p
              className="text-brand-dark/80 font-medium text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-90"
              data-bn="আপনার ছোট্ট সোনামণির ব্যাপারে মাত্রই হয়তো এমন কিছু শুনেছেন যা আপনাকে ভয় পাইয়ে দিয়েছে। ডাক্তার বা প্রতিবেশীর কথায় মন খারাপ করবেন না। আপনার সন্তান বোকা বা পাগল নয়; সে আপনার কাছে সৃষ্টিকর্তার এক বিশেষ আমানত। কী করতে হবে, কোথায় যেতে হবে—সব সহজ করে এই ঠিকানাতেই সাজিয়ে দিয়েছি আমরা।"
              data-en="You may have just heard something about your little one that scared you. Don't be disheartened by doctors or neighbors. Your child is not foolish or crazy; they are a special blessing. What to do, where to go—we have simplified everything right here."
            >
              {TRANSLATIONS.heroDesc[language]}
            </p>

            {/* Hero Scroll CTA Button */}
            <button
              onClick={handleScrollToWizard}
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark rounded-full font-extrabold text-base md:text-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-brand-green/20 group"
              style={{ marginBottom: '1.5rem' }}
            >
              <span
                data-bn="👇 আমার এখন কী করা উচিত?"
                data-en="👇 What should I do now?"
              >
                {TRANSLATIONS.heroCta[language]}
              </span>
            </button>

          </div>

          {/* Right Column - Video Embed */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <div className="w-full max-w-2xl bg-white p-3 sm:p-4 rounded-[2rem] border border-brand-green/10 shadow-xs backdrop-blur-md hover:scale-102 transition-transform duration-500 group">
              <div className="video-responsive-wrapper overflow-hidden rounded-2xl sm:rounded-[1.5rem] bg-brand-dark shadow-inner aspect-video relative">
                <iframe
                  src="https://www.youtube.com/embed/dk8Q8GSFqOI?rel=0"
                  title="NeuroNest Video Support Guide"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0 rounded-2xl sm:rounded-[1.5rem]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Little accent divider at the bottom center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-brand-yellow rounded-t-full" />
    </section>
  );
};
