"use client";

import { Card } from '@/components/ui/card';
import { playfair } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';

const newsItems = [
    {
        title: "Global Markets: Institutional Investors Shift Focus",
        description: "Leading financial institutions are repositioning their portfolios amid changing market dynamics...",
        time: "3 hours ago",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80"
    },
    {
        title: "Digital Asset Markets: A New Paradigm",
        description: "Analysis of institutional adoption and regulatory developments in digital assets...",
        time: "4 hours ago",
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80"
    },
    {
        title: "Market Analysis: Key Trends and Forecasts",
        description: "In-depth analysis of market trends and expert forecasts for the coming quarter...",
        time: "5 hours ago",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80"
    }
];

export function LatestNews() {
    return (
        <section className="container py-16 mb-20">
            <h2 className={`${playfair.className} text-3xl font-bold mb-10`}>Latest Insights</h2>
            <div className="grid gap-8 md:grid-cols-3">
                {newsItems.map((news, i) => (
                    <Link href={`/news/${i + 1}`} key={i} className="h-full">
                        <Card className="p-0 border border-zinc-800 bg-background overflow-hidden h-full transition-colors duration-300 hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600">
                            <div className="relative aspect-[16/9]">
                                <Image
                                    src={news.image}
                                    alt="News thumbnail"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className={`${playfair.className} text-xl font-bold mb-3 line-clamp-2`}>
                                    {news.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">
                                    {news.description}
                                </p>
                                <div className="text-sm text-muted-foreground mt-auto flex items-center">
                                    <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                                    {news.time}
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    );
} 