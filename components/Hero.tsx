import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const highlights = ['React', 'Node.js', 'C#', 'Java', 'HLASM', 'JCL', 'COBOL', 'CICS', 'DB2'];

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative pt-24 pb-16 px-6 overflow-hidden">
      {/* Background: grid + glow */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div aria-hidden className="absolute -z-10 top-1/4 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="max-w-4xl mx-auto w-full space-y-8">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 w-fit font-mono text-xs border-l-2 border-green-500 pl-3 py-1">
          <span className="text-zinc-500">~$</span>
          <span className="text-zinc-300 tracking-wide">{t('hero_status')}</span>
          <span className="cursor-blink inline-block w-[7px] h-3.5 bg-green-400 translate-y-[1px]"></span>
        </div>

        {/* Main Text */}
        <div className="space-y-5">
          <p className="text-zinc-400 text-lg font-medium">{t('hero_greeting')}</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="text-white">{t('hero_title_role')}</span>
            <br />
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-emerald-300 bg-clip-text text-transparent">
              {t('hero_title_sub')}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            {t('hero_description')}
          </p>
        </div>

        {/* Tech chips */}
        <ul className="flex flex-wrap gap-2 max-w-2xl">
          {highlights.map((tech) => (
            <li
              key={tech}
              className="px-3 py-1 text-xs font-mono text-zinc-300 bg-zinc-900/60 border border-zinc-800 rounded-full"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
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
          <div className="flex items-center gap-4 sm:ml-2 text-zinc-500">
            <a href="https://github.com/tomekk001" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition-colors">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/tomasz-czy%C5%BC-34811335a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
              <Linkedin size={22} />
            </a>
            <a href="#contact" aria-label={t('hero_btn_contact')} className="hover:text-white transition-colors">
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#skills" aria-label="Scroll to skills" className="text-zinc-500 hover:text-white transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
