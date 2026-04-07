import React from 'react';
import { SocialIcon } from './SocialIcon';

interface WhatsAppButtonProps {
  url?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ url }) => {
  if (!url) return null;

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 hover:-translate-y-1 transition-all group animate-bounce hover:animate-none"
      title="Chat on WhatsApp"
    >
      <SocialIcon platform="whatsapp" className="w-8 h-8" />
      <span className="absolute right-full mr-4 px-4 py-2 bg-black/80 text-white text-[10px] uppercase tracking-widest font-bold whitespace-nowrap rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
        Chat with me
      </span>
    </a>
  );
};
