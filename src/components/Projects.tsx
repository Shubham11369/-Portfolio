import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Terminal, 
  Activity, 
  Flame, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Info, 
  BarChart3,
  Calendar,
  Code,
  ShoppingBag,
  ShieldCheck,
  Database,
  MessageSquare,
  Zap
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'featured' | 'machine-learning' | 'blockchain' | 'frontend' | 'fullstack'>('all');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    return project.category === filter;
  });

  return (
    <section 
      id="projects" 
      className="py-20 md:py-28 relative border-t border-slate-800/60 bg-[#0B0F17]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED WORK & PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered Systems & <span className="text-gradient-accent">Technical Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Full-stack commerce applications, real-time data streaming, machine learning publications, and distributed blockchain infrastructure.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'featured', label: '★ Featured Work' },
            { id: 'fullstack', label: 'Full-Stack' },
            { id: 'frontend', label: 'Frontend Dashboards' },
            { id: 'machine-learning', label: 'Machine Learning' },
            { id: 'blockchain', label: 'Blockchain & Docker' },
          ].map((item) => (
            <button
              key={item.id}
              id={`project-filter-${item.id}`}
              onClick={() => setFilter(item.id as any)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                filter === item.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800/80'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group transition-all"
              >
                <div>
                  {/* Visual Preview Header (Interactive Mock/Graphic) */}
                  <div className={`relative h-60 sm:h-68 bg-gradient-to-br ${project.imageFallbackGradient} p-4 sm:p-6 overflow-hidden flex flex-col justify-between border-b border-slate-800`}>
                    
                    {/* Atmospheric background grid */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

                    {/* Top Badges */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold font-mono uppercase bg-slate-950/80 text-blue-400 border border-slate-800 backdrop-blur-md">
                          {project.year}
                        </span>
                        {project.metrics && (
                          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 backdrop-blur-md">
                            {project.metrics}
                          </span>
                        )}
                      </div>

                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-300 border border-blue-500/30">
                        Featured Work
                      </span>
                    </div>

                    {/* Visual Interface Preview Simulation */}
                    <div className="relative z-10 my-auto">
                      {project.previewType === 'telemetry' && (
                        <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-4 shadow-2xl backdrop-blur-md">
                          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-[11px] text-slate-400 font-mono">
                            <span className="flex items-center gap-1.5 text-amber-400">
                              <Flame className="w-3.5 h-3.5" />
                              Wildfire Risk Telemetry
                            </span>
                            <span className="text-emerald-400">Model: Random Forest / EDA</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 mt-2.5 text-center">
                            <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                              <div className="text-[10px] text-slate-400">Temp / Drought</div>
                              <div className="text-xs font-bold text-amber-400">38.4°C • FWI 32.1</div>
                            </div>
                            <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                              <div className="text-[10px] text-slate-400">Wind Velocity</div>
                              <div className="text-xs font-bold text-blue-400">28 km/h NW</div>
                            </div>
                            <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                              <div className="text-[10px] text-slate-400">Prediction Index</div>
                              <div className="text-xs font-bold text-rose-400">High Risk (89.4%)</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.previewType === 'terminal' && (
                        <div className="bg-[#0A0D14] border border-slate-800 rounded-xl p-3.5 shadow-2xl font-mono text-[11px] text-slate-300 backdrop-blur-md">
                          <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800 text-slate-500">
                            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                            <span className="ml-2 text-[10px] text-slate-400">docker-compose -f eth-private.yml</span>
                          </div>
                          <div className="pt-2 space-y-1 text-[11px]">
                            <div className="text-emerald-400 font-mono">➜ Initializing Geth node with genesis.json...</div>
                            <div className="text-slate-400">P2P Network ID: 1515 | RPC port: 8545 open</div>
                            <div className="text-blue-400">Block #00481 mined: 0x89a1f... (Gas: 21,000)</div>
                          </div>
                        </div>
                      )}

                      {project.previewType === 'dashboard' && (
                        <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-4 shadow-2xl backdrop-blur-md">
                          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400 font-mono">
                            <span className="flex items-center gap-1.5 text-cyan-400">
                              <Activity className="w-3.5 h-3.5" />
                              Machinery Vibration Spectrum
                            </span>
                            <span className="text-emerald-400">Plotly.js 120fps</span>
                          </div>
                          <div className="flex items-end gap-1.5 h-12 pt-2 px-1">
                            {[40, 65, 30, 85, 95, 45, 70, 50, 80, 60, 45, 90, 75, 55].map((h, i) => (
                              <div 
                                key={i} 
                                className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t" 
                                style={{ height: `${h}%` }}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {project.previewType === 'ecommerce' && (
                        <div className="bg-slate-950/95 border border-indigo-500/30 rounded-xl p-3.5 shadow-2xl backdrop-blur-md space-y-2.5">
                          {/* Top Bar of Storefront */}
                          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-[11px] text-slate-300">
                            <div className="flex items-center gap-1.5 font-bold text-indigo-400">
                              <ShoppingBag className="w-3.5 h-3.5" />
                              <span>Storefront & Cart API</span>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-mono">
                              <span className="flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                                <ShieldCheck className="w-3 h-3" />
                                Clerk Auth
                              </span>
                              <span className="flex items-center gap-1 text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
                                <Database className="w-3 h-3" />
                                Neon DB
                              </span>
                            </div>
                          </div>

                          {/* Mini Storefront Showcase Rows */}
                          <div className="grid grid-cols-3 gap-2">
                            <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 text-left">
                              <div className="text-[10px] text-slate-400">Active Cart Items</div>
                              <div className="text-xs font-bold text-slate-100 flex items-center justify-between mt-0.5">
                                <span>3 Items</span>
                                <span className="text-emerald-400 font-mono">$189.00</span>
                              </div>
                            </div>
                            <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 text-left">
                              <div className="text-[10px] text-slate-400">Real-Time Stream</div>
                              <div className="text-xs font-bold text-indigo-300 flex items-center gap-1 mt-0.5">
                                <MessageSquare className="w-3 h-3 text-indigo-400" />
                                <span>Live Chat On</span>
                              </div>
                            </div>
                            <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 text-left">
                              <div className="text-[10px] text-slate-400">ImageKit CDN</div>
                              <div className="text-xs font-bold text-amber-400 flex items-center gap-1 mt-0.5">
                                <Zap className="w-3 h-3 text-amber-400" />
                                <span>Optimized</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 pt-2">
                      <span className="font-mono text-slate-300">{project.subtitle}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 pt-1">
                      {project.keyHighlights.slice(0, 2).map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-800/80 mt-4">
                  <button
                    id={`view-details-${project.id}`}
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Architecture Details</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-slate-300" />
                    <span>Code / Research</span>
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Extensible Future Projects Architecture Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-dashed border-slate-800 text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <Code className="w-4 h-4 text-blue-400" />
            <span>Extensible Architecture</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            This showcase uses a modular architecture where upcoming React components, open-source repositories, and client case studies seamlessly populate through dynamic project schemas.
          </p>
        </div>

      </div>
    </section>
  );
};
