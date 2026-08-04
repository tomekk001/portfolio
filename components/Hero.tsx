
import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative pt-20 px-6">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 w-fit font-mono text-xs border-l-2 border-green-500 pl-3 py-1">
          <span className="text-zinc-500">~$</span>
          <span className="text-zinc-300 tracking-wide">{t('hero_status')}</span>
          <span className="cursor-blink inline-block w-[7px] h-3.5 bg-green-400 translate-y-[1px]"></span>
        </div>

        {/* Main Text */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            {t('hero_title_role')} <br />
           
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            {t('hero_description')}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a 
            href="/cv_en.pdf" 
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-zinc-950 font-semibold rounded-lg hover:bg-zinc-200 transition-all hover:scale-[1.02]"
          >
            <Download size={20} />
            {t('nav_download_cv')}
          </a>
          <a 
            href="#projects" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 text-white font-medium rounded-lg border border-zinc-800 hover:bg-zinc-800 transition-all hover:border-zinc-700"
          >
            {t('hero_btn_projects')}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#skills" className="text-zinc-500 hover:text-white transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
