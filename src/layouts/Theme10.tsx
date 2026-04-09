import React from 'react';
import Image from 'next/image';
import { SocialIcon } from '@/components/SocialIcon';

export const Theme10 = ({ identity, skills, projects }: any) => {
  return (
    <div className="min-h-screen bg-[#020617] text-[#F8FAFC] p-2 sm:p-3 md:p-6 lg:p-8 xl:p-14 font-sans relative transition-opacity duration-1000 overflow-hidden">
      
      {/* Background dark blue subtle mesh bg */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-[#38BDF8] rounded-full filter blur-[100px] sm:blur-[150px] lg:blur-[200px] opacity-[0.03] sm:opacity-[0.05] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] bg-[#38BDF8] rounded-full filter blur-[75px] sm:blur-[100px] lg:blur-[150px] opacity-[0.02] sm:opacity-[0.03] -z-10"></div>

      <div className="relative z-10 w-full px-2 sm:px-3 md:px-4 max-w-full lg:max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8 md:gap-10">
        
        {/* Navigation row style header */}
        <div className="w-full flex justify-between border-b border-[#1E293B] pb-4 md:pb-8 items-center px-4 md:px-10">
           <div className="text-lg md:text-xl font-black tracking-tighter text-[#38BDF8] uppercase italic">{identity.user_name}.EXEC</div>
           <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.4em] opacity-40">
              <span>Status: Online</span>
              <span>Access: Verified</span>
           </div>
        </div>

        {/* Hero Section Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 p-6 md:p-10 lg:p-14 bg-[#0F172A] border border-[#1E293B] rounded-[2rem] md:rounded-[3rem] shadow-2xl relative group">
           <div className="flex flex-col justify-center text-center md:text-left">
              <h2 className="text-[#38BDF8] text-xs md:text-sm font-black uppercase tracking-[0.3em] md:tracking-[0.5em] mb-4">Elite_Developer_Profile</h2>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white italic tracking-tighter uppercase mb-6 drop-shadow-lg leading-tight">{identity.user_name}</h1>
              <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed max-w-md mb-8 md:mb-10 font-medium italic opacity-80 group-hover:opacity-100 transition-opacity mx-auto md:mx-0">{identity.bio}</p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-8 items-center justify-center md:justify-start">
                 <a href={identity.hire_me_url} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 md:px-8 lg:px-14 py-3 md:py-4 bg-[#38BDF8] text-black font-black uppercase text-xs md:text-sm tracking-widest hover:bg-white hover:shadow-[0_0_40px_rgba(56,189,248,0.4)] transition-all text-center">{identity.hire_me_text || 'CONNECT_OFFICIAL'}</a>
                 <div className="flex flex-wrap gap-3 md:gap-6 justify-center md:justify-start">
                    {identity.social_links.map((link: any, i: number) => (
                      <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 md:gap-2 text-xs font-black uppercase tracking-widest hover:text-[#38BDF8] hover:scale-105 transition-all opacity-60 hover:opacity-100">
                         <SocialIcon platform={link.platform} className="w-3 h-3 md:w-4 md:h-4" />
                         <span className="hidden sm:inline">{link.platform}</span>
                      </a>
                    ))}
                 </div>
              </div>
           </div>

           {identity.profile_img_url && (
              <div className="relative w-full aspect-square border-8 border-white/5 rounded-[4rem] overflow-hidden shadow-2xl ring-1 ring-[#38BDF8]/40 transform group-hover:rotate-2 transition-all duration-1000">
                <Image src={identity.profile_img_url} alt={identity.user_name} fill className="object-cover brightness-110 contrast-110 transition-all duration-1000 group-hover:scale-105" />
              </div>
           )}
        </div>

        {/* Lower Grid: Projects & Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
           
           {/* Skills Block */}
           <div className="lg:col-span-4 bg-[#0F172A] border border-[#1E293B] p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#38BDF8] mb-6 md:mb-10 flex items-center gap-4">
                 <span className="w-3 h-3 bg-[#38BDF8] rounded-full shadow-[0_0_10px_#38BDF8]"></span> Capability
              </h3>
              <div className="space-y-6 md:space-y-8">
                 {skills.map((skill: any, i: number) => (
                   <div key={i} className="group/skill">
                      <div className="flex justify-between text-[10px] md:text-[11px] font-black uppercase tracking-widest mb-2 group-hover/skill:text-[#38BDF8] transition-colors">
                         <span className="truncate">{skill.icon ? `${skill.icon} ${skill.name}` : skill.name}</span>
                         <span>{skill.percentage}%</span>
                      </div>
                      <div className="h-1.5 bg-black/40 rounded-full w-full overflow-hidden p-[1px] shadow-inner">
                         <div className="h-full bg-gradient-to-r from-[#38BDF8] to-white rounded-full shadow-[0_0_15px_#38BDF8] transition-all duration-1000 ease-out" style={{width: `${skill.percentage}%`}} />
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Projects Block */}
           <div className="lg:col-span-8 bg-[#0F172A] border border-[#1E293B] p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl overflow-hidden">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#38BDF8] mb-6 md:mb-10 flex items-center gap-4">
                 <span className="w-3 h-3 bg-[#38BDF8] rounded-full shadow-[0_0_10px_#38BDF8]"></span> Verified_Work
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 overflow-hidden">
                 {projects.map((project: any, i: number) => (
                   <a key={i} href={project.link} target="_blank" className="relative group aspect-video bg-black/40 border border-white/5 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl hover:border-[#38BDF8] transition-all duration-500">
                      {project.img && <Image src={project.img} alt={project.title} fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />}
                      <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                         <span className="text-[#38BDF8] text-[8px] md:text-[9px] font-black tracking-widest uppercase mb-1 block opacity-0 group-hover:opacity-100 transition-opacity">Task_Result_0x{i+1}</span>
                         <h4 className="text-lg md:text-xl font-bold uppercase tracking-tighter italic text-white drop-shadow-lg leading-tight">{project.title}</h4>
                      </div>
                   </a>
                 ))}
              </div>
           </div>

        </div>

        {/* Final Branding label */}
        <div className="w-full text-center py-10 opacity-10 font-black uppercase tracking-[1em] text-white">
           Elite_Portfolio_Protocol_v4.2.0
        </div>

      </div>
    </div>
  );
};
