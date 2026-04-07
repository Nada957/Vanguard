import React from 'react';
import Image from 'next/image';
import { SocialIcon } from '@/components/SocialIcon';
import { ContactForm } from '@/components/ContactForm';
import { TestimonialsSlider } from '@/components/TestimonialsSlider';
import { PDFExport } from '@/components/PDFExport';

export const Theme1 = ({ identity, skills, projects, experiences, services, testimonials, blogPosts }: any) => {
  return (
    <div className="min-h-screen bg-black text-white p-3 md:p-6 lg:p-10 font-mono relative overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(var(--card-border) 1px, transparent 1px), linear-gradient(90deg, var(--card-border) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="relative z-10 max-w-full lg:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
        
        {/* Header Block */}
        <div className="md:col-span-12 border-2 border-[var(--card-border)] p-3 md:p-4 flex flex-col sm:flex-row justify-between items-center bg-black/80 shadow-[0_0_15px_var(--glow-color)] gap-2">
          <div className="flex items-center gap-2 md:gap-4">
             <div className="w-2 h-2 md:w-3 md:h-3 bg-[var(--accent-color)] animate-pulse"></div>
             <span className="text-[var(--accent-color)] font-bold tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm">SYSTEM.ACCESS_GRANTED</span>
          </div>
          <div className="text-[10px] md:text-xs opacity-50 uppercase font-bold whitespace-nowrap">User: {identity.user_name}</div>
        </div>

        {/* Profile Block */}
        <div className="md:col-span-4 border-2 border-[var(--card-border)] p-3 md:p-6 bg-black/80 flex flex-col items-center text-center shadow-[inset_0_0_20px_rgba(255,0,0,0.1)]">
          {identity.profile_img_url && (
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-4 md:mb-6 border-2 border-[var(--accent-color)] p-1 shadow-[0_0_20px_var(--glow-color)]">
              <Image src={identity.profile_img_url} alt={identity.user_name} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          )}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[var(--accent-color)] mb-2 uppercase tracking-tighter italic">{identity.user_name}</h2>
          <div className="w-full h-px bg-[var(--card-border)] my-4"></div>
          <p className="text-[11px] md:text-xs leading-relaxed text-left opacity-80 mb-4 md:mb-6">{identity.bio}</p>
          
          <div className="w-full space-y-2 mt-auto">
            <a href={identity.hire_me_url} target="_blank" rel="noopener noreferrer" className="block w-full py-3 border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-black transition-all font-bold uppercase tracking-[0.2em] text-xs">
              {identity.hire_me_text || 'INITIALIZE_CONTACT'}
            </a>
          </div>

          {/* Contact Form */}
          <div className="mt-8">
            <h3 className="text-[var(--accent-color)] mb-4 text-sm font-bold uppercase tracking-widest">Get In Touch</h3>
            <ContactForm email={identity.email} />
            <div className="mt-4">
              <PDFExport identity={identity} skills={skills} projects={projects} experiences={experiences} />
            </div>
          </div>
        </div>

        {/* Dynamic Experience/Services/Skills Blocks */}
        <div className="md:col-span-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Experience Section */}
            {experiences && experiences.length > 0 && (
              <div className="border-2 border-[var(--card-border)] p-6 bg-black/80 shadow-[inset_0_0_20px_rgba(255,0,0,0.05)]">
                <h3 className="text-[var(--accent-color)] mb-6 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--accent-color)]"></span> WORK_HISTORY
                </h3>
                <div className="space-y-4">
                  {experiences.map((exp: any, i: number) => (
                    <div key={i} className="border-l-2 border-[var(--card-border)] pl-4 py-2">
                      <div className="text-[10px] text-[var(--accent-color)] font-bold">{exp.period}</div>
                      <div className="text-xs font-bold uppercase">{exp.role}</div>
                      <div className="text-[10px] opacity-50 uppercase">{exp.company}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills Block */}
            <div className={`border-2 border-[var(--card-border)] p-6 bg-black/80 shadow-[inset_0_0_20px_rgba(255,0,0,0.05)] ${(!experiences || experiences.length === 0) ? 'md:col-span-2' : ''}`}>
               <h3 className="text-[var(--accent-color)] mb-6 text-sm flex items-center gap-2">
                 <span className="w-2 h-2 bg-[var(--accent-color)]"></span> CORE_SKILLS
               </h3>
               <div className="space-y-6">
                  {skills.map((skill: any, i: number) => (
                    <div key={i}>
                      <div className="flex justify-between text-[10px] mb-1 uppercase tracking-widest font-bold">
                        <span>{skill.icon ? `${skill.icon} ${skill.name}` : skill.name}</span>
                        <span className="text-[var(--accent-color)]">{skill.percentage}%</span>
                      </div>
                      <div className="h-1 bg-white/5 w-full flex items-center">
                         <div className="h-full bg-[var(--accent-color)] shadow-[0_0_10px_var(--glow-color)]" style={{width: `${skill.percentage}%`}} />
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Services Section */}
          {services && services.length > 0 && (
            <div className="border-2 border-[var(--card-border)] p-6 bg-black/80">
              <h3 className="text-[var(--accent-color)] mb-6 text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-[var(--accent-color)]"></span> AVAILABLE_SERVICES
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono">
                {services.map((service: any, i: number) => (
                  <div key={i} className="border border-[var(--card-border)] p-4 hover:bg-[var(--accent-color)]/5 transition-all group">
                    <div className="text-[var(--accent-color)] text-xs mb-2 font-bold group-hover:translate-x-1 transition-transform tracking-tighter uppercase">{service.title}</div>
                    <p className="text-[10px] leading-relaxed opacity-60 italic">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Block */}
          <div className="border-2 border-[var(--card-border)] p-6 bg-black/80 overflow-hidden flex flex-col">
             <h3 className="text-[var(--accent-color)] mb-6 text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-[var(--accent-color)]"></span> ACTIVE_PROJECTS
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                {projects.map((project: any, i: number) => (
                  <a key={i} href={project.link} target="_blank" className="block border border-[var(--card-border)] p-2 hover:border-[var(--accent-color)] group transition-all relative overflow-hidden">
                    <div className="relative aspect-video w-full grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100">
                       {project.img && <Image src={project.img} alt={project.title} fill className="object-cover" />}
                    </div>
                    <div className="mt-2 text-[10px] font-bold uppercase tracking-widest flex justify-between">
                      <span>{project.title}</span>
                      <span className="text-[var(--accent-color)]">{"->"} VIEW</span>
                    </div>
                  </a>
                ))}
             </div>
          </div>

          {/* Testimonials Section */}
          {testimonials && testimonials.length > 0 && (
            <div className="border-2 border-[var(--card-border)] p-6 bg-black/80">
               <h3 className="text-[var(--accent-color)] mb-6 text-sm flex items-center gap-2">
                 <span className="w-2 h-2 bg-[var(--accent-color)]"></span> CLIENT_FEEDBACK
               </h3>
               <TestimonialsSlider testimonials={testimonials} />
            </div>
          )}

          {/* Blog Section */}
          {blogPosts && blogPosts.length > 0 && (
            <div className="border-2 border-[var(--card-border)] p-6 bg-black/80">
               <h3 className="text-[var(--accent-color)] mb-6 text-sm flex items-center gap-2">
                 <span className="w-2 h-2 bg-[var(--accent-color)]"></span> LATEST_POSTS
               </h3>
               <div className="space-y-4">
                 {blogPosts.slice(0, 3).map((post: any, i: number) => (
                   <div key={i} className="border border-[var(--card-border)] p-4 hover:bg-[var(--accent-color)]/5 transition-all">
                      <h4 className="text-[var(--accent-color)] font-bold text-sm mb-2">{post.title}</h4>
                      <p className="text-xs opacity-70 mb-2">{post.excerpt}</p>
                      <div className="text-[9px] opacity-50 uppercase">{post.date}</div>
                   </div>
                 ))}
               </div>
            </div>
          )}
        </div>

        {/* Footer Block */}
        <div className="md:col-span-12 border-2 border-[var(--card-border)] p-4 bg-black/90 flex flex-wrap justify-between items-center gap-4">
           <div className="flex gap-6">
              {identity.social_links.map((link: any, i: number) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--accent-color)] text-xs hover:bg-[var(--accent-color)]/10 p-2 border border-transparent hover:border-[var(--card-border)] transition-all tracking-widest uppercase font-bold group">
                  <SocialIcon platform={link.platform} className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  <span>{link.platform}</span>
                </a>
              ))}
           </div>
           <div className="text-[10px] opacity-30 font-mono tracking-widest">
              TERMINAL_VER_5.0.0 // (C) {new Date().getFullYear()}
           </div>
        </div>

      </div>
    </div>
  );
};
