import React from 'react';
import { RESUME_DATA } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0C0B0A] text-[#EDE8E1] relative selection:bg-[#B3542B] selection:text-[#FFFDF8]">
      <Navbar activeSection="hero" />

      <main className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <footer className="border-t border-stoneborder/60 py-10 bg-obsidian text-bone/60 font-mono text-xs">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-terracotta inline-block" />
            <span>{RESUME_DATA.name} — VERIFIED ARCHITECTURE ATELIER</span>
          </div>
          <div className="flex items-center space-x-6">
            <span>NO TEMPLATES • DETERMINISTIC 3D & SYSTEMS</span>
            <a href="#hero" className="hover:text-terracotta transition-colors">
              TOP ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;