import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, GSAPSplitText);
}

/**
 * SplitText component for editorial GSAP typography animations.
 * 
 * @param {string|React.ReactNode} children - Text content or nodes
 * @param {string} as - HTML tag to render (h1, h2, h3, p, span, div)
 * @param {string} className - Additional CSS classes
 * @param {'chars'|'words'|'lines'|'words,chars'|'lines,words,chars'} type - GSAP split type
 * @param {'chars-fade-up'|'chars-3d'|'words-fade-up'|'lines-reveal'|'soft-blur'} animation - Animation preset
 * @param {number} delay - Animation start delay (seconds)
 * @param {number} duration - Animation duration per element (seconds)
 * @param {number} stagger - Stagger amount between split pieces
 * @param {boolean} triggerOnScroll - Whether to trigger when scrolled into view
 * @param {string} scrollStart - ScrollTrigger start position (e.g. 'top 85%')
 * @param {object} customFrom - Custom GSAP from vars
 * @param {object} customTo - Custom GSAP to vars
 */
export const SplitText = ({
  children,
  as: Component = 'div',
  className = '',
  type = 'words,chars',
  animation = 'chars-fade-up',
  delay = 0,
  duration = 0.8,
  stagger = 0.02,
  triggerOnScroll = true,
  scrollStart = 'top 88%',
  customFrom = null,
  customTo = null,
  ...props
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;

    const ctx = gsap.context(() => {
      // Create split instance
      const split = new GSAPSplitText(el, {
        type: type,
        linesClass: 'split-line overflow-hidden',
        wordsClass: 'split-word inline-block',
        charsClass: 'split-char inline-block',
      });

      let targetElements = split.chars;
      if (type === 'words' || (!split.chars.length && split.words.length)) {
        targetElements = split.words;
      } else if (type === 'lines' || (!split.chars.length && !split.words.length && split.lines.length)) {
        targetElements = split.lines;
      }

      if (!targetElements || targetElements.length === 0) {
        targetElements = [el];
      }

      // Determine animation config based on preset
      let fromVars = {};
      let toVars = {
        opacity: 1,
        y: 0,
        x: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: duration,
        stagger: stagger,
        ease: 'power3.out',
        delay: delay,
      };

      switch (animation) {
        case 'chars-3d':
          fromVars = {
            opacity: 0,
            y: 40,
            rotateX: -60,
            transformOrigin: '50% 50% -20px',
          };
          break;
        case 'words-fade-up':
          targetElements = split.words.length ? split.words : targetElements;
          fromVars = {
            opacity: 0,
            y: 35,
          };
          toVars.stagger = stagger || 0.04;
          toVars.ease = 'power3.out';
          break;
        case 'lines-reveal':
          targetElements = split.lines.length ? split.lines : targetElements;
          fromVars = {
            opacity: 0,
            y: '100%',
          };
          toVars.stagger = stagger || 0.08;
          toVars.ease = 'power4.out';
          break;
        case 'soft-blur':
          fromVars = {
            opacity: 0,
            y: 20,
            filter: 'blur(8px)',
          };
          toVars.stagger = stagger || 0.03;
          toVars.ease = 'power2.out';
          break;
        case 'chars-fade-up':
        default:
          fromVars = {
            opacity: 0,
            y: 30,
            rotateX: -20,
          };
          break;
      }

      if (customFrom) {
        fromVars = { ...fromVars, ...customFrom };
      }
      if (customTo) {
        toVars = { ...toVars, ...customTo };
      }

      if (triggerOnScroll) {
        toVars.scrollTrigger = {
          trigger: el,
          start: scrollStart,
          toggleActions: 'play none none none',
          once: true,
        };
      }

      gsap.fromTo(targetElements, fromVars, toVars);

      return () => {
        split.revert();
      };
    }, el);

    return () => ctx.revert();
  }, [type, animation, delay, duration, stagger, triggerOnScroll, scrollStart]);

  return (
    <Component ref={containerRef} className={`${className}`} {...props}>
      {children}
    </Component>
  );
};

/**
 * Custom Hook for programmatic GSAP SplitText on refs or complex timelines
 */
export const useSplitText = (targetRef, options = {}) => {
  const {
    type = 'words,chars',
    animation = 'chars-fade-up',
    delay = 0,
    duration = 0.8,
    stagger = 0.02,
    triggerOnScroll = true,
    scrollStart = 'top 85%',
  } = options;

  useEffect(() => {
    if (!targetRef.current) return;

    const el = targetRef.current;
    const ctx = gsap.context(() => {
      const split = new GSAPSplitText(el, {
        type: type,
        linesClass: 'split-line',
        wordsClass: 'split-word inline-block',
        charsClass: 'split-char inline-block',
      });

      let targetElements = split.chars.length ? split.chars : split.words;

      const animProps = {
        opacity: 0,
        y: 30,
      };

      const toProps = {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        delay,
        ease: 'power3.out',
      };

      if (triggerOnScroll) {
        toProps.scrollTrigger = {
          trigger: el,
          start: scrollStart,
          toggleActions: 'play none none none',
          once: true,
        };
      }

      gsap.fromTo(targetElements, animProps, toProps);

      return () => split.revert();
    }, el);

    return () => ctx.revert();
  }, [targetRef, type, animation, delay, duration, stagger, triggerOnScroll, scrollStart]);
};

export default SplitText;
