import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RESUME_DATA, ProjectItem } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2, ChevronRight, X } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Full-Stack SaaS', 'AI & ML', 'Computer Vision'];

  const filteredProjects = filter === 'All'
    ? RESUME_DATA.projects
    : RESUME_DATA.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6 md:px-12 border-b border-stoneborder/50">
      <div className="space-y-4 mb-16">
        <div className="flex items-center space-x-3">
          <span className="w-8 h-[1px] bg-terracotta" />
          <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-semibold">
            Section 02 // Production Implementations
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory">
              ARCHITECTED SYSTEMS
            </h2>
            <p className="text-bone/70 text-sm sm:text-base mt-2 max-w-2xl font-light">
              Deterministic architectures designed for throughput, fault-tolerance, and measurable production value. Exact data and technical contributions from resume.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-mono text-xs px-3.5 py-1.5 transition-all ${
                  filter === cat
                    ? 'bg-terracotta text-white font-medium shadow-md'
                    : 'bg-charcoal text-bone/70 border border-stoneborder hover:text-ivory hover:border-bone/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-charcoal border border-stoneborder/80 hover:border-terracotta/80 p-8 flex flex-col justify-between transition-colors duration-300"
          >
            <div>
              <div className="flex items-center justify-between border-b border-stoneborder/60 pb-4 mb-6">
                <span className="font-mono text-[11px] text-terracotta uppercase tracking-wider font-semibold">
                  {project.category}
                </span>
                <span className="font-mono text-[11px] text-bone/50">
                  SYS_REF // 0{idx + 1}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory group-hover:text-terracotta transition-colors">
                {project.name}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-bone/80 mt-1 font-medium italic">
                {project.tagline}
              </p>

              <div className="my-6 p-4 bg-obsidian/70 border-l-2 border-terracotta flex items-baseline space-x-3">
                <span className="font-mono text-3xl font-bold text-ivory">
                  {project.highlightMetric}
                </span>
                <span className="font-mono text-xs text-bone/70 uppercase tracking-wide">
                  {project.highlightLabel}
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-bone/90 mb-6">
                <p>
                  <strong className="text-ivory font-mono text-[11px] uppercase tracking-wider block text-bone/50 mb-0.5">
                    Bottleneck Solved:
                  </strong>
                  {project.problem}
                </p>
                <p>
                  <strong className="text-ivory font-mono text-[11px] uppercase tracking-wider block text-bone/50 mb-0.5">
                    Engineering Result:
                  </strong>
                  {project.accomplished}
                </p>
              </div>

              <div className="space-y-2 mb-6 pt-3 border-t border-stoneborder/40">
                <span className="font-mono text-[10px] text-bone/60 uppercase tracking-wider block mb-1">
                  Empirical Production Metrics:
                </span>
                {project.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="flex items-start space-x-2 text-xs text-bone">
                    <CheckCircle2 className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-stoneborder/60">
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] px-2 py-0.5 bg-obsidian text-bone/80 border border-stoneborder/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="font-mono text-xs text-ivory hover:text-terracotta flex items-center space-x-1.5 uppercase tracking-wider group-hover:translate-x-1 transition-all"
                >
                  <span>Inspect System Architecture</span>
                  <ChevronRight className="w-3.5 h-3.5 text-terracotta" />
                </button>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bone/60 hover:text-terracotta transition-colors"
                    title="View GitHub Repository"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-charcoal border border-terracotta/70 p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 text-bone hover:text-terracotta transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="font-mono text-xs text-terracotta uppercase tracking-widest font-semibold">
                    Deep Architectural Breakdown
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-ivory mt-1">
                    {selectedProject.name}
                  </h3>
                  <p className="font-sans text-sm text-bone/70 italic mt-0.5">
                    {selectedProject.tagline}
                  </p>
                </div>

                <div className="p-4 bg-obsidian border border-stoneborder">
                  <span className="font-mono text-[10px] text-terracotta uppercase tracking-wider block">
                    Architecture Focus
                  </span>
                  <p className="font-mono text-sm text-ivory mt-1">
                    {selectedProject.architectureFocus}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-ivory font-bold border-b border-stoneborder pb-1">
                    Technical Execution & Decisions (From Resume):
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.execution.map((step, sIdx) => (
                      <li key={sIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-bone leading-relaxed">
                        <span className="font-mono text-terracotta font-bold text-xs mt-0.5">0{sIdx + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-bone/60 block">
                    Technologies Utilized:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-3 py-1 bg-obsidian border border-stoneborder text-ivory"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-stoneborder flex justify-between items-center">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-white bg-terracotta hover:bg-burnished px-4 py-2 uppercase tracking-wider flex items-center space-x-1.5 transition-colors"
                  >
                    <span>View GitHub Source</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="font-mono text-xs text-bone hover:text-ivory uppercase"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};