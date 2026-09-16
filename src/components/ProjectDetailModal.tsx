import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Calendar, 
  Award, 
  Layers, 
  CheckCircle2, 
  Terminal, 
  Flame, 
  BarChart3,
  Cpu
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        id="project-detail-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="project-detail-modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#0F172A] border border-slate-700 text-slate-100 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
        >
          {/* Header Banner */}
          <div className={`p-6 bg-gradient-to-r ${project.imageFallbackGradient} border-b border-slate-800 relative`}>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-slate-900/90 text-blue-400 border border-slate-700">
                    {project.year}
                  </span>
                  {project.metrics && (
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {project.metrics}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white pt-1">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-mono">
                  {project.subtitle}
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Extended Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                System Overview & Engineering Scope
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/70 p-4 rounded-xl border border-slate-800">
                {project.longDescription}
              </p>
            </div>

            {/* Key Technical Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Technical Highlights & Implementation
              </h4>
              <div className="space-y-2">
                {project.keyHighlights.map((highlight, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/40 p-3 rounded-lg border border-slate-800/60"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Applied */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Tech Stack & Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-slate-800 text-slate-200 border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-sm transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Profile / Repositories</span>
              </a>

              <button
                onClick={onClose}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
              >
                Back to Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
