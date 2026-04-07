'use client';

import React, { useState, useEffect } from 'react';
import { SocialIcon } from './SocialIcon';

interface FloatingActionsProps {
  whatsappUrl?: string;
  sheetId: string;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ whatsappUrl, sheetId }) => {
  const [copied, setCopied] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async () => {
    try {
      const shareUrl = `${window.location.origin}${sheetId ? `/${sheetId}` : ''}`;
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 items-end">
      {/* Tooltip Overlay */}
      <div className="pointer-events-none flex flex-col items-end gap-3 mb-1">
         {copied && (
           <span className="bg-[var(--accent-color)] text-[var(--primary-bg)] text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest animate-bounce shadow-lg">
             Link Copied!
           </span>
         )}
      </div>

      {/* Buttons Stack */}
      <div className="flex flex-col gap-3 bg-black/20 backdrop-blur-md p-2 rounded-full border border-white/10 shadow-2xl transition-all duration-500 hover:bg-black/40">
        
        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/20 transition-all border border-white/5 hover:border-white/20 group"
            title="Back to Top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:-translate-y-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        )}

        {/* WhatsApp */}
        {whatsappUrl && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366] text-white hover:scale-110 transition-all shadow-[0_5px_15px_rgba(37,211,102,0.3)]"
            title="Chat on WhatsApp"
          >
            <SocialIcon platform="whatsapp" className="w-6 h-6" />
          </a>
        )}

        {/* Share Button (The one user wanted to move) */}
        <button
          onClick={handleShare}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--accent-color)] text-[var(--primary-bg)] hover:scale-110 transition-all shadow-[0_5px_15px_var(--glow-color)] group"
          title="Share Portfolio"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:rotate-12 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
