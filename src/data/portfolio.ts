// This is the local data fallback with user data integrated.
// Sheet parsing works identically - copy table to Google Sheets.
// Theme set to 1 as requested, license unchanged (PREMIUM_10X_UNLOCK).
// Run: npm run dev → localhost:3000 to test.

export const localPortfolioData = {
  config: {
    // Premium unlocked (do not change as requested)
    license_key: 'PREMIUM_10X_UNLOCK', 
    active_theme: 1, // Set to 1 "as it was"
    accent_color: '#FF0000', // User red accent
    spotlight_enabled: true, // TRUE
    contact_email: '',
  },

  identity: {
    user_name: 'Your name',
    bio: 'Full-Stack Developer | Security Enthusiast',
    about: `I am a Full-Stack Web Developer with a deep interest in Cybersecurity. I specialize in building responsive, high-performance web applications using React, Tailwind CSS, and Node.js. Beyond building interfaces, I'm passionate about understanding 'Red Team' tactics to build more secure and resilient digital environments. I love turning complex problems into clean, functional code.`,
    email: 'hello@example.com',
    profile_img_url: 'https://i.postimg.cc/HxBYyHP9/Cobra.webp',
    hire_me_text: 'Hire Me',
    hire_me_url: 'https://github.com/yourname',
    social_links: [
      { platform: 'GitHub', url: 'https://github.com/yourusername' },
      { platform: 'TryHackMe', url: 'https://tryhackme.com/p/yourusername' },
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/yourname' },
      { platform: 'WhatsApp', url: 'https://wa.me/201234567890' }, // From user phone
    ],
  },
  skills: [
    { name: 'React / Next.js', percentage: 90, icon: '⚛️' },
    { name: 'TypeScript', percentage: 85, icon: '🔷' },
    { name: 'Tailwind CSS', percentage: 95, icon: '🌬️' },
  ], // User data (duplicates removed)
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
  ], // User data (duplicates/empties removed)
};
