import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProjectItem } from './types';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col selection:bg-blue-600/30 selection:text-blue-200 relative overflow-x-hidden">
      {/* Top Fixed Header Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. About Section with Compact Stats & 8 Core Highlights */}
        <About />

        {/* 3. Work Experience Section: Nanoprecise Sci Corp */}
        <Experience />

        {/* 4. Technical Skills Section */}
        <Skills />

        {/* 5. Featured Work & Technical Projects Section */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 6. Education Section */}
        <Education />

        {/* 7. Certifications Section */}
        <Certifications />

        {/* 8. Contact Section: Let's Build Something Together */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
