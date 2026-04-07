import React from 'react';
import Image from 'next/image';
import { SocialIcon } from '@/components/SocialIcon';

export const Theme8 = ({ identity, skills, projects, experiences, services, testimonials }: any) => {
  return (
    <div className="min-h-screen bg-black text-[#FDE68A] p-4 md:p-14 font-serif relative transition-opacity duration-1000 overflow-x-hidden">
      
      {/* Background elegant gold grain/stars */}
      <div className="fixed inset-0 z-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'radial-gradient(1px 1px at 20px 30px, var(--accent-color), transparent), radial-gradient(1px 1px at 40px 70px, var(--accent-color), transparent)', backgroundSize: '100px 100px' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-14 items-stretch font-serif">
        
        {/* Left Side: Massive Hero Image / Info */}
        <div className="md:w-[45%] flex flex-col items-center md:items-start text-center md:text-left justify-center relative">
           
           {/* Decorative corner element */}
           <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-[var(--accent-color)] opacity-40"></div>

           {identity.profile_img_url && (
              <div className="relative w-64 h-80 md:w-80 md:h-[32rem] overflow-hidden border border-[var(--card-border)] p-4 shadow-[0_0_50px_var(--shadow-color)] group mb-10 mt-10">
                <Image src={identity.profile_img_url} alt={identity.user_name} fill className="object-cover grayscale brightness-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
                <div className="absolute inset-0 border-[20px] border-black/80 transition-all duration-1000 group-hover:inset-4 group-hover:border-[var(--accent-color)]/20"></div>
              </div>
           )}

           <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6 drop-shadow-2xl leading-none italic">{identity.user_name}</h1>
           <p className="text-[var(--text-muted)] text-lg md:text-2xl font-medium tracking-wide mb-10 max-w-xl italic opacity-80 leading-relaxed border-l-4 border-[var(--accent-color)] pl-6">
              "{identity.bio}"
           </p>
           
           <div className="flex flex-col md:flex-row gap-10 mt-6 items-center">
              <a 
                href={identity.hire_me_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-16 py-6 bg-[var(--accent-color)] text-black font-black uppercase text-xs tracking-[0.5em] hover:scale-110 hover:bg-white transition-all shadow-[0_15px_60px_rgba(251,191,36,0.3)]"
              >
                {identity.hire_me_text || 'INITIALIZE_COMM'}
              </a>
              <div className="flex gap-8">
                {identity.social_links.map((link: any, i: number) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-white transition-all group">
                     <SocialIcon platform={link.platform} className="w-5 h-5 group-hover:scale-125 transition-transform" />
                  </a>
                ))}
              </div>
           </div>
        </div>

        {/* Right Side: Professional Depth Bento */}
        <div className="md:w-[55%] flex flex-col gap-12 py-10">
           
           {/* Experience Section */}
           {experiences && experiences.length > 0 && (
             <div className="w-full flex flex-col gap-8 bg-white/[0.02] p-10 border border-[var(--card-border)] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl">EXP</div>
                <h3 className="text-xs font-black uppercase tracking-[0.5em] text-[var(--accent-color)] mb-4 border-b border-[var(--card-border)] pb-4">Professional_Lineage</h3>
                <div className="space-y-10">
                   {experiences.map((exp: any, i: number) => (
                     <div key={i} className="flex flex-col md:flex-row gap-6 group/exp">
                        <div className="text-[10px] font-black uppercase tracking-widest text-[var(--accent-color)] h-fit opacity-40">{exp.period}</div>
                        <div className="flex-1">
                           <h4 className="text-2xl font-black text-white italic mb-1 uppercase tracking-tighter group-hover/exp:text-[var(--accent-color)] transition-colors">{exp.role}</h4>
                           <div className="text-[10px] font-black opacity-30 uppercase mb-4 tracking-widest">{exp.company}</div>
                           <p className="text-sm text-[var(--text-muted)] italic leading-relaxed">{exp.description}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
           )}

           {/* Services Grid */}
           {services && services.length > 0 && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--card-border)] p-px">
                {services.map((s: any, i: number) => (
                  <div key={i} className="bg-black/90 p-10 hover:bg-[#FDE68A]/10 transition-all border border-[var(--card-border)] group/s">
                     <h4 className="text-xs font-black uppercase tracking-[0.4em] text-[var(--accent-color)] mb-4">{s.title}</h4>
                     <p className="text-[11px] text-[var(--text-muted)] leading-relaxed italic opacity-60 group-hover/s:opacity-100 transition-opacity">{s.description}</p>
                  </div>
                ))}
             </div>
           )}

           {/* Skills Quadrant */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--card-border)] p-px shadow-2xl">
              {skills.map((skill: any, i: number) => (
                <div key={i} className="bg-black/90 p-10 flex flex-col gap-4 border border-[var(--card-border)] hover:bg-[#FDE68A]/5 transition-all group/skill">
                   <h3 className="text-[10px] uppercase font-black tracking-widest opacity-40 italic group-hover/skill:opacity-100 transition-opacity">{skill.icon ? `${skill.icon} ${skill.name}` : skill.name}</h3>
                   <div className="flex items-baseline gap-4">
                      <span className="text-6xl font-black text-white drop-shadow-[0_0_15px_var(--glow-color)]">{skill.percentage}%</span>
                   </div>
                   <div className="w-full h-1 bg-white/5 relative overflow-hidden flex items-center">
                      <div className="h-full bg-[var(--accent-color)] shadow-[0_0_20px_var(--glow-color)] transition-all-1000" style={{width: `${skill.percentage}%`}} />
                   </div>
                </div>
              ))}
           </div>

           {/* Projects Horizontal Row */}
           <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.5em] text-[var(--accent-color)] ml-4">Selected_Portfolio_Array</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 {projects.map((project: any, i: number) => (
                   <a key={i} href={project.link} target="_blank" className="relative group overflow-hidden border border-[var(--card-border)] aspect-video shadow-2xl bg-black">
                      {project.img && <Image src={project.img} alt={project.title} fill className="object-cover opacity-40 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent p-6 flex flex-col justify-end">
                         <span className="text-[var(--accent-color)] text-[10px] font-black uppercase tracking-widest mb-1 block opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 transition-all">PROJECT_0{i+1} / STATUS: VERIFIED</span>
                         <h4 className="text-2xl font-black text-white uppercase tracking-tighter drop-shadow-lg italic">{project.title}</h4>
                      </div>
                   </a>
                 ))}
              </div>
           </div>

           {/* Testimonials */}
           {testimonials && testimonials.length > 0 && (
             <div className="w-full bg-white/[0.02] border-4 border-double border-[var(--card-border)] p-12 italic text-center space-y-12 shadow-2xl">
                <h3 className="text-[10px] uppercase font-black tracking-[0.8em] text-[var(--accent-color)] opacity-40">Client_Authenticated_Testimony</h3>
                {testimonials.map((t: any, i: number) => (
                  <div key={i} className="group/t">
                     <p className="text-lg md:text-xl text-white font-medium leading-relaxed mb-6 italic opacity-80 group-hover/t:opacity-100 transition-all">"{t.quote}"</p>
                     <div className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-color)]">
                        {t.name} <span className="opacity-20 mx-4">||</span> {t.role}
                     </div>
                  </div>
                ))}
             </div>
           )}

        </div>

      </div>
    </div>
  );
};
