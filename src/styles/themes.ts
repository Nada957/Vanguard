export interface ThemeConfig {
  id: number;
  name: string;
  category: 'Cyber' | 'Glass' | 'Minimal';
  styles: {
    '--primary-bg': string;
    '--accent-color': string;
    '--secondary-color': string;
    '--text-main': string;
    '--text-muted': string;
    '--glow-color': string;
    '--font-main': string;
    '--font-header': string;
    '--card-bg': string;
    '--card-border': string;
    '--glow-intensity': string;
    '--blur-intensity': string;
    '--shadow-color': string;
  };
}

export const themes: Record<number, ThemeConfig> = {
  // Theme 1: Red Hacker (Photo 8)
  1: {
    id: 1,
    name: 'Red System Grid',
    category: 'Cyber',
    styles: {
      '--primary-bg': '#000000',
      '--accent-color': '#FF3131',
      '--secondary-color': '#1a0000',
      '--text-main': '#FFFFFF',
      '--text-muted': '#888888',
      '--glow-color': 'rgba(255, 49, 49, 0.4)',
      '--font-main': 'var(--font-mono)',
      '--font-header': 'var(--font-mono)',
      '--card-bg': '#050505',
      '--card-border': '#FF3131',
      '--glow-intensity': '10px',
      '--blur-intensity': '0px',
      '--shadow-color': 'rgba(255, 0, 0, 0.2)',
    },
  },
  // Theme 2: Cyan Neon Centered (Photo 1)
  2: {
    id: 2,
    name: 'Cyan Pulse',
    category: 'Cyber',
    styles: {
      '--primary-bg': '#000000',
      '--accent-color': '#00F0FF',
      '--secondary-color': '#001A1B',
      '--text-main': '#FFFFFF',
      '--text-muted': '#A1A1AA',
      '--glow-color': 'rgba(0, 240, 255, 0.6)',
      '--font-main': 'var(--font-serif)',
      '--font-header': 'var(--font-serif)',
      '--card-bg': '#000000',
      '--card-border': '#00F0FF33',
      '--glow-intensity': '20px',
      '--blur-intensity': '0px',
      '--shadow-color': 'rgba(0, 240, 255, 0.2)',
    },
  },
  // Theme 3: White Neon Centered (Photo 2)
  3: {
    id: 3,
    name: 'White Ghost',
    category: 'Cyber',
    styles: {
      '--primary-bg': '#000000',
      '--accent-color': '#FFFFFF',
      '--secondary-color': '#111111',
      '--text-main': '#FFFFFF',
      '--text-muted': '#71717A',
      '--glow-color': 'rgba(255, 255, 255, 0.5)',
      '--font-main': 'var(--font-mono)',
      '--font-header': 'var(--font-mono)',
      '--card-bg': '#000000',
      '--card-border': '#FFFFFF4D',
      '--glow-intensity': '15px',
      '--blur-intensity': '0px',
      '--shadow-color': 'rgba(255, 255, 255, 0.1)',
    },
  },
  // Theme 4: Pink Glass Bento (Photo 3)
  4: {
    id: 4,
    name: 'Pink Glassmorphism',
    category: 'Glass',
    styles: {
      '--primary-bg': '#020617',
      '--accent-color': '#F472B6',
      '--secondary-color': '#312E81',
      '--text-main': '#FDF2F8',
      '--text-muted': '#9CA3AF',
      '--glow-color': 'rgba(244, 114, 182, 0.3)',
      '--font-main': 'var(--font-sans)',
      '--font-header': 'var(--font-mono)',
      '--card-bg': 'rgba(255, 255, 255, 0.05)',
      '--card-border': 'rgba(244, 114, 182, 0.2)',
      '--glow-intensity': '0px',
      '--blur-intensity': '12px',
      '--shadow-color': 'rgba(244, 114, 182, 0.1)',
    },
  },
  // Theme 5: Creamy Corporate (Photo 4)
  5: {
    id: 5,
    name: 'Creamy Pink',
    category: 'Minimal',
    styles: {
      '--primary-bg': '#FFFAF0',
      '--accent-color': '#FB7185',
      '--secondary-color': '#FFE4E1',
      '--text-main': '#1F2937',
      '--text-muted': '#6B7280',
      '--glow-color': 'rgba(251, 113, 133, 0.2)',
      '--font-main': 'var(--font-sans)',
      '--font-header': 'var(--font-serif)',
      '--card-bg': 'rgba(255, 255, 255, 0.8)',
      '--card-border': 'rgba(251, 113, 133, 0.1)',
      '--glow-intensity': '0px',
      '--blur-intensity': '5px',
      '--shadow-color': 'rgba(0, 0, 0, 0.05)',
    },
  },
  // Theme 6: Teal Cyber Grid (Photo 5)
  6: {
    id: 6,
    name: 'Teal Dashboard',
    category: 'Cyber',
    styles: {
      '--primary-bg': '#020617',
      '--accent-color': '#2DD4BF',
      '--secondary-color': '#115E59',
      '--text-main': '#F0FDFA',
      '--text-muted': '#94A3B8',
      '--glow-color': 'rgba(45, 212, 191, 0.4)',
      '--font-main': 'var(--font-mono)',
      '--font-header': 'var(--font-mono)',
      '--card-bg': '#000000',
      '--card-border': '#2DD4BF4D',
      '--glow-intensity': '10px',
      '--blur-intensity': '0px',
      '--shadow-color': 'rgba(45, 212, 191, 0.2)',
    },
  },
  // Theme 7: Orange-Red Spotlight (Photo 6)
  7: {
    id: 7,
    name: 'Flame Spotlight',
    category: 'Cyber',
    styles: {
      '--primary-bg': '#000000',
      '--accent-color': '#FB923C',
      '--secondary-color': '#431407',
      '--text-main': '#FFFFFF',
      '--text-muted': '#9CA3AF',
      '--glow-color': 'rgba(251, 146, 60, 0.6)',
      '--font-main': 'var(--font-mono)',
      '--font-header': 'var(--font-mono)',
      '--card-bg': '#050505',
      '--card-border': '#FB923C99',
      '--glow-intensity': '25px',
      '--blur-intensity': '0px',
      '--shadow-color': 'rgba(251, 146, 60, 0.3)',
    },
  },
  // Theme 8: Gold Sleek (Photo 7)
  8: {
    id: 8,
    name: 'Gold Executive',
    category: 'Minimal',
    styles: {
      '--primary-bg': '#000000',
      '--accent-color': '#FBBF24',
      '--secondary-color': '#1C1917',
      '--text-main': '#FDE68A',
      '--text-muted': '#78716C',
      '--glow-color': 'rgba(251, 191, 36, 0.3)',
      '--font-main': 'var(--font-serif)',
      '--font-header': 'var(--font-serif)',
      '--card-bg': '#0c0a09',
      '--card-border': '#FBBF2433',
      '--glow-intensity': '10px',
      '--blur-intensity': '0px',
      '--shadow-color': 'rgba(251, 191, 36, 0.1)',
    },
  },
  // Theme 9: Pastel Soft Gradient (Photo 9)
  9: {
    id: 9,
    name: 'Pastel Dream',
    category: 'Glass',
    styles: {
      '--primary-bg': '#F8FAFC',
      '--accent-color': '#818CF8',
      '--secondary-color': '#E0E7FF',
      '--text-main': '#1E293B',
      '--text-muted': '#64748B',
      '--glow-color': 'rgba(129, 140, 248, 0.3)',
      '--font-main': 'var(--font-sans)',
      '--font-header': 'var(--font-sans)',
      '--card-bg': 'rgba(255, 255, 255, 0.7)',
      '--card-border': 'rgba(255, 255, 255, 0.2)',
      '--glow-intensity': '0px',
      '--blur-intensity': '20px',
      '--shadow-color': 'rgba(0, 0, 0, 0.05)',
    },
  },
  // Theme 10: Deep Blue Bonus
  10: {
    id: 10,
    name: 'Midnight Premium',
    category: 'Minimal',
    styles: {
      '--primary-bg': '#020617',
      '--accent-color': '#38BDF8',
      '--secondary-color': '#0F172A',
      '--text-main': '#F8FAFC',
      '--text-muted': '#94A3B8',
      '--glow-color': 'rgba(56, 189, 248, 0.4)',
      '--font-main': 'var(--font-sans)',
      '--font-header': 'var(--font-sans)',
      '--card-bg': '#0F172A',
      '--card-border': '#1E293B',
      '--glow-intensity': '10px',
      '--blur-intensity': '0px',
      '--shadow-color': 'rgba(0, 0, 0, 0.4)',
    },
  },
};

