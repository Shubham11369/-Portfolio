import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Download, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Layers, 
  Zap,
  BarChart3
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const userPhoto = PERSONAL_INFO.defaultAvatarUrl;

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Subtle Background Glows and Atmospheric Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content: 7 cols */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Status Pills */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-xs font-medium text-slate-200 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="font-semibold text-emerald-400">Immediate Joiner</span>
                <span className="text-slate-500">|</span>
                <span className="text-slate-300">2+ Years Experience</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/50 text-xs text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
            >
              Hi,{" "}

  <motion.span
    className="text-gradient-accent relative inline-block"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{
      opacity: 1,
      scale: [0.9, 1.05, 1],
    }}
    transition={{
      duration: 0.8,
      delay: 0.35,
      ease: "easeOut",
    }}
  >
    {/* Animated shine */}
    <motion.span
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
      initial={{ x: "-50%" }}
      animate={{ x: "10%" }}
      transition={{
        duration: 1.2,
        delay: 1,
        repeat: Infinity,
        repeatDelay: 4,
        ease: "easeInOut",
      }}
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black, transparent)",
      }}
    />

    {PERSONAL_INFO.name}

    {/* Animated underline */}
    <motion.span
      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
      initial={{ width: 0, opacity: 0 }}
      animate={{
        width: "100%",
        opacity: 0.8,
      }}
      transition={{
        width: {
          duration: 0.7,
          delay: 0.8,
          ease: "easeOut",
        },
        opacity: {
          duration: 0.4,
          delay: 0.8,
        },
      }}
    />

    {/* Underline glow */}
    <motion.span
      className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-indigo-500 blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.5, 0.2] }}
      transition={{
        duration: 1.5,
        delay: 1,
        repeat: Infinity,
        repeatDelay: 3,
      }}
    />
  </motion.span>
</motion.h1>

              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 flex items-center justify-center lg:justify-start gap-2.5"
              >
                <span>{PERSONAL_INFO.tagline}</span>
              </motion.h2>
            </div>

            {/* Short Description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {PERSONAL_INFO.shortBio}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              {/* Primary CTA */}
              <a
                id="hero-primary-cta"
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary CTA: Highly Attractive Download Resume */}
              <button
                id="hero-secondary-cta"
                onClick={onOpenResume}
                className="relative group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-slate-900/90 hover:bg-slate-800/90 border border-blue-500/40 hover:border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.45)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
              >
                {/* Subtle animated sweep highlight */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>

                <div className="w-6 h-6 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors flex-shrink-0">
                  <Download className="w-3.5 h-3.5 group-hover:animate-bounce" />
                </div>
                <span className="tracking-wide">Download Resume</span>
                <span className="px-1.5 py-0.5 text-[10px] uppercase font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded">
                  PDF
                </span>
              </button>
            </motion.div>

            {/* Contact & Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-400"
            >
              <a
                id="hero-linkedin-link"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:text-blue-400 hover:bg-slate-800 transition-colors"
                aria-label="Shubham Anand LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span className="font-medium">LinkedIn</span>
              </a>

              <a
                id="hero-github-link"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-600 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Shubham Anand GitHub"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span className="font-medium">GitHub</span>
              </a>

              <a
                id="hero-email-link"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-slate-800 transition-colors"
                aria-label="Email Shubham Anand"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span className="font-medium">{PERSONAL_INFO.email}</span>
              </a>

              <a
                id="hero-phone-link"
                href={`tel:${PERSONAL_INFO.phones[0].replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 hover:text-indigo-400 hover:bg-slate-800 transition-colors"
                aria-label="Call Shubham Anand"
              >
                <Phone className="w-4 h-4 text-indigo-400" />
                <span className="font-medium">{PERSONAL_INFO.phones[0]}</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Hero Visual: 5 cols with Naturally Integrated Professional Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-square flex items-center justify-center">
              
              {/* Outer Subtle Ambient Glowing Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/25 via-indigo-600/20 to-violet-600/25 blur-2xl animate-pulse -z-10" />
              <div className="absolute -inset-2 rounded-full border border-blue-500/20 opacity-70 animate-[spin_40s_linear_infinite]" />
              <div className="absolute -inset-6 rounded-full border border-dashed border-indigo-500/15" />

              {/* Main Photo Container with Sophisticated Organic Frame */}
              <div className="relative w-72 h-72 sm:w-84 sm:h-84 rounded-full p-2.5 bg-gradient-to-b from-slate-700/60 via-slate-800/80 to-[#0B0F17] shadow-2xl border border-slate-700/50 group">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-900 ring-2 ring-blue-500/20">
                  
                  {/* The Integrated Professional Photo */}
                  <img
                    id="hero-profile-image"
                    src={userPhoto}
                    alt="Shubham Anand - Frontend React Developer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback if URL fails
                      (e.target as HTMLImageElement).src = PERSONAL_INFO.defaultAvatarUrl;
                    }}
                  />

                  {/* Soft vignetting / gradient overlay to melt naturally into the design */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Orbiting Tech Badges */}
              {/* Badge 1: React.js (Top Right) */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 right-2 sm:right-6 bg-slate-900/95 border border-slate-700/80 rounded-xl px-3 py-2 shadow-lg backdrop-blur-md flex items-center gap-2 z-10"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-200">React.js + TypeScript</div>
                  <div className="text-[9px] text-slate-400">Core Expertise</div>
                </div>
              </motion.div>

              {/* Badge 2: Plotly Dashboards (Bottom Left) */}
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-3 -left-2 sm:left-4 bg-slate-900/95 border border-slate-700/80 rounded-xl px-3.5 py-2 shadow-lg backdrop-blur-md flex items-center gap-2.5 z-10"
              >
                <div className="w-7 h-7 rounded-lg bg-indigo-500/15 flex items-center justify-center text-indigo-400">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-200">Interactive Dashboards</div>
                  <div className="text-[9px] text-slate-400">Plotly.js • Analytics • Telemetry</div>
                </div>
              </motion.div>

              {/* Badge 3: Nanoprecise Experience (Bottom Right) */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute bottom-8 -right-2 sm:-right-6 bg-slate-900/95 border border-emerald-500/30 rounded-xl px-3 py-1.5 shadow-lg backdrop-blur-md flex items-center gap-2 z-10"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-slate-200">Software Engineer</div>
                  <div className="text-[9px] text-emerald-400">Frontend • Full Stack • AI</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
