import React from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Building2, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ExternalLink,
  Layers,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="py-20 md:py-28 relative border-t border-slate-800/60 bg-[#0B0F17]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>WORK EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience in <span className="text-gradient-accent">Frontend & UI Engineering</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on frontend development at a product company, building web interfaces and interactive data visualizations.
          </p>
        </div>

        {/* Experience Cards / Timeline */}
        <div className="max-w-4xl mx-auto">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <motion.div
              key={exp.company}
              id={`experience-card-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden group hover:border-slate-700/90 transition-all"
            >
              {/* Subtle top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      {exp.role}
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      Frontend Developer
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 font-medium">
                    <span className="flex items-center gap-1.5 text-blue-400">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:self-start">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{exp.period}</span>
                  </span>
                </div>
              </div>

              {/* Company & Role Overview */}
              <div className="py-6">
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {exp.overview}
                </p>
              </div>

              {/* Achievement Bullets */}
              <div className="space-y-3.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  <span>Core Responsibilities & Technical Work</span>
                </h4>

                <div className="grid grid-cols-1 gap-3">
                  {exp.achievements.map((item, itemIdx) => (
                    <div 
                      key={itemIdx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-3 rounded-xl border border-slate-800/60 hover:border-slate-700/80 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Technologies & Frameworks Deployed
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
