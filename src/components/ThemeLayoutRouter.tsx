'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';
import { FloatingActions } from './FloatingActions';
import { AdminPortal } from './AdminPortal';

import { Theme1 } from '@/layouts/Theme1';
import { Theme2 } from '@/layouts/Theme2';
import { Theme3 } from '@/layouts/Theme3';
import { Theme4 } from '@/layouts/Theme4';
import { Theme5 } from '@/layouts/Theme5';
import { Theme6 } from '@/layouts/Theme6';
import { Theme7 } from '@/layouts/Theme7';
import { Theme8 } from '@/layouts/Theme8';
import { Theme9 } from '@/layouts/Theme9';
import { Theme10 } from '@/layouts/Theme10';

interface Props {
  config: any;
  identity: any;
  skills: any;
  projects: any;
  experiences: any[];
  services: any[];
  testimonials: any[];
  blogPosts: any[];
  isPremium: boolean;
  sheetId: string;
}

export const ThemeLayoutRouter: React.FC<Props> = ({ 
  config, identity, skills, projects, experiences, services, testimonials, blogPosts, isPremium, sheetId 
}) => {
  const { activeTheme, setThemeById } = useTheme();

  // Sync theme with Google Sheet data on mount
  React.useEffect(() => {
    if (config.active_theme) {
      setThemeById(config.active_theme);
    }
  }, [config.active_theme]);

  // Check URL parameters for theme override on client side
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const themeParam = urlParams.get('theme');
      if (themeParam) {
        const themeId = parseInt(themeParam);
        if (themeId >= 1 && themeId <= 10) {
          setThemeById(themeId);
        }
      }
    }
  }, [setThemeById]);

  const [showAdmin, setShowAdmin] = React.useState(false);
  const [showPortal, setShowPortal] = React.useState(false);
  const [inputBuffer, setInputBuffer] = React.useState('');

  // Secret keyboard listener: type 'cicada' to unlock admin controls
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newInput = (inputBuffer + e.key.toLowerCase()).slice(-6);
      setInputBuffer(newInput);
      
      if (newInput === 'cicada') {
        setShowPortal(true);
        setShowAdmin(true); // Also reveal switcher for convenience
        setInputBuffer('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inputBuffer]);
  
  const renderLayout = () => {
    switch(activeTheme.id) {
      case 1: return <Theme1 identity={identity} skills={skills} projects={projects} experiences={experiences} services={services} testimonials={testimonials} blogPosts={blogPosts} />;
      case 2: return <Theme2 identity={identity} skills={skills} projects={projects} experiences={experiences} services={services} testimonials={testimonials} blogPosts={blogPosts} />;
      case 3: return <Theme3 identity={identity} skills={skills} projects={projects} experiences={experiences} services={services} testimonials={testimonials} blogPosts={blogPosts} />;
      case 4: return <Theme4 identity={identity} skills={skills} projects={projects} experiences={experiences} services={services} testimonials={testimonials} blogPosts={blogPosts} />;
      case 5: return <Theme5 identity={identity} skills={skills} projects={projects} experiences={experiences} services={services} testimonials={testimonials} blogPosts={blogPosts} />;
      case 6: return <Theme6 identity={identity} skills={skills} projects={projects} experiences={experiences} services={services} testimonials={testimonials} blogPosts={blogPosts} />;
      case 7: return <Theme7 identity={identity} skills={skills} projects={projects} experiences={experiences} services={services} testimonials={testimonials} blogPosts={blogPosts} />;
      case 8: return <Theme8 identity={identity} skills={skills} projects={projects} experiences={experiences} services={services} testimonials={testimonials} blogPosts={blogPosts} />;
      case 9: return <Theme9 identity={identity} skills={skills} projects={projects} experiences={experiences} services={services} testimonials={testimonials} blogPosts={blogPosts} />;
      case 10: return <Theme10 identity={identity} skills={skills} projects={projects} experiences={experiences} services={services} testimonials={testimonials} blogPosts={blogPosts} />;
      default: return <Theme1 identity={identity} skills={skills} projects={projects} experiences={experiences} services={services} testimonials={testimonials} blogPosts={blogPosts} />;
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <div className="flex-grow">
        {renderLayout()}
      </div>
      {showAdmin && isPremium && <ThemeSwitcher />}
      <footer className="w-full py-10 text-center opacity-20 hover:opacity-100 transition-opacity duration-700">
        <p className="text-[9px] uppercase tracking-[0.8em] font-black pointer-events-none select-none">
          Provided by CICADA ACADEMY
        </p>
      </footer>
      <FloatingActions whatsappUrl={identity.whatsapp_url} sheetId={sheetId} />
      {showPortal && <AdminPortal currentSheetId={sheetId} currentThemeId={activeTheme.id} onClose={() => setShowPortal(false)} />}
    </div>
  );
};
