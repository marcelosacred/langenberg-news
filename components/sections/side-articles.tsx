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
        <Link href={`/article/${article.slug}`} key={i}>
          <Card className="p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-md cursor-pointer">
            <h3 className={`${playfair.className} text-xl font-bold mb-2 transition-colors duration-300 hover:text-primary/90`}>
              {article.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              {article.description}
            </p>
            <div className="text-sm text-muted-foreground">{article.readTime}</div>
          </Card>
        </Link>
      ))}
    </div>
  );
} 