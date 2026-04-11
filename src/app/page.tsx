import React, { Suspense } from 'react';
import { getPortfolioData } from '@/lib/google-sheets';
import { ThemeLayoutRouter } from '@/components/ThemeLayoutRouter';
import { Spotlight } from '@/components/BentoComponents';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Page({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <PortfolioContent searchParams={searchParams} />
    </Suspense>
  );
}

async function PortfolioContent({ 
  searchParams 
}: { 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> 
}) {
  const search = await searchParams;
  const themeOverride = search.theme ? parseInt(search.theme as string) : undefined;
  const sheetId = (search.id as string) || undefined;
  
  // Fetch data from Google Sheet using ?id= or default
  const data = await getPortfolioData(sheetId);
  const { config, identity, skills, projects, experiences, services, testimonials, blogPosts } = data;

  // Override theme if specified in URL, only for premium users
  if (data.isPremium && themeOverride && themeOverride >= 1 && themeOverride <= 10) {
    config.active_theme = themeOverride;
  } else if (!data.isPremium) {
    config.active_theme = 1;
  }

  return (
    <Spotlight>
       <main className="relative min-h-screen w-full overflow-x-hidden">
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
