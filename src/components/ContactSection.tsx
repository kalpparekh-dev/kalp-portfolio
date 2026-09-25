import React, { useState } from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, ArrowUpRight, Github, Linkedin, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
      <div className="space-y-4 mb-16">
        <div className="flex items-center space-x-3">
          <span className="w-8 h-[1px] bg-terracotta" />
          <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-semibold">
            Section 05 // Direct Transmission
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory">
          INITIATE CONTACT
        </h2>
        <p className="text-bone/70 text-sm sm:text-base max-w-2xl font-light">
          Currently open to high-impact Software Engineering roles, AI systems infrastructure initiatives, and distributed backend opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 bg-charcoal border border-stoneborder space-y-6">
            <h3 className="font-serif text-xl font-bold text-ivory border-b border-stoneborder/60 pb-3">
              Direct Coordinates
            </h3>

            <div className="space-y-5">
              <div className="flex items-start space-x-3 text-sm">
                <Mail className="w-4 h-4 text-terracotta mt-1 shrink-0" />
                <div>
                  <span className="block font-mono text-[10px] text-bone/60 uppercase">Primary Email</span>
                  <a
                    href={`mailto:${RESUME_DATA.email}`}
                    className="font-mono text-ivory hover:text-terracotta transition-colors"
                  >
                    {RESUME_DATA.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-sm">
                <Phone className="w-4 h-4 text-terracotta mt-1 shrink-0" />
                <div>
                  <span className="block font-mono text-[10px] text-bone/60 uppercase">Direct Line</span>
                  <a
                    href={`tel:${RESUME_DATA.phone}`}
                    className="font-mono text-ivory hover:text-terracotta transition-colors"
                  >
                    {RESUME_DATA.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-terracotta mt-1 shrink-0" />
                <div>
                  <span className="block font-mono text-[10px] text-bone/60 uppercase">Operational Base</span>
                  <span className="font-mono text-ivory">{RESUME_DATA.location}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stoneborder/60 flex items-center space-x-3">
              <button
                onClick={copyEmail}
                className="w-full py-2.5 px-4 bg-obsidian hover:bg-stoneborder/50 border border-stoneborder text-ivory font-mono text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5 text-terracotta" />}
                <span>{copied ? 'Email Copied' : 'Copy Email Address'}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <a
              href={RESUME_DATA.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-charcoal border border-stoneborder hover:border-terracotta text-bone hover:text-ivory transition-colors flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <Linkedin className="w-4 h-4 text-terracotta" />
                <span className="font-mono text-xs font-semibold uppercase">LinkedIn</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-bone/60" />
            </a>

            <a
              href={RESUME_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-charcoal border border-stoneborder hover:border-terracotta text-bone hover:text-ivory transition-colors flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <Github className="w-4 h-4 text-terracotta" />
                <span className="font-mono text-xs font-semibold uppercase">GitHub</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-bone/60" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:${RESUME_DATA.email}?subject=Engineering%20Inquiry%20via%20Portfolio`;
            }}
            className="p-8 bg-charcoal border border-stoneborder space-y-6"
          >
            <h3 className="font-serif text-xl font-bold text-ivory border-b border-stoneborder/60 pb-3">
              Transmit Direct Dispatch
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-wider text-bone/70 block">
                  Name / Organization
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lead Architect / Recruiter"
                  className="w-full bg-obsidian border border-stoneborder px-4 py-3 text-sm text-ivory font-mono focus:outline-none focus:border-terracotta"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-wider text-bone/70 block">
                  Return Coordinate (Email)
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="w-full bg-obsidian border border-stoneborder px-4 py-3 text-sm text-ivory font-mono focus:outline-none focus:border-terracotta"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs uppercase tracking-wider text-bone/70 block">
                Subject Focus
              </label>
              <input
                type="text"
                placeholder="Software Engineering / System Design / AI Pipeline"
                className="w-full bg-obsidian border border-stoneborder px-4 py-3 text-sm text-ivory font-mono focus:outline-none focus:border-terracotta"
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs uppercase tracking-wider text-bone/70 block">
                Engineering Specification / Message
              </label>
              <textarea
                rows={4}
                required
                placeholder="Detail role scope, architectural challenges, or discussion parameters..."
                className="w-full bg-obsidian border border-stoneborder px-4 py-3 text-sm text-ivory font-mono focus:outline-none focus:border-terracotta resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-terracotta hover:bg-burnished text-white font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 transition-colors shadow-lg"
            >
              <span>Transmit Message Payload</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};