import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Cpu, 
  Terminal, 
  Database, 
  Search, 
  Sparkles, 
  Check, 
  ExternalLink,
  Layers,
  Wrench,
  Globe,
  Sliders
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'state' | 'tools' | 'additional'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesTab = activeTab === 'all' || skill.category === activeTab;
    const matchesSearch = 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'state':
        return 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20';
      case 'tools':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'additional':
        return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      default:
        return 'text-slate-400 bg-slate-800 border-slate-700';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <Code2 className="w-3.5 h-3.5" />;
      case 'state':
        return <Sliders className="w-3.5 h-3.5" />;
      case 'tools':
        return <Wrench className="w-3.5 h-3.5" />;
      case 'additional':
        return <Database className="w-3.5 h-3.5" />;
      default:
        return <Cpu className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section 
      id="skills" 
      className="py-20 md:py-28 relative border-t border-slate-800/60 bg-[#0B0F17]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="text-gradient-accent">Skill Ecosystem</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Organized across modern frontend architecture, robust state management, developer tooling, and supportive backend technologies.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
          
          {/* Tab Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl">
            {[
              { id: 'all', label: 'All Skills', count: SKILLS_DATA.length },
              { id: 'frontend', label: 'Frontend', count: SKILLS_DATA.filter(s => s.category === 'frontend').length },
              { id: 'state', label: 'State Management', count: SKILLS_DATA.filter(s => s.category === 'state').length },
              { id: 'tools', label: 'Tools & Workflow', count: SKILLS_DATA.filter(s => s.category === 'tools').length },
              { id: 'additional', label: 'Additional Tech', count: SKILLS_DATA.filter(s => s.category === 'additional').length },
            ].map((tab) => (
              <button
                key={tab.id}
                id={`skill-filter-${tab.id}`}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeTab === tab.id ? 'bg-blue-700 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g., Redux, Vite)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-9 pr-3.5 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedSkill(skill)}
                className="bg-slate-900/70 hover:bg-slate-900 border border-slate-800/90 hover:border-slate-700/90 rounded-xl p-4 transition-all hover:shadow-lg hover:shadow-blue-500/5 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Tag and Category */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${getCategoryBadgeColor(skill.category)}`}>
                      {getCategoryIcon(skill.category)}
                      <span>{skill.tag}</span>
                    </span>

                    {skill.experienceYears && (
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                        {skill.experienceYears}
                      </span>
                    )}
                  </div>

                  {/* Skill Title */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </h3>
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" title="Core Specialty" />
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom subtle indicator */}
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{skill.category === 'frontend' ? 'Frontend Stack' : skill.category === 'state' ? 'State Architecture' : skill.category === 'tools' ? 'Developer Workflow' : 'Supplementary'}</span>
                  <span className="text-blue-400 group-hover:translate-x-0.5 transition-transform">Details →</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            <p className="text-sm">No skills found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
              className="mt-2 text-xs text-blue-400 underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Interactive Skill Detail Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <div 
              id="skill-detail-modal"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0F172A] border border-slate-700 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl relative"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryBadgeColor(selectedSkill.category)}`}>
                      {getCategoryIcon(selectedSkill.category)}
                      <span className="capitalize">{selectedSkill.category}</span>
                      <span>•</span>
                      <span>{selectedSkill.tag}</span>
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2">
                      {selectedSkill.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Practical Application & Hands-On Use
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                    {selectedSkill.description}
                  </p>
                </div>

                {selectedSkill.experienceYears && (
                  <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
                    <span className="font-semibold text-slate-200">Hands-on Experience:</span>
                    <span className="font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                      {selectedSkill.experienceYears} Experience
                    </span>
                  </div>
                )}

                <div className="pt-4 border-t border-slate-800 flex justify-end">
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
