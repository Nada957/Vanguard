export interface ConfigData {
  license_key: string;
  active_theme: number;
  accent_color: string;
  spotlight_enabled: boolean;
}

export interface IdentityData {
  user_name: string;
  bio: string;
  email: string;
  whatsapp_url?: string;
  profile_img_url: string;
  hire_me_text: string;
  hire_me_url: string;
  social_links: { platform: string; url: string }[];
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Project {
  title: string;
  img: string;
  link: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface PortfolioData {
  config: ConfigData;
  identity: IdentityData;
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
  services: Service[];
  testimonials: Testimonial[];
  isPremium: boolean;
  sheetId: string;
}

import { localPortfolioData } from '../data/portfolio';

const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID || 'YOUR_SHEET_ID_HERE';

// Fetch data from any Google Sheet by ID
async function fetchSheetData(sheetId: string) {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&t=${Date.now()}`;
  const response = await fetch(url, { 
    cache: 'no-store',
    next: { revalidate: 0 } 
  }); 
  const text = await response.text();
  
  const jsonStr = text.match(/google\.visualization\.Query\.setResponse\((.*)\);/)?.[1];
  if (!jsonStr) throw new Error(`Failed to parse response from root sheet`);
  
  const data = JSON.parse(jsonStr);
  const rows = data.table.rows;
  return rows.map((row: any) => row.c.map((cell: any) => cell?.v));
}

export async function getPortfolioData(sheetIdOverride?: string): Promise<PortfolioData> {
  const finalSheetId = sheetIdOverride || SHEET_ID;

  // If the sheet ID hasn't been set, bypass fetching to avoid errors
  if (finalSheetId === 'YOUR_SHEET_ID_HERE' || !finalSheetId) {
    const isPremium = localPortfolioData.config.license_key === 'PREMIUM_10X_UNLOCK';
    return { 
      ...localPortfolioData, 
      isPremium, 
      sheetId: finalSheetId || '',
      experiences: [],
      services: [],
      testimonials: []
    };
  }

  try {
    const rows = await fetchSheetData(finalSheetId);

    const config = { active_theme: 1, accent_color: '#00ffff', spotlight_enabled: true, license_key: '' };
    const identity = { 
      user_name: 'Your Name', 
      bio: '', 
      email: '', 
      whatsapp_url: '',
      profile_img_url: '', 
      hire_me_text: 'Hire Me', 
      hire_me_url: '', 
      social_links: [] as any[] 
    };
    const skills = [] as any[];
    const projects = [] as any[];
    const experiences = [] as any[];
    const services = [] as any[];
    const testimonials = [] as any[];

    // Parse the single flattened list
    // Row format: [Section, Key, Value 1, Value 2]
    for (const row of rows) {
      if (!row || !row[0]) continue;
      const s = String(row[0] || '').trim().toLowerCase();
      const k = String(row[1] || '').trim().toLowerCase();
      const val1 = row[2];
      const val2 = row[3];

      // Robust Section Detection (Fuzzy Matching)
      const isConfig = s.includes('config');
      const isIdentity = s.includes('identity') || s.includes('identities') || s.includes('info') || s.includes('user');
      const isSocial = s.includes('social') || s.includes('link') || s.includes('contact');
      const isSkill = s.includes('skill');
      const isProject = s.includes('project');
      const isExperience = s.includes('experience') || s.includes('work') || s.includes('history');
      const isService = s.includes('service') || s.includes('offer');
      const isTestimonial = s.includes('testimonial') || s.includes('review') || s.includes('feedback');

      if (isConfig) {
        if (k.includes('theme')) config.active_theme = Math.min(10, Math.max(1, Number(val1) || 1));
        if (k.includes('color')) config.accent_color = String(val1);
        if (k.includes('spotlight')) config.spotlight_enabled = val1 === true || val1 === 'TRUE' || val1 === 'true' || val1 === 'True';
        if (k.includes('license')) config.license_key = String(val1 || '').trim().toUpperCase();
      }
      else if (isIdentity) {
        if (k.includes('name')) identity.user_name = String(val1);
        if (k.includes('bio')) identity.bio = String(val1);
        if (k.includes('email')) identity.email = String(val1);
        if (k.includes('img') || k.includes('image') || k.includes('profile')) identity.profile_img_url = String(val1 || '');
        if (k.includes('hire') || k.includes('button')) {
           const valStr = String(val1 || '').trim();
           // If it's a URL, use a friendly default if text is not provided
           if (valStr.startsWith('http')) {
              identity.hire_me_url = valStr;
              identity.hire_me_text = String(val2 || 'Hire Me').trim();
           } else {
              identity.hire_me_text = valStr || 'Hire Me';
           }
           
           if (/^\+?[\d\s-]{8,}$/.test(valStr)) {
              const cleanPhone = valStr.replace(/\D/g, '');
              identity.hire_me_url = `https://wa.me/${cleanPhone}`;
           } else if (valStr.includes('wa.me')) {
              identity.hire_me_url = valStr.startsWith('http') ? valStr : `https://${valStr}`;
           }
        }
        if (k.includes('whatsapp') || k.includes('phone')) {
           const valStr = String(val1 || '').trim();
           const cleanPhone = valStr.replace(/\D/g, '');
           identity.whatsapp_url = cleanPhone.length > 5 ? `https://wa.me/${cleanPhone}` : valStr;
        }
      }
      else if (isSocial) {
        if (k && val1) identity.social_links.push({ platform: k, url: String(val1) });
      }
      else if (isSkill) {
        if (k && val1) skills.push({ name: k, percentage: Number(val1) || 0 });
      }
      else if (isProject) {
        if (k && val1) projects.push({ title: k, img: String(val1), link: String(val2 || '#') });
      }
      else if (isExperience) {
        if (k && val1) experiences.push({ role: k, company: String(val1), period: String(val2 || ''), description: String(row[4] || '') });
      }
      else if (isService) {
        if (k && val1) services.push({ title: k, description: String(val1), icon: String(val2 || '') });
      }
      else if (isTestimonial) {
        if (k && val1) testimonials.push({ name: k, role: String(val1), quote: String(val2 || '') });
      }
    }

    // Final post-processing for identity
    if (!identity.hire_me_url) {
      identity.hire_me_url = `mailto:${identity.email}`;
    }

    const isPremium = config.license_key === 'PREMIUM_10X_UNLOCK';

    return { config, identity, skills, projects, experiences, services, testimonials, isPremium, sheetId: finalSheetId };
  } catch (error) {
    console.error(`Error fetching/parsing sheet ${finalSheetId}:`, error);
    // Return default data gracefully on error
    const isPremium = localPortfolioData.config.license_key === 'PREMIUM_10X_UNLOCK';
    return { 
      ...localPortfolioData, 
      isPremium, 
      sheetId: finalSheetId || '',
      experiences: [],
      services: [],
      testimonials: []
    };
  }
}
