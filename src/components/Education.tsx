import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Award, 
  MapPin, 
  BookOpen, 
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section 
      id="education" 
      className="py-20 md:py-28 relative border-t border-slate-800/60 bg-[#0B0F17]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-accent">Qualifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Strong foundational computer engineering background with distinction, physical sciences, and computer science fundamentals.
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              id={`education-card-${idx}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-900/70 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 sm:p-8 transition-all shadow-md group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {edu.degree}
                    </h3>
                  </div>

                  <p className="text-sm font-medium text-slate-300">
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {edu.score && (
                  <div className="sm:self-start">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-xs font-bold text-emerald-400">
                      <Award className="w-3.5 h-3.5" />
                      <span>{edu.score}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Highlights */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
                {edu.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
