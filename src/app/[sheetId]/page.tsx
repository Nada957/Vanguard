import React from 'react';
import { getPortfolioData } from '@/lib/google-sheets';
import { ThemeLayoutRouter } from '@/components/ThemeLayoutRouter';
import { Spotlight } from '@/components/BentoComponents';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Page({ params }: { params: Promise<{ sheetId: string }> }) {
  const { sheetId } = await params;
  
  // Fetch life data from Google Sheets by ID
  const data = await getPortfolioData(sheetId);
  const { config, identity, skills, projects } = data;

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
             isPremium={data.isPremium}
             sheetId={data.sheetId}
          />
       </main>
    </Spotlight>
  );
}
