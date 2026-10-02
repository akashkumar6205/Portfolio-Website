import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { DynamicIcon } from './DynamicIcon';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SplitText } from './SplitText';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillCategories.map(cat => cat.category.split(' ')[0])];

  const filteredCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter(cat => cat.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="skills" className="py-24 relative bg-[#F4F3EF] dark:bg-[#0D0D11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-600 dark:text-amber-400 uppercase mb-2">
              <span className="w-6 h-[1px] bg-amber-600 dark:bg-amber-400" />
              <span>Technical Competencies</span>
            </div>
            <SplitText
              as="h2"
              type="words,chars"
              animation="chars-fade-up"
              stagger={0.015}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 dark:text-stone-100"
            >
              Tech Stack & <span className="italic">Skill Mastery</span>
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

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 shadow-xs'
                    : 'bg-[#FAF9F6] dark:bg-[#16161F] text-stone-600 dark:text-stone-400 border border-[#E6E3DC] dark:border-[#2A2A38] hover:border-stone-400 dark:hover:border-stone-600'
                }`}
              >
                {cat === 'All' ? 'All Disciplines' : cat}
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredCategories.map((group, groupIdx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, delay: groupIdx * 0.08 }}
                className="bg-[#FAF9F6] dark:bg-[#16161F] rounded-2xl p-6 sm:p-8 border border-[#E6E3DC] dark:border-[#2A2A38] shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E6E3DC] dark:border-[#2A2A38]">
                    <div>
                      <h3 className="font-serif text-xl font-medium text-stone-900 dark:text-stone-100">
                        {group.category}
                      </h3>
                      <p className="text-xs text-stone-500 dark:text-stone-400 font-light mt-0.5">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List with Progress Lines */}
                  <div className="space-y-5">
                    {group.skills.map((skill, sIdx) => (
                      <div key={skill.name} className="group">
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <div className="flex items-center gap-2">
                            <div className="p-1 rounded bg-[#F4F3EF] dark:bg-[#20202C] text-amber-700 dark:text-amber-400 group-hover:scale-110 transition-transform">
                              <DynamicIcon name={skill.icon} className="w-3.5 h-3.5" />
                            </div>
                            <span className="font-medium text-stone-900 dark:text-stone-200">
                              {skill.name}
                            </span>
                            <span className="hidden sm:inline-block text-[10px] font-mono text-stone-400 dark:text-stone-500 px-1.5 py-0.2 bg-stone-200/50 dark:bg-stone-800/50 rounded">
                              {skill.highlight}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono text-stone-500 dark:text-stone-400">
                              {skill.experience}
                            </span>
                            <span className="font-mono font-semibold text-stone-900 dark:text-stone-100 text-xs">
                              {skill.level}%
                            </span>
                          </div>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="w-full h-2 rounded-full bg-[#E6E3DC] dark:bg-[#262633] overflow-hidden p-[1px]">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: sIdx * 0.05 }}
                            className="h-full rounded-full bg-gradient-to-r from-amber-600 to-amber-500 dark:from-amber-500 dark:to-amber-400 relative"
                          >
                            <span className="absolute right-0 top-0 bottom-0 w-1 bg-white/70 rounded-full" />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro Footer for Category */}
                <div className="mt-6 pt-4 border-t border-dashed border-[#E6E3DC] dark:border-[#2A2A38] flex items-center justify-between text-[11px] font-mono text-stone-400 dark:text-stone-500">
                  <span>{group.skills.length} core technologies</span>
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Production Tested
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Skills;
