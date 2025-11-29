import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          T<span className="text-zinc-500">Cz</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-sm font-medium text-zinc-400">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="/cv.pdf" 
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-white text-zinc-950 text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors"
          >
            <Download size={16} />
            CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-800 p-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-zinc-400 hover:text-white text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="/cv.pdf" 
            className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-zinc-950 font-semibold rounded-lg mt-2"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;