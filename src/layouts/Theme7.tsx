import React from 'react';
import Image from 'next/image';
import { SocialIcon } from '@/components/SocialIcon';

export const Theme7 = ({ identity, skills, projects, experiences, services, testimonials }: any) => {
  return (
    <div className="min-h-screen bg-black text-white p-3 md:p-8 lg:p-14 font-mono relative transition-opacity duration-1000 flex flex-col items-center overflow-x-hidden">
      
      {/* Top spotlight effect */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-[radial-gradient(circle_at_50%_0%,var(--accent-color)_0%,transparent_70%)] opacity-[0.15] pointer-events-none"></div>

      <div className="relative z-10 w-full px-2 md:px-4 max-w-full lg:max-w-5xl flex flex-col gap-6 md:gap-8">
        
        {/* Top Centered Status Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-2 md:gap-0 px-4 md:px-10 py-4 md:py-6 border-2 border-[var(--card-border)] bg-black/60 backdrop-blur-xl shadow-[0_0_30px_var(--shadow-color)] group hover:border-[var(--accent-color)]/40 transition-colors">
           <span className="text-[var(--accent-color)] font-black text-[9px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase">ID_DASHBOARD // {identity.user_name}</span>
           <div className="flex gap-4 md:gap-6 items-center">
              <div className="flex gap-1.5">
                 <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[var(--accent-color)] animate-pulse"></div>
                 <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[var(--accent-color)]/40"></div>
                 <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[var(--accent-color)]/20"></div>
              </div>
              <span className="text-[9px] md:text-[10px] opacity-40 uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">STATUS: COMPLIANT</span>
           </div>
        </div>

        {/* Huge Profile Card with Spotlight */}
        <div className="w-full border-4 border-[var(--card-border)] bg-black/80 shadow-[0_0_100px_var(--shadow-color)] relative flex flex-col items-center justify-center p-6 md:p-12 lg:p-20 overflow-hidden group hover:border-[var(--accent-color)]/30 transition-all duration-700">
           
           {/* Spotlight inner glow */}
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--accent-color)_0%,transparent_60%)] opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity duration-1000"></div>

           {identity.profile_img_url && (
              <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden mb-6 md:mb-12 shadow-[0_0_60px_var(--glow-color)] ring-4 md:ring-8 ring-[var(--accent-color)] group-hover:scale-105 transition-all duration-700 group-hover:ring-[var(--accent-color)]/80">
                <Image src={identity.profile_img_url} alt={identity.user_name} fill className="object-cover grayscale brightness-125 group-hover:grayscale-0 transition-all duration-700" />
              </div>
           )}
           <h1 className="text-2xl md:text-4xl lg:text-8xl font-black text-white italic tracking-tighter uppercase mb-4 md:mb-8 drop-shadow-[0_0_30px_var(--glow-color)] text-center">{identity.user_name}</h1>
           <p className="text-[var(--text-muted)] text-base md:text-lg lg:text-xl text-center max-w-3xl transition-all font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase opacity-60 group-hover:opacity-100 italic">{identity.bio}"</p>
           
           <a href={identity.hire_me_url} target="_blank" rel="noopener noreferrer" className="mt-4 md:mt-14 px-4 md:px-16 py-3 md:py-5 bg-[var(--accent-color)] text-black font-black uppercase text-sm tracking-[0.4em] hover:scale-110 hover:shadow-[0_0_50px_var(--glow-color)] transition-all shadow-xl">{identity.hire_me_text || 'INITIALIZE_COMM'}</a>
        </div>

        {/* Experience Section */}
        {experiences && experiences.length > 0 && (
          <div className="w-full border-4 border-[var(--card-border)] bg-black/80 p-12 shadow-[0_0_60px_var(--shadow-color)] hover:border-[var(--accent-color)]/20 transition-all">
             <h3 className="text-xs font-black uppercase tracking-[0.6em] text-[var(--accent-color)] mb-14 flex items-center gap-4">
                <span className="w-6 h-px bg-[var(--accent-color)]"></span> SERVICE_HISTORY_DATA
             </h3>
             <div className="space-y-12">
                {experiences.map((exp: any, i: number) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-6 group/exp">
                     <div className="text-[var(--accent-color)] font-bold text-xs tracking-widest opacity-40 group-hover/exp:opacity-100 transition-opacity uppercase">{exp.period}</div>
                     <div className="md:col-span-3 border-l-2 border-[var(--card-border)] pl-8 group-hover/exp:border-[var(--accent-color)] transition-colors">
                        <h4 className="text-2xl font-black uppercase italic mb-2 tracking-tight group-hover/exp:text-[var(--accent-color)] transition-colors">{exp.role}</h4>
                        <div className="text-xs font-bold opacity-30 uppercase mb-4 tracking-[0.2em]">{exp.company}</div>
                        <p className="text-[var(--text-muted)] text-sm leading-relaxed uppercase tracking-wider font-bold opacity-60 group-hover/exp:opacity-100 transition-opacity">{exp.description}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        )}

        {/* Services & Capabilities Grid */}
        {services && services.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {services.map((s: any, i: number) => (
               <div key={i} className="border-4 border-[var(--card-border)] bg-black/80 p-10 shadow-[0_0_40px_var(--shadow-color)] hover:border-[var(--accent-color)]/40 hover:bg-[var(--accent-color)]/5 transition-all text-center group/s">
                  <h4 className="text-lg font-black uppercase tracking-widest text-white mb-6 group-hover/s:text-[var(--accent-color)] transition-colors">{s.title}</h4>
                  <div className="w-8 h-1 bg-[var(--accent-color)] mx-auto mb-6 opacity-30 group-hover/s:opacity-100 group-hover/s:w-16 transition-all"></div>
                  <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest leading-loose font-bold">{s.description}</p>
               </div>
             ))}
          </div>
        )}

        {/* Technical Stack Overview */}
        <div className="w-full border-4 border-[var(--card-border)] bg-black/80 p-12 shadow-[0_0_60px_var(--shadow-color)]">
           <h3 className="text-xs font-black uppercase tracking-[0.6em] text-[var(--accent-color)] mb-14 flex items-center gap-4">
              <span className="w-6 h-px bg-[var(--accent-color)]"></span> CAPACITY_INDEX
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
              {skills.map((skill: any, i: number) => (
                <div key={i} className="group/skill">
                   <div className="flex justify-between text-[11px] font-black uppercase tracking-[0.3em] mb-4 group-hover/skill:text-[var(--accent-color)] transition-colors">
                      <span>{skill.icon ? `${skill.icon} ${skill.name}` : skill.name}</span>
                      <span className="opacity-40">{skill.percentage}%</span>
                   </div>
                   <div className="h-6 border-2 border-[var(--card-border)] p-1 bg-black overflow-hidden relative group-hover/skill:border-[var(--accent-color)]/40 transition-colors">
                      <div className="h-full bg-[var(--accent-color)] shadow-[0_0_30px_var(--glow-color)] transition-all duration-1000 ease-out" style={{width: `${skill.percentage}%`}} />
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Verified Operations (Projects) */}
        <div className="w-full border-4 border-[var(--card-border)] bg-black/80 p-12 shadow-[0_0_60px_var(--shadow-color)]">
           <h3 className="text-xs font-black uppercase tracking-[0.6em] text-[var(--accent-color)] mb-14 flex items-center gap-4">
              <span className="w-6 h-px bg-[var(--accent-color)]"></span> VERIFIED_PROJECT_ARRAY
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {projects.map((project: any, i: number) => (
                <a key={i} href={project.link} target="_blank" className="flex flex-col border-2 border-[var(--card-border)] hover:border-[var(--accent-color)] transition-all p-4 group/p">
                   <div className="relative aspect-video border-2 border-[var(--card-border)] group-hover/p:border-[var(--accent-color)] transition-all overflow-hidden bg-black mb-6">
                      {project.img && <Image src={project.img} alt={project.title} fill className="object-cover opacity-40 group-hover/p:opacity-100 grayscale transition-all duration-700 group-hover/p:scale-105" />}
                   </div>
                   <div className="flex justify-between items-center px-2">
                      <div className="flex flex-col">
                         <span className="text-[var(--accent-color)] text-[10px] font-bold tracking-[0.4em] uppercase mb-1 opacity-40 group-hover/p:opacity-100 transition-opacity">OPERATION_0{i+1}</span>
                         <h4 className="text-lg font-black uppercase tracking-widest">{project.title}</h4>
                      </div>
                      <span className="text-[var(--accent-color)] opacity-0 group-hover/p:opacity-100 transition-opacity font-black">{">>"}</span>
                   </div>
                </a>
              ))}
           </div>
        </div>

        {/* Testimonials Transmissions */}
        {testimonials && testimonials.length > 0 && (
          <div className="w-full border-4 border-[var(--card-border)] bg-black/80 p-12 shadow-[0_0_60px_var(--shadow-color)]">
             <h3 className="text-xs font-black uppercase tracking-[0.6em] text-[var(--accent-color)] mb-14 flex items-center gap-4 text-center justify-center">
                CLIENT_AUTHENTICATION_FEEDBACK
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {testimonials.map((t: any, i: number) => (
                  <div key={i} className="relative p-10 bg-white/[0.02] border border-white/5 hover:border-[var(--accent-color)] transition-all group/t">
                     <p className="text-sm md:text-base text-[var(--text-muted)] italic font-bold tracking-widest uppercase mb-8 leading-loose opacity-60 group-hover/t:opacity-100 transition-opacity">"{t.quote}"</p>
                     <div className="text-[11px] font-black text-[var(--accent-color)] border-l-4 border-[var(--accent-color)] pl-4 tracking-[0.2em] uppercase">
                        {t.name} // SOURCE: {t.role}
                     </div>
                  </div>
                ))}
             </div>
          </div>
        )}

        {/* Footer Connections */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center bg-black/80 border-4 border-[var(--card-border)] p-10 shadow-[0_0_50px_var(--shadow-color)] gap-10 hover:border-[var(--accent-color)]/20 transition-all">
           <span className="text-xs font-black opacity-30 uppercase tracking-[0.8em]">SECURE_UPLINK_ESTABLISHED</span>
           <div className="flex flex-wrap justify-center gap-14">
              {identity.social_links.map((link: any, i: number) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.4em] hover:text-[var(--accent-color)] hover:scale-110 transition-all">
                   <SocialIcon platform={link.platform} className="w-5 h-5 shadow-[0_0_10px_var(--glow-color)]" />
                   <span>{link.platform}</span>
                </a>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};
