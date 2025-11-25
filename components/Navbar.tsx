import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { NAV_LINKS } from '../constants';

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 group">
          <div className="bg-brand-600 p-1.5 rounded-lg group-hover:bg-brand-500 transition-colors">
            <Terminal className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">Alfonso<span className="text-brand-400">.dev</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-zinc-300 hover:text-white hover:text-brand-400 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-5 py-2 text-sm font-semibold text-white bg-brand-700 hover:bg-brand-600 rounded-full transition-all shadow-[0_0_15px_rgba(109,40,217,0.3)] hover:shadow-[0_0_25px_rgba(109,40,217,0.5)] cursor-pointer"
          >
            Contáctame
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-zinc-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-900 border-b border-zinc-800 p-6 flex flex-col gap-4 shadow-xl">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-zinc-300 hover:text-brand-400 py-2 border-b border-zinc-800/50 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;