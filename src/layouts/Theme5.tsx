import React from 'react';
import Image from 'next/image';
import { SocialIcon } from '@/components/SocialIcon';

export const Theme5 = ({ identity, skills, projects, experiences, services, testimonials }: any) => {
  return (
    <div className="min-h-screen bg-[#FFFAF0] text-[#1F2937] p-4 md:p-14 font-sans relative flex flex-col items-center transition-opacity duration-1000 overflow-x-hidden">
      
      {/* Decorative soft pink blobs bg */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-[#FB7185] rounded-full filter blur-[180px] opacity-[0.03] -z-10"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-[#FB7185] rounded-full filter blur-[150px] opacity-[0.02] -z-10"></div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col gap-12">
        
        {/* Main Hero Header */}
        <div className="flex flex-col md:flex-row items-center gap-10 bg-white/40 border border-white p-10 md:p-14 rounded-[3rem] shadow-[0_15px_40px_rgba(0,0,0,0.02)] backdrop-blur-xl">
           {identity.profile_img_url && (
              <div className="relative w-44 h-44 rounded-[2rem] overflow-hidden shadow-2xl ring-8 ring-white transition-all duration-500 hover:scale-105">
                <Image src={identity.profile_img_url} alt={identity.user_name} fill className="object-cover" />
              </div>
           )}
           <div className="text-center md:text-left flex-1">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#FB7185] mb-4 opacity-80 font-mono">Expertise_Nexus</h2>
              <h1 className="text-4xl md:text-6xl font-serif font-black text-[#111827] mb-6 leading-tight italic tracking-tighter">{identity.user_name}</h1>
              <p className="text-[#6B7280] text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-medium italic">"{identity.bio}"</p>
              <a href={identity.hire_me_url} target="_blank" rel="noopener noreferrer" className="px-14 py-4 bg-[#FB7185] text-white font-bold rounded-full shadow-[0_15px_30px_rgba(251,113,133,0.2)] hover:bg-[#E11D48] transition-all transform hover:-translate-y-1 uppercase tracking-widest text-xs">
                 {identity.hire_me_text || 'Connect With Me'}
              </a>
           </div>
        </div>

        {/* Experience Section */}
        {experiences && experiences.length > 0 && (
          <div className="space-y-8">
             <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-[#FB7185] ml-8">Professional_Log</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experiences.map((exp: any, i: number) => (
                  <div key={i} className="bg-white/60 p-10 rounded-[2.5rem] border border-white shadow-sm hover:shadow-md transition-shadow">
                     <div className="text-[10px] font-bold text-[#FB7185] mb-2 uppercase tracking-widest">{exp.period}</div>
                     <h4 className="text-xl font-bold text-[#111827] mb-1">{exp.role}</h4>
                     <div className="text-xs font-bold opacity-40 uppercase mb-4">{exp.company}</div>
                     <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-3">{exp.description}</p>
                  </div>
                ))}
             </div>
          </div>
        )}

        {/* Small Horizontal Skills Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
           {skills.map((skill: any, i: number) => (
             <div key={i} className="bg-white/80 p-8 rounded-[2rem] shadow-[0_10px_25px_rgba(0,0,0,0.01)] border border-[#FB7185]/5 flex flex-col items-center group hover:border-[#FB7185]/30 transition-all">
                <span className="text-[#FB7185] font-black text-2xl mb-2 group-hover:scale-110 transition-transform">{skill.percentage}%</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-black opacity-40 text-[#111827]">{skill.name}</span>
             </div>
           ))}
        </div>

        {/* Services Section */}
        {services && services.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {services.map((s: any, i: number) => (
               <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-[#FB7185]/5 hover:bg-[#FB7185] group transition-all duration-500 shadow-sm">
                  <h4 className="text-sm font-black uppercase tracking-widest text-[#111827] group-hover:text-white transition-colors mb-4">{s.title}</h4>
                  <p className="text-xs text-[#6B7280] group-hover:text-white/80 transition-colors leading-relaxed italic">{s.description}</p>
               </div>
             ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <h3 className="md:col-span-3 text-xs font-bold uppercase tracking-[0.4em] text-[#FB7185] ml-8 mt-4">Selected_Galleries</h3>
           {projects.map((project: any, i: number) => (
             <a key={i} href={project.link} target="_blank" className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.03)] group transition-all duration-500 hover:-translate-y-2 border border-white block relative">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                   {project.img && <Image src={project.img} alt={project.title} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />}
                </div>
                <div className="p-10">
                   <h4 className="text-xs uppercase tracking-[0.2em] font-black text-[#111827] group-hover:text-[#FB7185] transition-colors">{project.title}</h4>
                   <span className="text-[9px] font-bold text-[#FB7185] mt-3 block opacity-40 group-hover:opacity-100 transition-opacity">0x0{i+1} / VIEW_PROJECT</span>
                </div>
             </a>
           ))}
        </div>

        {/* Testimonials */}
        {testimonials && testimonials.length > 0 && (
          <div className="py-10">
             <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-[#FB7185] text-center mb-16">Client_Feedback_Loop</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {testimonials.map((t: any, i: number) => (
                  <div key={i} className="relative p-12 bg-white/40 border border-white rounded-[3rem] italic">
                     <p className="text-lg text-[#4B5563] leading-relaxed mb-8 relative z-10">"{t.quote}"</p>
                     <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FB7185]">
                        {t.name} <span className="opacity-20 mx-2">//</span> {t.role}
                     </div>
                  </div>
                ))}
             </div>
          </div>
        )}

        {/* Slim Social Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white/40 p-10 rounded-full border border-white gap-8 px-14 mb-10 shadow-sm backdrop-blur-md">
           <span className="text-[10px] font-black opacity-30 uppercase tracking-[0.5em]">Network_Encryption</span>
           <div className="flex flex-wrap justify-center gap-10">
              {identity.social_links.map((link: any, i: number) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#111827] hover:text-[#FB7185] transition-all hover:scale-110">
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
