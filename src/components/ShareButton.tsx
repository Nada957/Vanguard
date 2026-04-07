'use client';

import React, { useState } from 'react';

export const ShareButton: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2">
      {copied && (
        <span className="bg-[var(--accent-color)] text-[var(--primary-bg)] text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest animate-bounce">
          Link Copied!
        </span>
      )}
      <button
        onClick={handleShare}
        className="group relative flex items-center justify-center h-14 w-14 bg-[var(--accent-color)] text-[var(--primary-bg)] rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:scale-110 transition-all duration-300 active:scale-95"
        title="Share your Portfolio"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
          />
        </svg>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-[var(--accent-color)] opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-300" />
      </button>
    </div>
  );
};
