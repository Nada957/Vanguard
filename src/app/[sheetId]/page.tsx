import React from 'react';
import { getPortfolioData } from '@/lib/google-sheets';
import { ThemeLayoutRouter } from '@/components/ThemeLayoutRouter';
import { Spotlight } from '@/components/BentoComponents';

export const dynamic = 'force-dynamic';
export const revalidate = 60;

export default async function Page({ 
  params, 
  searchParams 
}: { 
  params: Promise<{ sheetId: string }>; 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> 
}) {
  const { sheetId } = await params;
  const search = await searchParams;
  const themeOverride = search.theme ? parseInt(search.theme as string) : undefined;
  
  // Fetch life data from Google Sheets by ID
  const data = await getPortfolioData(sheetId);
  const { config, identity, skills, projects, experiences, services, testimonials, blogPosts } = data;

  // Override theme if specified in URL
  if (themeOverride && themeOverride >= 1 && themeOverride <= 10) {
    config.active_theme = themeOverride;
  }

  return (
    <Spotlight>
       <main className="relative min-h-screen w-full overflow-x-hidden">
          {/* 
            The ThemeLayoutRouter is a Client-Side component 
            that instantly morphs the HTML structure based on the active theme ID.
          */}
          <ThemeLayoutRouter 
             config={config}
             identity={identity}
             skills={skills}
             projects={projects}
             experiences={experiences}
             services={services}
             testimonials={testimonials}
             blogPosts={blogPosts}
             isPremium={data.isPremium}
             sheetId={data.sheetId}
          />
       </main>
    </Spotlight>
  );
}
