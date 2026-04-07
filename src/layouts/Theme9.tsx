import React from 'react';
import Image from 'next/image';
import { SocialIcon } from '@/components/SocialIcon';

export const Theme9 = ({ identity, skills, projects }: any) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] p-3 md:p-8 lg:p-14 font-sans relative flex flex-col items-center justify-center transition-opacity duration-1000 overflow-hidden">
      
      {/* Huge mesh gradient background blobs */}
      <div className="absolute top-[-20%] left-[-20%] w-[1000px] h-[1000px] bg-[#E0E7FF] rounded-full filter blur-[150px] opacity-60 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#FDF2F8] rounded-full filter blur-[120px] opacity-70 animate-pulse transition-all duration-500 delay-500"></div>
      <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[#EEF2FF] rounded-full filter blur-[100px] opacity-40 animate-pulse"></div>

      <div className="relative z-10 w-full px-2 md:px-4 max-w-full lg:max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        
        {/* Left column info */}
        <div className="md:col-span-5 flex flex-col gap-8">
           <div className="bg-white/40 backdrop-blur-3xl border border-white/40 p-10 rounded-[3rem] shadow-[0_25px_60px_rgba(0,0,0,0.03)] flex flex-col items-center text-center group transition-all duration-700 hover:bg-white/60">
              {identity.profile_img_url && (
                 <div className="relative w-48 h-48 rounded-full overflow-hidden mb-10 shadow-2xl ring-8 ring-white/60 group-hover:scale-105 transition-all duration-700">
                   <Image src={identity.profile_img_url} alt={identity.user_name} fill className="object-cover" />
                 </div>
              )}
              <h2 className="text-[#818CF8] text-sm font-black uppercase tracking-[0.4em] mb-4">Designer_Portfolio</h2>
              <h1 className="text-4xl font-bold tracking-tight text-[#1E293B] mb-6">{identity.user_name}</h1>
              <p className="text-[#64748B] text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity font-medium italic">{identity.bio}</p>
              
              <a href={identity.hire_me_url} target="_blank" rel="noopener noreferrer" className="mt-10 px-4 md:px-12 py-4 bg-[#818CF8] text-white font-bold rounded-2xl shadow-xl hover:bg-[#6366F1] transition-all transform hover:-translate-y-1">
                 {identity.hire_me_text || 'Hire Me Now'}
              </a>
           </div>

           <div className="bg-white/20 backdrop-blur-3xl border border-white/40 p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col justify-center">
              <h3 className="text-xs font-black uppercase tracking-widest text-[#64748B] mb-8 text-center opacity-60">Tech Proficiency</h3>
              <div className="space-y-6">
                 {skills.map((skill: any, i: number) => (
                   <div key={i} className="group/skill">
                      <div className="flex justify-between text-xs font-bold mb-2">
                         <span>{skill.icon ? `${skill.icon} ${skill.name}` : skill.name}</span>
                         <span className="text-[#818CF8]">{skill.percentage}%</span>
                      </div>
                      <div className="h-2 bg-white/40 rounded-full w-full overflow-hidden p-[2px]">
                         <div className="h-full bg-gradient-to-r from-[#818CF8] to-[#C084FC] rounded-full shadow-lg transition-all duration-1000 ease-out" style={{width: `${skill.percentage}%`}} />
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Right column projects */}
        <div className="md:col-span-7 flex flex-col gap-8">
           <h3 className="text-sm font-black uppercase tracking-[0.5em] text-[#1E293B] mb-2 px-10">Selected_Works</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project: any, i: number) => (
                <a key={i} href={project.link} target="_blank" className="bg-white/40 backdrop-blur-3xl border border-white/40 rounded-[3rem] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-700 hover:-translate-y-2 hover:bg-white/60">
                   <div className="relative aspect-video w-full overflow-hidden">
                      {project.img && <Image src={project.img} alt={project.title} fill className="object-cover opacity-90 group-hover:scale-110 transition-all duration-1000" />}
                   </div>
                   <div className="p-8">
                      <h4 className="text-lg font-bold text-[#1E293B] group-hover:text-[#818CF8] transition-colors">{project.title}</h4>
                      <span className="text-[10px] uppercase tracking-widest font-bold opacity-40 mt-1 block">Live Project Link</span>
                   </div>
                </a>
              ))}
           </div>

           <div className="mt-auto bg-white/60 backdrop-blur-3xl border border-white/40 p-8 rounded-[3rem] flex justify-between items-center px-14 shadow-xl">
              <span className="text-xs font-black uppercase tracking-widest text-[#64748B]">Digital Connection</span>
              <div className="flex gap-8">
                 {identity.social_links.map((link: any, i: number) => (
                   <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#64748B] hover:text-[#818CF8] hover:-translate-y-1 transition-all">
                      <SocialIcon platform={link.platform} className="w-4 h-4" />
                      <span>{link.platform}</span>
                   </a>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};
