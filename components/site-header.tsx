import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { playfair } from '@/app/fonts';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center">
          <div className="mr-8">
            <Link href="/" className={`${playfair.className} text-2xl font-bold`}>
              Langenberg
            </Link>
          </div>
          <nav className="flex flex-1 items-center justify-between space-x-2 md:space-x-4">
            <div className="flex items-center space-x-4">
              <Link href="/politics" className="text-sm font-medium">Politics</Link>
              <Link href="/business" className="text-sm font-medium">Business</Link>
              <Link href="/technology" className="text-sm font-medium">Technology</Link>
              <Link href="/culture" className="text-sm font-medium">Culture</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">Subscribe</Button>
              <Link href="/sign-in">
                <Button variant="default" size="sm">Sign In</Button>
              </Link>
              <ModeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>

  );
}