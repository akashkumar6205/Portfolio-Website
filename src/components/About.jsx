import React from 'react';
import { aboutData, personalInfo } from '../data/portfolioData';
import { GraduationCap, Compass, Target, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SplitText } from './SplitText';

export const About = () => {
  return (
    <section id="about" className="py-24 relative bg-[#FAF9F6]/60 dark:bg-[#12121A]/60 border-y border-[#E6E3DC] dark:border-[#242433]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-600 dark:text-amber-400 uppercase mb-2">
              <span className="w-6 h-[1px] bg-amber-600 dark:bg-amber-400" />
              <span>About Me</span>
            </div>
            <SplitText
              as="h2"
              type="words,chars"
              animation="chars-fade-up"
              stagger={0.015}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 dark:text-stone-100"
            >
              {/* Architecting with precision, <br />
              <span className="italic">designing with intent.</span> */}
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

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 bg-[#FAF9F6] dark:bg-[#16161F] p-8 sm:p-10 rounded-2xl border border-[#E6E3DC] dark:border-[#2A2A38] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E6E3DC] dark:border-[#2A2A38]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-100/60 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400">
                    <Compass className="w-5 h-5" />
                  </div>
                  <SplitText
                    as="h3"
                    type="words"
                    animation="words-fade-up"
                    className="font-serif text-xl font-medium text-stone-900 dark:text-stone-100"
                  >
                    My Background & Philosophy
                  </SplitText>
                </div>
                <span className="text-xs font-mono text-stone-400 dark:text-stone-500">01 / PERSPECTIVE</span>
              </div>

              <div className="space-y-4 text-stone-700 dark:text-stone-300 font-light leading-relaxed text-sm sm:text-base">
                {aboutData.narrative.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Micro Highlights Pill Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-8 mt-8 border-t border-[#E6E3DC] dark:border-[#2A2A38]">
              <div className="p-3.5 rounded-xl bg-[#F4F3EF] dark:bg-[#1C1C28] border border-[#E6E3DC]/60 dark:border-[#2E2E3E]">
                <p className="text-xs text-stone-500 dark:text-stone-400 font-mono">Specialization</p>
                <p className="font-semibold text-xs sm:text-sm text-stone-900 dark:text-stone-100 mt-0.5">Full-Stack React & Node</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F4F3EF] dark:bg-[#1C1C28] border border-[#E6E3DC]/60 dark:border-[#2E2E3E]">
                <p className="text-xs text-stone-500 dark:text-stone-400 font-mono">Approach</p>
                <p className="font-semibold text-xs sm:text-sm text-stone-900 dark:text-stone-100 mt-0.5">Component-Driven & Scalable</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F4F3EF] dark:bg-[#1C1C28] border border-[#E6E3DC]/60 dark:border-[#2E2E3E]">
                <p className="text-xs text-stone-500 dark:text-stone-400 font-mono">Availability</p>
                <p className="font-semibold text-xs sm:text-sm text-stone-900 dark:text-stone-100 mt-0.5 text-emerald-600 dark:text-emerald-400">Open for Work</p>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Core Values */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Education Card */}
            <div className="bg-[#FAF9F6] dark:bg-[#16161F] p-6 sm:p-8 rounded-2xl border border-[#E6E3DC] dark:border-[#2A2A38] shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E6E3DC] dark:border-[#2A2A38]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-stone-200/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-stone-900 dark:text-stone-100">
                    Education & Academics
                  </h3>
                </div>
                <span className="text-xs font-mono text-stone-400 dark:text-stone-500">02 / ACADEMIC</span>
              </div>

              <div>
                <h4 className="font-medium text-sm sm:text-base text-stone-900 dark:text-stone-100">
                  {aboutData.education.degree}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-0.5">
                  {aboutData.education.institution}
                </p>
                <div className="flex items-center justify-between mt-3 text-xs font-mono text-stone-500 dark:text-stone-400">
                  <span>{aboutData.education.year}</span>
                  <span className="px-2 py-0.5 rounded bg-amber-100/70 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 font-medium">
                    GPA: {aboutData.education.gpa}
                  </span>
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-3 pt-3 border-t border-dashed border-[#E6E3DC] dark:border-[#2A2A38]">
                  {aboutData.education.honors}
                </p>
              </div>
            </div>

            {/* Core Values Card */}
            <div className="bg-[#FAF9F6] dark:bg-[#16161F] p-6 sm:p-8 rounded-2xl border border-[#E6E3DC] dark:border-[#2A2A38] shadow-xs flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E6E3DC] dark:border-[#2A2A38]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-stone-200/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200">
                      <Target className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-medium text-stone-900 dark:text-stone-100">
                      Core Values
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-stone-400 dark:text-stone-500">03 / PILLARS</span>
                </div>

                <div className="space-y-4">
                  {aboutData.coreValues.map((value, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1 shrink-0" />
                      <div>
                        <h5 className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100">
                          {value.title}
                        </h5>
                        <p className="text-xs text-stone-600 dark:text-stone-400 font-light mt-0.5 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Resume Link CTA */}
              <div className="mt-6 pt-4 border-t border-[#E6E3DC] dark:border-[#2A2A38] flex items-center justify-between">
                <span className="text-xs text-stone-500 dark:text-stone-400 font-mono">Curriculum Vitae</span>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 dark:text-amber-400 hover:underline"
                >
                  View Full Resume <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
