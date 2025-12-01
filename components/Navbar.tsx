
import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav_home'), href: '#hero' },
    { label: t('nav_skills'), href: '#skills' },
    { label: t('nav_projects'), href: '#projects' },
    { label: t('nav_contact'), href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-zinc-950/80 backdrop-blur-md border-zinc-800 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight text-white hover:text-zinc-300 transition-colors">
          T<span className="text-zinc-500">CZ</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-sm font-medium text-zinc-400">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 pl-2 border-l border-zinc-800">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors uppercase tracking-wider px-2 py-1 rounded hover:bg-zinc-900"
            >
              <Globe size={14} />
              <span className={lang === 'pl' ? 'text-white' : ''}>PL</span>
              <span className="text-zinc-600">/</span>
              <span className={lang === 'en' ? 'text-white' : ''}>EN</span>
            </button>

            <a 
              href="/cv_en.pdf" 
              download
              className="flex items-center gap-2 px-4 py-2 bg-white text-zinc-950 text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors"
            >
              <Download size={16} />
              {t('nav_cv')}
            </a>
          </div>
        </div>

        {/* Mobile Toggle & Lang */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLang}
            className="flex items-center gap-1 text-xs font-bold text-zinc-300 border border-zinc-800 px-2 py-1 rounded bg-zinc-900"
          >
            {lang.toUpperCase()}
          </button>
          
          <button 
            className="text-zinc-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-800 p-6 flex flex-col gap-4">
          {navLinks.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="text-zinc-400 hover:text-white text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="/cv_en.pdf" 
            download
            className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-zinc-950 font-semibold rounded-lg mt-2"
          >
            <Download size={18} />
            {t('nav_download_cv')}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
