import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../data/portfolioData';
import { Award, BookOpen, GraduationCap, CheckCircle } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const getBadgeIcon = (type: string) => {
    switch (type) {
      case 'Leadership':
        return <Award className="w-4 h-4 text-terracotta" />;
      case 'Competition':
        return <CheckCircle className="w-4 h-4 text-terracotta" />;
      case 'Education':
        return <GraduationCap className="w-4 h-4 text-terracotta" />;
      default:
        return <BookOpen className="w-4 h-4 text-terracotta" />;
    }
  };

  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-6 md:px-12 border-b border-stoneborder/50">
      <div className="space-y-4 mb-16">
        <div className="flex items-center space-x-3">
          <span className="w-8 h-[1px] bg-terracotta" />
          <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-semibold">
            Section 04 // Proven Track Record
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory">
          ENGINEERING MILESTONES & LEADERSHIP
        </h2>
        <p className="text-bone/70 text-sm sm:text-base max-w-2xl font-light">
          Academic rigour, competitive national hackathon placements, leadership appointments, and algorithmic mastery.
        </p>
      </div>

      <div className="relative border-l border-stoneborder/70 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
        {RESUME_DATA.milestones.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-none bg-obsidian border-2 border-terracotta group-hover:bg-terracotta transition-colors" />

            <div className="p-6 bg-charcoal border border-stoneborder hover:border-terracotta/70 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stoneborder/50 pb-3 mb-4">
                <div className="flex items-center space-x-2">
                  {getBadgeIcon(item.type)}
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-terracotta">
                    {item.type}
                  </span>
                </div>
                <span className="font-mono text-xs text-bone/60 bg-obsidian px-2.5 py-1 border border-stoneborder/60">
                  {item.year}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory">
                {item.role}
              </h3>
              <p className="font-mono text-xs sm:text-sm text-bone/80 mt-0.5 font-medium">
                {item.organization}
              </p>

              <div className="mt-4 space-y-2">
                {item.description.map((desc, dIdx) => (
                  <p key={dIdx} className="text-xs sm:text-sm text-bone leading-relaxed">
                    • {desc}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};