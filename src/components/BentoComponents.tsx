'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';

// --- Spotlight Component ---
export const Spotlight: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { activeTheme, spotlightEnabled } = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const isSpotlightEnabled = spotlightEnabled;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative w-full h-full"
    >
      {isSpotlightEnabled && (
        <div
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, var(--glow-color), transparent 80%)`,
            opacity: opacity * 0.15,
          }}
        />
      )}
      {children}
    </div>
  );
};

// --- BentoGrid Component ---
export const BentoGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-8 max-w-7xl mx-auto w-full min-h-screen">
      {children}
    </div>
  );
};

// --- BentoCard Component ---
export const BentoCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  title?: string;
  category?: string;
}> = ({ children, className = '', title, category }) => {
  return (
    <div
      style={{ borderRadius: 'var(--radius-card)', borderWidth: 'var(--border-width-card)' }}
      className={`
        relative overflow-hidden border-[var(--card-border)] 
        bg-[var(--card-bg)] backdrop-blur-[var(--blur-intensity)] p-6
        transition-all-500 shadow-xl shadow-[var(--shadow-color)]
        hover:scale-[1.02] hover:border-[var(--accent-color)] group
        ${className}
      `}
    >
      {category && (
        <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-2 block font-mono">
          {category}
        </span>
      )}
      {title && (
        <h3 className="text-xl font-[family-name:var(--font-header)] text-[var(--accent-color)] mb-4">
          {title}
        </h3>
      )}
      <div className="relative z-10">{children}</div>
      
      {/* Subtle corner glow on hover */}
      <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[var(--accent-color)] to-transparent opacity-5" />
    </div>
  );
};

// --- SkillBar Component ---
export const SkillBar: React.FC<{ name: string; percentage: number }> = ({ name, percentage }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(percentage), 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-[var(--text-muted)]">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-[var(--secondary-color)] overflow-hidden" style={{ borderRadius: 'var(--radius-button)' }}>
        <div
          className="h-full bg-[var(--accent-color)] transition-all duration-1000 ease-out shadow-[0_0_var(--glow-intensity)_var(--accent-color)]"
          style={{ width: `${width}%`, borderRadius: 'var(--radius-button)' }}
        />
      </div>
    </div>
  );
};
