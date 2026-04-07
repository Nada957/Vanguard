import { getPortfolioData } from '@/lib/google-sheets';
import { ThemeProvider } from "@/components/ThemeProvider";

export default async function DynamicLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ sheetId: string }>;
}) {
  const { sheetId } = await params;
  const data = await getPortfolioData(sheetId);
  
  // For dynamic routes, we want to ensure the ThemeProvider is initialized
  // with the specific data for THIS sheet ID.
  const initialThemeId = data.isPremium ? data.config.active_theme : 1;

  return (
    <ThemeProvider 
      key={`${sheetId}-${initialThemeId}-${data.config.accent_color}`}
      initialThemeId={initialThemeId}
      initialAccentColor={data.config.accent_color}
      initialSpotlight={data.config.spotlight_enabled}
    >
      {children}
    </ThemeProvider>
  );
}
