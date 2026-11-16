
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

const AppContent: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-white/20">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-900">
        <p>&copy; {new Date().getFullYear()} Tomasz Czyż. {t('footer_rights')}</p>
        <p className="mt-1 text-xs">{t('footer_built')}</p>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
