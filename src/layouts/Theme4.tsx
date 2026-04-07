import React from 'react';
import Image from 'next/image';
import { SocialIcon } from '@/components/SocialIcon';

export const Theme4 = ({ identity, skills, projects, experiences, services, testimonials }: any) => {
  return (
    <div className="min-h-screen bg-[#020617] text-white p-3 md:p-8 lg:p-14 font-sans relative flex flex-col items-center transition-opacity duration-1000 overflow-x-hidden">
      
      {/* Dynamic blurred pink circles bg */}
      <div className="fixed top-1/4 right-1/4 w-[500px] h-[500px] bg-[#F472B6] rounded-full filter blur-[150px] opacity-[0.1] -z-10 animate-pulse"></div>
      <div className="fixed bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#312E81] rounded-full filter blur-[120px] opacity-[0.15] -z-10 animate-pulse transition-all duration-500 delay-500"></div>

      <div className="relative z-10 w-full px-2 md:px-4 max-w-full lg:max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        
        {/* Profile Bento Block */}
        <div className="md:col-span-12 bg-white/5 backdrop-blur-2xl border border-white/10 p-6 md:p-10 lg:p-14 rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col md:flex-row items-center gap-6 md:gap-12 group transition-all duration-700 hover:border-[#F472B6]/30 mb-4 md:mb-6">
          {identity.profile_img_url && (
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] ring-1 ring-white/20 transition-all duration-700 group-hover:scale-105 group-hover:ring-[#F472B6]/40">
              <Image src={identity.profile_img_url} alt={identity.user_name} fill className="object-cover" />
            </div>
          )}
          <div className="text-center md:text-left flex-1">
             <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold bg-gradient-to-br from-white via-white to-pink-200 bg-clip-text text-transparent mb-4 md:mb-6 tracking-tight drop-shadow-xl">{identity.user_name}</h1>
             <p className="text-[#9CA3AF] text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl transition-all duration-700 opacity-80 group-hover:opacity-100 italic">{identity.bio}</p>
             <a 
              href={identity.hire_me_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block px-4 md:px-12 py-4 bg-[#F472B6] text-white font-bold rounded-2xl shadow-[0_15px_30px_rgba(244,114,182,0.3)] hover:scale-105 transition-transform hover:shadow-[0_20px_40px_rgba(244,114,182,0.4)] uppercase tracking-widest text-xs"
             >
                {identity.hire_me_text || 'INITIALIZE_CONTACT'}
             </a>
          </div>
        </div>

        {/* Experience Bento Block */}
        {experiences && experiences.length > 0 && (
          <div className="md:col-span-8 bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[3rem] shadow-xl hover:border-[#F472B6]/20 transition-all">
             <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#F472B6] mb-8">Professional_Path</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {experiences.map((exp: any, i: number) => (
                  <div key={i} className="relative pl-6 border-l border-white/10 group/exp">
                     <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-[#F472B6] shadow-[0_0_10px_#F472B6] opacity-0 group-hover/exp:opacity-100 transition-opacity"></div>
                     <div className="text-[10px] text-[#F472B6] font-bold mb-1 tracking-widest opacity-60">{exp.period}</div>
                     <h4 className="text-lg font-bold mb-1">{exp.role}</h4>
                     <div className="text-xs font-medium text-white/40 mb-3 uppercase">{exp.company}</div>
                     <p className="text-xs text-[#9CA3AF] leading-relaxed line-clamp-3">{exp.description}</p>
                  </div>
                ))}
             </div>
          </div>
        )}

        {/* Skills Bento Block */}
        <div className={`${experiences && experiences.length > 0 ? 'md:col-span-4' : 'md:col-span-12'} bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[3rem] flex flex-col justify-center gap-8 shadow-xl transition-all duration-700 hover:border-[#F472B6]/30`}>
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#F472B6]">Tech_Stack</h3>
          <div className="space-y-6">
            {skills.map((skill: any, i: number) => (
              <div key={i} className="group/skill">
                <div className="flex justify-between text-[10px] font-bold mb-2 uppercase tracking-widest font-mono">
                   <span className="opacity-60 group-hover/skill:opacity-100 transition-opacity">{skill.icon ? `${skill.icon} ${skill.name}` : skill.name}</span>
                   <span className="text-[#F472B6]">{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full w-full overflow-hidden p-[1px]">
                   <div className="h-full bg-gradient-to-r from-pink-400 to-[#F472B6] rounded-full shadow-[0_0_15px_rgba(244,114,182,0.4)] transition-all duration-1000 ease-out" style={{width: `${skill.percentage}%`}} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Bento Block */}
        {services && services.length > 0 && (
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
             {services.map((s: any, i: number) => (
               <div key={i} className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[3rem] hover:bg-[#F472B6]/5 transition-all text-center">
                  <h4 className="text-xl font-bold mb-4 bg-gradient-to-br from-white to-pink-200 bg-clip-text text-transparent uppercase tracking-tight">{s.title}</h4>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed italic">{s.description}</p>
               </div>
             ))}
          </div>
        )}

        {/* Projects Grid Bento */}
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
           <h3 className="md:col-span-3 text-xs font-bold uppercase tracking-[0.3em] text-[#F472B6] ml-4 mb-2">Selected_Works</h3>
           {projects.map((project: any, i: number) => (
            <a key={i} href={project.link} target="_blank" className="block relative aspect-square bg-[#0a0a0a] rounded-[3rem] border border-white/10 overflow-hidden shadow-xl group transition-all duration-700 hover:border-[#F472B6]/40 hover:-translate-y-2">
                 {project.img && <Image src={project.img} alt={project.title} fill className="object-cover opacity-40 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />}
                 <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <span className="text-[#F472B6] text-[10px] font-bold uppercase tracking-[0.3em] mb-1 block">0x0{i+1}_Project</span>
                    <h4 className="text-2xl font-bold tracking-tight">{project.title}</h4>
                 </div>
            </a>
          ))}
        </div>

        {/* Testimonials Bento Block */}
        {testimonials && testimonials.length > 0 && (
          <div className="md:col-span-12 bg-white/5 backdrop-blur-2xl border border-white/10 p-14 rounded-[3rem] shadow-xl">
             <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#F472B6] text-center mb-12">Clients_Say</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {testimonials.map((t: any, i: number) => (
                  <div key={i} className="relative italic font-medium text-white/80 group">
                     <span className="text-6xl absolute -top-8 -left-4 text-[#F472B6] opacity-10">"</span>
                     <p className="text-lg leading-relaxed relative z-10 mb-6">{t.quote}</p>
                     <div className="text-xs font-bold tracking-[0.2em] text-[#F472B6] uppercase">
                        {t.name} <span className="text-white/20 mx-2">//</span> {t.role}
                     </div>
                  </div>
                ))}
             </div>
          </div>
        )}

        {/* Final Social Block */}
        <div className="md:col-span-12 flex flex-col md:flex-row justify-between items-center bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[3rem] px-14 shadow-xl gap-8">
           <span className="text-[#9CA3AF] text-sm font-bold tracking-[0.3em] uppercase">NETWORK_ACCESS</span>
           <div className="flex flex-wrap justify-center gap-4">
              {identity.social_links.map((link: any, i: number) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-3 bg-white/5 border border-white/10 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#F472B6] hover:text-white hover:border-[#F472B6] transition-all transform hover:-translate-y-1">
                   <SocialIcon platform={link.platform} className="w-4 h-4" />
                   <span>{link.platform}</span>
                </a>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};
