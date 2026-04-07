import React from 'react';
import Image from 'next/image';
import { SocialIcon } from '@/components/SocialIcon';

export const Theme3 = ({ identity, skills, projects, experiences, services, testimonials }: any) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center p-6 md:p-14 font-mono relative transition-opacity duration-1000 overflow-x-hidden">
      
      {/* Delicate white crosshairs background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-20"></div>
      
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center">
        
        {/* Simple square avatar with thick white border */}
        {identity.profile_img_url && (
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-none overflow-hidden mb-12 border-4 border-white shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:shadow-[0_0_80px_rgba(255,255,255,0.3)] transition-all duration-500 hover:scale-105">
            <Image src={identity.profile_img_url} alt={identity.user_name} fill className="object-cover grayscale" />
          </div>
        )}

        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 uppercase italic">
           {identity.user_name}
        </h1>
        
        <div className="w-24 h-1 bg-white mb-10"></div>
        
        {/* About Section */}
        <div className="max-w-2xl mb-20 text-left border-l-2 border-white/10 pl-6 py-4 bg-white/5">
           <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-4 font-bold">0x00_BIOGRAPHY</h2>
           <p className="text-[#a1a1aa] text-sm md:text-base leading-loose font-mono uppercase tracking-widest italic">
              {identity.bio}
           </p>
        </div>

        {/* Experience Section */}
        {experiences && experiences.length > 0 && (
          <div className="w-full mb-20 text-left">
             <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-10 font-bold border-b border-white/10 pb-2">0x01_EXPERIENCE</h2>
             <div className="space-y-12">
                {experiences.map((exp: any, i: number) => (
                   <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-4 group">
                      <div className="text-[10px] font-bold opacity-30 group-hover:opacity-100 transition-opacity whitespace-nowrap">{exp.period}</div>
                      <div className="md:col-span-3">
                         <h4 className="text-lg font-bold uppercase italic mb-1">{exp.role}</h4>
                         <div className="text-[10px] uppercase tracking-widest text-white/50 mb-3">{exp.company}</div>
                         <p className="text-xs text-[#71717a] leading-relaxed uppercase tracking-wider">{exp.description}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        )}

        {/* Services & Skills Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
           {/* Services */}
           {services && services.length > 0 && (
             <div className="text-left">
                <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-8 font-bold">0x02_SERVICES</h2>
                <div className="space-y-6">
                   {services.map((s: any, i: number) => (
                     <div key={i} className="border border-white/5 p-4 hover:bg-white/5 transition-all">
                        <div className="text-xs font-bold uppercase mb-2 tracking-widest border-b border-white/10 pb-1 inline-block">{s.title}</div>
                        <p className="text-[10px] text-[#71717a] uppercase italic">{s.description}</p>
                     </div>
                   ))}
                </div>
             </div>
           )}

           {/* Skills */}
           <div className="text-left">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-8 font-bold">0x03_CORE_OPS</h2>
              <div className="grid grid-cols-1 gap-4">
                {skills.map((skill: any, i: number) => (
                  <div key={i} className="group">
                     <div className="flex justify-between text-[9px] uppercase tracking-widest mb-1 font-bold">
                        <span>{skill.name}</span>
                        <span className="opacity-40">{skill.percentage}%</span>
                     </div>
                     <div className="w-full h-px bg-white/5 overflow-hidden">
                        <div className="h-full bg-white transition-all duration-1000" style={{width: `${skill.percentage}%`}} />
                     </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Projects Quadrants */}
        <div className="w-full mb-20">
           <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-10 font-bold">0x04_PROJECT_SAMPLES</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 p-px">
             {projects.map((project: any, i: number) => (
               <a key={i} href={project.link} target="_blank" className="relative group bg-black/80 aspect-[16/9] hover:bg-black transition-colors flex flex-col items-center justify-center p-6 text-center">
                  {project.img && <Image src={project.img} alt={project.title} fill className="object-cover opacity-20 group-hover:opacity-60 transition-opacity" />}
                  <div className="z-10">
                     <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-2 group-hover:text-white transition-colors">{project.title}</h4>
                     <span className="text-[9px] opacity-20 uppercase tracking-[0.5em] group-hover:opacity-100 transition-opacity">RUN_MODULE_0{i+1}</span>
                  </div>
               </a>
             ))}
           </div>
        </div>

        {/* Testimonials Mono */}
        {testimonials && testimonials.length > 0 && (
          <div className="w-full mb-20 text-left p-8 border border-white/5 bg-white/[0.01]">
             <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-10 font-bold text-center">0x05_TRANSMISSIONS</h2>
             <div className="space-y-10">
                {testimonials.map((t: any, i: number) => (
                  <div key={i} className="font-mono uppercase tracking-widest">
                     <p className="text-xs text-[#a1a1aa] leading-relaxed italic mb-4">"{t.quote}"</p>
                     <div className="text-[9px] font-bold text-white border-l border-white pl-2">
                        {t.name} // SOURCE: {t.role}
                     </div>
                  </div>
                ))}
             </div>
          </div>
        )}

        {/* Social Links Mono Bar */}
        <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold opacity-30 hover:opacity-100 transition-opacity p-6 border border-dashed border-white/20 mb-10">
           {identity.social_links.map((link: any, i: number) => (
             <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-all group">
                <SocialIcon platform={link.platform} className="w-3.5 h-3.5 group-hover:scale-125 transition-transform" />
                <span>{link.platform}</span>
             </a>
           ))}
        </div>

        <a 
          href={identity.hire_me_url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-16 py-4 bg-white text-black font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-[#a1a1aa] transition-all duration-500 shadow-[20px_20px_0_rgba(255,255,255,0.05)] hover:shadow-none translate-x-[-10px] translate-y-[-10px] hover:translate-x-0 hover:translate-y-0"
        >
          {identity.hire_me_text || 'INITIALIZE_CONTACT'}
        </a>

      </div>
    </div>
  );
};
