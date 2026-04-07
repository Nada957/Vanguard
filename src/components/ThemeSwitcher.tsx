'use client';

import { useTheme } from '@/components/ThemeProvider';
import { themes } from '@/styles/themes';

export const ThemeSwitcher = () => {
  const { activeTheme, setThemeById } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center bg-[var(--card-bg)] border border-[var(--card-border)] rounded-full px-4 py-2 shadow-xl backdrop-blur-md">
      <span className="text-xs font-mono mr-3 text-[var(--text-muted)]">THEME:</span>
      <select
        value={activeTheme.id}
        onChange={(e) => setThemeById(Number(e.target.value))}
        className="bg-transparent text-sm font-semibold text-[var(--accent-color)] outline-none cursor-pointer appearance-none pr-4"
      >
        {Object.values(themes).map((theme) => (
          <option key={theme.id} value={theme.id} className="bg-[#000000] text-white">
            {theme.id} - {theme.name}
          </option>
        ))}
      </select>
    </div>
  );
};
