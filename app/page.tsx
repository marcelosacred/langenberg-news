"use client";

import { SiteHeader } from '@/components/site-header';
import { HeroSection } from '@/components/sections/hero-section';
import { LatestNews } from '@/components/sections/latest-news';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <main className="prose-container">
          <HeroSection />
          <LatestNews />
        </main>
      </div>
    </div>
  );
}