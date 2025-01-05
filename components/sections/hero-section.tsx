"use client";

import { Card } from '@/components/ui/card';
import { playfair } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { SideArticles } from './side-articles';

export function HeroSection() {
    return (
        <section className="container py-8 md:py-12">
            <div className="grid gap-6 md:grid-cols-2">
                <Link href="/article/global-markets-2024">
                    <Card className="p-6 md:p-8 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg cursor-pointer">
                        <div className="relative aspect-[16/9] mb-6">
                            <Image
                                src="https://images.unsplash.com/photo-1661956602116-aa6865609028"
                                alt="Featured story"
                                fill
                                className="object-cover rounded-md"
                            />
                        </div>
                        <div>
                            <h1 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 hover:text-primary/90`}>
                                Global Markets Face New Challenges in 2024
                            </h1>
                            <p className="text-muted-foreground mb-4">
                                Analysis of emerging economic trends and their impact on international markets
                            </p>
                            <div className="flex items-center text-sm text-muted-foreground">
                                <span>By Sarah Mitchell</span>
                                <span className="mx-2">•</span>
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