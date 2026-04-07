import React from 'react';
import Image from 'next/image';
import { SocialIcon } from '@/components/SocialIcon';

export const Theme2 = ({ identity, skills, projects, experiences, services, testimonials }: any) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6 md:p-20 font-serif relative overflow-x-hidden transition-opacity duration-1000">
      
      {/* Background radial glow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-[radial-gradient(circle,rgba(0,240,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center">
        
        {/* Profile Circle */}
        {identity.profile_img_url && (
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-10 shadow-[0_0_40px_var(--glow-color)] ring-2 ring-[var(--accent-color)] ring-offset-8 ring-offset-black transition-all duration-500 hover:scale-105">
            <Image src={identity.profile_img_url} alt={identity.user_name} fill className="object-cover" />
          </div>
        )}

        {/* Name & Bio */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-widest text-white mb-6 uppercase drop-shadow-[0_0_15px_var(--glow-color)]">
           {identity.user_name}
        </h1>
        
        <div className="w-24 h-px bg-[var(--accent-color)] mb-10 opacity-50"></div>
        
        <div className="max-w-2xl mb-16 px-4">
           <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-[var(--accent-color)] mb-4 opacity-80 font-bold">Biography</h2>
           <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed font-serif italic mb-8">
              {identity.bio}
           </p>
           <a 
              href={identity.hire_me_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 md:px-12 py-3 bg-transparent border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-black hover:shadow-[0_0_30px_var(--glow-color)] transition-all duration-500 font-bold uppercase tracking-[0.3em] text-[10px]"
            >
              {identity.hire_me_text || 'Contact Me'}
            </a>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 text-left mb-20">
           {/* Experience */}
           {experiences && experiences.length > 0 && (
             <div className="space-y-8">
                <h3 className="text-[10px] font-mono uppercase tracking-[0.5em] text-[var(--accent-color)] border-b border-white/10 pb-4 font-bold">Experience</h3>
                <div className="space-y-10">
                   {experiences.map((exp: any, i: number) => (
                      <div key={i} className="group">
                         <div className="text-[9px] font-mono text-[var(--accent-color)] mb-1 uppercase tracking-widest">{exp.period}</div>
                         <h4 className="text-xl font-bold mb-1 group-hover:text-[var(--accent-color)] transition-colors uppercase">{exp.role}</h4>
                         <div className="text-xs uppercase opacity-40 mb-3 tracking-widest">{exp.company}</div>
                         <p className="text-xs text-[var(--text-muted)] leading-relaxed italic">{exp.description}</p>
                      </div>
                   ))}
                </div>
             </div>
           )}

           {/* Skills */}
           <div className="space-y-8">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.5em] text-[var(--accent-color)] border-b border-white/10 pb-4 font-bold">Expertise</h3>
              <div className="grid grid-cols-1 gap-6">
                {skills.map((skill: any, i: number) => (
                  <div key={i} className="w-full group">
                    <div className="flex justify-between text-[10px] uppercase tracking-widest mb-2 px-1 font-mono">
                       <span className="opacity-50">{skill.icon ? `${skill.icon} ${skill.name}` : skill.name}</span>
                       <span className="text-[var(--accent-color)] font-bold">{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-[2px] bg-white/5 overflow-hidden">
                       <div className="h-full bg-[var(--accent-color)] shadow-[0_0_10px_var(--glow-color)] transition-all duration-1000" style={{width: `${skill.percentage}%`}} />
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Services */}
        {services && services.length > 0 && (
          <div className="w-full mb-20">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--accent-color)] mb-10 text-center font-bold">Services Offered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {services.map((service: any, i: number) => (
                 <div key={i} className="p-8 border border-white/5 hover:border-[var(--accent-color)]/30 transition-all bg-white/[0.02] text-center group">
                   <h4 className="text-lg font-bold mb-4 group-hover:text-[var(--accent-color)] transition-colors uppercase tracking-widest">{service.title}</h4>
                   <p className="text-xs text-[var(--text-muted)] italic leading-relaxed">{service.description}</p>
                 </div>
               ))}
            </div>
          </div>
        )}

        {/* Projects list */}
        <div className="w-full mb-20">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-[var(--accent-color)] mb-12 font-bold">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project: any, i: number) => (
              <a key={i} href={project.link} target="_blank" className="relative group aspect-video border border-white/5 overflow-hidden block">
                 {project.img && <Image src={project.img} alt={project.title} fill className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />}
                 <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 border-b border-[var(--accent-color)] pb-1">{project.title}</span>
                    <span className="text-[8px] uppercase tracking-widest opacity-60 italic">view project</span>
                 </div>
              </a>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        {testimonials && testimonials.length > 0 && (
          <div className="w-full max-w-2xl mb-20">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-[var(--accent-color)] mb-12 font-bold">Client Words</h2>
            <div className="space-y-12">
               {testimonials.map((t: any, i: number) => (
                 <div key={i} className="relative">
                    <div className="text-4xl absolute -top-4 -left-4 opacity-10 font-serif">"</div>
                    <p className="text-lg md:text-xl italic text-[var(--text-muted)] mb-4 font-serif leading-relaxed">
                       {t.quote}
                    </p>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-color)] font-bold">
                       {t.name} <span className="opacity-30 mx-2">//</span> {t.role}
                    </div>
                 </div>
               ))}
            </div>
          </div>
        )}

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-10 mt-10">
           {identity.social_links.map((link: any, i: number) => (
             <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                <SocialIcon platform={link.platform} className="w-4 h-4 text-white/40 group-hover:text-[var(--accent-color)] transition-colors" />
                <span className="font-bold tracking-widest uppercase text-[9px] opacity-40 group-hover:opacity-100 transition-opacity">{link.platform}</span>
             </a>
           ))}
        </div>

      </div>
    </div>
  );
};
