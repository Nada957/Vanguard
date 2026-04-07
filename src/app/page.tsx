import React from 'react';
import { getPortfolioData } from '@/lib/google-sheets';
import { ThemeLayoutRouter } from '@/components/ThemeLayoutRouter';
import { Spotlight } from '@/components/BentoComponents';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Page() {
  // Fetch life data from the default Google Sheet
  const data = await getPortfolioData();
  const { config, identity, skills, projects } = data;

  return (
    <Spotlight>
       <main className="relative min-h-screen w-full overflow-x-hidden">
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
