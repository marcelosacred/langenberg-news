"use client";

import { Card } from '@/components/ui/card';
import { playfair } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';

const newsItems = [
    {
        title: "Breaking News Title 1",
        description: "Major developments in global finance markets...",
        time: "3 hours ago",
        image: "https://images.unsplash.com/photo-1671956602116-aa6865609028"
    },
    {
        title: "Breaking News Title 2",
        description: "Technology sector sees unprecedented growth...",
        time: "4 hours ago",
        image: "https://images.unsplash.com/photo-1672956602116-aa6865609028"
    },
    {
        title: "Breaking News Title 3",
        description: "Environmental policy changes impact industry...",
        time: "5 hours ago",
        image: "https://images.unsplash.com/photo-1673956602116-aa6865609028"
    }
];

export function LatestNews() {
    return (
        <section className="container py-8 mb-12">
            <h2 className={`${playfair.className} text-2xl font-bold mb-6`}>Latest News</h2>
            <div className="grid gap-6 md:grid-cols-3">
                {newsItems.map((news, i) => (
                    <Link href={`/news/${i + 1}`} key={i}>
                        <Card className="overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-md cursor-pointer">
                            <div className="relative aspect-[16/9]">
                                <Image
                                    src={news.image}
                                    alt="News thumbnail"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className={`${playfair.className} text-xl font-bold mb-2 transition-colors duration-300 hover:text-primary/90`}>
                                    {news.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {news.description}
                                </p>
                                <div className="text-sm text-muted-foreground">
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