import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Layers, CheckCircle, Cpu } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-950/70 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FAF9F6] dark:bg-[#161622] rounded-3xl border border-[#E6E3DC] dark:border-[#2A2A38] shadow-2xl z-10 custom-scrollbar"
        >
          {/* Close Button Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAF9F6]/90 dark:bg-[#161622]/90 backdrop-blur-md border-b border-[#E6E3DC] dark:border-[#2A2A38]">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                {project.category}
              </span>
              <span className="text-xs font-mono text-stone-400">Case Study & Architecture</span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-full text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white bg-[#F4F3EF] dark:bg-[#20202E] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Title & Tagline */}
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-100">
                {project.title}
              </h3>
              <p className="text-stone-600 dark:text-stone-300 mt-2 font-light text-sm sm:text-base leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Banner Preview & Action Links */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-[#E6E3DC] dark:border-[#2A2A38] bg-stone-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 text-white">
                  <span className="text-xs font-mono bg-stone-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-stone-700">
                    Impact: {project.metrics}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-semibold shadow-md transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold border border-stone-600 shadow-md transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Architectural Overview */}
            {project.architecture && (
              <div className="space-y-6">
                <div className="bg-[#F4F3EF] dark:bg-[#1E1E2B] p-5 sm:p-6 rounded-2xl border border-[#E6E3DC] dark:border-[#2E2E40]">
                  <h4 className="font-serif text-lg font-medium text-stone-900 dark:text-stone-100 flex items-center gap-2 mb-2">
                    <Layers className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    System Architecture Overview
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-light leading-relaxed">
                    {project.architecture.overview}
                  </p>
                </div>

                {/* Layer Breakdown Grid */}
                <div>
                  <h5 className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3">
                    Technology Stack Breakdown
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.architecture.stackDetails.map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-[#F4F3EF]/60 dark:bg-[#1C1C28] border border-[#E6E3DC] dark:border-[#2A2A38]">
                        <span className="text-[11px] font-mono text-amber-700 dark:text-amber-400 block font-semibold">
                          {item.layer}
                        </span>
                        <span className="text-xs text-stone-800 dark:text-stone-200 mt-0.5 block">
                          {item.tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features List */}
                <div>
                  <h5 className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3">
                    Key Features & Capabilities
                  </h5>
                  <div className="space-y-2.5">
                    {project.architecture.keyFeatures.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                        <span className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-light leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Engineering Challenges Solved */}
                {project.architecture.challengesSolved && (
                  <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40">
                    <h5 className="text-xs font-mono text-amber-900 dark:text-amber-300 font-semibold mb-1 flex items-center gap-1.5">
                      <Cpu className="w-4 h-4" /> Technical Challenge Solved
                    </h5>
                    <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-300 font-light leading-relaxed">
                      {project.architecture.challengesSolved}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Modal Bottom Footer Actions */}
            <div className="pt-6 border-t border-[#E6E3DC] dark:border-[#2A2A38] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#F4F3EF] dark:bg-[#1E1E2B] text-stone-600 dark:text-stone-300 border border-[#E6E3DC] dark:border-[#2A2A38]">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-medium text-xs hover:opacity-90 transition-opacity cursor-pointer"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
