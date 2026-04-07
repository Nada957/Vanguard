'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeConfig, themes } from '@/styles/themes';

interface ThemeContextType {
  activeTheme: ThemeConfig;
  setThemeById: (id: number) => void;
  accentColor: string;
  spotlightEnabled: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
  initialThemeId?: number;
  initialAccentColor?: string;
  initialSpotlight?: boolean;
}> = ({ children, initialThemeId = 1, initialAccentColor, initialSpotlight }) => {
  const [activeTheme, setActiveTheme] = useState<ThemeConfig>(themes[initialThemeId] || themes[1]);
  const [accentColor, setAccentColor] = useState(initialAccentColor || activeTheme.styles['--accent-color']);
  const [spotlightEnabled, setSpotlightEnabled] = useState(initialSpotlight ?? true);

  const setThemeById = (id: number) => {
    if (themes[id]) {
      setActiveTheme(themes[id]);
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    const styles = activeTheme.styles;

    Object.entries(styles).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    if (accentColor) {
      root.style.setProperty('--accent-color', accentColor);
    }

    if (activeTheme.category === 'Cyber') {
      root.style.setProperty('--radius-card', '0px');
      root.style.setProperty('--radius-button', '0px');
      root.style.setProperty('--radius-avatar', '0px');
      root.style.setProperty('--border-width-card', '2px');
    } else if (activeTheme.category === 'Glass') {
      root.style.setProperty('--radius-card', '24px');
      root.style.setProperty('--radius-button', '9999px');
      root.style.setProperty('--radius-avatar', '9999px');
      root.style.setProperty('--border-width-card', '1px');
    } else {
      root.style.setProperty('--radius-card', '8px');
      root.style.setProperty('--radius-button', '4px');
      root.style.setProperty('--radius-avatar', '8px');
      root.style.setProperty('--border-width-card', '1px');
    }
  }, [activeTheme, accentColor]);

  return (
    <ThemeContext.Provider value={{ activeTheme, setThemeById, accentColor, spotlightEnabled }}>
      <div className="min-h-screen bg-[var(--primary-bg)] text-[var(--text-main)] font-[family-name:var(--font-main)] transition-colors duration-500">
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
