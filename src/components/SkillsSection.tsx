import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../data/portfolioData';
import { Terminal, Database, Server, Cpu, Code2, Globe, Layers } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    if (title.includes('Languages')) return <Code2 className="w-4 h-4 text-terracotta" />;
    if (title.includes('AI') || title.includes('LLM')) return <Cpu className="w-4 h-4 text-terracotta" />;
    if (title.includes('Backend')) return <Server className="w-4 h-4 text-terracotta" />;
    if (title.includes('Databases')) return <Database className="w-4 h-4 text-terracotta" />;
    if (title.includes('Frontend')) return <Globe className="w-4 h-4 text-terracotta" />;
    if (title.includes('Developer Tools')) return <Terminal className="w-4 h-4 text-terracotta" />;
    return <Layers className="w-4 h-4 text-terracotta" />;
  };

  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-6 md:px-12 border-b border-stoneborder/50">
      <div className="space-y-4 mb-16">
        <div className="flex items-center space-x-3">
          <span className="w-8 h-[1px] bg-terracotta" />
          <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-semibold">
            Section 03 // Technical Matrix
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory">
          TECHNICAL UNIVERSE
        </h2>
        <p className="text-bone/70 text-sm sm:text-base max-w-2xl font-light">
          An interactive catalog of production skills, languages, and distributed systems tooling extracted from verified project deployments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESUME_DATA.skills.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="p-6 bg-charcoal border border-stoneborder hover:border-terracotta/60 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stoneborder/60 mb-4">
                <div className="flex items-center space-x-2.5">
                  {getCategoryIcon(category.title)}
                  <h3 className="font-serif text-base font-bold text-ivory">
                    {category.title}
                  </h3>
                </div>
                <span className="font-mono text-[10px] text-bone/40">SYS_MOD_{idx + 1}</span>
              </div>
              <p className="font-mono text-[11px] text-bone/60 uppercase tracking-wider mb-5">
                {category.subtitle}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1 bg-obsidian text-bone/90 border border-stoneborder/70 hover:border-terracotta hover:text-ivory transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-stoneborder/30 flex items-center justify-between text-[10px] font-mono text-bone/40">
              <span>STATUS: PRODUCTION_TESTED</span>
              <span>VERIFIED</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};