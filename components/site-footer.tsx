"use client";

import { playfair } from '@/app/fonts';
import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="w-full border-t bg-background">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
                    {/* Первая колонка */}
                    <div className="space-y-4">
                        <Link href="/" className={`${playfair.className} text-2xl font-bold`}>
                            Langenberg
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Your trusted source for global news and market insights.
                        </p>
                    </div>

                    {/* Вторая колонка */}
                    <div>
                        <h3 className="font-semibold mb-4">Categories</h3>
                        <ul className="space-y-2">
                            <li><Link href="/politics" className="text-sm text-muted-foreground hover:text-foreground">Politics</Link></li>
                            <li><Link href="/business" className="text-sm text-muted-foreground hover:text-foreground">Business</Link></li>
                            <li><Link href="/technology" className="text-sm text-muted-foreground hover:text-foreground">Technology</Link></li>
                            <li><Link href="/culture" className="text-sm text-muted-foreground hover:text-foreground">Culture</Link></li>
                        </ul>
                    </div>

                    {/* Третья колонка */}
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
                            <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
                            <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
                            <li><Link href="/advertise" className="text-sm text-muted-foreground hover:text-foreground">Advertise</Link></li>
                        </ul>
                    </div>

                    {/* Четвертая колонка */}
                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                            <li><Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Копирайт */}
                <div className="border-t py-6 text-center text-sm text-muted-foreground">
                    <p>VLADISLAV OSADCHIY © 2025</p>
                </div>
            </div>
        </footer>
    );
} 