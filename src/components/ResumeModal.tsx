import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Printer, 
  Download, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Briefcase, 
  GraduationCap, 
  Award, 
  CheckCircle2 
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  EXPERIENCE_DATA, 
  EDUCATION_DATA, 
  CERTIFICATIONS_DATA, 
  SKILLS_DATA 
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div 
        id="resume-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="resume-modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white text-slate-900 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col"
        >
          {/* Top Control Bar (Non-printable) */}
          <div className="sticky top-0 z-20 bg-slate-900 border-b border-slate-800 px-5 sm:px-6 py-3.5 flex items-center justify-between text-white print:hidden">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold tracking-wide text-slate-100">
                Curriculum Vitae • Shubham Anand
              </span>
              <span className="hidden sm:inline-flex px-2 py-0.5 text-[10px] font-mono bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded font-semibold">
                ATS-Compliant
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="print-resume-button"
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save as PDF</span>
              </button>

              <button
                id="close-resume-button"
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document Body (matching exact clean ATS typography) */}
          <div className="p-8 sm:p-14 space-y-5 bg-white font-sans text-slate-900 leading-normal selection:bg-blue-100">
            
            {/* Header Section */}
            <div className="text-center pb-2 border-b-2 border-slate-900">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-wider font-serif">
                SHUBHAM ANAND
              </h1>
             <p className="text-xs sm:text-sm font-semibold text-slate-700 italic mt-0.5">
                 Software Engineer • React.js • Full Stack • Generative AI • Immediate Joiner
              </p>

              {/* Contact meta line */}
              <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[11px] sm:text-xs text-slate-600 mt-2 font-sans">
                <span>Navi Mumbai, India</span>
                <span className="text-slate-400">|</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-blue-700 hover:underline">
                  {PERSONAL_INFO.email}
                </a>
                <span className="text-slate-400">|</span>
                <span>+91 8454971508</span>
                <span className="text-slate-400">|</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                  {PERSONAL_INFO.linkedinDisplay}
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-1.5 pt-1">
              <h2 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-800 pb-0.5">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed text-justify">
                Frontend Developer with 2+ years of experience building responsive, high-performance web applications in React.js. Specializes in translating UI/UX designs into scalable, accessible components and building interactive data-visualization dashboards. Comfortable working across the stack when needed, with hands-on exposure to API integration, state management, and modern AI-assisted development workflows.
              </p>
            </div>

            {/* Professional Experience */}
            <div className="space-y-3 pt-1">
              <h2 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-800 pb-0.5">
                PROFESSIONAL EXPERIENCE
              </h2>

              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                  <div>
                    <strong className="text-slate-900 font-bold">Nanoprecise Sci Corp</strong> — <span className="font-semibold text-slate-800">Jr. UI/UX Engineer</span>
                  </div>
                  <div className="text-slate-600 text-xs font-medium">
                    2+ Years • Remote, India
                  </div>
                </div>

                <div className="text-[11px] font-medium text-slate-500 italic">
                  Product-based company
                </div>

                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700 leading-relaxed">
                  <li>Built and maintained responsive web applications using React.js, JavaScript (ES6+), HTML5, and CSS3, Tailwind CSS, supporting core product features used across multiple client accounts.</li>
                  <li>Partnered with UI/UX designers to translate mock-ups into pixel-perfect, accessible interfaces, reducing design-to-development handoff friction.</li>
                  <li>Implemented state management using React Hooks, Context API, and Redux to support complex, data-heavy application flows.</li>
                  <li>Built interactive dashboards and time-series data visualizations using Plotly.js, enabling users to analyze analytical data more effectively.</li>
                  <li>Integrated REST APIs in collaboration with backend teams to connect frontend features to live product data.</li>
                  <li>Integrated third-party services including HubSpot (chat, forms, user identification) and Segment for analytics and event tracking.</li>
                  <li>Delivered ongoing bug fixes and hotfixes while writing maintainable, scalable code, and contributed to code reviews and team knowledge-sharing sessions.</li>
                  <li>Adopted AI-assisted development tools (Cursor IDE, GitHub Copilot) to speed up development, debugging, and code optimization.</li>
                  <li>Ensured cross-browser compatibility and consistent responsive behaviour across devices.</li>
                </ul>
              </div>

              {/* Academic Project inside Experience */}
              <div className="space-y-1 pt-1">
                <div className="text-xs text-slate-900 font-bold">
                  Academic Project: Wildfire Prediction and Early Detection Using Machine Learning (2023)
                </div>
                <ul className="list-disc list-outside ml-4 text-xs text-slate-700 leading-relaxed">
                  <li>Built an ML model for wildfire prediction using historical environmental data; performed EDA to identify key risk factors and developed a Flask app to visualize predictions in real time. Co-authored a resulting research publication.</li>
                </ul>
              </div>

              {/* Internship Project inside Experience */}
              <div className="space-y-1 pt-1">
                <div className="text-xs text-slate-900 font-bold">
                  Internship Project: Ethereum Blockchain in Docker — TCS ION
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700 leading-relaxed">
                  <li>Built a Docker image/container packaging Ethereum blockchain components; created key-pair accounts, generated a custom genesis block, and initialized a private Ethereum node from it.</li>
                  <li>Attached a console to the private node to inspect accounts and balances, executed ether transfers between accounts, and ran mining operations to validate transactions on the chain.</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-1.5 pt-1">
              <h2 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-800 pb-0.5">
                EDUCATION
              </h2>
              <div className="space-y-1 text-xs text-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div>
                    <strong className="text-slate-900">BE, Computer Engineering</strong> — SIGCE, Ghansoli
                  </div>
                  <div className="text-slate-700 font-semibold font-mono text-[11px]">
                    8.17 CGPA (71.98%)
                  </div>
                </div>
                <div>
                  <strong className="text-slate-900">12th Science (Computer Science)</strong> — JVM Jr. College, Airoli
                </div>
                <div>
                  <strong className="text-slate-900">10th</strong> — Kendriya Vidyalaya, AFS Thane
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-1.5 pt-1">
              <h2 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-800 pb-0.5">
                SKILLS
              </h2>
              <div className="space-y-1 text-xs text-slate-700">
            <div>
              <strong className="text-slate-900">Frontend:</strong>{' '}
              React.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap, Plotly.js
            </div>

            <div>
              <strong className="text-slate-900">State & Data:</strong>{' '}
              React Hooks, Context API, Redux, Redux Toolkit, React Query
            </div>

            <div>
              <strong className="text-slate-900">API & Integration:</strong>{' '}
              REST APIs, Axios, JSON, Authentication, API Integration
            </div>

            <div>
              <strong className="text-slate-900">Tools & Workflow:</strong>{' '}
              Git, GitHub, VS Code, Cursor IDE, GitHub Copilot, Vite, NPM
            </div>

            <div>
              <strong className="text-slate-900">Backend & Databases:</strong>{' '}
              Node.js, Express.js, Python, PostgreSQL, MySQL, MongoDB
            </div>

            <div>
              <strong className="text-slate-900">Generative AI (Learning):</strong>{' '}
              LLMs, RAG, Prompt Engineering, Embeddings, Vector Databases, AI Application Development
            </div>

            <div>
              <strong className="text-slate-900">Cloud & DevOps:</strong>{' '}
              AWS, Docker, CI/CD
            </div>

            <div>
              <strong className="text-slate-900">Additional:</strong>{' '}
              Web3, Ethereum & Blockchain Fundamentals
            </div>
          </div>
            </div>

            {/* Certifications */}
            <div className="space-y-1.5 pt-1">
            <h2 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-800 pb-0.5">
              CERTIFICATIONS & PROFESSIONAL DEVELOPMENT
            </h2>

            <div className="text-xs text-slate-700 leading-relaxed">
              Market Research: Dekker's Complete Marketing Research (Udemy, 2024) •
              Python Bootcamp (Udemy, 2025) •
              GitHub Copilot: Beginner to Pro •
              Prompt Engineering for AI Bootcamp •
              The Complete SQL Masterclass 2023
            </div>

              <div className="text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-800">Currently Learning:</strong>{' '}
                Generative AI Masters 2026: From Python to Gen AI •
                Master Modern React: Beginner to Advanced
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-1.5 pt-1">
              <h2 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-800 pb-0.5">
                LANGUAGES
              </h2>
              <div className="text-xs text-slate-700">
                English, Hindi (Native) — Fluent <span className="text-slate-400 mx-1">|</span> German — A2
              </div>
            </div>

          </div>

          {/* Footer note in modal */}
          <div className="bg-slate-900 border-t border-slate-800 px-6 py-3 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 print:hidden gap-2">
            <span>Shubham Anand • Immediate Joiner • anand.shubham81@gmail.com</span>
            <button
              onClick={handlePrint}
              className="text-xs font-semibold text-blue-400 hover:text-blue-300 underline"
            >
              Click here to Save as PDF
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
