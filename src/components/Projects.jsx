import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Layers, ArrowUpRight, Eye } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { motion, AnimatePresence } from 'framer-motion';
import { SplitText } from './SplitText';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Full Stack', 'AI / ML', 'Web3 / FinTech', 'Frontend'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 relative bg-[#FAF9F6]/80 dark:bg-[#12121A]/80 border-t border-[#E6E3DC] dark:border-[#242433]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-600 dark:text-amber-400 uppercase mb-2">
              <span className="w-6 h-[1px] bg-amber-600 dark:bg-amber-400" />
              <span>Selected Works</span>
            </div>
            <SplitText
              as="h2"
              type="words,chars"
              animation="chars-fade-up"
              stagger={0.015}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 dark:text-stone-100"
            >
              Featured <span className="italic">Software Projects</span>
            </SplitText>
          </div>
          <SplitText
            as="p"
            type="words"
            animation="words-fade-up"
            stagger={0.015}
            className="text-stone-600 dark:text-stone-400 max-w-md text-sm sm:text-base font-light"
          >
          </SplitText>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 shadow-xs'
                    : 'bg-[#FAF9F6] dark:bg-[#16161F] text-stone-600 dark:text-stone-400 border border-[#E6E3DC] dark:border-[#2A2A38] hover:border-stone-400 dark:hover:border-stone-600'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative bg-[#FAF9F6] dark:bg-[#16161F] rounded-2xl p-5 sm:p-7 border border-[#E6E3DC] dark:border-[#2A2A38] hover:border-amber-600/50 dark:hover:border-amber-400/50 transition-all duration-300 shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Visual Image Preview */}
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-900 border border-[#E6E3DC] dark:border-[#2A2A38] mb-6 group-hover:shadow-md transition-shadow">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/0 transition-colors" />

                    {/* Category & Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#FAF9F6]/90 dark:bg-[#16161F]/90 backdrop-blur-md text-stone-800 dark:text-stone-200 border border-[#E6E3DC] dark:border-[#2A2A38]">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-amber-500/90 text-stone-950 backdrop-blur-md">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Quick Preview Hover Overlay Action */}
                    <button
                      onClick={() => handleOpenModal(project)}
                      aria-label={`View architecture for ${project.title}`}
                      className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-stone-900/80 hover:bg-stone-900 text-white backdrop-blur-md text-xs font-mono flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity cursor-pointer border border-stone-700"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Architecture</span>
                    </button>
                  </div>

                  {/* Project Title & Short Description */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-light line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-0.8 rounded bg-[#F4F3EF] dark:bg-[#1E1E2B] text-stone-600 dark:text-stone-300 border border-[#E6E3DC]/80 dark:border-[#2E2E3E]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="pt-6 mt-6 border-t border-[#E6E3DC] dark:border-[#2A2A38] flex items-center justify-between">
                  {/* Case Study Trigger */}
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-800 dark:text-stone-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>View Architecture</span>
                  </button>

                  {/* External Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Github Repository"
                      className="p-2 rounded-lg text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-[#F4F3EF] dark:hover:bg-[#20202E] transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Live Project"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 text-xs font-medium hover:opacity-90 transition-opacity"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Case Study / Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Projects;
