import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  FileText, 
  Download,
  Sparkles, 
  ExternalLink,
  Briefcase
} from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scrollspy calculation
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B0F17]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal brand */}
          <a 
            href="#home" 
            id="brand-logo"
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <span>SA</span>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#0B0F17] rounded-full"></div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-100 tracking-tight group-hover:text-blue-400 transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Dev
                </span>
              </div>
              <p className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Available Immediately
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  id={`nav-link-${sectionId}`}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-blue-600/25 border border-blue-500/30 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-resume-button"
              onClick={onOpenResume}
              className="relative group flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold text-slate-100 bg-slate-900/90 hover:bg-slate-800 border border-blue-500/40 hover:border-blue-400 rounded-lg transition-all shadow-[0_0_12px_rgba(59,130,246,0.15)] hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] active:scale-95"
              title="View & Download ATS Resume (PDF)"
            >
              <div className="w-5 h-5 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Download className="w-3 h-3" />
              </div>
              <span>Resume</span>
              <span className="text-[9px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1 py-0.2 rounded border border-emerald-500/20">
                CV
              </span>
            </button>

            <a
              id="header-contact-button"
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg shadow-sm shadow-blue-500/20 hover:shadow-blue-500/30 transition-all active:scale-95"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/70 rounded-lg focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#0F172A] border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  id={`mobile-link-${item.href.substring(1)}`}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  {activeSection === item.href.substring(1) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  )}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                id="mobile-resume-button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2.5 py-2.5 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>View & Download Resume</span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  PDF
                </span>
              </button>
              <a
                id="mobile-hire-button"
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-500/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>Let's Connect</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
