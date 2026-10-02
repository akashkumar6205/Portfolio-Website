import React, { useState } from 'react';
import { achievementsData } from '../data/portfolioData';
import { Trophy, Award, ExternalLink, Eye } from 'lucide-react';
import { DynamicIcon } from './DynamicIcon';
import { CertificateModal } from './CertificateModal';
import { motion } from 'framer-motion';
import { SplitText } from './SplitText';

export const Achievements = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="achievements" className="py-24 relative bg-[#F4F3EF] dark:bg-[#0D0D11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-600 dark:text-amber-400 uppercase mb-2">
              <span className="w-6 h-[1px] bg-amber-600 dark:bg-amber-400" />
              <span>Honors & Credentials</span>
            </div>
            <SplitText
              as="h2"
              type="words,chars"
              animation="chars-fade-up"
              stagger={0.015}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 dark:text-stone-100"
            >
              Achievements & <span className="italic">Certifications</span>
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

        {/* Part 1: Hackathons & Competitions */}
        <div className="mb-16">
          <div className="flex items-center gap-2.5 mb-8 pb-3 border-b border-[#E6E3DC] dark:border-[#2A2A38]">
            <div className="p-2 rounded-lg bg-amber-100/70 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <SplitText
                as="h3"
                type="words"
                animation="words-fade-up"
                className="font-serif text-2xl font-medium text-stone-900 dark:text-stone-100"
              >
                Hackathons & Competitive Milestones
              </SplitText>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsData.hackathons.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#FAF9F6] dark:bg-[#16161F] p-6 sm:p-7 rounded-2xl border border-[#E6E3DC] dark:border-[#2A2A38] shadow-xs flex flex-col justify-between hover:border-amber-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-stone-400">
                      {item.date}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg font-medium text-stone-900 dark:text-stone-100">
                    {item.title}
                  </h4>
                  <p className="text-xs font-mono text-stone-500 dark:text-stone-400 mt-1">
                    {item.organizer}
                  </p>

                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-light mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-dashed border-[#E6E3DC] dark:border-[#2A2A38] flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <span className="text-stone-500 dark:text-stone-400 font-mono text-[11px]">
                      {item.category}
                    </span>
                    <span className="font-semibold text-amber-700 dark:text-amber-400 text-xs">
                      {item.highlight}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedCertificate({ ...item, type: 'Achievement' })}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500 text-amber-800 dark:text-amber-300 hover:text-stone-950 dark:hover:bg-amber-400 dark:hover:text-stone-950 text-xs font-medium border border-amber-500/20 transition-all duration-200 cursor-pointer ml-auto"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part 2: Academic & Professional Certifications */}
        <div>
          <div className="flex items-center gap-2.5 mb-8 pb-3 border-b border-[#E6E3DC] dark:border-[#2A2A38]">
            <div className="p-2 rounded-lg bg-stone-200/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <SplitText
                as="h3"
                type="words"
                animation="words-fade-up"
                className="font-serif text-2xl font-medium text-stone-900 dark:text-stone-100"
              >
                Professional Certifications & Credentials
              </SplitText>
              <p className="text-xs text-stone-500 dark:text-stone-400 font-light">
                Verified industry certifications in cloud, full-stack, and UX engineering
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsData.certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#FAF9F6] dark:bg-[#16161F] p-6 sm:p-7 rounded-2xl border border-[#E6E3DC] dark:border-[#2A2A38] shadow-xs flex flex-col justify-between hover:border-amber-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-[#F4F3EF] dark:bg-[#20202C] text-stone-800 dark:text-stone-200">
                        <DynamicIcon name={cert.icon} className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono text-stone-500 dark:text-stone-400">
                        {cert.issuer}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-stone-400">
                      {cert.issueDate}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg font-medium text-stone-900 dark:text-stone-100">
                    {cert.title}
                  </h4>

                  <div className="mt-3 p-3 rounded-xl bg-[#F4F3EF] dark:bg-[#1C1C28] border border-[#E6E3DC]/60 dark:border-[#2A2A38]">
                    <span className="text-[11px] font-mono text-stone-500 dark:text-stone-400 block mb-1">
                      Validated Skills:
                    </span>
                    <p className="text-xs text-stone-800 dark:text-stone-200 font-light">
                      {cert.skillsGained}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E6E3DC] dark:border-[#2A2A38] flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500">
                    ID: {cert.credentialId}
                  </span>
                  
                  <div className="flex items-center gap-2 ml-auto">
                    {cert.verifyLink && (
                      <a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                      >
                        <span>Verify</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    
                    <button
                      type="button"
                      onClick={() => setSelectedCertificate({ ...cert, type: 'Certification' })}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 text-stone-100 hover:bg-amber-600 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-amber-400 text-xs font-medium transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Certificate</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Certificate Modal Lightbox */}
      <CertificateModal
        certificate={selectedCertificate}
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
};

export default Achievements;
