// This is the local data fallback. 
// If you do not want to use Google Sheets, just edit this file!

export const localPortfolioData = {
  config: {
    // If a user buys premium, give them this code: "PREMIUM_10X_UNLOCK"
    license_key: '', 
    active_theme: 1, // Only applies if license_key is "PREMIUM_10X_UNLOCK"
    accent_color: '#FF0000',
    spotlight_enabled: true,
  },
  identity: {
    user_name: 'Your Name',
    bio: 'Full-Stack Developer | Security Enthusiast | UI Designer',
    email: 'hello@example.com', // Added for the Hire Me button
    profile_img_url: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=250&auto=format&fit=crop',
    hire_me_text: 'Hire Me',
    hire_me_url: 'mailto:hello@example.com',
    social_links: [
      { platform: 'GitHub', url: 'https://github.com' },
      { platform: 'LinkedIn', url: 'https://linkedin.com' },
      { platform: 'WhatsApp', url: 'https://wa.me/1234567890' },
    ],
  },
  skills: [
    { name: 'React / Next.js', percentage: 90 },
    { name: 'TypeScript', percentage: 85 },
    { name: 'Tailwind CSS', percentage: 95 },
    { name: 'Node.js', percentage: 70 },
  ],
  projects: [
    {
      title: 'Project Alpha',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop',
      link: 'https://example.com/project-alpha',
    },
    {
      title: 'Neon Dashboard',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
      link: 'https://example.com/neon-dashboard',
    },
    {
      title: 'E-Commerce Platform',
      img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop',
      link: 'https://example.com/ecommerce',
    },
  ],
};
