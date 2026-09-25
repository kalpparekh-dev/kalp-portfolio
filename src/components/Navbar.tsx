import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RESUME_DATA } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'Systems Architecture', href: '#projects' },
    { name: 'Technical Universe', href: '#skills' },
    { name: 'Engineering Milestones', href: '#experience' },
    { name: 'Initiate Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0C0B0A]/85 backdrop-blur-md border-b border-stoneborder/70 py-3.5 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#hero" className="group flex items-center space-x-3 text-ivory">
          <div className="w-8 h-8 rounded-none border border-stoneborder group-hover:border-terracotta bg-charcoal flex items-center justify-center transition-colors">
            <span className="font-mono text-xs font-bold text-bone group-hover:text-terracotta">KP</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-widest text-sm font-bold text-ivory">
              {RESUME_DATA.name}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-bone/60">
              SDE & AI System Arch
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isTarget = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`font-mono text-xs uppercase tracking-wider transition-colors relative py-1 ${
                  isTarget ? 'text-terracotta font-semibold' : 'text-bone/70 hover:text-ivory'
                }`}
              >
                {link.name}
                {isTarget && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-terracotta"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2 px-3 py-1 rounded-none border border-stoneborder/80 bg-charcoal/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] tracking-wider uppercase text-bone/80">
              Target: Scaled Backends
            </span>
          </div>
          <a
            href={RESUME_DATA.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 px-3 py-1 text-xs font-mono uppercase border border-stoneborder hover:border-terracotta hover:bg-terracotta/10 text-ivory transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-terracotta" />
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-ivory hover:text-terracotta focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-charcoal border-b border-stoneborder px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-sm tracking-wider uppercase text-bone hover:text-terracotta transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-stoneborder/50 flex flex-col space-y-2">
                <span className="font-mono text-xs text-bone/60">Direct Coordinate:</span>
                <span className="font-mono text-xs text-ivory">{RESUME_DATA.email}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};