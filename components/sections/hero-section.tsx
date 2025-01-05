"use client";

import { Card } from '@/components/ui/card';
import { playfair } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { SideArticles } from './side-articles';

export function HeroSection() {
    return (
        <section className="container py-12 md:py-16">
            <div className="grid gap-8 md:grid-cols-2">
                <Link href="/article/global-markets-2024">
                    <Card className="p-0 border border-zinc-800 bg-background overflow-hidden transition-colors duration-300 hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600">
                        <div className="relative aspect-[16/9]">
                            <Image
                                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80"
                                alt="Featured story"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="p-8">
                            <h1 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-4 antialiased`}>
                                Global Markets Face New Challenges in 2024
                            </h1>
                            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                                Analysis of emerging economic trends and their impact on international markets
                            </p>
                            <div className="flex items-center text-sm text-muted-foreground">
                                <span className="font-medium">By Sarah Mitchell</span>
                                <span className="mx-3">•</span>
                                <span>5 min read</span>
                            </div>
                        </div>
                    </Card>
                </Link>
                <SideArticles />
            </div>
        </section>
    );
}