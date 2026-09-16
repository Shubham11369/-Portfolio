import React from 'react';
import { motion } from 'motion/react';
import { 
  Layout, 
  Palette, 
  Accessibility, 
  Database, 
  LineChart, 
  Workflow, 
  Puzzle, 
  Bot,
  Building2,
  Calendar,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO, COMPACT_STATS, ABOUT_HIGHLIGHTS } from '../data/portfolioData';

const highlightIcons = [
  Layout,         // Responsive React applications
  Palette,        // Pixel-perfect UI implementation
  Accessibility,  // Accessible interfaces
  Database,       // Data-heavy application flows
  LineChart,      // Interactive dashboards and visualizations
  Workflow,       // REST API integration
  Puzzle,         // Third-party integrations
  Bot,            // AI-assisted development
];

export const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 md:py-28 relative border-t border-slate-800/60 bg-[#0B0F17]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Building Scalable Web & AI Solutions <span className="text-gradient-accent">with Intuitive User Interfaces</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Software Engineer with 2+ years of experience, specializing in React.js, building high-performance applications, data-driven dashboards, and AI-powered solutions with clean and accessible interfaces.
          </p>
        </div>

        {/* Compact Statistics Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {COMPACT_STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              id={`stat-card-${idx}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700/80 transition-all hover:shadow-lg hover:shadow-blue-500/5 group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-blue-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-300 mt-1">
                {stat.label}
              </div>
              {stat.sublabel && (
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {stat.sublabel}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Career Narrative Card */}
        <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 sm:p-8 lg:p-10 mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Building2 className="w-3.5 h-3.5" />
                  {PERSONAL_INFO.currentCompany}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {PERSONAL_INFO.companyType}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {PERSONAL_INFO.experience}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Frontend Development & UI Engineering as a <span className="text-blue-400">Jr. UI/UX Engineer</span>
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Over the past 2+ years at <strong className="text-white">Nanoprecise Sci Corp</strong>, I have designed and engineered enterprise-grade web applications for AI-driven industrial predictive maintenance. My daily craft revolves around translating complex engineering requirements into seamless, reactive user interfaces.
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                From authoring high-throughput sensor telemetry visualizations with Plotly.js to crafting predictable Redux application states, my focus remains constant: deliver interfaces that are blindingly fast, visually elegant, and accessible across any device or operating condition.
              </p>

              <div className="pt-2">
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 group"
                >
                  <span>Explore full experience timeline</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#0B0F17]/90 border border-slate-800 rounded-xl p-5 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2">
                Core Philosophy
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                  <span><strong className="text-white">Performance-First:</strong> Zero tolerance for lag in data-heavy screens or streaming charts.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></div>
                  <span><strong className="text-white">Pixel Accuracy:</strong> Strict adherence to design tokens, typography, and optical alignment.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></div>
                  <span><strong className="text-white">Accessible by Default:</strong> Keyboard navigational flow and WCAG standards.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0"></div>
                  <span><strong className="text-white">Modern Tooling:</strong> Leveraging AI tools (Cursor, Copilot) for swift delivery and clean code.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Core Highlights Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>Key Technical Competencies</span>
            </h3>
            <span className="text-xs text-slate-400">8 Core Pillars</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ABOUT_HIGHLIGHTS.map((item, idx) => {
              const Icon = highlightIcons[idx] || Layout;
              return (
                <motion.div
                  key={item.title}
                  id={`about-highlight-${idx}`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 rounded-xl p-5 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-100 group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
