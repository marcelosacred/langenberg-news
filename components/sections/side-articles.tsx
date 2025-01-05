"use client";

import { Card } from '@/components/ui/card';
import { playfair } from '@/app/fonts';
import Link from 'next/link';

const articles = [
    {
        title: "Tech Giants Reshape AI Landscape",
        description: "Latest developments in artificial intelligence and their implications",
        readTime: "4 min read",
        slug: "tech-giants-ai"
    },
    {
        title: "Sustainable Energy Revolution",
        description: "New breakthroughs in renewable energy technology",
        readTime: "3 min read",
        slug: "sustainable-energy"
    },
    {
        title: "Cultural Shifts in Modern Society",
        description: "Examining changing social dynamics and their impact",
        readTime: "6 min read",
        slug: "cultural-shifts"
    }
];

export function SideArticles() {
    return (
        <div className="grid gap-6">
            {articles.map((article, i) => (
                <Link href={`/article/${article.slug}`} key={i} className="h-full">
                    <Card className="p-0 border border-zinc-800 bg-background overflow-hidden h-full transition-colors duration-300 hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600">
                        <div className="p-6">
                            <h3 className={`${playfair.className} text-xl font-bold mb-2 line-clamp-2`}>
                                {article.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3">
                                {article.description}
                            </p>
                            <div className="text-sm text-muted-foreground">
                                {article.readTime}
                            </div>
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    );
} 