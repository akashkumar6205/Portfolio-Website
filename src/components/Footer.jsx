import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { SplitText } from './SplitText';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetEl = document.querySelector(href);
    if (targetEl) {
      const navHeight = 80;
      const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#FAF9F6] dark:bg-[#0A0A0F] border-t border-[#E6E3DC] dark:border-[#20202E] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E6E3DC] dark:border-[#20202E] items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 flex items-center justify-center font-mono font-semibold text-xs">
                AK
              </div>
              <SplitText
                as="span"
                type="words,chars"
                animation="chars-fade-up"
                className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100"
              >
                Akash Kumar
              </SplitText>
            </div>
            <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-sm font-light max-w-sm leading-relaxed">
              Full-Stack Developer & UI Engineer specialized in building high-performance web systems.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F3EF] dark:bg-[#161622] text-[11px] font-mono text-stone-500 dark:text-stone-400 border border-[#E6E3DC] dark:border-[#2A2A38]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for 2028 Opportunities</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 block">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 space-y-4 md:text-right flex flex-col md:items-end">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 block">
              Connect
            </span>
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-[#F4F3EF] dark:bg-[#161622] text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white border border-[#E6E3DC] dark:border-[#2A2A38] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-[#F4F3EF] dark:bg-[#161622] text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white border border-[#E6E3DC] dark:border-[#2A2A38] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.email}
                aria-label="Email"
                className="p-2.5 rounded-xl bg-[#F4F3EF] dark:bg-[#161622] text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white border border-[#E6E3DC] dark:border-[#2A2A38] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F4F3EF] dark:bg-[#161622] text-xs font-mono text-stone-700 dark:text-stone-300 border border-[#E6E3DC] dark:border-[#2A2A38] hover:border-stone-400 dark:hover:border-stone-600 transition-colors cursor-pointer mt-2"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Tier */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 dark:text-stone-400 font-mono">
          <p className='flex items-center justify-center'>© {new Date().getFullYear()} Akash Kumar. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
