import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award, CheckCircle2, Maximize2, Minimize2, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { DynamicIcon } from './DynamicIcon';

export const CertificateModal = ({ certificate, isOpen, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      setIsZoomed(false);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, isZoomed]);

  if (!isOpen || !certificate) return null;

  const isCertification = certificate.type === 'Certification' || !!certificate.issuer;
  const certificateImage = certificate.certificateImage || certificate.image || 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-950/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#FAF9F6] dark:bg-[#161622] rounded-3xl border border-[#E6E3DC] dark:border-[#2A2A38] shadow-2xl z-10 overflow-hidden custom-scrollbar"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 sm:px-7 py-4 bg-[#FAF9F6]/95 dark:bg-[#161622]/95 backdrop-blur-md border-b border-[#E6E3DC] dark:border-[#2A2A38] shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-400">
                {certificate.icon ? (
                  <DynamicIcon name={certificate.icon} className="w-4 h-4" />
                ) : (
                  <Award className="w-4 h-4" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono font-semibold bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                    {certificate.badge || (isCertification ? 'Verified Certificate' : 'Milestone')}
                  </span>
                  <span className="text-[11px] sm:text-xs font-mono text-stone-500 dark:text-stone-400">
                    {certificate.issueDate || certificate.date}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close certificate modal"
              className="p-2 rounded-full text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white bg-[#F4F3EF] dark:bg-[#20202E] hover:bg-stone-200 dark:hover:bg-[#2A2A3E] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="overflow-y-auto p-5 sm:p-7 space-y-6 flex-1 custom-scrollbar">
            
            {/* Title & Organization Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-medium text-stone-900 dark:text-stone-100">
                  {certificate.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-amber-700 dark:text-amber-400 mt-1">
                  Issued by: {certificate.issuer || certificate.organizer}
                </p>
              </div>

              {certificate.credentialId && (
                <div className="self-start sm:self-auto px-3 py-1.5 rounded-lg bg-[#F4F3EF] dark:bg-[#1E1E2B] border border-[#E6E3DC] dark:border-[#2A2A38] text-[11px] font-mono text-stone-600 dark:text-stone-300">
                  Credential ID: <span className="font-semibold text-stone-900 dark:text-stone-100">{certificate.credentialId}</span>
                </div>
              )}
            </div>

            {/* Certificate Preview Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-[#E6E3DC] dark:border-[#2A2A38] bg-stone-950/90 shadow-inner group">
              <div className="relative overflow-hidden flex items-center justify-center min-h-[260px] sm:min-h-[380px] md:min-h-[440px] max-h-[60vh] bg-stone-900/50">
                <img
                  src={certificateImage}
                  alt={`Certificate for ${certificate.title}`}
                  className={`w-full h-auto max-h-[60vh] object-contain transition-transform duration-300 ${
                    isZoomed ? 'scale-125 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                />
              </div>

              {/* Floating Image Control Bar */}
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 p-1 rounded-xl bg-stone-900/80 backdrop-blur-md border border-stone-700/60 shadow-lg text-white">
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-1.5 rounded-lg hover:bg-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer text-xs flex items-center gap-1 px-2"
                  title={isZoomed ? "Zoom out" : "Zoom in"}
                >
                  {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
                  <span className="text-[11px] font-mono">{isZoomed ? 'Reset' : 'Zoom'}</span>
                </button>
                <a
                  href={certificateImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg hover:bg-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer text-xs flex items-center gap-1 px-2"
                  title="Open full resolution in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-mono">Full View</span>
                </a>
              </div>
            </div>

            {/* Additional Credential Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certificate.skillsGained && (
                <div className="p-4 rounded-2xl bg-[#F4F3EF] dark:bg-[#1C1C28] border border-[#E6E3DC] dark:border-[#2A2A38]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-2 font-semibold">
                    Validated Competencies
                  </span>
                  <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 font-light leading-relaxed">
                    {certificate.skillsGained}
                  </p>
                </div>
              )}

              {certificate.description && (
                <div className="p-4 rounded-2xl bg-[#F4F3EF] dark:bg-[#1C1C28] border border-[#E6E3DC] dark:border-[#2A2A38]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-2 font-semibold">
                    Achievement Summary
                  </span>
                  <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 font-light leading-relaxed">
                    {certificate.description}
                  </p>
                </div>
              )}

              {certificate.highlight && (
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 md:col-span-2">
                  <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
                    <span className="text-xs sm:text-sm font-medium">
                      {certificate.highlight}
                    </span>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Footer Actions */}
          <div className="px-5 sm:px-7 py-4 bg-[#FAF9F6]/95 dark:bg-[#161622]/95 backdrop-blur-md border-t border-[#E6E3DC] dark:border-[#2A2A38] flex flex-wrap items-center justify-between gap-3 shrink-0">
            {/* <div className="text-xs text-stone-500 dark:text-stone-400 font-mono">
              Press <kbd className="px-1.5 py-0.5 rounded bg-stone-200 dark:bg-stone-800 text-[10px] text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700">ESC</kbd> or click outside to dismiss
            </div> */}

            <div className="flex items-center gap-2">
              {certificate.verifyLink && (
                <a
                  href={certificate.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-semibold shadow-xs transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Verify Online</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-medium text-xs hover:opacity-90 transition-opacity cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CertificateModal;
