import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from './ThemeProvider';

interface AdminPortalProps {
  currentSheetId: string;
  currentThemeId: number;
  onClose: () => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({ currentSheetId, currentThemeId, onClose }) => {
  const [sheetId, setSheetId] = useState('');
  const router = useRouter();
  const { setThemeById } = useTheme();

  const openSheet = () => {
    if (currentSheetId && currentSheetId !== 'YOUR_SHEET_ID_HERE') {
      window.open(`https://docs.google.com/spreadsheets/d/${currentSheetId}/edit`, '_blank');
    }
  };

  const handleLaunch = () => {
    let cleanId = sheetId.trim();
    
    // Smart ID Extraction: If they paste a full URL, extract the ID
    const urlMatch = cleanId.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (urlMatch && urlMatch[1]) {
      cleanId = urlMatch[1];
    }

    if (cleanId) {
      router.push(`/${cleanId}`);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="max-w-md w-full bg-[#111] border-2 border-[#00ffff]/30 rounded-[2.5rem] p-10 shadow-[0_0_50px_rgba(0,255,255,0.1)] relative">
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
        >
          ✕
        </button>

        <div className="text-center space-y-8 max-h-[85vh] overflow-y-auto pr-4 scrollbar-hide">
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-[#00ffff] uppercase italic tracking-tighter shadow-sm">
              Cicada Portal
            </h2>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">
              Admin Launch Protocol
            </p>
          </div>

          {/* Theme Reference Section */}
          <div className="bg-black/40 border border-white/5 rounded-2xl p-6 text-left space-y-4">
             <h3 className="text-[9px] uppercase tracking-[0.3em] font-black text-[#00ffff]/60 border-b border-white/5 pb-2">Click to Preview Themes</h3>
             <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {[
                  "Neon Genesis", "Violet Storm", "Noir Minimal", "Azure Modern", "Crimson Red Team",
                  "Matrix Digital", "Executive Pro", "Luxury Gold", "Soft Pastel", "Blue Horizon"
                ].map((name, i) => (
                  <button 
                    key={i} 
                    onClick={() => setThemeById(i + 1)}
                    className={`flex justify-between items-center text-[8px] font-bold uppercase tracking-widest transition-colors text-left ${
                      currentThemeId === i + 1 
                        ? 'text-[#00ffff] bg-[#00ffff]/10 rounded px-2' 
                        : 'text-white/40 hover:text-[#00ffff]'
                    }`}
                  >
                    <span>{i + 1}. {name}</span>
                    {currentThemeId === i + 1 && <span className="text-[10px]">✓</span>}
                  </button>
                ))}
             </div>
          </div>

          {/* Share Different Themes Section */}
          <div className="bg-black/40 border border-white/5 rounded-2xl p-6 text-left space-y-4">
             <h3 className="text-[9px] uppercase tracking-[0.3em] font-black text-[#00ffff]/60 border-b border-white/5 pb-2">Share Portfolio with Different Themes</h3>
             <div className="grid grid-cols-1 gap-2 max-h-32 overflow-y-auto">
                {[
                  "Neon Genesis", "Violet Storm", "Noir Minimal", "Azure Modern", "Crimson Red Team",
                  "Matrix Digital", "Executive Pro", "Luxury Gold", "Soft Pastel", "Blue Horizon"
                ].map((name, i) => {
                  const themeUrl = currentSheetId && currentSheetId !== 'YOUR_SHEET_ID_HERE' 
                    ? `${window.location.origin}/${currentSheetId}?theme=${i + 1}`
                    : `${window.location.origin}?theme=${i + 1}`;
                  
                  return (
                    <button 
                      key={i} 
                      onClick={() => {
                        navigator.clipboard.writeText(themeUrl);
                        // Simple feedback
                        const btn = event?.target as HTMLElement;
                        if (btn) {
                          const original = btn.textContent;
                          btn.textContent = 'COPIED!';
                          setTimeout(() => btn.textContent = original, 1000);
                        }
                      }}
                      className="w-full flex justify-between items-center text-[8px] font-bold uppercase tracking-widest text-white/40 hover:text-[#00ffff] transition-colors text-left bg-black/20 hover:bg-black/40 rounded px-3 py-2"
                    >
                      <span>{i + 1}. {name}</span>
                      <span className="text-[10px]">📋</span>
                    </button>
                  );
                })}
             </div>
             <p className="text-[7px] text-white/20 uppercase tracking-widest">
               Click any theme to copy its unique share link
             </p>
          </div>

          <div className="flex flex-col gap-4">
            <button 
              onClick={openSheet}
              className="w-full bg-white/5 border border-white/10 text-white/80 py-4 rounded-2xl font-black uppercase text-[9px] tracking-[0.3em] hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <span>Open Source Sheet</span>
              <span className="text-[12px]">📝</span>
            </button>

            <div className="space-y-4 pt-4 border-t border-white/5">
            <div className="space-y-2 text-left">
              <label className="text-[9px] uppercase tracking-widest font-black text-white/30 px-4">
                Google Sheet ID
              </label>
              <input 
                type="text" 
                placeholder="Paste ID here..." 
                value={sheetId}
                onChange={(e) => setSheetId(e.target.value)}
                autoFocus
                className="w-full bg-black border border-white/10 p-5 rounded-2xl text-white font-mono text-xs focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff] transition-all outline-none"
              />
            </div>

            <button 
              onClick={handleLaunch}
              className="w-full bg-[#00ffff] text-black py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.5em] hover:bg-white transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Teleport
            </button>
            </div>
          </div>

          <div className="pt-4 flex flex-col gap-2">
             <span className="text-[8px] text-white/20 uppercase tracking-[0.3em] font-bold">System Status: Secure</span>
             <span className="text-[9px] text-white/10 uppercase tracking-[0.6em] font-black">Provided by CICADA ACADEMY</span>
          </div>
        </div>
      </div>
    </div>
  );
};
