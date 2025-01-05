"use client";

import { HeroSection } from '@/components/sections/hero-section';
import { LatestNews } from '@/components/sections/latest-news';
import { MarketTicker } from '@/components/sections/market-ticker';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <MarketTicker/>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <main className="prose-container">
          <HeroSection />
          <LatestNews />
        </main>
      </div>
    </div>
  );
}