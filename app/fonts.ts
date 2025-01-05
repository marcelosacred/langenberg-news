import { Inter, Playfair_Display } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  fallback: ['Georgia', 'serif'],
  preload: true,
  adjustFontFallback: true
});