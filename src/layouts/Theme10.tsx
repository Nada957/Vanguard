import React from 'react';
import Image from 'next/image';
import { SocialIcon } from '@/components/SocialIcon';

export const Theme10 = ({ identity, skills, projects }: any) => {
  return (
    <div className="min-h-screen bg-[#020617] text-[#F8FAFC] p-3 md:p-8 lg:p-14 font-sans relative transition-opacity duration-1000 overflow-hidden">
      
      {/* Background dark blue subtle mesh bg */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#38BDF8] rounded-full filter blur-[200px] opacity-[0.05] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#38BDF8] rounded-full filter blur-[150px] opacity-[0.03] -z-10"></div>

      <div className="relative z-10 w-full px-2 md:px-4 max-w-full lg:max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">
        
        {/* Navigation row style header */}
        <div className="w-full flex justify-between border-b border-[#1E293B] pb-8 items-center px-10">
           <div className="text-xl font-black tracking-tighter text-[#38BDF8] uppercase italic">{identity.user_name}.EXEC</div>
           <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.4em] opacity-40">
              <span>Status: Online</span>
              <span>Access: Verified</span>
           </div>
        </div>

        {/* Hero Section Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 p-10 md:p-14 bg-[#0F172A] border border-[#1E293B] rounded-[3rem] shadow-2xl relative group">
           <div className="flex flex-col justify-center text-center md:text-left">
              <h2 className="text-[#38BDF8] text-sm font-black uppercase tracking-[0.5em] mb-4">Elite_Developer_Profile</h2>
              <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase mb-6 drop-shadow-lg">{identity.user_name}</h1>
              <p className="text-[#94A3B8] text-lg leading-relaxed max-w-md mb-10 font-medium italic opacity-80 group-hover:opacity-100 transition-opacity">{identity.bio}</p>
              
              <div className="flex gap-8 items-center justify-center md:justify-start">
                 <a href={identity.hire_me_url} target="_blank" rel="noopener noreferrer" className="px-4 md:px-14 py-4 bg-[#38BDF8] text-black font-black uppercase text-xs tracking-widest hover:bg-white hover:shadow-[0_0_40px_rgba(56,189,248,0.4)] transition-all">{identity.hire_me_text || 'CONNECT_OFFICIAL'}</a>
                 <div className="flex gap-6">
                    {identity.social_links.map((link: any, i: number) => (
                      <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-[#38BDF8] hover:scale-105 transition-all opacity-60 hover:opacity-100">
                         <SocialIcon platform={link.platform} className="w-4 h-4" />
                         <span>{link.platform}</span>
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
           
           {/* Skills Block */}
           <div className="md:col-span-4 bg-[#0F172A] border border-[#1E293B] p-10 rounded-[3rem] shadow-xl">
              <h3 className="text-xs font-black uppercase tracking-[0.5em] text-[#38BDF8] mb-10 flex items-center gap-4">
                 <span className="w-3 h-3 bg-[#38BDF8] rounded-full shadow-[0_0_10px_#38BDF8]"></span> Capability
              </h3>
              <div className="space-y-8">
                 {skills.map((skill: any, i: number) => (
                   <div key={i} className="group/skill">
                      <div className="flex justify-between text-[11px] font-black uppercase tracking-widest mb-2 group-hover/skill:text-[#38BDF8] transition-colors">
                         <span>{skill.icon ? `${skill.icon} ${skill.name}` : skill.name}</span>
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
           <div className="md:col-span-8 bg-[#0F172A] border border-[#1E293B] p-10 rounded-[3rem] shadow-xl overflow-hidden">
              <h3 className="text-xs font-black uppercase tracking-[0.5em] text-[#38BDF8] mb-10 flex items-center gap-4">
                 <span className="w-3 h-3 bg-[#38BDF8] rounded-full shadow-[0_0_10px_#38BDF8]"></span> Verified_Work
              </h3>
              <div className="grid grid-cols-2 gap-6 overflow-hidden">
                 {projects.map((project: any, i: number) => (
                   <a key={i} href={project.link} target="_blank" className="relative group aspect-video bg-black/40 border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl hover:border-[#38BDF8] transition-all duration-500">
                      {project.img && <Image src={project.img} alt={project.title} fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />}
                      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                         <span className="text-[#38BDF8] text-[9px] font-black tracking-widest uppercase mb-1 block opacity-0 group-hover:opacity-100 transition-opacity">Task_Result_0x{i+1}</span>
                         <h4 className="text-xl font-bold uppercase tracking-tighter italic text-white drop-shadow-lg">{project.title}</h4>
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
