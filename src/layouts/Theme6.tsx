import React from 'react';
import Image from 'next/image';
import { SocialIcon } from '@/components/SocialIcon';

export const Theme6 = ({ identity, skills, projects, experiences, services, testimonials }: any) => {
  return (
    <div className="min-h-screen bg-[#020617] text-[#94A3B8] p-3 md:p-6 lg:p-8 font-mono relative transition-opacity duration-1000 overflow-x-hidden">
      
      {/* Decorative vertical lines bg */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(90deg, #2DD4BF 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>

      <div className="relative z-10 w-full px-2 md:px-3 max-w-full lg:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-2 lg:gap-4 p-px bg-[#2DD4BF]/20">
        
        {/* Top Header Label */}
        <div className="md:col-span-12 bg-black/90 p-3 md:p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center border border-[#2DD4BF]/30 shadow-[0_0_15px_rgba(45,212,191,0.1)] gap-2">
           <div className="flex flex-col md:flex-row gap-2 md:gap-4">
              <span className="text-[#2DD4BF] font-black text-[10px] md:text-xs tracking-widest">[ SYSTEM_DASHBOARD_V6.0 ]</span>
              <span className="text-[8px] md:text-[10px] opacity-30 uppercase tracking-widest">User_Session: {identity.user_name}</span>
           </div>
           <div className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#2DD4BF]">Latency: 14ms // Secure</div>
        </div>

        {/* Left Side: Avatar & Bio */}
        <div className="md:col-start-1 md:col-span-3 bg-black/80 border border-[#2DD4BF]/30 p-4 md:p-6 lg:p-8 flex flex-col items-center">
           {identity.profile_img_url && (
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-full lg:aspect-square border border-[#2DD4BF] p-2 bg-[#020617] mb-6 md:mb-8 shadow-[0_0_20px_rgba(45,212,191,0.2)] group overflow-hidden">
                <Image src={identity.profile_img_url} alt={identity.user_name} fill className="object-cover grayscale brightness-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
              </div>
           )}
           <h2 className="text-[#F0FDFA] font-black text-lg md:text-2xl uppercase tracking-tighter mb-3 md:mb-4 text-center italic">{identity.user_name}</h2>
           <div className="w-full h-px bg-[#2DD4BF]/20 mb-4 md:mb-6"></div>
           <p className="text-[9px] md:text-[10px] leading-relaxed text-left md:text-justify opacity-80 font-mono tracking-[0.1em] md:tracking-[0.15em] uppercase italic">
              {identity.bio}
           </p>
           
           <div className="w-full mt-10 space-y-4">
              <a href={identity.hire_me_url} target="_blank" rel="noopener noreferrer" className="w-full block py-4 bg-[#2DD4BF]/10 border border-[#2DD4BF] text-[#2DD4BF] text-center font-bold text-xs hover:bg-[#2DD4BF] hover:text-black transition-all uppercase tracking-widest shadow-[0_0_10px_rgba(45,212,191,0.2)]">
                 {identity.hire_me_text || 'INITIALIZE_COMM'}
              </a>
           </div>
        </div>

        {/* Experience & Professional Log */}
        {experiences && experiences.length > 0 && (
          <div className="md:col-span-6 bg-black/80 border border-[#2DD4BF]/30 p-8">
             <h3 className="text-[#2DD4BF] text-xs font-black uppercase tracking-widest mb-8 flex items-center gap-4">
                <span className="w-4 h-px bg-[#2DD4BF]"></span> PROFESSIONAL_LOGS
             </h3>
             <div className="space-y-6">
                {experiences.map((exp: any, i: number) => (
                  <div key={i} className="border-l border-[#2DD4BF]/40 pl-4 py-2 hover:bg-[#2DD4BF]/5 transition-all group">
                     <div className="text-[9px] font-bold text-[#2DD4BF] mb-1 opacity-60 uppercase tracking-widest">{exp.period}</div>
                     <h4 className="text-sm font-black text-white group-hover:text-[#2DD4BF] transition-colors uppercase italic">{exp.role}</h4>
                     <div className="text-[10px] opacity-30 font-bold uppercase mb-2 tracking-widest">{exp.company}</div>
                     <p className="text-[10px] opacity-60 leading-relaxed line-clamp-2">{exp.description}</p>
                  </div>
                ))}
             </div>
          </div>
        )}

        {/* System Dashboard Stats */}
        <div className={`${experiences && experiences.length > 0 ? 'md:col-span-3' : 'md:col-span-9'} bg-black/80 border border-[#2DD4BF]/30 p-8`}>
           <h3 className="text-[#2DD4BF] text-xs font-black uppercase tracking-widest mb-8 flex items-center gap-4">
              <span className="w-4 h-px bg-[#2DD4BF]"></span> SYSTEM_STATS
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="flex flex-col gap-2">
                 <span className="text-[9px] uppercase tracking-widest font-black text-white/40">Power_Output</span>
                 <span className="text-4xl font-black text-[#2DD4BF] tracking-tighter">98.2%</span>
                 <div className="h-0.5 bg-white/5 w-full"><div className="h-full bg-[#2DD4BF] w-[98.2%]"></div></div>
              </div>
              <div className="flex flex-col gap-2">
                 <span className="text-[9px] uppercase tracking-widest font-black text-white/40">Active_Projects</span>
                 <span className="text-4xl font-black text-[#2DD4BF] tracking-tighter">0{projects.length}</span>
              </div>
              <div className="flex flex-col gap-2">
                 <span className="text-[9px] uppercase tracking-widest font-black text-white/40">Security_Level</span>
                 <span className="text-[10px] font-black text-[#2DD4BF] bg-[#2DD4BF]/10 p-2 border border-[#2DD4BF]/30 tracking-[0.2em] uppercase">Level_Superior</span>
              </div>
           </div>
        </div>

        {/* Services & Offerings Grid */}
        {services && services.length > 0 && (
          <div className="md:col-span-9 bg-black/80 border border-[#2DD4BF]/30 p-8">
             <h3 className="text-[#2DD4BF] text-xs font-black uppercase tracking-widest mb-8 flex items-center gap-4">
                <span className="w-4 h-px bg-[#2DD4BF]"></span> SERVICE_PROTOCOLS
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {services.map((s: any, i: number) => (
                  <div key={i} className="border border-[#2DD4BF]/20 p-6 hover:bg-[#2DD4BF]/5 transition-all text-left">
                     <h4 className="text-xs font-black text-[#2DD4BF] mb-3 uppercase tracking-[0.15em] border-b border-[#2DD4BF]/10 pb-2">{s.title}</h4>
                     <p className="text-[9px] opacity-60 leading-relaxed uppercase tracking-widest">{s.description}</p>
                  </div>
                ))}
             </div>
          </div>
        )}

        {/* Technical Stack Overview */}
        <div className={`${services && services.length > 0 ? 'md:col-span-3' : 'md:col-span-12'} bg-black/80 border border-[#2DD4BF]/30 p-8`}>
           <h3 className="text-[#2DD4BF] text-xs font-black uppercase tracking-widest mb-8 flex items-center gap-4">
              <span className="w-4 h-px bg-[#2DD4BF]"></span> TECH_REPORTS
           </h3>
           <div className="space-y-6">
              {skills.map((skill: any, i: number) => (
                <div key={i} className="flex flex-col gap-2 group">
                   <div className="flex justify-between items-end">
                      <span className="text-[9px] font-black uppercase tracking-widest text-[#F0FDFA] group-hover:text-[#2DD4BF] transition-colors">{skill.icon ? `${skill.icon} ${skill.name}` : skill.name}</span>
                      <span className="text-[9px] opacity-40 font-black">{skill.percentage}%</span>
                   </div>
                   <div className="h-px bg-white/5 w-full relative overflow-hidden flex items-center">
                      <div className="h-full bg-[#2DD4BF] shadow-[0_0_15px_rgba(45,212,191,0.4)] transition-all duration-1000 ease-out" style={{width: `${skill.percentage}%`}} />
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="md:col-span-12 bg-black/80 border border-[#2DD4BF]/30 p-8 relative overflow-hidden">
           <h3 className="text-[#2DD4BF] text-xs font-black uppercase tracking-widest mb-8 flex items-center gap-4">
              <span className="w-4 h-px bg-[#2DD4BF]"></span> CORE_PROJECT_ARRAY
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {projects.map((project: any, i: number) => (
                <a key={i} href={project.link} target="_blank" className="relative aspect-video border border-[#2DD4BF]/20 overflow-hidden group hover:border-[#2DD4BF] transition-all bg-[#0a0a0a]">
                   {project.img && <Image src={project.img} alt={project.title} fill className="object-cover opacity-30 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />}
                   <div className="absolute inset-0 p-4 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] bg-black/80 px-4 py-2 border border-[#2DD4BF]/30 group-hover:bg-[#2DD4BF] group-hover:text-black transition-all">0x0{i+1}_{project.title}</span>
                   </div>
                </a>
              ))}
           </div>
        </div>

        {/* Testimonials Transmissions */}
        {testimonials && testimonials.length > 0 && (
          <div className="md:col-span-9 bg-black/80 border border-[#2DD4BF]/30 p-8">
             <h3 className="text-[#2DD4BF] text-xs font-black uppercase tracking-widest mb-8 flex items-center gap-4">
                <span className="w-4 h-px bg-[#2DD4BF]"></span> USER_TRANSMISSIONS
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((t: any, i: number) => (
                  <div key={i} className="bg-white/5 p-6 border border-white/5 hover:border-[#2DD4BF]/30 transition-all">
                     <p className="text-[10px] text-[#F0FDFA]/60 italic mb-4 uppercase tracking-widest leading-relaxed">"{t.quote}"</p>
                     <div className="text-[9px] font-black text-[#2DD4BF] border-l border-[#2DD4BF] pl-3">
                        {t.name} // UID_{i+100} // {t.role}
                     </div>
                  </div>
                ))}
             </div>
          </div>
        )}

        {/* Bottom Social Sidebar */}
        <div className={`${testimonials && testimonials.length > 0 ? 'md:col-span-3' : 'md:col-span-12'} bg-[#2DD4BF] p-8 flex flex-col justify-center items-center text-black shadow-[inset_0_0_50px_rgba(0,0,0,0.1)]`}>
           <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-black shadow-sm font-mono">ESTABLISH_UPLINK</h3>
           <div className={`flex ${testimonials && testimonials.length > 0 ? 'flex-col' : 'flex-row flex-wrap justify-center'} gap-4 w-full`}>
              {identity.social_links.map((link: any, i: number) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-black text-[10px] uppercase tracking-[0.2em] border border-black/30 p-4 hover:bg-black hover:text-[#2DD4BF] hover:border-black transition-all justify-center min-w-[140px]">
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
