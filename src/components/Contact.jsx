import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, MapPin, Send, Copy, Check, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { SplitText } from './SplitText';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please specify a subject';
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message must be at least 15 characters long';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F59E0B', '#10B981', '#6366F1', '#D97706']
        });
      } catch (err) {
        // graceful ignore
      }

      setTimeout(() => {
        setIsSuccess(false);
      }, 7000);
    }, 1200);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#FAF9F6]/80 dark:bg-[#12121A]/80 border-t border-[#E6E3DC] dark:border-[#242433]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-600 dark:text-amber-400 uppercase mb-2">
              <span className="w-6 h-[1px] bg-amber-600 dark:bg-amber-400" />
              <span>Get In Touch</span>
            </div>
            <SplitText
              as="h2"
              type="words,chars"
              animation="chars-fade-up"
              stagger={0.015}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 dark:text-stone-100"
            >
              Let's build something <br />
              <span className="italic">exceptional together.</span>
            </SplitText>
          </div>
          <SplitText
            as="p"
            type="words"
            animation="words-fade-up"
            stagger={0.015}
            className="text-stone-600 dark:text-stone-400 max-w-md text-sm sm:text-base font-light"
          >
            Have a project in mind, an engineering role, or simply want to talk architecture? My inbox is always open.
          </SplitText>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-[#FAF9F6] dark:bg-[#16161F] p-6 sm:p-8 rounded-2xl border border-[#E6E3DC] dark:border-[#2A2A38] shadow-xs space-y-6">
              <h3 className="font-serif text-xl font-medium text-stone-900 dark:text-stone-100 pb-3 border-b border-[#E6E3DC] dark:border-[#2A2A38]">
                Direct Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-[#F4F3EF] dark:bg-[#1C1C28] border border-[#E6E3DC]/60 dark:border-[#2A2A38]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100/80 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500 block">Email Address</span>
                      <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-medium text-stone-800 dark:text-stone-200 hover:underline">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    title="Copy Email"
                    className="p-2 rounded-lg text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white bg-[#FAF9F6] dark:bg-[#16161F] border border-[#E6E3DC] dark:border-[#2A2A38] transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F4F3EF] dark:bg-[#1C1C28] border border-[#E6E3DC]/60 dark:border-[#2A2A38]">
                  <div className="p-2 rounded-lg bg-stone-200/80 dark:bg-stone-800 text-stone-800 dark:text-stone-200">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500 block">Location</span>
                    <span className="text-xs sm:text-sm font-medium text-stone-800 dark:text-stone-200">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                {/* Availability Item */}
                {/* <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F4F3EF] dark:bg-[#1C1C28] border border-[#E6E3DC]/60 dark:border-[#2A2A38]">
                  <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div> */}
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#E6E3DC] dark:border-[#2A2A38]">
                <span className="text-xs font-mono text-stone-500 dark:text-stone-400 block mb-3">
                  Professional Channels
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F4F3EF] dark:bg-[#1C1C28] border border-[#E6E3DC] dark:border-[#2A2A38] text-xs font-medium text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-stone-400" />
                  </a>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F4F3EF] dark:bg-[#1C1C28] border border-[#E6E3DC] dark:border-[#2A2A38] text-xs font-medium text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-stone-400" />
                  </a>
                  <a
                    href={personalInfo.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F4F3EF] dark:bg-[#1C1C28] border border-[#E6E3DC] dark:border-[#2A2A38] text-xs font-medium text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors"
                  >
                    <TwitterIcon className="w-3.5 h-3.5" />
                    <span>Twitter / X</span>
                    <ArrowUpRight className="w-3 h-3 text-stone-400" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF9F6] dark:bg-[#16161F] p-6 sm:p-10 rounded-2xl border border-[#E6E3DC] dark:border-[#2A2A38] shadow-xs">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E6E3DC] dark:border-[#2A2A38]">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <h3 className="font-serif text-xl font-medium text-stone-900 dark:text-stone-100">
                    Send a Direct Message
                  </h3>
                </div>
                <span className="text-xs font-mono text-stone-400">Response &lt; 24h</span>
              </div>

              {/* Success Notification Alert */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs sm:text-sm flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Message dispatched successfully!</p>
                      <p className="mt-0.5 font-light">Thank you for reaching out. I'll review your note and get back to you shortly.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-4 py-3 rounded-xl bg-[#F4F3EF] dark:bg-[#1C1C28] border ${
                        errors.name ? 'border-rose-500' : 'border-[#E6E3DC] dark:border-[#2A2A38]'
                      } text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all`}
                    />
                    {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sarah@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#F4F3EF] dark:bg-[#1C1C28] border ${
                        errors.email ? 'border-rose-500' : 'border-[#E6E3DC] dark:border-[#2A2A38]'
                      } text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all`}
                    />
                    {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-mono text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-2">
                    Subject / Project Topic *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Frontend Architecture Consultation"
                    className={`w-full px-4 py-3 rounded-xl bg-[#F4F3EF] dark:bg-[#1C1C28] border ${
                      errors.subject ? 'border-rose-500' : 'border-[#E6E3DC] dark:border-[#2A2A38]'
                    } text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all`}
                  />
                  {errors.subject && <p className="text-xs text-rose-500 mt-1">{errors.subject}</p>}
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-mono text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-2">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project goals, timelines, or technology requirements..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#F4F3EF] dark:bg-[#1C1C28] border ${
                      errors.message ? 'border-rose-500' : 'border-[#E6E3DC] dark:border-[#2A2A38]'
                    } text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all custom-scrollbar`}
                  />
                  {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-stone-900 text-stone-100 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white font-medium text-sm flex items-center justify-center gap-2 shadow-xs transition-all hover:shadow hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
