import React, { useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, ArrowDown, FileText, Sparkles, Code2, MapPin, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import gsap from 'gsap';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(GSAPSplitText);
}

export const Hero = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadRef = useRef(null);
  const ctaRef = useRef(null);
  const badgeRef = useRef(null);
  const imageCardRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headlineSplit = new GSAPSplitText(headlineRef.current, {
        type: 'words,chars',
        wordsClass: 'split-word inline-block mr-[0.22em]',
        charsClass: 'split-char inline-block',
      });

      const subheadSplit = new GSAPSplitText(subheadRef.current, {
        type: 'words',
        wordsClass: 'split-word inline-block mr-[0.25em]',
      });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
      )
      .fromTo(
        headlineSplit.chars,
        { opacity: 0, y: 35, rotateX: -45, transformOrigin: '50% 50% -10px' },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.7, stagger: 0.015 },
        '-=0.3'
      )
      .fromTo(
        subheadSplit.words,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.012 },
        '-=0.4'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.3'
      )
      .fromTo(
        imageCardRef.current,
        { opacity: 0, scale: 0.95, rotate: 1 },
        { opacity: 1, scale: 1, rotate: 0, duration: 0.9, ease: 'back.out(1.4)' },
        '-=0.7'
      )
      .fromTo(
        statsRef.current ? statsRef.current.children : [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 },
        '-=0.4'
      );

      return () => {
        headlineSplit.revert();
        subheadSplit.revert();
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Editorial Decorative Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 dark:bg-amber-400/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-blue-500/5 dark:bg-indigo-400/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill Badge */}
            {/* <div 
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] dark:bg-[#181822] border border-[#E6E3DC] dark:border-[#2A2A38] text-xs font-medium text-stone-700 dark:text-stone-300 shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for high-impact roles & projects</span>
              <span className="text-stone-300 dark:text-stone-600">|</span>
              <span className="text-stone-500 dark:text-stone-400 flex items-center gap-1">
                <MapPin className="w-3 h-3" /> New Delhi, IN
              </span>
            </div> */}

            {/* Main Headline */}
            <h1 
              ref={headlineRef}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 dark:text-stone-100 leading-[1.12]"
            >
              Building <span className="italic font-normal underline decoration-amber-600/40 dark:decoration-amber-400/40 decoration-wavy underline-offset-8">scalable</span> full-stack apps with editorial polish.
            </h1>

            {/* Value Proposition Statement */}
            <p 
              ref={subheadRef}
              className="text-base sm:text-lg text-stone-600 dark:text-stone-400 max-w-2xl font-light leading-relaxed"
            >
              Hi, I'm <strong className="font-semibold text-stone-900 dark:text-stone-200">Akash Kumar</strong>. I combine robust full-stack software architecture with meticulous UI/UX craft. Bridging the gap between reliable backend systems and responsive, fluid web interfaces.
            </p>

            {/* Action Buttons & Socials */}
            <div 
              ref={ctaRef}
              className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
            >
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="px-6 py-3.5 rounded-xl bg-stone-900 text-stone-50 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-white font-medium text-sm flex items-center justify-center gap-2 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href="/Akash_Kumar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#FAF9F6] dark:bg-[#181822] text-stone-800 dark:text-stone-200 border border-[#E6E3DC] dark:border-[#2A2A38] hover:border-stone-400 dark:hover:border-stone-600 font-medium text-sm flex items-center justify-center gap-2 transition-all hover:shadow-xs hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Get Resume</span>
              </a>

              {/* Direct Profile Socials */}
              <div className="flex items-center gap-1.5 pl-2 border-l border-stone-300 dark:border-stone-700 py-1">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white hover:bg-[#FAF9F6] dark:hover:bg-[#181822] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white hover:bg-[#FAF9F6] dark:hover:bg-[#181822] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                {/* <a
                  href={personalInfo.socials.email}
                  aria-label="Send Direct Email"
                  className="p-2.5 rounded-lg text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white hover:bg-[#FAF9F6] dark:hover:bg-[#181822] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a> */}
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div 
              ref={statsRef}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 w-full border-t border-[#E6E3DC] dark:border-[#2A2A38]"
            >
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
                    {stat.value}
                  </span>
                  <span className="text-xs text-stone-500 dark:text-stone-400 font-mono mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Editorial Profile Card with Visual Layering */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div 
              ref={imageCardRef}
              className="relative max-w-sm sm:max-w-md w-full"
            >
              {/* Outer decorative card frame with warm off-white and subtle borders */}
              <div className="relative rounded-2xl bg-[#FAF9F6] dark:bg-[#171722] p-4 sm:p-5 border border-[#E6E3DC] dark:border-[#2A2A38] shadow-lg shadow-stone-200/50 dark:shadow-none">
                
                {/* Image container */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-stone-200 dark:bg-stone-800 border border-[#E6E3DC] dark:border-[#2A2A38]">
                  <img
                    src={personalInfo.profileImage || "/profile.jpg"}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      // Fallback if local image not found
                      e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                  
                  {/* Subtle editorial vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent pointer-events-none" />

                  {/* Floating Caption inside photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-mono tracking-wider text-amber-300 uppercase">Engineer</p>
                    <h3 className="font-serif text-lg font-medium text-stone-100">Akash Kumar</h3>
                    {/* <p className="text-xs text-stone-300 font-light">MERN Developer</p> */}
                  </div>
                </div>

                {/* Floating Tech Badge 1 */}
                <div className="absolute -top-3 -right-3 bg-stone-900 dark:bg-white text-stone-50 dark:text-stone-950 px-3 py-1.5 rounded-lg text-xs font-mono font-medium shadow-md flex items-center gap-1.5 border border-stone-700 dark:border-stone-300">
                  <Code2 className="w-3.5 h-3.5 text-amber-400 dark:text-amber-600" />
                  <span>Full-Stack</span>
                </div>

                {/* Floating Tech Badge 2 */}
                {/* <div className="absolute -bottom-3 -left-3 bg-[#FAF9F6] dark:bg-[#1C1C28] text-stone-800 dark:text-stone-200 px-3 py-2 rounded-xl text-xs font-medium shadow-md border border-[#E6E3DC] dark:border-[#2A2A38] flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-mono text-[11px]">Clean Code & A11y</span>
                </div> */}

              </div>

              {/* Backing decorative frame offset */}
              <div className="absolute -bottom-2.5 -right-2.5 inset-0 border border-stone-300 dark:border-stone-800 rounded-2xl -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
