import React from 'react';
import { 
  ArrowUp, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Heart,
  Code2
} from 'lucide-react';
import { PERSONAL_INFO, NAV_ITEMS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070A0F] border-t border-slate-800/80 text-slate-400 text-xs relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand & Intro */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                SA
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Frontend Developer specializing in React.js, responsive web engineering, interactive data dashboards, and accessible user interfaces.
            </p>

            <div className="flex items-center gap-2 pt-1 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Immediate Joiner • Based in {PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Back to Top */}
          <div className="md:col-span-3 space-y-3 md:text-right">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Connect Directly
            </div>
            
            <div className="flex items-center md:justify-end gap-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:text-blue-400 flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white flex items-center justify-center transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 flex items-center justify-center transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors ml-2"
                title="Scroll back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-2 text-[11px] text-slate-500">
              {PERSONAL_INFO.email}
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with React.js & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
