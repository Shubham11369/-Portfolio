import React from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  Database, 
  Bot, 
  Binary,
  ExternalLink
} from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'sql':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'copilot':
        return <Bot className="w-5 h-5 text-blue-400" />;
      case 'ai':
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'python':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      default:
        return <Award className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section 
      id="certifications" 
      className="py-20 md:py-28 relative border-t border-slate-800/60 bg-[#0B0F17]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400">
            <Award className="w-3.5 h-3.5" />
            <span>CONTINUOUS LEARNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry Certifications & <span className="text-gradient-accent">Bootcamps</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Targeted upskilling across database design, AI-assisted development workflows, and modern software paradigms.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={cert.title}
              id={`cert-card-${idx}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-900/70 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 transition-all shadow-md group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(cert.iconType)}
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-slate-800 text-slate-300 border border-slate-700/60">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-medium text-slate-400 mt-1">
                  Issued by <span className="text-slate-200">{cert.issuer}</span>
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Skills Validated
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/50"
                    >
                      {skill}
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
