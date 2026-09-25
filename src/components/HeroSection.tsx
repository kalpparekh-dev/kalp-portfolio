import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../data/portfolioData';
import { HeroCanvas } from './HeroCanvas';
import { ArrowDown, Terminal, Cpu } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden border-b border-stoneborder/50">
      <HeroCanvas />

      <div className="absolute top-24 right-12 hidden lg:flex flex-col items-end pointer-events-none opacity-40 font-mono text-[10px] tracking-widest text-bone">
        <span>SYS.LOC // 21.1702° N, 72.8311° E (GUJARAT, IN)</span>
        <span>SPEC // DISTRIBUTED_SYS + INFERENCE_ENG</span>
        <span>STATUS // 99.7% PROD_UPTIME_VERIFIED</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        <div className="lg:col-span-7 z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-charcoal border border-stoneborder text-bone text-xs font-mono tracking-wider uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-terracotta inline-block" />
            <span>High-Throughput Engineering & LLM Automation</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ivory leading-[1.05]">
              KALP <span className="text-bone/80 font-normal">PAREKH</span>
            </h1>
            <p className="font-mono text-terracotta text-sm sm:text-base tracking-wide uppercase font-semibold">
              Software Development Engineer & AI Builder
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-bone text-base sm:text-lg leading-relaxed max-w-2xl font-light"
          >
            Scaled production backends from <strong className="text-ivory font-medium">0→50K concurrent users</strong>, 
            driving full-stack transactional throughput past <strong className="text-ivory font-medium">200K+ monthly ops</strong> at 
            <strong className="text-ivory font-medium"> 99.7% uptime</strong>. Designing fault-tolerant microservices, RAG automation pipelines, and deterministic failure recovery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2"
          >
            {RESUME_DATA.stats.map((stat, idx) => (
              <div key={idx} className="p-3 bg-charcoal/80 border border-stoneborder/70">
                <span className="block font-mono text-xl sm:text-2xl font-bold text-ivory">
                  {stat.value}
                </span>
                <span className="block font-sans text-xs font-semibold text-terracotta mt-0.5">
                  {stat.label}
                </span>
                <span className="block font-mono text-[10px] text-bone/60 truncate mt-1">
                  {stat.sub}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#projects"
              className="px-6 py-3.5 bg-terracotta hover:bg-burnished text-white font-mono text-xs tracking-wider uppercase font-semibold transition-all duration-200 shadow-lg flex items-center space-x-2"
            >
              <span>Explore Verified Work</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 bg-charcoal hover:bg-graphite border border-stoneborder hover:border-bone/40 text-ivory font-mono text-xs tracking-wider uppercase transition-colors"
            >
              Initiate Dialogue
            </a>

            <a
              href={RESUME_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 text-bone hover:text-terracotta border border-stoneborder hover:border-terracotta/60 bg-charcoal/50 transition-colors"
              title="GitHub Profile"
            >
              <Terminal className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-sm"
          >
            <div className="absolute -inset-2 border border-terracotta/30 translate-x-2 translate-y-2 pointer-events-none" />
            <div className="relative border border-stoneborder bg-charcoal overflow-hidden group">
              <div className="px-4 py-2 border-b border-stoneborder/70 flex items-center justify-between bg-obsidian/80">
                <span className="font-mono text-[10px] tracking-wider text-bone/70 uppercase">
                  OPERATOR // PAREKH_K
                </span>
                <span className="font-mono text-[9px] text-terracotta uppercase">
                  AUTHENTICATED
                </span>
              </div>

              <div className="relative aspect-[3/4] overflow-hidden bg-obsidian">
                <img
                  src="/profile.jpeg"
                  alt="Kalp Parekh — SDE & AI Builder"
                  className="w-full h-full object-cover object-center filter contrast-[1.06] brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                    const parent = (e.target as HTMLElement).parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-charcoal text-bone">
                          <span class="font-mono text-xs uppercase tracking-widest text-terracotta mb-2">Subject Image</span>
                          <span class="font-serif text-xl font-bold text-ivory">Kalp Parekh</span>
                          <span class="font-mono text-[10px] text-bone/60 mt-2">profile.jpeg in public directory</span>
                        </div>
                      `;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="p-3 bg-charcoal/90 border-t border-stoneborder/60 flex items-center justify-between font-mono text-[10px] text-bone/70">
                <span>LDRP-ITR '28</span>
                <span className="text-ivory font-medium">GUJARAT, IN</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-bone/50 border-t border-stoneborder/40 mt-12 gap-2">
        <div className="flex items-center space-x-2">
          <Cpu className="w-3.5 h-3.5 text-terracotta" />
          <span>CURRENT FOCUS: HIGH-THROUGHPUT PAYMENT RECOVERY RELIABILITY (66.78%)</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>GPA: 8.01/10 (TOP 10%)</span>
          <span className="text-terracotta">•</span>
          <span>LEETCODE: 50+ SOLVED</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;