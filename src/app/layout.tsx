import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getPortfolioData } from '@/lib/google-sheets';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Dynamic Portfolio Engine",
  description: "A headless CMS portfolio powered by Google Sheets and 10 dynamic themes.",
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch default data (from .env.local) for the base layout
  const data = await getPortfolioData();
  const initialThemeId = data.isPremium ? data.config.active_theme : 1;

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider 
          key={`${initialThemeId}-${data.config.accent_color}-${data.config.spotlight_enabled}`}
          initialThemeId={initialThemeId}
          initialAccentColor={data.config.accent_color}
          initialSpotlight={data.config.spotlight_enabled}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
